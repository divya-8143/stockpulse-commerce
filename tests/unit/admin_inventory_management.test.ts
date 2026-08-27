import { describe, it, expect } from "./test_framework.js";
import { AdminAddStockService } from "../../apps/api/src/modules/inventory/admin_add_stock.service.js";

describe("Admin Inventory Management & Stock Refill", () => {
  it("Admin can add stock to an existing product and On Hand updates accurately", () => {
    const prod = { name: "GaN Charger", sku: "PWR-GAN", onHand: 0, reserved: 0, safetyStock: 15 };
    const res = AdminAddStockService.processAddStock(prod, { sku: "PWR-GAN", quantityToAdd: 50, reason: "Supplier Restock" });
    expect(res.newOnHand).toBe(50);
    expect(res.newAvailable).toBe(50);
    expect(res.newStatus).toBe("ACTIVE");
  });

  it("OUT_OF_STOCK automatically changes to ACTIVE when sufficient stock is added", () => {
    const prod = { name: "4K Monitor", sku: "DISP-4K", onHand: 0, reserved: 0, safetyStock: 5 };
    const res = AdminAddStockService.processAddStock(prod, { sku: "DISP-4K", quantityToAdd: 20 });
    expect(res.newStatus).toBe("ACTIVE");
  });

  it("LOW_STOCK status is calculated correctly when available <= safety stock", () => {
    const prod = { name: "Mouse", sku: "MOU-01", onHand: 0, reserved: 0, safetyStock: 10 };
    const res = AdminAddStockService.processAddStock(prod, { sku: "MOU-01", quantityToAdd: 8 });
    expect(res.newStatus).toBe("LOW_STOCK");
  });

  it("Inventory transaction record is generated on stock addition", () => {
    const prod = { name: "Keyboard", sku: "KB-01", onHand: 10, reserved: 0, safetyStock: 5 };
    const res = AdminAddStockService.processAddStock(prod, { sku: "KB-01", quantityToAdd: 15, adminName: "Lead Admin", reason: "PO-402 Shipment" });
    expect(res.transaction.type).toBe("STOCK_ADDED");
    expect(res.transaction.quantityChanged).toBe(15);
    expect(res.transaction.previousStock).toBe(10);
    expect(res.transaction.newStock).toBe(25);
    expect(res.transaction.performedBy).toBe("Lead Admin");
  });
});
