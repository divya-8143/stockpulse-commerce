export interface PromotionRule {
  code: string;
  description: string;
  discountType: "PERCENTAGE" | "FIXED_AMOUNT" | "BUY_X_GET_Y" | "FREE_SHIPPING";
  discountValue: number;
  minimumOrderValue: number;
  applicableCategoryIds?: string[];
  maxUses?: number;
  usedCount: number;
  expiresAt?: Date;
  isActive: boolean;
}

export class PromotionEngine {
  public static evaluateDiscount(subtotal: number, promo: PromotionRule): { discountAmount: number; isValid: boolean; message: string } {
    if (!promo.isActive) {
      return { discountAmount: 0, isValid: false, message: "Promotion code is inactive" };
    }
    if (promo.expiresAt && new Date() > promo.expiresAt) {
      return { discountAmount: 0, isValid: false, message: "Promotion has expired" };
    }
    if (subtotal < promo.minimumOrderValue) {
      return {
        discountAmount: 0,
        isValid: false,
        message: `Order subtotal must be at least $${promo.minimumOrderValue} to qualify`
      };
    }

    let discount = 0;
    if (promo.discountType === "PERCENTAGE") {
      discount = subtotal * (promo.discountValue / 100);
    } else if (promo.discountType === "FIXED_AMOUNT") {
      discount = Math.min(subtotal, promo.discountValue);
    }

    return {
      discountAmount: Math.round(discount * 100) / 100,
      isValid: true,
      message: "Promotion successfully applied"
    };
  }
}
