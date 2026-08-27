import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { StockStatusCalculator } from "@stockpulse/reporting-engine";

export interface CreateProductInput {
  name: string;
  sku: string;
  description: string;
  category: string;
  price: number;
  cost: number;
  initialStock: number;
  safetyStock: number;
  warehouse?: string;
}

export class ProductCreatorService {
  public static async execute(input: CreateProductInput) {
    if (!input.name || input.name.trim().length < 2) throw new AppError("Product name is required (min 2 characters).", 400);
    if (!input.sku || input.sku.trim().length < 3) throw new AppError("Valid SKU code is required (min 3 characters).", 400);
    if (input.price <= 0) throw new AppError("Selling price must be greater than zero.", 400);

    const skuUpper = input.sku.trim().toUpperCase();
    const initialQty = Math.max(0, parseInt(String(input.initialStock), 10) || 0);
    const safetyThreshold = Math.max(1, parseInt(String(input.safetyStock), 10) || 10);

    const statusEval = StockStatusCalculator.evaluateStatus(initialQty, 0, safetyThreshold);

    return {
      name: input.name.trim(),
      sku: skuUpper,
      category: input.category || "General",
      description: input.description || "High-performance enterprise hardware.",
      price: Number(input.price),
      cost: Number(input.cost || input.price * 0.5),
      onHand: initialQty,
      reserved: 0,
      available: initialQty,
      safetyStock: safetyThreshold,
      warehouse: input.warehouse || "Central Logistics Hub",
      status: statusEval.status
    };
  }
}
