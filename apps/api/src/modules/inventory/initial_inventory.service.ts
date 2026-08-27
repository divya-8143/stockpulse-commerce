import { StockStatusCalculator } from "@stockpulse/reporting-engine";

export class InitialInventoryService {
  public static createInitialRecord(initialStock: number, safetyStockThreshold: number = 10, warehouseName: string = "Central Logistics Hub") {
    const onHand = Math.max(0, initialStock);
    const reserved = 0;
    const available = onHand - reserved;
    const evaluation = StockStatusCalculator.evaluateStatus(onHand, reserved, safetyStockThreshold);

    return {
      onHand,
      reserved,
      available,
      safetyStock: safetyStockThreshold,
      warehouse: warehouseName,
      status: evaluation.status
    };
  }
}
