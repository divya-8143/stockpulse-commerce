import { describe, it, expect } from "./test_framework.js";
import { DemoPaymentService } from "../../apps/api/src/modules/payments/demo_payments.service.js";

describe("Demo Payment Methods & Flow", () => {
  it("Simulates successful Paytm Demo payment", () => {
    const res = DemoPaymentService.processDemoPayment("PAYTM_DEMO", 15000);
    expect(res.success).toBe(true);
    expect(res.status).toBe("PAID");
    expect(res.gateway).toBe("PAYTM_DEMO");
  });

  it("Simulates successful PhonePe Demo payment", () => {
    const res = DemoPaymentService.processDemoPayment("PHONEPE_DEMO", 25000);
    expect(res.success).toBe(true);
    expect(res.status).toBe("PAID");
    expect(res.gateway).toBe("PHONEPE_DEMO");
  });

  it("Processes Cash on Delivery (COD) with PENDING status", () => {
    const res = DemoPaymentService.processDemoPayment("COD", 5000);
    expect(res.success).toBe(true);
    expect(res.status).toBe("PENDING_COD");
  });
});
