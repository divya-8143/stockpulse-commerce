import { db } from "./index.js";
import { UserRole, ProductStatus, OrderStatus, PaymentStatus, StockAdjustmentReason, AlertSeverity, CustomerTier } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  logger.info("🌱 Seeding StockPulse Enterprise database...");

  // 1. Warehouses
  const whPrimary = await db.warehouse.upsert({
    where: { code: "WH-PRIMARY" },
    update: {},
    create: {
      code: "WH-PRIMARY",
      name: "Central Logistics Hub",
      address: "100 Innovation Parkway",
      city: "Chicago",
      country: "USA",
      isPrimary: true
    }
  });

  const whEast = await db.warehouse.upsert({
    where: { code: "WH-EAST" },
    update: {},
    create: {
      code: "WH-EAST",
      name: "East Coast Fulfillment Center",
      address: "450 Harbor Blvd",
      city: "Newark",
      country: "USA",
      isPrimary: false
    }
  });

  const whWest = await db.warehouse.upsert({
    where: { code: "WH-WEST" },
    update: {},
    create: {
      code: "WH-WEST",
      name: "West Coast Pacific Center",
      address: "800 Pacific Way",
      city: "Seattle",
      country: "USA",
      isPrimary: false
    }
  });

  // 2. Users
  const passwordHash = await bcrypt.hash("AdminPassword123!", 10);
  await db.user.upsert({
    where: { email: "admin@stockpulse.commerce" },
    update: {},
    create: {
      email: "admin@stockpulse.commerce",
      passwordHash,
      firstName: "Alex",
      lastName: "Mercer",
      role: UserRole.SUPER_ADMIN
    }
  });

  await db.user.upsert({
    where: { email: "inventory@stockpulse.commerce" },
    update: {},
    create: {
      email: "inventory@stockpulse.commerce",
      passwordHash,
      firstName: "Sarah",
      lastName: "Connor",
      role: UserRole.INVENTORY_MANAGER
    }
  });

  // 3. Categories
  const catElectronics = await db.category.upsert({
    where: { slug: "electronics" },
    update: {},
    create: { name: "Electronics", slug: "electronics", level: 1 }
  });

  const catAudio = await db.category.upsert({
    where: { slug: "audio-headphones" },
    update: {},
    create: { name: "Audio & Headphones", slug: "audio-headphones", parentId: catElectronics.id, level: 2 }
  });

  const catPeripherals = await db.category.upsert({
    where: { slug: "pc-peripherals" },
    update: {},
    create: { name: "PC Peripherals", slug: "pc-peripherals", parentId: catElectronics.id, level: 2 }
  });

  const catAccessories = await db.category.upsert({
    where: { slug: "power-cables" },
    update: {},
    create: { name: "Power & Cables", slug: "power-cables", parentId: catElectronics.id, level: 2 }
  });

  // 4. Brands
  const brandApex = await db.brand.upsert({
    where: { slug: "apex-tech" },
    update: {},
    create: { name: "Apex Tech", slug: "apex-tech", website: "https://apextech.example" }
  });

  const brandHyper = await db.brand.upsert({
    where: { slug: "hyper-gear" },
    update: {},
    create: { name: "HyperGear", slug: "hyper-gear", website: "https://hypergear.example" }
  });

  // 5. Products & Inventory
  const catalogDefinitions = [
    {
      name: "Apex Wireless ANC Studio Headphones",
      slug: "apex-wireless-anc-headphones",
      desc: "Premium active noise cancelling over-ear headphones with 45h battery life and spatial audio.",
      catId: catAudio.id,
      brandId: brandApex.id,
      basePrice: 199.99,
      baseCost: 78.00,
      safetyStock: 15,
      variants: [
        { sku: "HDPH-ANC-BLK", title: "Matte Black", price: 199.99, cost: 78.00, stockWhPrimary: 120, stockWhEast: 40 },
        { sku: "HDPH-ANC-SLV", title: "Silver Moon", price: 199.99, cost: 78.00, stockWhPrimary: 85, stockWhEast: 25 },
        { sku: "HDPH-ANC-BLU", title: "Midnight Navy", price: 219.99, cost: 82.00, stockWhPrimary: 8, stockWhEast: 2 } // Low stock
      ]
    },
    {
      name: "HyperGear RGB Mechanical Gaming Keyboard",
      slug: "hypergear-rgb-mech-keyboard",
      desc: "Hot-swappable tactile mechanical keyboard with per-key RGB backlighting and aluminum frame.",
      catId: catPeripherals.id,
      brandId: brandHyper.id,
      basePrice: 129.99,
      baseCost: 52.00,
      safetyStock: 20,
      variants: [
        { sku: "KB-MECH-RED", title: "Linear Red Switches", price: 129.99, cost: 52.00, stockWhPrimary: 150, stockWhEast: 60 },
        { sku: "KB-MECH-BRN", title: "Tactile Brown Switches", price: 129.99, cost: 52.00, stockWhPrimary: 95, stockWhEast: 30 },
        { sku: "KB-MECH-BLU", title: "Clicky Blue Switches", price: 129.99, cost: 52.00, stockWhPrimary: 0, stockWhEast: 0 } // Out of stock
      ]
    },
    {
      name: "HyperCharge 120W GaN Desktop Charger",
      slug: "hypercharge-120w-gan-charger",
      desc: "Compact 4-port GaN III fast charger for laptops, tablets, and mobile devices.",
      catId: catAccessories.id,
      brandId: brandHyper.id,
      basePrice: 69.99,
      baseCost: 24.50,
      safetyStock: 10,
      variants: [
        { sku: "PWR-GAN-120W", title: "Universal 120W", price: 69.99, cost: 24.50, stockWhPrimary: 210, stockWhEast: 90 }
      ]
    },
    {
      name: "Apex Precision Wireless 8K Gaming Mouse",
      slug: "apex-precision-8k-mouse",
      desc: "Ultralight 49g gaming mouse with 8000Hz polling rate and optical switches.",
      catId: catPeripherals.id,
      brandId: brandApex.id,
      basePrice: 89.99,
      baseCost: 31.00,
      safetyStock: 12,
      variants: [
        { sku: "MOU-8K-BLK", title: "Black Edition", price: 89.99, cost: 31.00, stockWhPrimary: 65, stockWhEast: 20 },
        { sku: "MOU-8K-WHT", title: "White Edition", price: 89.99, cost: 31.00, stockWhPrimary: 4, stockWhEast: 0 } // Low stock
      ]
    }
  ];

  for (const def of catalogDefinitions) {
    const prod = await db.product.upsert({
      where: { slug: def.slug },
      update: {},
      create: {
        name: def.name,
        slug: def.slug,
        description: def.desc,
        categoryId: def.catId,
        brandId: def.brandId,
        basePrice: def.basePrice,
        baseCost: def.baseCost,
        safetyStockThreshold: def.safetyStock,
        tags: JSON.stringify(["featured", "tech", "hardware"]),
        images: JSON.stringify(["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"])
      }
    });

    for (const v of def.variants) {
      const variant = await db.productVariant.upsert({
        where: { sku: v.sku },
        update: {},
        create: {
          productId: prod.id,
          sku: v.sku,
          title: v.title,
          price: v.price,
          costPrice: v.costPrice,
          options: JSON.stringify({ variant: v.title })
        }
      });

      // Primary warehouse stock
      await db.inventoryItem.upsert({
        where: {
          variantId_warehouseId: {
            variantId: variant.id,
            warehouseId: whPrimary.id
          }
        },
        update: { quantityOnHand: v.stockWhPrimary },
        create: {
          variantId: variant.id,
          warehouseId: whPrimary.id,
          quantityOnHand: v.stockWhPrimary,
          quantityReserved: 0,
          reorderPoint: def.safetyStock,
          reorderQuantity: 50
        }
      });

      // East warehouse stock
      await db.inventoryItem.upsert({
        where: {
          variantId_warehouseId: {
            variantId: variant.id,
            warehouseId: whEast.id
          }
        },
        update: { quantityOnHand: v.stockWhEast },
        create: {
          variantId: variant.id,
          warehouseId: whEast.id,
          quantityOnHand: v.stockWhEast,
          quantityReserved: 0,
          reorderPoint: Math.floor(def.safetyStock / 2),
          reorderQuantity: 30
        }
      });
    }
  }

  // 6. Customers & Orders
  const customer = await db.customer.upsert({
    where: { email: "enterprise.client@acme.corp" },
    update: {},
    create: {
      firstName: "David",
      lastName: "Sterling",
      email: "enterprise.client@acme.corp",
      phone: "+1-555-0199",
      tier: CustomerTier.GOLD,
      totalOrders: 14,
      totalSpent: 4280.50,
      tags: JSON.stringify(["vip", "corporate-buyer"])
    }
  });

  logger.info("✓ Seeding complete! Database ready with products, variants, multi-warehouse stock, and seed accounts.");
}

if (process.env.NODE_ENV !== "test") {
  seedDatabase().catch(err => {
    logger.error("Seeding failed", err);
    process.exit(1);
  });
}
