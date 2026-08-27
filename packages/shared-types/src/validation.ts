import { z } from "zod";
import { OrderStatus, StockAdjustmentReason, CustomerTier, ProductStatus } from "./enums.js";

export const AddressSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  address1: z.string().min(5, "Address must be at least 5 characters"),
  address2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(3, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
  phone: z.string().min(6, "Valid phone is required")
});

export const CreateOrderSchema = z.object({
  customerId: z.string().min(1, "Customer ID is required"),
  customerEmail: z.string().email("Invalid email format"),
  customerName: z.string().min(2, "Customer name is required"),
  items: z.array(z.object({
    variantId: z.string().min(1, "Variant ID required"),
    quantity: z.number().int().positive("Quantity must be greater than zero"),
    warehouseId: z.string().optional()
  })).min(1, "Order must contain at least 1 item"),
  shippingAddress: AddressSchema,
  billingAddress: AddressSchema.optional(),
  notes: z.string().max(500).optional()
});

export const StockAdjustmentSchema = z.object({
  variantId: z.string().min(1, "Variant ID required"),
  warehouseId: z.string().min(1, "Warehouse ID required"),
  adjustmentQuantity: z.number().int().refine(val => val !== 0, "Adjustment quantity cannot be 0"),
  reason: z.nativeEnum(StockAdjustmentReason),
  note: z.string().max(300).optional()
});

export const CreateProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 chars"),
  slug: z.string().min(3, "Slug required"),
  description: z.string().min(10, "Description required"),
  categoryId: z.string().min(1, "Category is required"),
  brandId: z.string().optional(),
  basePrice: z.number().positive("Base price must be positive"),
  baseCost: z.number().nonnegative("Base cost must be non-negative"),
  tags: z.array(z.string()).default([]),
  safetyStockThreshold: z.number().int().nonnegative().default(10),
  variants: z.array(z.object({
    sku: z.string().min(3, "SKU required"),
    barcode: z.string().optional(),
    title: z.string().min(1, "Variant title required"),
    price: z.number().positive(),
    costPrice: z.number().nonnegative(),
    options: z.record(z.string()).default({}),
    initialStock: z.number().int().nonnegative().optional(),
    warehouseId: z.string().optional()
  })).min(1, "At least one variant required")
});
