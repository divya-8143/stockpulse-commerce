import { ProductStatus, ABCCategory } from "./enums.js";

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  barcode?: string;
  title: string;
  price: number;
  costPrice: number;
  compareAtPrice?: number;
  weightGrams?: number;
  options: Record<string, string>; // e.g. { color: "Red", size: "XL" }
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  description?: string;
  level: number;
  isActive: boolean;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  website?: string;
  logoUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  brandId?: string;
  status: ProductStatus;
  basePrice: number;
  baseCost: number;
  tags: string[];
  images: string[];
  variants: ProductVariant[];
  safetyStockThreshold: number;
  abcClassification?: ABCCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductDTO {
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  brandId?: string;
  basePrice: number;
  baseCost: number;
  tags: string[];
  images?: string[];
  safetyStockThreshold?: number;
  variants: {
    sku: string;
    barcode?: string;
    title: string;
    price: number;
    costPrice: number;
    options: Record<string, string>;
    initialStock?: number;
    warehouseId?: string;
  }[];
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  id: string;
  status?: ProductStatus;
}
