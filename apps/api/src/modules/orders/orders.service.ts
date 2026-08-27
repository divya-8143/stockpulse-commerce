import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { SmartInventoryEngine } from "../inventory/inventory.service.js";
import { OrderStatus, PaymentStatus, CreateOrderDTO, OrderStatusTransitionDTO } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class OrderService {
  /**
   * Creates an order with immediate atomic stock reservation and out-of-stock validation.
   */
  public static async createOrder(dto: CreateOrderDTO, userId?: string) {
    // 1. Check out-of-stock prevention
    const availability = await SmartInventoryEngine.checkAvailability(dto.items);
    if (!availability.allAvailable) {
      const unavailable = availability.items.filter(i => !i.isAvailable);
      throw new AppError(
        `Order rejected: Out of stock for ${unavailable.map(u => `${u.productName} (Avail: ${u.available}, Req: ${u.requested})`).join(", ")}`,
        400,
        { unavailable }
      );
    }

    // 2. Fetch full variant prices to prevent client-side price tampering
    const variantIds = dto.items.map(i => i.variantId);
    const variants = await db.productVariant.findMany({
      where: { id: { in: variantIds } },
      include: { product: true }
    });

    const primaryWarehouse = await db.warehouse.findFirst({ where: { isPrimary: true } });
    const defaultWarehouseId = primaryWarehouse?.id || (await db.warehouse.findFirst())?.id;

    if (!defaultWarehouseId) {
      throw new AppError("No warehouse available for order fulfillment", 500);
    }

    let subtotal = 0;
    let totalCost = 0;
    const orderItemsData = dto.items.map(item => {
      const variant = variants.find(v => v.id === item.variantId);
      if (!variant) throw new AppError(`Variant not found: ${item.variantId}`, 400);

      const itemTotal = variant.price * item.quantity;
      const itemCostTotal = variant.costPrice * item.quantity;
      subtotal += itemTotal;
      totalCost += itemCostTotal;

      return {
        variantId: variant.id,
        warehouseId: item.warehouseId || defaultWarehouseId,
        productName: variant.product.name,
        sku: variant.sku,
        quantity: item.quantity,
        unitPrice: variant.price,
        unitCost: variant.costPrice,
        totalPrice: itemTotal,
        totalCost: itemCostTotal
      };
    });

    const taxTotal = Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
    const shippingTotal = subtotal > 100 ? 0 : 9.99;
    const grandTotal = Math.round((subtotal + taxTotal + shippingTotal) * 100) / 100;
    const totalProfit = Math.round((subtotal - totalCost) * 100) / 100;

    const orderNumber = `ORD-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    const order = await db.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({
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
          shippingAddress: JSON.stringify(dto.shippingAddress),
          billingAddress: JSON.stringify(dto.billingAddress || dto.shippingAddress),
          notes: dto.notes,
          items: {
            create: orderItemsData
          },
          histories: {
            create: {
              fromStatus: "NONE",
              toStatus: OrderStatus.CONFIRMED,
              note: "Order placed and confirmed via Checkout"
            }
          }
        },
        include: { items: true }
      });

      // Update customer total spend & order count
      await tx.customer.update({
        where: { id: dto.customerId },
        data: {
          totalOrders: { increment: 1 },
          totalSpent: { increment: grandTotal },
          lastOrderDate: new Date()
        }
      });

      return createdOrder;
    });

    // 3. Atomically reserve inventory
    await SmartInventoryEngine.reserveStockForOrder(
      order.id,
      dto.items.map(i => ({ variantId: i.variantId, quantity: i.quantity, warehouseId: i.warehouseId || defaultWarehouseId })),
      userId
    );

    logger.info(`Order ${order.orderNumber} successfully placed. Total: $${order.grandTotal}`);
    return order;
  }

  /**
   * Executes valid state machine transitions:
   * CONFIRMED -> PROCESSING -> SHIPPED (triggers inventory deduction) -> DELIVERED
   * Any active state -> CANCELLED (releases reserved stock or restocks)
   */
  public static async transitionStatus(dto: OrderStatusTransitionDTO) {
    const order = await db.order.findUnique({
      where: { id: dto.orderId },
      include: { items: true }
    });

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    const fromStatus = order.status as OrderStatus;
    const toStatus = dto.targetStatus;

    if (fromStatus === toStatus) {
      return order;
    }

    // State machine rules
    const allowedTransitions: Record<OrderStatus, OrderStatus[]> = {
      [OrderStatus.PENDING]: [OrderStatus.CONFIRMED, OrderStatus.CANCELLED],
      [OrderStatus.RESERVED]: [OrderStatus.CONFIRMED, OrderStatus.CANCELLED],
      [OrderStatus.CONFIRMED]: [OrderStatus.PROCESSING, OrderStatus.CANCELLED],
      [OrderStatus.PROCESSING]: [OrderStatus.SHIPPED, OrderStatus.CANCELLED],
      [OrderStatus.PICKED]: [OrderStatus.PACKED, OrderStatus.CANCELLED],
      [OrderStatus.PACKED]: [OrderStatus.SHIPPED, OrderStatus.CANCELLED],
      [OrderStatus.SHIPPED]: [OrderStatus.DELIVERED, OrderStatus.RETURN_REQUESTED],
      [OrderStatus.DELIVERED]: [OrderStatus.RETURN_REQUESTED, OrderStatus.REFUNDED],
      [OrderStatus.CANCELLED]: [],
      [OrderStatus.RETURN_REQUESTED]: [OrderStatus.RETURNED, OrderStatus.REFUNDED],
      [OrderStatus.RETURNED]: [OrderStatus.REFUNDED],
      [OrderStatus.REFUNDED]: []
    };

    if (!allowedTransitions[fromStatus]?.includes(toStatus)) {
      throw new AppError(`Invalid status transition from ${fromStatus} to ${toStatus}`, 400);
    }

    // Handle inventory sync based on transition
    if (toStatus === OrderStatus.SHIPPED) {
      // Fulfill & deduct on-hand stock
      await SmartInventoryEngine.fulfillReservedStock(
        order.id,
        order.items.map(i => ({ variantId: i.variantId, quantity: i.quantity, warehouseId: i.warehouseId })),
        dto.performedByUserId
      );
    } else if (toStatus === OrderStatus.CANCELLED) {
      // Release reservation
      await SmartInventoryEngine.releaseReservedStock(
        order.id,
        order.items.map(i => ({ variantId: i.variantId, quantity: i.quantity, warehouseId: i.warehouseId })),
        dto.performedByUserId
      );
    }

    const updated = await db.order.update({
      where: { id: order.id },
      data: {
        status: toStatus,
        trackingNumber: dto.trackingNumber || order.trackingNumber,
        carrier: dto.carrier || order.carrier,
        shippedAt: toStatus === OrderStatus.SHIPPED ? new Date() : order.shippedAt,
        deliveredAt: toStatus === OrderStatus.DELIVERED ? new Date() : order.deliveredAt,
        cancelledAt: toStatus === OrderStatus.CANCELLED ? new Date() : order.cancelledAt,
        histories: {
          create: {
            fromStatus,
            toStatus,
            note: dto.cancellationReason || `Status changed to ${toStatus}`,
            performedByUserId: dto.performedByUserId
          }
        }
      },
      include: { items: true, histories: true }
    });

    logger.info(`Order ${order.orderNumber} transitioned from ${fromStatus} -> ${toStatus}`);
    return updated;
  }

  public static async listOrders(params: {
    status?: OrderStatus;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (params.status) where.status = params.status;
    if (params.search) {
      where.OR = [
        { orderNumber: { contains: params.search } },
        { customer: { email: { contains: params.search } } }
      ];
    }

    const [total, orders] = await Promise.all([
      db.order.count({ where }),
      db.order.findMany({
        where,
        skip,
        take: limit,
        include: {
          customer: true,
          items: {
            include: {
              variant: true,
              warehouse: true
            }
          },
          histories: {
            orderBy: { createdAt: "desc" }
          }
        },
        orderBy: { createdAt: "desc" }
      })
    ]);

    return {
      orders: orders.map(o => ({
        ...o,
        shippingAddress: JSON.parse(o.shippingAddress || "{}"),
        billingAddress: JSON.parse(o.billingAddress || "{}")
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
}
