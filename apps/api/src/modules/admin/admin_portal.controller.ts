import { Router, Request, Response, NextFunction } from "express";
import { db } from "@stockpulse/database";
import { authenticate } from "../../middleware/authGuard.js";
import { enforceAdminOnly } from "../../middleware/rbac.js";
import { AnalyticsService } from "../analytics/analytics.service.js";

const router = Router();

// Read-Only Real-time Inventory Monitor (Driven by customer orders)
router.get("/inventory-monitor", authenticate, enforceAdminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await db.inventoryItem.findMany({
      include: {
        warehouse: true,
        variant: {
          include: { product: true }
        }
      }
    });

    const monitoredInventory = items.map(i => {
      const available = i.quantityOnHand - i.quantityReserved;
      const safety = i.variant.product.safetyStockThreshold;
      let status = "ACTIVE";
      if (available === 0) status = "OUT_OF_STOCK";
      else if (available <= safety) status = "LOW_STOCK";

      return {
        product: i.variant.product.name,
        sku: i.variant.sku,
        warehouse: i.warehouse.name,
        onHand: i.quantityOnHand,
        reserved: i.quantityReserved,
        available,
        safetyStock: safety,
        status,
        unitPrice: i.variant.price,
        costPrice: i.variant.costPrice
      };
    });

    res.json({ success: true, data: monitoredInventory });
  } catch (err) {
    next(err);
  }
});

// Admin All Orders Monitor
router.get("/all-orders", authenticate, enforceAdminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await db.order.findMany({
      include: { customer: true, items: true, histories: true },
      orderBy: { createdAt: "desc" }
    });
    res.json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
});

// Executive Reports
router.get("/reports/executive-summary", authenticate, enforceAdminOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const kpis = await AnalyticsService.getDashboardKPIs();
    res.json({ success: true, data: kpis });
  } catch (err) {
    next(err);
  }
});

export const adminPortalRouter = router;
