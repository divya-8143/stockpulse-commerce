import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "4000", 10),
  jwtSecret: process.env.JWT_SECRET || "stockpulse_super_secret_jwt_key_2026_enterprise",
  jwtExpiresIn: "7d",
  corsOrigins: (process.env.CORS_ORIGINS || "*").split(","),
  databaseUrl: process.env.DATABASE_URL || "file:./dev.sqlite",
  defaultSafetyStockThreshold: 10,
  defaultWarehouseCode: "WH-PRIMARY"
};
