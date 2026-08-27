import { db } from "@stockpulse/database";
import { StockAdjustmentReason } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class ReturnsService {
  public static async processReturnRestock(rmaId: string, variantId: string, warehouseId: string, quantity: number, userId: string) {
    return await db.$transaction(async (tx) => {
      const inv = await tx.inventoryItem.findFirst({
        where: { variantId, warehouseId }
      });

      if (inv) {
        const prev = inv.quantityOnHand;
        const newQty = prev + quantity;

        await tx.inventoryItem.update({
          where: { id: inv.id },
          data: { quantityOnHand: newQty }
        });

        await tx.stockAdjustmentLog.create({
          data: {
            inventoryItemId: inv.id,
            variantId,
            warehouseId,
            changeQuantity: quantity,
            previousQuantityOnHand: prev,
            newQuantityOnHand: newQty,
            reason: StockAdjustmentReason.RETURN_RESTOCK,
            performedByUserId: userId,
            note: `RMA Restock #${rmaId}`
          }
        });
      }

      logger.info(`RMA #${rmaId} restocked ${quantity} units for variant ${variantId}`);
    });
  }
}
