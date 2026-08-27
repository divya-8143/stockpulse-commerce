import { Router, Request, Response, NextFunction } from "express";
import { CustomerService } from "./customers.service.js";

const router = Router();

router.get("/customers", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CustomerService.listCustomers({
      search: req.query.search as string,
      page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 50
    });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/customers", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = await CustomerService.createCustomer(req.body);
    res.status(201).json({ success: true, data: customer });
  } catch (err) {
    next(err);
  }
});

export const customerRouter = router;
