import { Request, Response, NextFunction } from "express";
import { AppError } from "../../middleware/errorHandler.js";
import { UserRole } from "@stockpulse/shared-types";

export function validateInventoryAccess(req: Request, res: Response, next: NextFunction) {
  // Regular customers are blocked from administrative adjustments
  if (req.user?.role === UserRole.CUSTOMER) {
    return next(new AppError("Customers are forbidden from modifying warehouse stock directly.", 403));
  }
  next();
}
