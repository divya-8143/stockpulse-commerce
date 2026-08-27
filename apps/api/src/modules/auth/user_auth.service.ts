import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@stockpulse/database";
import { config } from "../../config/environment.js";
import { AppError } from "../../middleware/errorHandler.js";
import { UserRole, CustomerTier } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class UserAuthService {
  public static async register(data: { email: string; passwordPlain: string; firstName: string; lastName: string; phone?: string }) {
    const existing = await db.user.findUnique({ where: { email: data.email } });
    if (existing) {
      throw new AppError("Email address is already registered", 409);
    }

    const passwordHash = await bcrypt.hash(data.passwordPlain, 10);
    
    // Create customer CRM profile alongside user credentials
    const customer = await db.customer.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        tier: CustomerTier.STANDARD
      }
    });

    const user = await db.user.create({
      data: {
        email: data.email,
        passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        role: UserRole.CUSTOMER
      }
    });

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: UserRole.CUSTOMER,
        firstName: user.firstName,
        lastName: user.lastName,
        customerId: customer.id
      },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    logger.info(`Customer registered: ${user.email} (Customer ID: ${customer.id})`);

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: UserRole.CUSTOMER,
        customerId: customer.id
      }
    };
  }

  public static async login(email: string, passwordPlain: string) {
    const user = await db.user.findUnique({ where: { email } });
    if (!user || user.role !== UserRole.CUSTOMER) {
      throw new AppError("Invalid customer email or password", 401);
    }

    const isValid = await bcrypt.compare(passwordPlain, user.passwordHash);
    if (!isValid) {
      throw new AppError("Invalid customer email or password", 401);
    }

    const customer = await db.customer.findUnique({ where: { email } });

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: UserRole.CUSTOMER,
        firstName: user.firstName,
        lastName: user.lastName,
        customerId: customer?.id
      },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: UserRole.CUSTOMER,
        customerId: customer?.id
      }
    };
  }
}
