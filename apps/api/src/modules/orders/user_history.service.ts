import { db } from "@stockpulse/database";

export class UserOrderHistoryService {
  public static async getCustomerOrders(customerId: string) {
    return await db.order.findMany({
      where: { customerId },
      include: {
        items: true,
        histories: { orderBy: { createdAt: "desc" } }
      },
      orderBy: { createdAt: "desc" }
    });
  }
}
