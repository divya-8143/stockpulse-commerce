import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { AutomaticInventoryEngine } from "../inventory/automatic_inventory.service.js";
import { OrderStatus, PaymentStatus } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export interface CustomerPlaceOrderDTO {
  customerId: string;
  customerEmail: string;
  customerName: string;
  items: {
    sku: string;
    quantity: number;
  }[];
  shippingAddress?: any;
}

export class CustomerOrderService {
  /**
   * Places a customer order with atomic stock validation and automatic inventory deduction.
   */
  public static async placeOrder(dto: CustomerPlaceOrderDTO) {
    if (!dto.items || dto.items.length === 0) {
      throw new AppError("Cannot place an empty order", 400);
    }

    // Generate unique order reference
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    return await db.$transaction(async (tx) => {
      // 1. Fetch products & variants
      let subtotal = 0;
      let totalCost = 0;
      const orderItemsToCreate = [];

      const primaryWarehouse = await tx.warehouse.findFirst({ where: { isPrimary: true } }) 
        || await tx.warehouse.findFirst();

      for (const item of dto.items) {
        const variant = await tx.productVariant.findUnique({
          where: { sku: item.sku },
          include: { product: true, inventoryItems: true }
        });

        if (!variant) {
          throw new AppError(`SKU not found: ${item.sku}`, 404);
        }

        const inv = variant.inventoryItems[0];
        const available = inv ? (inv.quantityOnHand - inv.quantityReserved) : 0;

        if (item.quantity > available) {
          throw new AppError(
            `Order cannot be placed. Only ${available} unit${available === 1 ? '' : 's'} ${available === 1 ? 'is' : 'are'} currently available for '${variant.product.name}'.`,
            400,
            { sku: variant.sku, available, requested: item.quantity }
          );
        }

        const lineTotal = variant.price * item.quantity;
        const lineCost = variant.costPrice * item.quantity;
        subtotal += lineTotal;
        totalCost += lineCost;

        orderItemsToCreate.push({
          variantId: variant.id,
          warehouseId: inv?.warehouseId || primaryWarehouse!.id,
          productName: variant.product.name,
          sku: variant.sku,
          quantity: item.quantity,
          unitPrice: variant.price,
          unitCost: variant.costPrice,
          totalPrice: lineTotal,
          totalCost: lineCost
        });

        // 2. Automatically reduce physical on-hand stock
        const prevOnHand = inv.quantityOnHand;
        const newOnHand = Math.max(0, prevOnHand - item.quantity);

        await tx.inventoryItem.update({
          where: { id: inv.id },
          data: { quantityOnHand: newOnHand }
        });

        // Audit log
        await tx.stockAdjustmentLog.create({
          data: {
            inventoryItemId: inv.id,
            variantId: variant.id,
            warehouseId: inv.warehouseId,
            changeQuantity: -item.quantity,
            previousQuantityOnHand: prevOnHand,
            newQuantityOnHand: newOnHand,
            reason: "ORDER_FULFILLED",
            referenceOrderId: orderNumber,
            note: `Automatic deduction for customer order ${orderNumber}`
          }
        });
      }

      const taxTotal = Math.round(subtotal * 0.08 * 100) / 100;
      const shippingTotal = subtotal >= 100 ? 0 : 9.99;
      const grandTotal = Math.round((subtotal + taxTotal + shippingTotal) * 100) / 100;
      const totalProfit = Math.round((subtotal - totalCost) * 100) / 100;

      const order = await tx.order.create({
        data: {
          orderNumber,
          customerId: dto.customerId,
          status: OrderStatus.CONFIRMED,
          paymentStatus: PaymentStatus.PAID,
          subtotal,
          taxTotal,
          shippingTotal,
          grandTotal,
          totalProfit,
          shippingAddress: JSON.stringify(dto.shippingAddress || { address1: "123 Customer Way", city: "Metropolis" }),
          billingAddress: JSON.stringify(dto.shippingAddress || { address1: "123 Customer Way", city: "Metropolis" }),
          items: {
            create: orderItemsToCreate
          },
          histories: {
            create: {
              fromStatus: "NONE",
              toStatus: OrderStatus.CONFIRMED,
              note: "Customer order confirmed and stock automatically deducted."
            }
          }
        },
        include: { items: true }
      });

      // Update customer stats
      await tx.customer.update({
        where: { id: dto.customerId },
        data: {
          totalOrders: { increment: 1 },
          totalSpent: { increment: grandTotal },
          lastOrderDate: new Date()
        }
      });

      logger.info(`✓ Customer Order #${order.orderNumber} successfully placed. Inventory automatically synchronized.`);
      return order;
    });
  }
}
