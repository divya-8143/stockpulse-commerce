import { AppError } from "../../middleware/errorHandler.js";
import { StockStatusCalculator } from "@stockpulse/reporting-engine";

export interface AddStockRequest {
  sku: string;
  quantityToAdd: number;
  reason?: string;
  adminName?: string;
  warehouse?: string;
}

export class AdminAddStockService {
  public static processAddStock(
    currentProduct: { name: string; sku: string; onHand: number; reserved: number; safetyStock: number; warehouse?: string },
    input: AddStockRequest
  ) {
    const qty = parseInt(String(input.quantityToAdd), 10);
    if (isNaN(qty) || qty <= 0) {
      throw new AppError("Quantity to add must be a positive integer greater than 0.", 400);
    }

    const prevStock = currentProduct.onHand;
    const newStock = prevStock + qty;
    const newAvailable = Math.max(0, newStock - currentProduct.reserved);
    const statusEval = StockStatusCalculator.evaluateStatus(newStock, currentProduct.reserved, currentProduct.safetyStock);

    const transaction = {
      id: `TXN-${Date.now().toString().slice(-6)}`,
      type: "STOCK_ADDED" as const,
      productName: currentProduct.name,
      sku: currentProduct.sku,
      warehouse: input.warehouse || currentProduct.warehouse || "Central Logistics Hub",
      quantityChanged: qty,
      previousStock: prevStock,
      newStock,
      performedBy: input.adminName || "Admin User",
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
      reason: input.reason || "Inbound Physical Stock Arrival"
    };

    return {
      newOnHand: newStock,
      newAvailable,
      newStatus: statusEval.status,
      transaction,
      message: `Successfully added ${qty} units to '${currentProduct.name}' (${currentProduct.sku}). Stock updated from ${prevStock} → ${newStock} (${statusEval.status}).`
    };
  }
}
