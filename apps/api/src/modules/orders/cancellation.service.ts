import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { OrderStatus, StockAdjustmentReason } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class OrderCancellationService {
  /**
   * CANCEL ELIGIBLE CUSTOMER ORDER:
   * 1. Validates order status is CONFIRMED or PROCESSING (cannot cancel SHIPPED/DELIVERED).
   * 2. Automatically restores the exact quantities back into warehouse On-Hand inventory.
   * 3. Updates order status to CANCELLED.
   * 4. Logs the automatic restock event.
   */
  public static async cancelOrder(orderId: string, customerId?: string, reason: string = "Customer requested cancellation") {
    return await db.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { items: true }
      });

      if (!order) {
        throw new AppError("Order not found", 404);
      }

      if (customerId && order.customerId !== customerId) {
        throw new AppError("Unauthorized: You cannot cancel another customer's order", 403);
      }

      const eligibleStatuses = [OrderStatus.PENDING, OrderStatus.CONFIRMED, OrderStatus.PROCESSING];
      if (!eligibleStatuses.includes(order.status as OrderStatus)) {
        throw new AppError(`Cannot cancel order in '${order.status}' status. Orders that have shipped cannot be cancelled.`, 400);
      }

      // Automatically restore inventory for each item
      const restorationLog = [];
      for (const item of order.items) {
        const inv = await tx.inventoryItem.findFirst({
          where: { variantId: item.variantId, warehouseId: item.warehouseId }
        });

        if (inv) {
          const prevOnHand = inv.quantityOnHand;
          const newOnHand = prevOnHand + item.quantity;

          await tx.inventoryItem.update({
            where: { id: inv.id },
            data: { quantityOnHand: newOnHand }
          });

          await tx.stockAdjustmentLog.create({
            data: {
              inventoryItemId: inv.id,
              variantId: item.variantId,
              warehouseId: item.warehouseId,
              changeQuantity: item.quantity,
              previousQuantityOnHand: prevOnHand,
              newQuantityOnHand: newOnHand,
              reason: StockAdjustmentReason.ORDER_CANCELLED_RESTOCK,
              referenceOrderId: order.orderNumber,
              note: `Automatic inventory restoration from cancelled order ${order.orderNumber}`
            }
          });

          restorationLog.push({
            sku: item.sku,
            restoredQuantity: item.quantity,
            newOnHand
          });
        }
      }

      const updatedOrder = await tx.order.update({
        where: { id: order.id },
        data: {
          status: OrderStatus.CANCELLED,
          cancelledAt: new Date(),
          histories: {
            create: {
              fromStatus: order.status,
              toStatus: OrderStatus.CANCELLED,
              note: reason
            }
          }
        },
        include: { items: true, histories: true }
      });

      logger.info(`✓ Order #${order.orderNumber} CANCELLED. Automatic inventory restoration complete.`, { restorationLog });
      return { order: updatedOrder, restorationLog };
    });
  }
}
