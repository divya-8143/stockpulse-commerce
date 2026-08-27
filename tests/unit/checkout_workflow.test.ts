import { describe, it, expect } from "./test_framework.js";
import { CartCalculator } from "../../packages/reporting-engine/src/cart_calculator.js";

describe("Checkout Workflow & Cart Subtotal Engine", () => {
  it("Multiple products can be added to cart and subtotals aggregate accurately in INR", () => {
    const cart = [
      { id: "1", sku: "HDPH-ANC-BLK", name: "Headphones", category: "Audio", price: 14999, quantity: 2, availableStock: 10 },
      { id: "2", sku: "KB-MECH-RED", name: "Keyboard", category: "PC", price: 8999, quantity: 1, availableStock: 10 }
    ];

    const result = CartCalculator.calculateTotals(cart);
    expect(result.totalItems).toBe(3);
    expect(result.subtotal).toBe(38997); // (14999*2) + (8999*1)
    expect(result.grandTotal).toBe(38997); // Free shipping above 2000
  });

  it("Applies delivery fee when subtotal is below free shipping threshold", () => {
    const cart = [
      { id: "3", sku: "CABLE-USB-C", name: "Cable", category: "Accessories", price: 499, quantity: 1, availableStock: 50 }
    ];

    const result = CartCalculator.calculateTotals(cart);
    expect(result.subtotal).toBe(499);
    expect(result.shippingFee).toBe(99);
    expect(result.grandTotal).toBe(598);
  });
});
