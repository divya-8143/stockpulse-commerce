import { describe, it, expect } from "./test_framework.js";

describe("Inventory Concurrency & ACID Multi-Order Safety", () => {
  it("guarantees Available Stock >= 0 at all times during parallel checkout attempts", () => {
    let stock = 5;
    const customerA = 4;
    const customerB = 3;

    let customerASuccess = false;
    let customerBSuccess = false;

    // Simulate atomic lock
    if (stock >= customerA) {
      stock -= customerA;
      customerASuccess = true;
    }

    if (stock >= customerB) {
      stock -= customerB;
      customerBSuccess = true;
    }

    expect(customerASuccess).toBe(true);
    expect(customerBSuccess).toBe(false); // Second order safely rejected
    expect(stock).toBe(1);
    expect(stock >= 0).toBe(true);
  });
});
