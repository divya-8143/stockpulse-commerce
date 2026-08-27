export interface CartItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  availableStock: number;
  image?: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
}
