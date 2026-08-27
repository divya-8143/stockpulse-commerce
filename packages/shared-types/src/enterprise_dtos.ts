import { z } from "zod";

export interface PurchaseOrderItem {
  id: string;
  purchaseOrderId: string;
  variantId: string;
  sku: string;
  orderedQuantity: number;
  receivedQuantity: number;
  unitCost: number;
  totalCost: number;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplierId: string;
  supplierName: string;
  targetWarehouseId: string;
  status: "DRAFT" | "SUBMITTED" | "PARTIALLY_RECEIVED" | "COMPLETED" | "CANCELLED";
  totalCost: number;
  expectedDeliveryDate: Date;
  actualDeliveryDate?: Date;
  items: PurchaseOrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReturnItem {
  id: string;
  returnId: string;
  orderItemId: string;
  sku: string;
  quantity: number;
  reason: "DEFECTIVE" | "WRONG_ITEM" | "CUSTOMER_RETURN" | "TRANSIT_DAMAGE";
  action: "RESTOCK" | "DISPOSE" | "REFURBISH";
}

export interface ReturnOrder {
  id: string;
  rmaNumber: string;
  orderId: string;
  customerId: string;
  status: "PENDING_APPROVAL" | "IN_TRANSIT" | "INSPECTED" | "REFUNDED" | "REJECTED";
  items: ReturnItem[];
  refundAmount: number;
  createdAt: Date;
}
