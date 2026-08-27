import { CartItem, CartState } from "@stockpulse/shared-types";

export class CartCalculator {
  public static calculateTotals(items: CartItem[], freeShippingThreshold: number = 2000): CartState {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = (subtotal >= freeShippingThreshold || subtotal === 0) ? 0 : 99;
    const grandTotal = subtotal + shippingFee;

    return {
      items,
      totalItems,
      subtotal,
      shippingFee,
      grandTotal
    };
  }
}
