import { db } from "@stockpulse/database";
import { AppError } from "../../middleware/errorHandler.js";
import { CreateCustomerDTO, CustomerTier } from "@stockpulse/shared-types";

export class CustomerService {
  public static async listCustomers(params: { search?: string; page?: number; limit?: number }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (params.search) {
      where.OR = [
        { firstName: { contains: params.search } },
        { lastName: { contains: params.search } },
        { email: { contains: params.search } }
      ];
    }

    const [total, customers] = await Promise.all([
      db.customer.count({ where }),
      db.customer.findMany({
        where,
        skip,
        take: limit,
        include: {
          addresses: true,
          orders: {
            take: 5,
            orderBy: { createdAt: "desc" }
          }
        },
        orderBy: { totalSpent: "desc" }
      })
    ]);

    return {
      customers: customers.map(c => ({
        ...c,
        tags: JSON.parse(c.tags || "[]")
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  public static async createCustomer(dto: CreateCustomerDTO) {
    const existing = await db.customer.findUnique({ where: { email: dto.email } });
    if (existing) {
      throw new AppError("Customer email already registered", 409);
    }

    return await db.customer.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        tier: dto.tier || CustomerTier.STANDARD,
        tags: JSON.stringify(dto.tags || [])
      }
    });
  }
}
