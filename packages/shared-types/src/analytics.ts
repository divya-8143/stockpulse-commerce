import { ABCCategory } from "./enums.js";

export interface SalesMetricSummary {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  totalGrossProfit: number;
  grossMarginPercentage: number;
  totalUnitsSold: number;
  previousPeriodRevenue?: number;
  revenueGrowthPercentage?: number;
}

export interface InventoryMetricSummary {
  totalInventoryValuation: number;
  totalInventoryCost: number;
  totalSKUCount: number;
  outOfStockSKUCount: number;
  lowStockSKUCount: number;
  inventoryTurnoverRate: number;
  stockoutRiskSKUs: {
    sku: string;
    productName: string;
    daysOfInventoryLeft: number;
    burnRatePerDay: number;
  }[];
}

export interface ABCAnalysisItem {
  variantId: string;
  sku: string;
  productName: string;
  unitsSold: number;
  revenueContribution: number;
  cumulativeRevenuePercentage: number;
  classification: ABCCategory;
  recommendedStockStrategy: string;
}

export interface TimeSeriesDataPoint {
  date: string;
  revenue: number;
  orders: number;
  profit: number;
  units: number;
}
