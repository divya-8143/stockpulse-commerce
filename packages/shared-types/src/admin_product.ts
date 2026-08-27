export interface AdminProductViewItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  price: number;
  cost: number;
  onHand: number;
  reserved: number;
  available: number;
  safetyStock: number;
  warehouse: string;
  status: "ACTIVE" | "LOW_STOCK" | "OUT_OF_STOCK";
  image?: string;
}

export interface InventoryTransaction {
  id: string;
  type: "STOCK_ADDED" | "ORDER_FULFILLED" | "ORDER_CANCELLED_RESTOCK";
  productName: string;
  sku: string;
  warehouse: string;
  quantityChanged: number;
  previousStock: number;
  newStock: number;
  performedBy: string;
  timestamp: string;
  reason: string;
}
