import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { StockAdjustmentReason, AlertSeverity } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export interface StockCheckItem {
  variantId: string;
  quantity: number;
  warehouseId?: string;
}

export class SmartInventoryEngine {
  /**
   * Evaluates if the requested quantities are available across specified or primary warehouses.
   */
  public static async checkAvailability(items: StockCheckItem[]) {
    const results = [];

    for (const item of items) {
      const inventory = await db.inventoryItem.findFirst({
        where: {
          variantId: item.variantId,
          ...(item.warehouseId ? { warehouseId: item.warehouseId } : {})
        },
        include: {
          variant: {
            include: { product: true }
          }
        }
      });

      if (!inventory) {
        results.push({
          variantId: item.variantId,
          requested: item.quantity,
          available: 0,
          isAvailable: false,
          reason: "Variant not stocked in target warehouse"
        });
        continue;
      }

      const available = inventory.quantityOnHand - inventory.quantityReserved;
      results.push({
        variantId: item.variantId,
        sku: inventory.variant.sku,
        productName: inventory.variant.product.name,
        requested: item.quantity,
        available,
        isAvailable: available >= item.quantity,
        warehouseId: inventory.warehouseId
      });
    }

    const allAvailable = results.every(r => r.isAvailable);
    return {
      allAvailable,
      items: results
    };
  }

  /**
   * Atomically reserves stock for a pending checkout order.
   * Prevents race conditions and overselling.
   */
  public static async reserveStockForOrder(orderId: string, items: StockCheckItem[], userId?: string) {
    return await db.$transaction(async (tx) => {
      // 1. First verify all items have sufficient available stock
      for (const item of items) {
        const inv = await tx.inventoryItem.findFirst({
          where: {
            variantId: item.variantId,
            ...(item.warehouseId ? { warehouseId: item.warehouseId } : {})
          },
          include: { variant: { include: { product: true } } }
        });

        if (!inv) {
          throw new AppError(`Item SKU not found in inventory: ${item.variantId}`, 400);
        }

        const available = inv.quantityOnHand - inv.quantityReserved;
        if (available < item.quantity) {
          throw new AppError(
            `Insufficient stock for '${inv.variant.product.name}' (SKU: ${inv.variant.sku}). Requested: ${item.quantity}, Available: ${available}`,
            409,
            { variantId: item.variantId, requested: item.quantity, available }
          );
        }
      }

      // 2. Perform atomic increment of quantityReserved
      const reservations = [];
      for (const item of items) {
        const inv = await tx.inventoryItem.findFirst({
          where: {
            variantId: item.variantId,
            ...(item.warehouseId ? { warehouseId: item.warehouseId } : {})
          }
        });

        if (!inv) continue;

        const updated = await tx.inventoryItem.update({
          where: { id: inv.id },
          data: {
            quantityReserved: { increment: item.quantity }
          }
        });

        reservations.push({
          inventoryItemId: updated.id,
          variantId: item.variantId,
          warehouseId: updated.warehouseId,
          quantityReserved: item.quantity
        });
      }

      logger.info(`Stock reserved for Order ${orderId}`, { reservations });
      return reservations;
    });
  }

  /**
   * Finalizes inventory deduction upon order shipment or fulfillment.
   * Decrements quantityOnHand and releases quantityReserved.
   */
  public static async fulfillReservedStock(orderId: string, items: StockCheckItem[], userId?: string) {
    return await db.$transaction(async (tx) => {
      for (const item of items) {
        const inv = await tx.inventoryItem.findFirst({
          where: {
            variantId: item.variantId,
            ...(item.warehouseId ? { warehouseId: item.warehouseId } : {})
          },
          include: { variant: { include: { product: true } } }
        });

        if (!inv) continue;

        const prevOnHand = inv.quantityOnHand;
        const newOnHand = Math.max(0, prevOnHand - item.quantity);
        const newReserved = Math.max(0, inv.quantityReserved - item.quantity);

        await tx.inventoryItem.update({
          where: { id: inv.id },
          data: {
            quantityOnHand: newOnHand,
            quantityReserved: newReserved
          }
        });

        await tx.stockAdjustmentLog.create({
          data: {
            inventoryItemId: inv.id,
            variantId: item.variantId,
            warehouseId: inv.warehouseId,
            changeQuantity: -item.quantity,
            previousQuantityOnHand: prevOnHand,
            newQuantityOnHand: newOnHand,
            reason: StockAdjustmentReason.ORDER_FULFILLED,
            referenceOrderId: orderId,
            performedByUserId: userId,
            note: `Fulfillment deduction for Order ${orderId}`
          }
        });

        // Check Low Stock Threshold & Trigger Alert
        const availableNow = newOnHand - newReserved;
        const safetyThreshold = inv.variant.product.safetyStockThreshold;

        if (availableNow <= safetyThreshold) {
          await tx.lowStockAlert.create({
            data: {
              variantId: item.variantId,
              warehouseId: inv.warehouseId,
              currentAvailable: availableNow,
              threshold: safetyThreshold,
              severity: availableNow === 0 ? AlertSeverity.CRITICAL : AlertSeverity.HIGH
            }
          });
          logger.warn(`LOW STOCK ALERT TRIGGERED for SKU ${inv.variant.sku}: Available=${availableNow}, Threshold=${safetyThreshold}`);
        }
      }
    });
  }

  /**
   * Releases reserved stock when an order is cancelled or expires.
   */
  public static async releaseReservedStock(orderId: string, items: StockCheckItem[], userId?: string) {
    return await db.$transaction(async (tx) => {
      for (const item of items) {
        const inv = await tx.inventoryItem.findFirst({
          where: {
            variantId: item.variantId,
            ...(item.warehouseId ? { warehouseId: item.warehouseId } : {})
          }
        });

        if (!inv) continue;

        await tx.inventoryItem.update({
          where: { id: inv.id },
          data: {
            quantityReserved: { decrement: Math.min(inv.quantityReserved, item.quantity) }
          }
        });

        logger.info(`Stock reservation released for Order ${orderId}, SKU=${item.variantId}`);
      }
    });
  }

  /**
   * Manual Stock Adjustment with mandatory audit trail log.
   */
  public static async adjustStock(data: {
    variantId: string;
    warehouseId: string;
    changeQuantity: number;
    reason: StockAdjustmentReason;
    userId: string;
    note?: string;
  }) {
    return await db.$transaction(async (tx) => {
      let inv = await tx.inventoryItem.findUnique({
        where: {
          variantId_warehouseId: {
            variantId: data.variantId,
            warehouseId: data.warehouseId
          }
        }
      });

      if (!inv) {
        inv = await tx.inventoryItem.create({
          data: {
            variantId: data.variantId,
            warehouseId: data.warehouseId,
            quantityOnHand: 0,
            quantityReserved: 0
          }
        });
      }

      const prevQty = inv.quantityOnHand;
      const newQty = prevQty + data.changeQuantity;

      if (newQty < 0) {
        throw new AppError(`Cannot adjust stock below 0. Current: ${prevQty}, Change: ${data.changeQuantity}`, 400);
      }

      const updated = await tx.inventoryItem.update({
        where: { id: inv.id },
        data: { quantityOnHand: newQty }
      });

      await tx.stockAdjustmentLog.create({
        data: {
          inventoryItemId: inv.id,
          variantId: data.variantId,
          warehouseId: data.warehouseId,
          changeQuantity: data.changeQuantity,
          previousQuantityOnHand: prevQty,
          newQuantityOnHand: newQty,
          reason: data.reason,
          performedByUserId: data.userId,
          note: data.note
        }
      });

      logger.audit("STOCK_ADJUSTMENT", data.userId, {
        variantId: data.variantId,
        change: data.changeQuantity,
        newOnHand: newQty,
        reason: data.reason
      });

      return updated;
    });
  }
}
