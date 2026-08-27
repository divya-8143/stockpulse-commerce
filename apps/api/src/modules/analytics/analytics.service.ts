import { db } from "@stockpulse/database";
import { ABCInventoryAnalyzer } from "@stockpulse/reporting-engine";

export class AnalyticsService {
  public static async getDashboardKPIs() {
    const [
      totalOrders,
      ordersAggregate,
      totalCustomers,
      lowStockAlertsCount,
      inventoryItems
    ] = await Promise.all([
      db.order.count(),
      db.order.aggregate({
        _sum: { grandTotal: true, totalProfit: true },
        _avg: { grandTotal: true }
      }),
      db.customer.count(),
      db.lowStockAlert.count({ where: { isResolved: false } }),
      db.inventoryItem.findMany({
        include: { variant: true }
      })
    ]);

    const totalRevenue = ordersAggregate._sum.grandTotal || 0;
    const totalProfit = ordersAggregate._sum.totalProfit || 0;
    const averageOrderValue = Math.round((ordersAggregate._avg.grandTotal || 0) * 100) / 100;

    let totalValuation = 0;
    let outOfStockCount = 0;

    inventoryItems.forEach(item => {
      totalValuation += item.quantityOnHand * item.variant.costPrice;
      if (item.quantityOnHand - item.quantityReserved <= 0) {
        outOfStockCount++;
      }
    });

    return {
      revenue: {
        total: Math.round(totalRevenue * 100) / 100,
        profit: Math.round(totalProfit * 100) / 100,
        aov: averageOrderValue
      },
      orders: {
        total: totalOrders
      },
      customers: {
        total: totalCustomers
      },
      inventory: {
        totalValuation: Math.round(totalValuation * 100) / 100,
        lowStockAlerts: lowStockAlertsCount,
        outOfStockSKUs: outOfStockCount,
        totalTrackedItems: inventoryItems.length
      }
    };
  }

  public static async getABCAnalysis() {
    const orderItems = await db.orderItem.findMany({
      include: { variant: { include: { product: true } } }
    });

    const skuMap = new Map<string, {
      variantId: string;
      sku: string;
      productName: string;
      unitsSold: number;
      revenue: number;
      currentStock: number;
    }>();

    orderItems.forEach(oi => {
      const existing = skuMap.get(oi.variantId) || {
        variantId: oi.variantId,
        sku: oi.sku,
        productName: oi.productName,
        unitsSold: 0,
        revenue: 0,
        currentStock: 0
      };
      existing.unitsSold += oi.quantity;
      existing.revenue += oi.totalPrice;
      skuMap.set(oi.variantId, existing);
    });

    const items = Array.from(skuMap.values());
    return ABCInventoryAnalyzer.calculateClassification(items);
  }
}
