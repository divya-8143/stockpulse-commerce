import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorHandler.js";
import { UserRole } from "@stockpulse/shared-types";

export function enforceCustomerOnly(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== UserRole.CUSTOMER) {
    return next(new AppError("Access denied: Customer account required", 403));
  }
  next();
}

export function enforceAdminOnly(req: Request, res: Response, next: NextFunction) {
  if (!req.user || (req.user.role !== UserRole.SUPER_ADMIN && req.user.role !== UserRole.INVENTORY_MANAGER)) {
    return next(new AppError("Access denied: Administrator privileges required", 403));
  }
  next();
}

export function forbidCustomerInventoryModification(req: Request, res: Response, next: NextFunction) {
  if (req.user?.role === UserRole.CUSTOMER) {
    return next(new AppError("Security violation: Customers cannot manually alter inventory balances", 403));
  }
  next();
}
