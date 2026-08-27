import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@stockpulse/database";
import { config } from "../../config/environment.js";
import { AppError } from "../../middleware/errorHandler.js";
import { UserRole } from "@stockpulse/shared-types";
import { logger } from "@stockpulse/logger";

export class AuthService {
  public static async login(email: string, passwordPlain: string) {
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !user.isActive) {
      throw new AppError("Invalid email or password", 401);
    }

    const isValid = await bcrypt.compare(passwordPlain, user.passwordHash);
    if (!isValid) {
      throw new AppError("Invalid email or password", 401);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role as UserRole,
        firstName: user.firstName,
        lastName: user.lastName
      },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    await db.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    logger.info(`User authenticated: ${user.email} (${user.role})`);

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

  public static async registerUser(data: {
    email: string;
    passwordPlain: string;
    firstName: string;
    lastName: string;
    role?: UserRole;
  }) {
    const existing = await db.user.findUnique({ where: { email: data.email } });
    if (existing) {
      throw new AppError("User with this email already exists", 409);
    }

    const passwordHash = await bcrypt.hash(data.passwordPlain, 10);
    const user = await db.user.create({
      data: {
        email: data.email,
        passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role || UserRole.INVENTORY_MANAGER
      }
    });

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    };
  }
}
