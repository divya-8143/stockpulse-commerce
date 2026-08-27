import { OrderConfirmationDetails } from "@stockpulse/shared-types";

export class OrderConfirmationService {
  public static buildConfirmation(order: any, paymentMethod: string): OrderConfirmationDetails {
    return {
      orderId: order.id || order.orderNumber,
      customerName: order.customerName,
      email: order.customerEmail || order.email,
      itemsCount: order.items ? order.items.reduce((s: number, i: any) => s + i.quantity, 0) : 1,
      subtotal: order.subtotal || order.total,
      shippingFee: order.shippingTotal || 0,
      grandTotal: order.grandTotal || order.total,
      paymentMethod: paymentMethod === "PAYTM_DEMO" ? "Paytm UPI (Demo)" : (paymentMethod === "PHONEPE_DEMO" ? "PhonePe UPI (Demo)" : "Cash on Delivery"),
      paymentStatus: paymentMethod === "COD" ? "PENDING (COD)" : "PAID",
      estimatedDelivery: "3–5 business days",
      placedAt: new Date().toISOString().replace("T", " ").slice(0, 16)
    };
  }
}
