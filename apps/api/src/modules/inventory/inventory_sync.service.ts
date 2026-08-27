import { db } from "@stockpulse/database";
import { StockStatusCalculator } from "@stockpulse/reporting-engine";

export class InventorySyncService {
  public static async recalculateCatalogStatuses() {
    const inventoryItems = await db.inventoryItem.findMany({
      include: { variant: { include: { product: true } } }
    });

    const evaluated = inventoryItems.map(item => {
      const evaluation = StockStatusCalculator.evaluateStatus(
        item.quantityOnHand,
        item.quantityReserved,
        item.variant.product.safetyStockThreshold
      );
      return {
        sku: item.variant.sku,
        productName: item.variant.product.name,
        onHand: item.quantityOnHand,
        reserved: item.quantityReserved,
        available: evaluation.available,
        status: evaluation.status,
        description: evaluation.statusDescription
      };
    });

    return evaluated;
  }
}
