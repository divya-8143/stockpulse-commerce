export class ReportExporter {
  public static toCSV<T extends Record<string, any>>(records: T[], columns: { header: string; key: keyof T }[]): string {
    if (!records || records.length === 0) return "";

    const headerRow = columns.map(c => `"${c.header.replace(/"/g, '""')}"`).join(",");
    const rows = records.map(record => {
      return columns.map(c => {
        const val = record[c.key];
        if (val === null || val === undefined) return '""';
        if (typeof val === "object") return `"${JSON.stringify(val).replace(/"/g, '""')}"`;
        return `"${String(val).replace(/"/g, '""')}"`;
      }).join(",");
    });

    return [headerRow, ...rows].join("\r\n");
  }

  public static generateInventoryValuationReport(items: {
    sku: string;
    productName: string;
    quantityOnHand: number;
    costPrice: number;
    retailPrice: number;
  }[]): {
    totalUnits: number;
    totalCostValuation: number;
    totalRetailValuation: number;
    potentialProfit: number;
    csv: string;
  } {
    let totalUnits = 0;
    let totalCostValuation = 0;
    let totalRetailValuation = 0;

    const rows = items.map(item => {
      const itemCostVal = item.quantityOnHand * item.costPrice;
      const itemRetailVal = item.quantityOnHand * item.retailPrice;
      totalUnits += item.quantityOnHand;
      totalCostValuation += itemCostVal;
      totalRetailValuation += itemRetailVal;

      return {
        sku: item.sku,
        productName: item.productName,
        quantity: item.quantityOnHand,
        costPrice: `$${item.costPrice.toFixed(2)}`,
        retailPrice: `$${item.retailPrice.toFixed(2)}`,
        costValuation: `$${itemCostVal.toFixed(2)}`,
        retailValuation: `$${itemRetailVal.toFixed(2)}`
      };
    });

    const csv = this.toCSV(rows, [
      { header: "SKU", key: "sku" },
      { header: "Product Name", key: "productName" },
      { header: "Quantity On Hand", key: "quantity" },
      { header: "Cost Price", key: "costPrice" },
      { header: "Retail Price", key: "retailPrice" },
      { header: "Total Cost Valuation", key: "costValuation" },
      { header: "Total Retail Valuation", key: "retailValuation" }
    ]);

    return {
      totalUnits,
      totalCostValuation: Math.round(totalCostValuation * 100) / 100,
      totalRetailValuation: Math.round(totalRetailValuation * 100) / 100,
      potentialProfit: Math.round((totalRetailValuation - totalCostValuation) * 100) / 100,
      csv
    };
  }
}
