import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { StockAdjustmentReason } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class PurchaseOrderService {
  public static async receivePOItems(poId: string, receivedItems: { variantId: string; warehouseId: string; receivedQty: number }[], userId: string) {
    return await db.$transaction(async (tx) => {
      for (const item of receivedItems) {
        let inv = await tx.inventoryItem.findUnique({
          where: {
            variantId_warehouseId: {
              variantId: item.variantId,
              warehouseId: item.warehouseId
            }
          }
        });

        if (!inv) {
          inv = await tx.inventoryItem.create({
            data: {
              variantId: item.variantId,
              warehouseId: item.warehouseId,
              quantityOnHand: 0,
              quantityReserved: 0
            }
          });
        }

        const prevQty = inv.quantityOnHand;
        const newQty = prevQty + item.receivedQty;

        await tx.inventoryItem.update({
          where: { id: inv.id },
          data: { quantityOnHand: newQty }
        });

        await tx.stockAdjustmentLog.create({
          data: {
            inventoryItemId: inv.id,
            variantId: item.variantId,
            warehouseId: item.warehouseId,
            changeQuantity: item.receivedQty,
            previousQuantityOnHand: prevQty,
            newQuantityOnHand: newQty,
            reason: StockAdjustmentReason.RESTOCK,
            performedByUserId: userId,
            note: `Inbound PO Receipt for PO #${poId}`
          }
        });
      }

      logger.info(`PO #${poId} received successfully with ${receivedItems.length} items restocked`);
    });
  }
}
