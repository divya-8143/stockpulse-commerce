import { Router, Request, Response, NextFunction } from "express";
import { AnalyticsService } from "./analytics.service.js";

const router = Router();

router.get("/dashboard-kpis", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const kpis = await AnalyticsService.getDashboardKPIs();
    res.json({ success: true, data: kpis });
  } catch (err) {
    next(err);
  }
});

router.get("/abc-analysis", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const analysis = await AnalyticsService.getABCAnalysis();
    res.json({ success: true, data: analysis });
  } catch (err) {
    next(err);
  }
});

export const analyticsRouter = router;
