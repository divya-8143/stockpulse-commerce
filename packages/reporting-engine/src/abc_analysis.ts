import { ABCCategory, ABCAnalysisItem } from "@stockpulse/shared-types";

export interface SKUPerformanceInput {
  variantId: string;
  sku: string;
  productName: string;
  unitsSold: number;
  revenue: number;
  currentStock: number;
}

export class ABCInventoryAnalyzer {
  /**
   * Evaluates inventory SKUs according to the Pareto Principle (80/20 rule).
   * Class A: Top 80% of revenue (tight control, high frequency audits)
   * Class B: Next 15% of revenue (moderate control)
   * Class C: Bottom 5% of revenue (simple control, safety buffer)
   */
  public static calculateClassification(items: SKUPerformanceInput[]): ABCAnalysisItem[] {
    if (!items || items.length === 0) return [];

    const totalRevenue = items.reduce((sum, item) => sum + item.revenue, 0);
    if (totalRevenue === 0) {
      return items.map(item => ({
        variantId: item.variantId,
        sku: item.sku,
        productName: item.productName,
        unitsSold: item.unitsSold,
        revenueContribution: 0,
        cumulativeRevenuePercentage: 0,
        classification: ABCCategory.CLASS_C,
        recommendedStockStrategy: "Maintain standard buffer stock; review reorder point"
      }));
    }

    // Sort descending by revenue
    const sorted = [...items].sort((a, b) => b.revenue - a.revenue);
    let runningRevenueSum = 0;

    return sorted.map(item => {
      runningRevenueSum += item.revenue;
      const cumulativePercentage = (runningRevenueSum / totalRevenue) * 100;

      let classification = ABCCategory.CLASS_C;
      let strategy = "Review low-turnover SKU for potential rationalization or seasonal bundle.";

      if (cumulativePercentage <= 80) {
        classification = ABCCategory.CLASS_A;
        strategy = "High-priority SKU. Maintain tight cycle counts, JIT reordering, and priority supplier SLAs.";
      } else if (cumulativePercentage <= 95) {
        classification = ABCCategory.CLASS_B;
        strategy = "Moderate-priority SKU. Implement bi-weekly inventory checks and balanced safety stock.";
      }

      return {
        variantId: item.variantId,
        sku: item.sku,
        productName: item.productName,
        unitsSold: item.unitsSold,
        revenueContribution: item.revenue,
        cumulativeRevenuePercentage: Math.round(cumulativePercentage * 100) / 100,
        classification,
        recommendedStockStrategy: strategy
      };
    });
  }
}
