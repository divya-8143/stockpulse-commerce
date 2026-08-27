import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";

export interface AddProductInput {
  name: string;
  sku: string;
  category: string;
  description: string;
  price: number;
  cost: number;
  initialStock: number;
  safetyStock: number;
  warehouseId?: string;
  status?: string;
}

export class AdminProductCreatorService {
  public static async createProduct(data: AddProductInput) {
    if (!data.name || data.name.trim().length < 2) throw new AppError("Product name is required", 400);
    if (!data.sku || data.sku.trim().length < 3) throw new AppError("Valid SKU is required", 400);
    if (data.price <= 0) throw new AppError("Price must be greater than zero", 400);

    const existingSku = await db.productVariant.findUnique({ where: { sku: data.sku } });
    if (existingSku) throw new AppError(`SKU '${data.sku}' already exists in catalog.`, 409);

    const primaryWarehouse = await db.warehouse.findFirst({ where: { isPrimary: true } }) || await db.warehouse.findFirst();
    const defaultWarehouseId = data.warehouseId || primaryWarehouse?.id;

    // Create or find Category
    const catSlug = data.category.toLowerCase().replace(/\s+/g, '-');
    let cat = await db.category.findUnique({ where: { slug: catSlug } });
    if (!cat) {
      cat = await db.category.create({
        data: { name: data.category, slug: catSlug }
      });
    }

    const prodSlug = data.name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-4);
    
    return await db.product.create({
      data: {
        name: data.name,
        slug: prodSlug,
        description: data.description || "Enterprise product catalog item",
        categoryId: cat.id,
        basePrice: data.price,
        baseCost: data.cost || data.price * 0.5,
        safetyStockThreshold: data.safetyStock || 10,
        status: data.status || "ACTIVE",
        variants: {
          create: {
            sku: data.sku,
            title: "Standard Edition",
            price: data.price,
            costPrice: data.cost || data.price * 0.5,
            inventoryItems: {
              create: {
                warehouseId: defaultWarehouseId!,
                quantityOnHand: data.initialStock || 0,
                quantityReserved: 0
              }
            }
          }
        }
      },
      include: {
        variants: {
          include: { inventoryItems: true }
        }
      }
    });
  }
}
