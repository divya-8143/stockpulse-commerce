import { describe, it, expect } from "./test_framework.js";
import { ABCInventoryAnalyzer } from "../../packages/reporting-engine/src/abc_analysis.js";
import { ABCCategory } from "@stockpulse/shared-types";

describe("Business Intelligence & Reporting Engine", () => {
  it("should accurately categorize top 80% revenue items as Class A", () => {
    const items = [
      { variantId: "1", sku: "SKU-A", productName: "Item A", unitsSold: 100, revenue: 80000, currentStock: 50 },
      { variantId: "2", sku: "SKU-B", productName: "Item B", unitsSold: 20, revenue: 15000, currentStock: 30 },
      { variantId: "3", sku: "SKU-C", productName: "Item C", unitsSold: 10, revenue: 5000, currentStock: 100 }
    ];

    const result = ABCInventoryAnalyzer.calculateClassification(items);
    expect(result[0].classification).toBe(ABCCategory.CLASS_A);
    expect(result[1].classification).toBe(ABCCategory.CLASS_B);
    expect(result[2].classification).toBe(ABCCategory.CLASS_C);
  });
});
