import { OrderAddress } from "@stockpulse/shared-types";

export interface ShippingRateQuote {
  carrier: "FEDEX" | "UPS" | "DHL" | "USPS";
  serviceLevel: "STANDARD_GROUND" | "EXPRESS_2DAY" | "OVERNIGHT_PRIORITY" | "INTERNATIONAL_ECONOMY";
  baseRate: number;
  fuelSurcharge: number;
  insuranceCost: number;
  totalCost: number;
  estimatedDeliveryDays: number;
}

export class ShippingEngine {
  public static calculateRates(
    originZip: string,
    destination: OrderAddress,
    weightKg: number,
    declaredValue: number
  ): ShippingRateQuote[] {
    const isDomestic = destination.country.toUpperCase() === "USA" || destination.country.toUpperCase() === "US";
    const baseWeightRate = Math.max(5.99, weightKg * 2.45);
    const insurance = declaredValue > 100 ? (declaredValue - 100) * 0.015 : 0;

    const quotes: ShippingRateQuote[] = [];

    if (isDomestic) {
      quotes.push({
        carrier: "USPS",
        serviceLevel: "STANDARD_GROUND",
        baseRate: Math.round(baseWeightRate * 100) / 100,
        fuelSurcharge: 1.25,
        insuranceCost: Math.round(insurance * 100) / 100,
        totalCost: Math.round((baseWeightRate + 1.25 + insurance) * 100) / 100,
        estimatedDeliveryDays: 4
      });

      quotes.push({
        carrier: "FEDEX",
        serviceLevel: "EXPRESS_2DAY",
        baseRate: Math.round((baseWeightRate * 1.85 + 8.50) * 100) / 100,
        fuelSurcharge: 2.10,
        insuranceCost: Math.round(insurance * 100) / 100,
        totalCost: Math.round((baseWeightRate * 1.85 + 10.60 + insurance) * 100) / 100,
        estimatedDeliveryDays: 2
      });

      quotes.push({
        carrier: "UPS",
        serviceLevel: "OVERNIGHT_PRIORITY",
        baseRate: Math.round((baseWeightRate * 3.2 + 18.0) * 100) / 100,
        fuelSurcharge: 3.50,
        insuranceCost: Math.round(insurance * 100) / 100,
        totalCost: Math.round((baseWeightRate * 3.2 + 21.50 + insurance) * 100) / 100,
        estimatedDeliveryDays: 1
      });
    } else {
      quotes.push({
        carrier: "DHL",
        serviceLevel: "INTERNATIONAL_ECONOMY",
        baseRate: Math.round((baseWeightRate * 4.5 + 35.0) * 100) / 100,
        fuelSurcharge: 6.80,
        insuranceCost: Math.round(insurance * 1.5 * 100) / 100,
        totalCost: Math.round((baseWeightRate * 4.5 + 41.80 + (insurance * 1.5)) * 100) / 100,
        estimatedDeliveryDays: 7
      });
    }

    return quotes;
  }
}
