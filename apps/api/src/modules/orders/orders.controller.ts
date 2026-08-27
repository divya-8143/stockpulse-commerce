import { Router, Request, Response, NextFunction } from "express";
import { OrderService } from "./orders.service.js";
import { authenticate } from "../../middleware/authGuard.js";

const router = Router();

router.get("/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.listOrders({
      status: req.query.status as any,
      search: req.query.search as string,
      page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 50
    });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await OrderService.createOrder(req.body, req.user?.id);
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

router.post("/orders/:id/status", authenticate, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await OrderService.transitionStatus({
      orderId: req.params.id,
      targetStatus: req.body.targetStatus,
      trackingNumber: req.body.trackingNumber,
      carrier: req.body.carrier,
      cancellationReason: req.body.cancellationReason,
      performedByUserId: req.user!.id
    });
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
});

export const orderRouter = router;
