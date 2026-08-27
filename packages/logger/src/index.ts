export type LogLevel = "debug" | "info" | "warn" | "error" | "audit";

export interface LogContext {
  module?: string;
  requestId?: string;
  userId?: string;
  orderId?: string;
  sku?: string;
  [key: string]: any;
}

export class Logger {
  private serviceName: string;

  constructor(serviceName = "StockPulse") {
    this.serviceName = serviceName;
  }

  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const meta = context ? ` | meta=${JSON.stringify(context)}` : "";
    return `[${timestamp}] [${level.toUpperCase()}] [${this.serviceName}] ${message}${meta}`;
  }

  public debug(message: string, context?: LogContext): void {
    if (process.env.NODE_ENV !== "production") {
      console.debug(this.formatMessage("debug", message, context));
    }
  }

  public info(message: string, context?: LogContext): void {
    console.info(this.formatMessage("info", message, context));
  }

  public warn(message: string, context?: LogContext): void {
    console.warn(this.formatMessage("warn", message, context));
  }

  public error(message: string, error?: any, context?: LogContext): void {
    const errStack = error instanceof Error ? ` | stack=${error.stack}` : (error ? ` | err=${JSON.stringify(error)}` : "");
    console.error(this.formatMessage("error", message + errStack, context));
  }

  public audit(action: string, performedBy: string, details: Record<string, any>): void {
    const auditRecord = {
      action,
      performedBy,
      timestamp: new Date().toISOString(),
      details
    };
    console.info(this.formatMessage("audit", `AUDIT_EVENT: ${action}`, auditRecord));
  }
}

export const logger = new Logger("StockPulseCore");
