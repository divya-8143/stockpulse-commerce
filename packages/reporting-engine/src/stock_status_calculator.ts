import { ProductStatus } from "@stockpulse/shared-types";

export interface StockStatusEvaluation {
  sku: string;
  onHand: number;
  reserved: number;
  available: number;
  safetyThreshold: number;
  status: "ACTIVE" | "LOW_STOCK" | "OUT_OF_STOCK";
  statusDescription: string;
}

export class StockStatusCalculator {
  public static evaluateStatus(onHand: number, reserved: number, safetyThreshold: number = 10): StockStatusEvaluation {
    const available = Math.max(0, onHand - reserved);

    if (available === 0) {
      return {
        sku: "",
        onHand,
        reserved,
        available,
        safetyThreshold,
        status: "OUT_OF_STOCK",
        statusDescription: "Out of stock. Ordering disabled."
      };
    }

    if (available <= safetyThreshold) {
      return {
        sku: "",
        onHand,
        reserved,
        available,
        safetyThreshold,
        status: "LOW_STOCK",
        statusDescription: `Low stock alarm: ${available} units remaining (Safety threshold: ${safetyThreshold})`
      };
    }

    return {
      sku: "",
      onHand,
      reserved,
      available,
      safetyThreshold,
      status: "ACTIVE",
      statusDescription: "Healthy stock levels."
    };
  }
}
