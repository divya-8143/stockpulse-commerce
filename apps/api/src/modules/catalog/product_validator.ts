import { AppError } from "../../middleware/errorHandler.js";

export class ProductValidator {
  public static validateEdit(data: { name?: string; price?: number; cost?: number; safetyStock?: number }) {
    if (data.name !== undefined && data.name.trim().length < 2) {
      throw new AppError("Product name must be at least 2 characters.", 400);
    }
    if (data.price !== undefined && data.price <= 0) {
      throw new AppError("Price must be greater than zero.", 400);
    }
    if (data.cost !== undefined && data.cost < 0) {
      throw new AppError("Cost cannot be negative.", 400);
    }
    if (data.safetyStock !== undefined && data.safetyStock < 1) {
      throw new AppError("Safety stock threshold must be at least 1.", 400);
    }
    return true;
  }
}
