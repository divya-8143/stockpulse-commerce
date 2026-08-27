import { Router, Request, Response, NextFunction } from "express";
import { CatalogService } from "./catalog.service.js";
import { authenticate, requireRoles } from "../../middleware/authGuard.js";
import { UserRole } from "@stockpulse/shared-types";

const router = Router();

router.get("/products", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CatalogService.listProducts({
      search: req.query.search as string,
      categoryId: req.query.categoryId as string,
      status: req.query.status as any,
      page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 50
    });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.get("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await CatalogService.getProductById(req.params.id);
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
});

router.post("/products", authenticate, requireRoles(UserRole.SUPER_ADMIN, UserRole.INVENTORY_MANAGER), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await CatalogService.createProduct(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
});

export const catalogRouter = router;
