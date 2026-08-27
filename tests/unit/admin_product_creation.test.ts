import { describe, it, expect } from "./test_framework.js";
import { ProductCreatorService } from "../../apps/api/src/modules/catalog/product_creator.service.js";

describe("Admin Product Creation & Initial Inventory", () => {
  it("Admin can create a new product with full specifications and initial stock", async () => {
    const product = await ProductCreatorService.execute({
      name: "Apex Smart Watch Series 5",
      sku: "WAT-APX-05",
      category: "Wearables",
      description: "AMOLED 1.43 inch display with GPS and heart tracking",
      price: 18999,
      cost: 8500,
      initialStock: 50,
      safetyStock: 10,
      warehouse: "Central Logistics Hub"
    });

    expect(product.sku).toBe("WAT-APX-05");
    expect(product.onHand).toBe(50);
    expect(product.available).toBe(50);
    expect(product.status).toBe("ACTIVE");
    expect(product.warehouse).toBe("Central Logistics Hub");
  });

  it("New product automatically receives correct status based on initial stock vs safety stock", async () => {
    const lowStockProd = await ProductCreatorService.execute({
      name: "Limited Edition Badge",
      sku: "BDG-LTD",
      category: "Merchandise",
      description: "Collector edition",
      price: 999,
      cost: 300,
      initialStock: 4,
      safetyStock: 10
    });

    expect(lowStockProd.status).toBe("LOW_STOCK");
  });
});
