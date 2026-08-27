export type StockStatusType = "ACTIVE" | "LOW_STOCK" | "OUT_OF_STOCK";

export class InventoryStatusEngine {
  public static compute(availableStock: number, safetyStockThreshold: number): StockStatusType {
    if (availableStock <= 0) {
      return "OUT_OF_STOCK";
    }
    if (availableStock <= safetyStockThreshold) {
      return "LOW_STOCK";
    }
    return "ACTIVE";
  }
}
