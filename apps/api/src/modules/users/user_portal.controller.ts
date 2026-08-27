import { Router, Request, Response, NextFunction } from "express";
import { db } from "@stockpulse/database";
import { CustomerOrderService } from "../orders/customer_order.service.js";
import { OrderCancellationService } from "../orders/cancellation.service.js";
import { authenticate } from "../../middleware/authGuard.js";
import { enforceCustomerOnly } from "../../middleware/rbac.js";

const router = Router();

// Customer Profile
router.get("/profile", authenticate, enforceCustomerOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = await db.customer.findUnique({
      where: { id: req.user!.id },
      include: { addresses: true }
    });
    res.json({ success: true, data: customer });
  } catch (err) {
    next(err);
  }
});

// Customer's Own Orders
router.get("/my-orders", authenticate, enforceCustomerOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await db.order.findMany({
      where: { customerId: req.user!.id },
      include: { items: true, histories: true },
      orderBy: { createdAt: "desc" }
    });
    res.json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
});

// Customer Places Order (Automatic stock reduction)
router.post("/place-order", authenticate, enforceCustomerOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await CustomerOrderService.placeOrder({
      customerId: req.user!.id,
      customerEmail: req.user!.email,
      customerName: `${req.user!.firstName} ${req.user!.lastName}`,
      items: req.body.items,
      shippingAddress: req.body.shippingAddress
    });
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

// Customer Cancels Order (Automatic stock restoration)
router.post("/orders/:id/cancel", authenticate, enforceCustomerOnly, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderCancellationService.cancelOrder(req.params.id, req.user!.id, req.body.reason);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

export const userPortalRouter = router;
