export interface CustomerCheckoutInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "PAYTM_DEMO" | "PHONEPE_DEMO" | "COD";
}

export interface OrderConfirmationDetails {
  orderId: string;
  customerName: string;
  email: string;
  itemsCount: number;
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
  paymentMethod: string;
  paymentStatus: string;
  estimatedDelivery: string;
  placedAt: string;
}
