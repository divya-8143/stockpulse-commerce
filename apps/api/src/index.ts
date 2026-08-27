import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config/environment.js";
import { logger } from "@stockpulse/logger";
import { connectDB } from "@stockpulse/database";
import { errorHandler } from "./middleware/errorHandler.js";

import { authRouter } from "./modules/auth/auth.controller.js";
import { catalogRouter } from "./modules/catalog/catalog.controller.js";
import { inventoryRouter } from "./modules/inventory/inventory.controller.js";
import { orderRouter } from "./modules/orders/orders.controller.js";
import { customerRouter } from "./modules/customers/customers.controller.js";
import { analyticsRouter } from "./modules/analytics/analytics.controller.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigins }));
app.use(express.json());
app.use(morgan("tiny"));

// Health Check
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "HEALTHY",
    service: "StockPulse API Gateway",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/catalog", catalogRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/analytics", analyticsRouter);

// Error Handler
app.use(errorHandler);

export async function startServer() {
  await connectDB();
  return app.listen(config.port, () => {
    logger.info(`🚀 StockPulse API running on port ${config.port} [${config.env}]`);
  });
}

if (process.env.NODE_ENV !== "test") {
  startServer().catch(err => {
    logger.error("Failed to start API server", err);
    process.exit(1);
  });
}

export default app;
