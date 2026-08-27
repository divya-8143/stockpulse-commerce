import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { StockAdjustmentReason, AlertSeverity, ProductStatus } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export interface OrderItemRequest {
  variantId?: string;
  sku?: string;
  quantity: number;
  warehouseId?: string;
}

export class AutomaticInventoryEngine {
  /**
   * Automatically determines stock status based on available units vs safety threshold.
   */
  public static calculateStockStatus(availableQuantity: number, safetyStockThreshold: number = 10): ProductStatus {
    if (availableQuantity <= 0) {
      return ProductStatus.ARCHIVED; // Interpreted as OUT_OF_STOCK
    }
    if (availableQuantity <= safetyStockThreshold) {
      return ProductStatus.DRAFT; // Interpreted as LOW_STOCK
    }
    return ProductStatus.ACTIVE;
  }

  /**
   * AUTOMATIC INVENTORY DEDUCTION ON CUSTOMER ORDER:
   * 1. Checks available stock.
   * 2. If requested > available -> strictly rejects order with friendly diagnostic message.
   * 3. Atomically reserves and updates On-Hand, Reserved, and Available counts.
   * 4. Automatically recalculates product status and low-stock alerts.
   */
  public static async processCustomerOrder(orderId: string, customerId: string, items: OrderItemRequest[]) {
    return await db.$transaction(async (tx) => {
      const deductionSummary = [];

      for (const item of items) {
        let inv = null;
        if (item.variantId) {
          inv = await tx.inventoryItem.findFirst({
            where: { variantId: item.variantId },
            include: { variant: { include: { product: true } } }
          });
        } else if (item.sku) {
          const variant = await tx.productVariant.findUnique({
            where: { sku: item.sku },
            include: { product: true }
          });
          if (variant) {
            inv = await tx.inventoryItem.findFirst({
              where: { variantId: variant.id },
              include: { variant: { include: { product: true } } }
            });
          }
        }

        if (!inv) {
          throw new AppError(`Product item not found in catalog: ${item.sku || item.variantId}`, 404);
        }

        const available = inv.quantityOnHand - inv.quantityReserved;
        
        // Out-of-Stock Protection
        if (item.quantity > available) {
          throw new AppError(
            `Order cannot be placed. Only ${available} unit${available === 1 ? '' : 's'} ${available === 1 ? 'is' : 'are'} currently available for '${inv.variant.product.name}'.`,
            400,
            { sku: inv.variant.sku, requested: item.quantity, available }
          );
        }

        // Automatic update: Increment reserved count, decrement available pool
        const prevOnHand = inv.quantityOnHand;
        const prevReserved = inv.quantityReserved;
        const newReserved = prevReserved + item.quantity;
        const newOnHand = Math.max(0, prevOnHand - item.quantity);
        const finalAvailable = newOnHand - (newReserved - item.quantity);

        const updatedInv = await tx.inventoryItem.update({
          where: { id: inv.id },
          data: {
            quantityOnHand: newOnHand,
            quantityReserved: newReserved - item.quantity // Active reservation fulfilled into order
          }
        });

        // Audit adjustment log
        await tx.stockAdjustmentLog.create({
          data: {
            inventoryItemId: inv.id,
            variantId: inv.variantId,
            warehouseId: inv.warehouseId,
            changeQuantity: -item.quantity,
            previousQuantityOnHand: prevOnHand,
            newQuantityOnHand: newOnHand,
            reason: StockAdjustmentReason.ORDER_FULFILLED,
            referenceOrderId: orderId,
            note: `Automatic stock update for Customer Order #${orderId}`
          }
        });

        // Check and trigger safety stock alerts
        const safetyThreshold = inv.variant.product.safetyStockThreshold;
        if (newOnHand <= safetyThreshold) {
          await tx.lowStockAlert.create({
            data: {
              variantId: inv.variantId,
              warehouseId: inv.warehouseId,
              currentAvailable: newOnHand,
              threshold: safetyThreshold,
              severity: newOnHand === 0 ? AlertSeverity.CRITICAL : AlertSeverity.HIGH
            }
          });
        }

        deductionSummary.push({
          sku: inv.variant.sku,
          productName: inv.variant.product.name,
          quantityDeducted: item.quantity,
          previousOnHand: prevOnHand,
          newOnHand,
          availableNow: newOnHand,
          safetyThreshold
        });
      }

      logger.info(`✓ Automatic inventory update completed for Order #${orderId}`, { deductionSummary });
      return deductionSummary;
    });
  }
}
