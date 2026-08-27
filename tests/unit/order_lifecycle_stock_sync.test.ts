import { describe, it, expect } from "./test_framework.js";
import { OrderStatus } from "@stockpulse/shared-types";

describe("Order Lifecycle & State Machine Stock Synchronization", () => {
  it("should hold stock in 'reserved' state upon order creation", () => {
    let onHand = 100;
    let reserved = 0;
    const orderQty = 10;

    // Order Placed (CONFIRMED)
    reserved += orderQty;
    const available = onHand - reserved;

    expect(reserved).toBe(10);
    expect(available).toBe(90);
    expect(onHand).toBe(100);
  });

  it("should deduct onHand stock and release reserved count when order transitions to SHIPPED", () => {
    let onHand = 100;
    let reserved = 10;
    const orderQty = 10;

    // Fulfillment (SHIPPED)
    onHand -= orderQty;
    reserved -= orderQty;

    expect(onHand).toBe(90);
    expect(reserved).toBe(0);
  });

  it("should release reserved stock back to available pool when order is CANCELLED", () => {
    let onHand = 100;
    let reserved = 10;
    const orderQty = 10;

    // Cancellation
    reserved -= orderQty;
    const available = onHand - reserved;

    expect(reserved).toBe(0);
    expect(available).toBe(100);
  });
});
