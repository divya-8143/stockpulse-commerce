export class StorefrontSyncService {
  public static formatProductForStorefront(product: any) {
    return {
      id: product.id,
      name: product.name,
      sku: product.sku,
      category: product.category,
      description: product.description,
      price: product.price,
      onHand: product.onHand,
      reserved: product.reserved || 0,
      available: Math.max(0, product.onHand - (product.reserved || 0)),
      status: product.status,
      image: product.image || "📦"
    };
  }
}
