import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { CreateProductDTO, UpdateProductDTO, ProductStatus } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class CatalogService {
  public static async listProducts(params: {
    search?: string;
    categoryId?: string;
    status?: ProductStatus;
    page?: number;
    limit?: number;
  }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (params.search) {
      where.OR = [
        { name: { contains: params.search } },
        { description: { contains: params.search } }
      ];
    }
    if (params.categoryId) {
      where.categoryId = params.categoryId;
    }
    if (params.status) {
      where.status = params.status;
    }

    const [total, products] = await Promise.all([
      db.product.count({ where }),
      db.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: true,
          brand: true,
          variants: {
            include: {
              inventoryItems: {
                include: {
                  warehouse: true
                }
              }
            }
          }
        },
        orderBy: { createdAt: "desc" }
      })
    ]);

    return {
      products: products.map(p => ({
        ...p,
        tags: JSON.parse(p.tags || "[]"),
        images: JSON.parse(p.images || "[]"),
        variants: p.variants.map(v => ({
          ...v,
          options: JSON.parse(v.options || "{}"),
          totalStockOnHand: v.inventoryItems.reduce((acc, item) => acc + item.quantityOnHand, 0),
          totalStockReserved: v.inventoryItems.reduce((acc, item) => acc + item.quantityReserved, 0),
          totalStockAvailable: v.inventoryItems.reduce((acc, item) => acc + (item.quantityOnHand - item.quantityReserved), 0)
        }))
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  public static async getProductById(id: string) {
    const product = await db.product.findUnique({
      where: { id },
      include: {
        category: true,
        brand: true,
        variants: {
          include: {
            inventoryItems: {
              include: {
                warehouse: true
              }
            }
          }
        }
      }
    });

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    return {
      ...product,
      tags: JSON.parse(product.tags || "[]"),
      images: JSON.parse(product.images || "[]"),
      variants: product.variants.map(v => ({
        ...v,
        options: JSON.parse(v.options || "{}"),
        totalStockOnHand: v.inventoryItems.reduce((acc, item) => acc + item.quantityOnHand, 0),
        totalStockReserved: v.inventoryItems.reduce((acc, item) => acc + item.quantityReserved, 0),
        totalStockAvailable: v.inventoryItems.reduce((acc, item) => acc + (item.quantityOnHand - item.quantityReserved), 0)
      }))
    };
  }

  public static async createProduct(dto: CreateProductDTO) {
    const primaryWarehouse = await db.warehouse.findFirst({ where: { isPrimary: true } });
    const defaultWarehouseId = primaryWarehouse?.id || (await db.warehouse.findFirst())?.id;

    if (!defaultWarehouseId) {
      throw new AppError("System configuration error: No active warehouse found", 500);
    }

    const product = await db.product.create({
      data: {
        name: dto.name,
        slug: dto.slug,
        description: dto.description,
        categoryId: dto.categoryId,
        brandId: dto.brandId,
        basePrice: dto.basePrice,
        baseCost: dto.baseCost,
        tags: JSON.stringify(dto.tags || []),
        images: JSON.stringify(dto.images || []),
        safetyStockThreshold: dto.safetyStockThreshold || 10,
        variants: {
          create: dto.variants.map(v => ({
            sku: v.sku,
            barcode: v.barcode,
            title: v.title,
            price: v.price,
            costPrice: v.costPrice,
            options: JSON.stringify(v.options || {}),
            inventoryItems: {
              create: {
                warehouseId: v.warehouseId || defaultWarehouseId,
                quantityOnHand: v.initialStock || 0,
                quantityReserved: 0
              }
            }
          }))
        }
      },
      include: {
        variants: {
          include: {
            inventoryItems: true
          }
        }
      }
    });

    logger.info(`Product created: ${product.name} (SKUs: ${dto.variants.map(v => v.sku).join(", ")})`);
    return product;
  }
}
