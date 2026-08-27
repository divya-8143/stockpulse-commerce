export interface DemoPaymentResult {
  success: boolean;
  gateway: "PAYTM_DEMO" | "PHONEPE_DEMO" | "COD";
  transactionRef: string;
  status: "PAID" | "PENDING_COD";
  message: string;
}

export class DemoPaymentService {
  /**
   * Local in-memory demo payment processor (Strictly no external APIs or keys).
   */
  public static processDemoPayment(gateway: "PAYTM_DEMO" | "PHONEPE_DEMO" | "COD", amount: number): DemoPaymentResult {
    const txnRef = `DEMO-TXN-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    if (gateway === "PAYTM_DEMO") {
      return {
        success: true,
        gateway: "PAYTM_DEMO",
        transactionRef: txnRef,
        status: "PAID",
        message: "Paytm Demo UPI Payment verified successfully."
      };
    }

    if (gateway === "PHONEPE_DEMO") {
      return {
        success: true,
        gateway: "PHONEPE_DEMO",
        transactionRef: txnRef,
        status: "PAID",
        message: "PhonePe Demo UPI Payment verified successfully."
      };
    }

    return {
      success: true,
      gateway: "COD",
      transactionRef: txnRef,
      status: "PENDING_COD",
      message: "Cash on Delivery confirmed. Payable upon doorstep delivery."
    };
  }
}
