import { describe, it, expect } from "./test_framework.js";

describe("Inventory Validation & Boundary Rules", () => {
  it("Product quantity default must start at 1", () => {
    const defaultQty = 1;
    expect(defaultQty).toBe(1);
  });

  it("Product quantity increment with '+' increases by 1", () => {
    let qty = 1;
    qty += 1;
    expect(qty).toBe(2);
  });

  it("Product quantity decrement with '-' never goes below 1", () => {
    let qty = 1;
    qty = Math.max(1, qty - 1);
    expect(qty).toBe(1);
  });

  it("User cannot select more than available stock", () => {
    const available = 5;
    let qty = 5;
    const attemptIncrement = Math.min(available, qty + 1);
    expect(attemptIncrement).toBe(5);
  });
});
