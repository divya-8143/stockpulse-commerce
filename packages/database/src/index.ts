import { PrismaClient } from "@prisma/client";
import { logger } from "@stockpulse/logger";

declare global {
  var prismaClient: PrismaClient | undefined;
}

export const db: PrismaClient = globalThis.prismaClient || new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaClient = db;
}

export async function connectDB(): Promise<void> {
  try {
    await db.$connect();
    logger.info("Successfully connected to database storage layer");
  } catch (error) {
    logger.error("Failed database connection initialization", error);
    throw error;
  }
}

export async function disconnectDB(): Promise<void> {
  await db.$disconnect();
}

export * from "@prisma/client";
