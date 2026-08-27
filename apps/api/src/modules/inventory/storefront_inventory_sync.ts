export class StorefrontInventorySync {
  public static syncStatusAfterRestock(product: any, unitsAdded: number) {
    product.onHand += unitsAdded;
    product.available = Math.max(0, product.onHand - (product.reserved || 0));
    product.status = product.available === 0 ? "OUT_OF_STOCK" : (product.available <= product.safetyStock ? "LOW_STOCK" : "ACTIVE");
    return product;
  }
}
