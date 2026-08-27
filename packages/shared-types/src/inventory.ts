import { StockAdjustmentReason, AlertSeverity } from "./enums.js";

export interface Warehouse {
  id: string;
  code: string;
  name: string;
  address: string;
  city: string;
  country: string;
  isActive: boolean;
  isPrimary: boolean;
  createdAt: Date;
}

export interface InventoryItem {
  id: string;
  variantId: string;
  warehouseId: string;
  quantityOnHand: number;
  quantityReserved: number;
  quantityAvailable: number; // onHand - reserved
  reorderPoint: number;
  reorderQuantity: number;
  binLocation?: string;
  lastAuditedAt?: Date;
  updatedAt: Date;
}

export interface StockAdjustmentLog {
  id: string;
  inventoryItemId: string;
  variantId: string;
  warehouseId: string;
  changeQuantity: number;
  previousQuantityOnHand: number;
  newQuantityOnHand: number;
  reason: StockAdjustmentReason;
  referenceOrderId?: string;
  performedByUserId?: string;
  note?: string;
  createdAt: Date;
}

export interface ReserveStockRequest {
  orderId: string;
  items: {
    variantId: string;
    warehouseId?: string;
    quantity: number;
  }[];
  ttlSeconds?: number;
}

export interface StockReservationResult {
  success: boolean;
  reservationId: string;
  allocatedItems: {
    variantId: string;
    warehouseId: string;
    quantity: number;
  }[];
  rejectedItems?: {
    variantId: string;
    requested: number;
    available: number;
    reason: string;
  }[];
}

export interface LowStockAlert {
  id: string;
  variantId: string;
  productName: string;
  sku: string;
  warehouseId: string;
  warehouseName: string;
  currentAvailable: number;
  threshold: number;
  severity: AlertSeverity;
  isResolved: boolean;
  createdAt: Date;
}
