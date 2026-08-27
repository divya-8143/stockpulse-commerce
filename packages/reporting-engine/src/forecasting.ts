export interface HistoricalSalesPoint {
  date: string; // YYYY-MM-DD
  quantity: number;
}

export interface StockoutForecast {
  averageDailyVelocity: number;
  daysOfSupplyRemaining: number;
  projectedStockoutDate: string | null;
  recommendedReorderDate: string | null;
  recommendedReorderQuantity: number;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "HEALTHY";
}

export class InventoryForecaster {
  public static projectStockout(
    currentStock: number,
    salesHistory: HistoricalSalesPoint[],
    leadTimeDays: number = 7,
    safetyBufferUnits: number = 10
  ): StockoutForecast {
    if (!salesHistory || salesHistory.length === 0) {
      return {
        averageDailyVelocity: 0,
        daysOfSupplyRemaining: 999,
        projectedStockoutDate: null,
        recommendedReorderDate: null,
        recommendedReorderQuantity: 50,
        riskLevel: "HEALTHY"
      };
    }

    const totalSold = salesHistory.reduce((sum, h) => sum + h.quantity, 0);
    const dailyVelocity = totalSold / salesHistory.length;

    if (dailyVelocity <= 0) {
      return {
        averageDailyVelocity: 0,
        daysOfSupplyRemaining: 999,
        projectedStockoutDate: null,
        recommendedReorderDate: null,
        recommendedReorderQuantity: 0,
        riskLevel: "HEALTHY"
      };
    }

    const daysRemaining = Math.floor(currentStock / dailyVelocity);
    const today = new Date();
    
    const stockoutDate = new Date(today);
    stockoutDate.setDate(today.getDate() + daysRemaining);

    const reorderDays = Math.max(0, daysRemaining - leadTimeDays);
    const reorderDate = new Date(today);
    reorderDate.setDate(today.getDate() + reorderDays);

    let riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "HEALTHY" = "HEALTHY";
    if (daysRemaining <= 3) {
      riskLevel = "CRITICAL";
    } else if (daysRemaining <= leadTimeDays) {
      riskLevel = "HIGH";
    } else if (daysRemaining <= leadTimeDays * 2) {
      riskLevel = "MEDIUM";
    }

    const reorderQty = Math.ceil((dailyVelocity * 30) + safetyBufferUnits);

    return {
      averageDailyVelocity: Math.round(dailyVelocity * 100) / 100,
      daysOfSupplyRemaining: daysRemaining,
      projectedStockoutDate: stockoutDate.toISOString().split("T")[0],
      recommendedReorderDate: reorderDate.toISOString().split("T")[0],
      recommendedReorderQuantity: reorderQty,
      riskLevel
    };
  }
}
