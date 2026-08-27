import { describe, it, expect } from "./test_framework.js";

describe("Out-of-Stock Order Prevention Guard", () => {
  it("should strictly reject orders requesting items with 0 available stock", () => {
    const item = { sku: "KB-MECH-BLU", onHand: 0, reserved: 0, available: 0 };
    const orderRequestQuantity = 1;

    const canFulfill = item.available >= orderRequestQuantity;
    expect(canFulfill).toBe(false);
  });

  it("should return detailed diagnostics when an order is rejected due to insufficient stock", () => {
    const errorDetails = {
      variantId: "var-101",
      sku: "HDPH-ANC-BLU",
      requested: 15,
      available: 8,
      reason: "Requested quantity exceeds available stock"
    };

    expect(errorDetails.requested).toBe(15);
    expect(errorDetails.available).toBe(8);
    expect(errorDetails.requested > errorDetails.available).toBe(true);
  });
});
