export interface TaxRateLookup {
  stateOrRegion: string;
  country: string;
  standardRate: number;
  reducedRate?: number;
  exemptCategories: string[];
}

export const TAX_JURISDICTIONS: Record<string, TaxRateLookup> = {
  "CA": { stateOrRegion: "California", country: "USA", standardRate: 0.0725, exemptCategories: ["groceries", "prescription_drugs"] },
  "NY": { stateOrRegion: "New York", country: "USA", standardRate: 0.08875, exemptCategories: ["clothing_under_110", "groceries"] },
  "TX": { stateOrRegion: "Texas", country: "USA", standardRate: 0.0625, exemptCategories: ["groceries", "software_custom"] },
  "FL": { stateOrRegion: "Florida", country: "USA", standardRate: 0.0600, exemptCategories: ["groceries"] },
  "IL": { stateOrRegion: "Illinois", country: "USA", standardRate: 0.0625, exemptCategories: ["prescription_drugs"] },
  "WA": { stateOrRegion: "Washington", country: "USA", standardRate: 0.0650, exemptCategories: ["groceries"] },
  "GB": { stateOrRegion: "United Kingdom", country: "GB", standardRate: 0.2000, reducedRate: 0.05, exemptCategories: ["books", "children_clothing"] },
  "DE": { stateOrRegion: "Germany", country: "DE", standardRate: 0.1900, reducedRate: 0.07, exemptCategories: ["books", "food"] },
  "FR": { stateOrRegion: "France", country: "FR", standardRate: 0.2000, reducedRate: 0.055, exemptCategories: ["books", "medical"] }
};

export class TaxEngine {
  public static calculateTax(amount: number, stateCode: string, category: string = "general"): { rate: number; taxAmount: number } {
    const lookup = TAX_JURISDICTIONS[stateCode.toUpperCase()] || { standardRate: 0.05 };
    const rate = lookup.exemptCategories?.includes(category) ? 0 : lookup.standardRate;
    return {
      rate,
      taxAmount: Math.round(amount * rate * 100) / 100
    };
  }
}
