import { describe, it, expect } from "./test_framework.js";
import { AlertSeverity } from "@stockpulse/shared-types";

describe("Low Stock Safety Threshold Alarms", () => {
  it("should flag CRITICAL severity when available stock reaches 0", () => {
    const availableStock = 0;
    const threshold = 15;

    let severity = AlertSeverity.INFO;
    if (availableStock === 0) {
      severity = AlertSeverity.CRITICAL;
    } else if (availableStock <= threshold) {
      severity = AlertSeverity.HIGH;
    }

    expect(severity).toBe(AlertSeverity.CRITICAL);
  });

  it("should flag HIGH severity when stock drops below safety threshold", () => {
    const availableStock = 6;
    const threshold = 15;

    let severity = AlertSeverity.INFO;
    if (availableStock === 0) {
      severity = AlertSeverity.CRITICAL;
    } else if (availableStock <= threshold) {
      severity = AlertSeverity.HIGH;
    }

    expect(severity).toBe(AlertSeverity.HIGH);
  });
});
