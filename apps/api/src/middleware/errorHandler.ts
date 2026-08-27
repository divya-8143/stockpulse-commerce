import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { logger } from "@stockpulse/logger";

export class AppError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(message: string, statusCode = 400, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ZodError) {
    logger.warn(`Validation Error on ${req.method} ${req.url}`, { issues: err.issues });
    return res.status(422).json({
      success: false,
      error: "Validation Failed",
      details: err.issues.map(i => ({ path: i.path.join("."), message: i.message }))
    });
  }

  if (err instanceof AppError) {
    logger.warn(`Application Error [${err.statusCode}] on ${req.method} ${req.url}: ${err.message}`);
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      details: err.details
    });
  }

  logger.error(`Unhandled Exception on ${req.method} ${req.url}`, err);
  return res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "production" ? "An unexpected error occurred" : err.message
  });
}
