import { db } from "@stockpulse/database";

export class AdminProductManagementService {
  public static async toggleProductStatus(productId: string, newStatus: "ACTIVE" | "DRAFT" | "ARCHIVED") {
    return await db.product.update({
      where: { id: productId },
      data: { status: newStatus }
    });
  }
}
