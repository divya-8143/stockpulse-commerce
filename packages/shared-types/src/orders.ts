import { OrderStatus, PaymentStatus } from "./enums.js";

export interface OrderItem {
  id: string;
  orderId: string;
  variantId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  unitCost: number;
  totalPrice: number;
  totalCost: number;
  taxAmount: number;
  discountAmount: number;
  warehouseId: string;
}

export interface OrderAddress {
  fullName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  shippingTotal: number;
  grandTotal: number;
  totalProfit: number;
  shippingAddress: OrderAddress;
  billingAddress: OrderAddress;
  items: OrderItem[];
  notes?: string;
  trackingNumber?: string;
  carrier?: string;
  placedAt: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderDTO {
  customerId: string;
  customerEmail: string;
  customerName: string;
  items: {
    variantId: string;
    quantity: number;
    warehouseId?: string;
  }[];
  shippingAddress: OrderAddress;
  billingAddress?: OrderAddress;
  discountCode?: string;
  notes?: string;
}

export interface OrderStatusTransitionDTO {
  orderId: string;
  targetStatus: OrderStatus;
  trackingNumber?: string;
  carrier?: string;
  cancellationReason?: string;
  performedByUserId?: string;
}
