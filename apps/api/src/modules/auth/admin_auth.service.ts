import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@stockpulse/database";
import { config } from "../../config/environment.js";
import { AppError } from "../../middleware/errorHandler.js";
import { UserRole } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class AdminAuthService {
  public static async login(email: string, passwordPlain: string) {
    const user = await db.user.findUnique({ where: { email } });
    if (!user || (user.role !== UserRole.SUPER_ADMIN && user.role !== UserRole.INVENTORY_MANAGER)) {
      throw new AppError("Access denied: Not an administrator account", 403);
    }

    const isValid = await bcrypt.compare(passwordPlain, user.passwordHash);
    if (!isValid) {
      throw new AppError("Invalid administrator email or password", 401);
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role as UserRole,
        firstName: user.firstName,
        lastName: user.lastName
      },
      config.jwtSecret,
      { expiresIn: "12h" }
    );

    logger.info(`Administrator logged in: ${user.email} (${user.role})`);

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  }
}
