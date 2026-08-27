import { Router, Request, Response, NextFunction } from "express";
import { SmartInventoryEngine } from "./inventory.service.js";
import { db } from "@stockpulse/database";
import { authenticate, requireRoles } from "../../middleware/authGuard.js";
import { UserRole } from "@stockpulse/shared-types";

const router = Router();

router.get("/stock", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await db.inventoryItem.findMany({
      include: {
        warehouse: true,
        variant: {
          include: {
            product: true
          }
        }
      },
      orderBy: { updatedAt: "desc" }
    });

    res.json({
      success: true,
      data: items.map(i => ({
        id: i.id,
        variantId: i.variantId,
        sku: i.variant.sku,
        productName: i.variant.product.name,
        variantTitle: i.variant.title,
        warehouseId: i.warehouseId,
        warehouseName: i.warehouse.name,
        quantityOnHand: i.quantityOnHand,
        quantityReserved: i.quantityReserved,
        quantityAvailable: i.quantityOnHand - i.quantityReserved,
        reorderPoint: i.reorderPoint,
        binLocation: i.binLocation
      }))
    });
  } catch (err) {
    next(err);
  }
});

router.post("/check-availability", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { items } = req.body;
    const availability = await SmartInventoryEngine.checkAvailability(items);
    res.json({ success: true, data: availability });
  } catch (err) {
    next(err);
  }
});

router.post("/adjust", authenticate, requireRoles(UserRole.SUPER_ADMIN, UserRole.INVENTORY_MANAGER, UserRole.WAREHOUSE_OPERATOR), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { variantId, warehouseId, changeQuantity, reason, note } = req.body;
    const result = await SmartInventoryEngine.adjustStock({
      variantId,
      warehouseId,
      changeQuantity: parseInt(changeQuantity, 10),
      reason,
      userId: req.user!.id,
      note
    });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.get("/alerts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const alerts = await db.lowStockAlert.findMany({
      where: { isResolved: false },
      include: {
        variant: {
          include: { product: true }
        }
      },
      orderBy: { createdAt: "desc" }
    });
    res.json({ success: true, data: alerts });
  } catch (err) {
    next(err);
  }
});

export const inventoryRouter = router;
