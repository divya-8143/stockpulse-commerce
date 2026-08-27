import { InventoryTransaction } from "./admin_product.js";

export class InventoryLedgerStore {
  private static transactions: InventoryTransaction[] = [];

  public static record(tx: InventoryTransaction): void {
    this.transactions.unshift(tx);
  }

  public static getAll(): InventoryTransaction[] {
    return this.transactions;
  }
}
