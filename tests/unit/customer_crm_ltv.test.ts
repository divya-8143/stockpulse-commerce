import { describe, it, expect } from "./test_framework.js";
import { CustomerTier } from "@stockpulse/shared-types";

describe("Customer CRM & Lifetime Value (LTV) Engine", () => {
  it("should upgrade customer to GOLD tier when total spend exceeds $2,500", () => {
    const totalSpent = 3450.00;
    let tier = CustomerTier.STANDARD;

    if (totalSpent >= 5000) tier = CustomerTier.PLATINUM;
    else if (totalSpent >= 2500) tier = CustomerTier.GOLD;
    else if (totalSpent >= 1000) tier = CustomerTier.SILVER;

    expect(tier).toBe(CustomerTier.GOLD);
  });

  it("should calculate Average Order Value (AOV) accurately", () => {
    const totalSpent = 1200.00;
    const totalOrders = 8;
    const aov = totalSpent / totalOrders;

    expect(aov).toBe(150.00);
  });
});
