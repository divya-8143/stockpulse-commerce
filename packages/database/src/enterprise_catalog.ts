import { ABCCategory, ProductStatus } from "@stockpulse/shared-types";

export interface EnterpriseProductSeed {
  name: string;
  sku: string;
  category: string;
  brand: string;
  basePrice: number;
  costPrice: number;
  safetyStock: number;
  specs: Record<string, string>;
  initialStock: { warehouse: string; qty: number }[];
}

export const ENTERPRISE_CATALOG_DATA: EnterpriseProductSeed[] = [
  {
    name: "Enterprise Consumer Electronics Unit Model-001",
    sku: "SKU-CON-01001",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 50.75,
    costPrice: 22.84,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-002",
    sku: "SKU-CON-01002",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 58.0,
    costPrice: 26.1,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-003",
    sku: "SKU-CON-01003",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 65.25,
    costPrice: 29.36,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-004",
    sku: "SKU-CON-01004",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 72.5,
    costPrice: 32.62,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-005",
    sku: "SKU-CON-01005",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 79.75,
    costPrice: 35.89,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-006",
    sku: "SKU-CON-01006",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 87.0,
    costPrice: 39.15,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-007",
    sku: "SKU-CON-01007",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 94.25,
    costPrice: 42.41,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-008",
    sku: "SKU-CON-01008",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 101.5,
    costPrice: 45.68,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-009",
    sku: "SKU-CON-01009",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 108.75,
    costPrice: 48.94,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-010",
    sku: "SKU-CON-01010",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 116.0,
    costPrice: 52.2,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-011",
    sku: "SKU-CON-01011",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 123.25,
    costPrice: 55.46,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-012",
    sku: "SKU-CON-01012",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 130.5,
    costPrice: 58.73,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-013",
    sku: "SKU-CON-01013",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 137.75,
    costPrice: 61.99,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-014",
    sku: "SKU-CON-01014",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 145.0,
    costPrice: 65.25,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-015",
    sku: "SKU-CON-01015",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 152.25,
    costPrice: 68.51,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-016",
    sku: "SKU-CON-01016",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 159.5,
    costPrice: 71.78,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-017",
    sku: "SKU-CON-01017",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 166.75,
    costPrice: 75.04,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-018",
    sku: "SKU-CON-01018",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 174.0,
    costPrice: 78.3,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-019",
    sku: "SKU-CON-01019",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 181.25,
    costPrice: 81.56,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-020",
    sku: "SKU-CON-01020",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 188.5,
    costPrice: 84.83,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-021",
    sku: "SKU-CON-01021",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 195.75,
    costPrice: 88.09,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-022",
    sku: "SKU-CON-01022",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 203.0,
    costPrice: 91.35,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-023",
    sku: "SKU-CON-01023",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 210.25,
    costPrice: 94.61,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-024",
    sku: "SKU-CON-01024",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 217.5,
    costPrice: 97.88,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-025",
    sku: "SKU-CON-01025",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 224.75,
    costPrice: 101.14,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-026",
    sku: "SKU-CON-01026",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 232.0,
    costPrice: 104.4,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-027",
    sku: "SKU-CON-01027",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 239.25,
    costPrice: 107.66,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-028",
    sku: "SKU-CON-01028",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 246.5,
    costPrice: 110.92,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-029",
    sku: "SKU-CON-01029",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 253.75,
    costPrice: 114.19,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-030",
    sku: "SKU-CON-01030",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 261.0,
    costPrice: 117.45,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-031",
    sku: "SKU-CON-01031",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 268.25,
    costPrice: 120.71,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-032",
    sku: "SKU-CON-01032",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 275.5,
    costPrice: 123.98,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-033",
    sku: "SKU-CON-01033",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 282.75,
    costPrice: 127.24,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-034",
    sku: "SKU-CON-01034",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 290.0,
    costPrice: 130.5,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-035",
    sku: "SKU-CON-01035",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 297.25,
    costPrice: 133.76,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-036",
    sku: "SKU-CON-01036",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 304.5,
    costPrice: 137.03,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-037",
    sku: "SKU-CON-01037",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 311.75,
    costPrice: 140.29,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-038",
    sku: "SKU-CON-01038",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 319.0,
    costPrice: 143.55,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-039",
    sku: "SKU-CON-01039",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 326.25,
    costPrice: 146.81,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Consumer Electronics Unit Model-040",
    sku: "SKU-CON-01040",
    category: "Consumer Electronics",
    brand: "Apex Corp",
    basePrice: 333.5,
    costPrice: 150.08,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-001",
    sku: "SKU-SMA-02001",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 69.25,
    costPrice: 31.16,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-002",
    sku: "SKU-SMA-02002",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 76.5,
    costPrice: 34.43,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-003",
    sku: "SKU-SMA-02003",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 83.75,
    costPrice: 37.69,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-004",
    sku: "SKU-SMA-02004",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 91.0,
    costPrice: 40.95,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-005",
    sku: "SKU-SMA-02005",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 98.25,
    costPrice: 44.21,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-006",
    sku: "SKU-SMA-02006",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 105.5,
    costPrice: 47.48,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-007",
    sku: "SKU-SMA-02007",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 112.75,
    costPrice: 50.74,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-008",
    sku: "SKU-SMA-02008",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 120.0,
    costPrice: 54.0,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-009",
    sku: "SKU-SMA-02009",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 127.25,
    costPrice: 57.26,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-010",
    sku: "SKU-SMA-02010",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 134.5,
    costPrice: 60.52,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-011",
    sku: "SKU-SMA-02011",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 141.75,
    costPrice: 63.79,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-012",
    sku: "SKU-SMA-02012",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 149.0,
    costPrice: 67.05,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-013",
    sku: "SKU-SMA-02013",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 156.25,
    costPrice: 70.31,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-014",
    sku: "SKU-SMA-02014",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 163.5,
    costPrice: 73.58,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-015",
    sku: "SKU-SMA-02015",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 170.75,
    costPrice: 76.84,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-016",
    sku: "SKU-SMA-02016",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 178.0,
    costPrice: 80.1,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-017",
    sku: "SKU-SMA-02017",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 185.25,
    costPrice: 83.36,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-018",
    sku: "SKU-SMA-02018",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 192.5,
    costPrice: 86.62,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-019",
    sku: "SKU-SMA-02019",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 199.75,
    costPrice: 89.89,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-020",
    sku: "SKU-SMA-02020",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 207.0,
    costPrice: 93.15,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-021",
    sku: "SKU-SMA-02021",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 214.25,
    costPrice: 96.41,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-022",
    sku: "SKU-SMA-02022",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 221.5,
    costPrice: 99.67,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-023",
    sku: "SKU-SMA-02023",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 228.75,
    costPrice: 102.94,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-024",
    sku: "SKU-SMA-02024",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 236.0,
    costPrice: 106.2,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-025",
    sku: "SKU-SMA-02025",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 243.25,
    costPrice: 109.46,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-026",
    sku: "SKU-SMA-02026",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 250.5,
    costPrice: 112.73,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-027",
    sku: "SKU-SMA-02027",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 257.75,
    costPrice: 115.99,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-028",
    sku: "SKU-SMA-02028",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 265.0,
    costPrice: 119.25,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-029",
    sku: "SKU-SMA-02029",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 272.25,
    costPrice: 122.51,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-030",
    sku: "SKU-SMA-02030",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 279.5,
    costPrice: 125.78,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-031",
    sku: "SKU-SMA-02031",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 286.75,
    costPrice: 129.04,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-032",
    sku: "SKU-SMA-02032",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 294.0,
    costPrice: 132.3,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-033",
    sku: "SKU-SMA-02033",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 301.25,
    costPrice: 135.56,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-034",
    sku: "SKU-SMA-02034",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 308.5,
    costPrice: 138.83,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-035",
    sku: "SKU-SMA-02035",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 315.75,
    costPrice: 142.09,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-036",
    sku: "SKU-SMA-02036",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 323.0,
    costPrice: 145.35,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-037",
    sku: "SKU-SMA-02037",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 330.25,
    costPrice: 148.61,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-038",
    sku: "SKU-SMA-02038",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 337.5,
    costPrice: 151.88,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-039",
    sku: "SKU-SMA-02039",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 344.75,
    costPrice: 155.14,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Smart Home & IoT Unit Model-040",
    sku: "SKU-SMA-02040",
    category: "Smart Home & IoT",
    brand: "Apex Corp",
    basePrice: 352.0,
    costPrice: 158.4,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-001",
    sku: "SKU-COM-03001",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 87.75,
    costPrice: 39.49,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-002",
    sku: "SKU-COM-03002",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 95.0,
    costPrice: 42.75,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-003",
    sku: "SKU-COM-03003",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 102.25,
    costPrice: 46.01,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-004",
    sku: "SKU-COM-03004",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 109.5,
    costPrice: 49.27,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-005",
    sku: "SKU-COM-03005",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 116.75,
    costPrice: 52.54,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-006",
    sku: "SKU-COM-03006",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 124.0,
    costPrice: 55.8,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-007",
    sku: "SKU-COM-03007",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 131.25,
    costPrice: 59.06,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-008",
    sku: "SKU-COM-03008",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 138.5,
    costPrice: 62.33,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-009",
    sku: "SKU-COM-03009",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 145.75,
    costPrice: 65.59,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-010",
    sku: "SKU-COM-03010",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 153.0,
    costPrice: 68.85,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-011",
    sku: "SKU-COM-03011",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 160.25,
    costPrice: 72.11,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-012",
    sku: "SKU-COM-03012",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 167.5,
    costPrice: 75.38,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-013",
    sku: "SKU-COM-03013",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 174.75,
    costPrice: 78.64,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-014",
    sku: "SKU-COM-03014",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 182.0,
    costPrice: 81.9,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-015",
    sku: "SKU-COM-03015",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 189.25,
    costPrice: 85.16,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-016",
    sku: "SKU-COM-03016",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 196.5,
    costPrice: 88.42,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-017",
    sku: "SKU-COM-03017",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 203.75,
    costPrice: 91.69,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-018",
    sku: "SKU-COM-03018",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 211.0,
    costPrice: 94.95,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-019",
    sku: "SKU-COM-03019",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 218.25,
    costPrice: 98.21,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-020",
    sku: "SKU-COM-03020",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 225.5,
    costPrice: 101.48,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-021",
    sku: "SKU-COM-03021",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 232.75,
    costPrice: 104.74,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-022",
    sku: "SKU-COM-03022",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 240.0,
    costPrice: 108.0,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-023",
    sku: "SKU-COM-03023",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 247.25,
    costPrice: 111.26,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-024",
    sku: "SKU-COM-03024",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 254.5,
    costPrice: 114.53,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-025",
    sku: "SKU-COM-03025",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 261.75,
    costPrice: 117.79,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-026",
    sku: "SKU-COM-03026",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 269.0,
    costPrice: 121.05,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-027",
    sku: "SKU-COM-03027",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 276.25,
    costPrice: 124.31,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-028",
    sku: "SKU-COM-03028",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 283.5,
    costPrice: 127.58,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-029",
    sku: "SKU-COM-03029",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 290.75,
    costPrice: 130.84,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-030",
    sku: "SKU-COM-03030",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 298.0,
    costPrice: 134.1,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-031",
    sku: "SKU-COM-03031",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 305.25,
    costPrice: 137.36,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-032",
    sku: "SKU-COM-03032",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 312.5,
    costPrice: 140.62,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-033",
    sku: "SKU-COM-03033",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 319.75,
    costPrice: 143.89,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-034",
    sku: "SKU-COM-03034",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 327.0,
    costPrice: 147.15,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-035",
    sku: "SKU-COM-03035",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 334.25,
    costPrice: 150.41,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-036",
    sku: "SKU-COM-03036",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 341.5,
    costPrice: 153.68,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-037",
    sku: "SKU-COM-03037",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 348.75,
    costPrice: 156.94,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-038",
    sku: "SKU-COM-03038",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 356.0,
    costPrice: 160.2,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-039",
    sku: "SKU-COM-03039",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 363.25,
    costPrice: 163.46,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Computer Components Unit Model-040",
    sku: "SKU-COM-03040",
    category: "Computer Components",
    brand: "Apex Corp",
    basePrice: 370.5,
    costPrice: 166.72,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-001",
    sku: "SKU-ENT-04001",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 106.25,
    costPrice: 47.81,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-002",
    sku: "SKU-ENT-04002",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 113.5,
    costPrice: 51.08,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-003",
    sku: "SKU-ENT-04003",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 120.75,
    costPrice: 54.34,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-004",
    sku: "SKU-ENT-04004",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 128.0,
    costPrice: 57.6,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-005",
    sku: "SKU-ENT-04005",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 135.25,
    costPrice: 60.86,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-006",
    sku: "SKU-ENT-04006",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 142.5,
    costPrice: 64.12,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-007",
    sku: "SKU-ENT-04007",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 149.75,
    costPrice: 67.39,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-008",
    sku: "SKU-ENT-04008",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 157.0,
    costPrice: 70.65,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-009",
    sku: "SKU-ENT-04009",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 164.25,
    costPrice: 73.91,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-010",
    sku: "SKU-ENT-04010",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 171.5,
    costPrice: 77.17,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-011",
    sku: "SKU-ENT-04011",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 178.75,
    costPrice: 80.44,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-012",
    sku: "SKU-ENT-04012",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 186.0,
    costPrice: 83.7,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-013",
    sku: "SKU-ENT-04013",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 193.25,
    costPrice: 86.96,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-014",
    sku: "SKU-ENT-04014",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 200.5,
    costPrice: 90.23,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-015",
    sku: "SKU-ENT-04015",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 207.75,
    costPrice: 93.49,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-016",
    sku: "SKU-ENT-04016",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 215.0,
    costPrice: 96.75,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-017",
    sku: "SKU-ENT-04017",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 222.25,
    costPrice: 100.01,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-018",
    sku: "SKU-ENT-04018",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 229.5,
    costPrice: 103.28,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-019",
    sku: "SKU-ENT-04019",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 236.75,
    costPrice: 106.54,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-020",
    sku: "SKU-ENT-04020",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 244.0,
    costPrice: 109.8,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-021",
    sku: "SKU-ENT-04021",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 251.25,
    costPrice: 113.06,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-022",
    sku: "SKU-ENT-04022",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 258.5,
    costPrice: 116.33,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-023",
    sku: "SKU-ENT-04023",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 265.75,
    costPrice: 119.59,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-024",
    sku: "SKU-ENT-04024",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 273.0,
    costPrice: 122.85,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-025",
    sku: "SKU-ENT-04025",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 280.25,
    costPrice: 126.11,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-026",
    sku: "SKU-ENT-04026",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 287.5,
    costPrice: 129.38,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-027",
    sku: "SKU-ENT-04027",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 294.75,
    costPrice: 132.64,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-028",
    sku: "SKU-ENT-04028",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 302.0,
    costPrice: 135.9,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-029",
    sku: "SKU-ENT-04029",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 309.25,
    costPrice: 139.16,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-030",
    sku: "SKU-ENT-04030",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 316.5,
    costPrice: 142.43,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-031",
    sku: "SKU-ENT-04031",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 323.75,
    costPrice: 145.69,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-032",
    sku: "SKU-ENT-04032",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 331.0,
    costPrice: 148.95,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-033",
    sku: "SKU-ENT-04033",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 338.25,
    costPrice: 152.21,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-034",
    sku: "SKU-ENT-04034",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 345.5,
    costPrice: 155.47,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-035",
    sku: "SKU-ENT-04035",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 352.75,
    costPrice: 158.74,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-036",
    sku: "SKU-ENT-04036",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 360.0,
    costPrice: 162.0,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-037",
    sku: "SKU-ENT-04037",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 367.25,
    costPrice: 165.26,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-038",
    sku: "SKU-ENT-04038",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 374.5,
    costPrice: 168.53,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-039",
    sku: "SKU-ENT-04039",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 381.75,
    costPrice: 171.79,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Enterprise Networking Unit Model-040",
    sku: "SKU-ENT-04040",
    category: "Enterprise Networking",
    brand: "Apex Corp",
    basePrice: 389.0,
    costPrice: 175.05,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-001",
    sku: "SKU-IND-05001",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 124.75,
    costPrice: 56.14,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-002",
    sku: "SKU-IND-05002",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 132.0,
    costPrice: 59.4,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-003",
    sku: "SKU-IND-05003",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 139.25,
    costPrice: 62.66,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-004",
    sku: "SKU-IND-05004",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 146.5,
    costPrice: 65.92,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-005",
    sku: "SKU-IND-05005",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 153.75,
    costPrice: 69.19,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-006",
    sku: "SKU-IND-05006",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 161.0,
    costPrice: 72.45,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-007",
    sku: "SKU-IND-05007",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 168.25,
    costPrice: 75.71,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-008",
    sku: "SKU-IND-05008",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 175.5,
    costPrice: 78.98,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-009",
    sku: "SKU-IND-05009",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 182.75,
    costPrice: 82.24,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-010",
    sku: "SKU-IND-05010",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 190.0,
    costPrice: 85.5,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-011",
    sku: "SKU-IND-05011",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 197.25,
    costPrice: 88.76,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-012",
    sku: "SKU-IND-05012",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 204.5,
    costPrice: 92.03,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-013",
    sku: "SKU-IND-05013",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 211.75,
    costPrice: 95.29,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-014",
    sku: "SKU-IND-05014",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 219.0,
    costPrice: 98.55,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-015",
    sku: "SKU-IND-05015",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 226.25,
    costPrice: 101.81,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-016",
    sku: "SKU-IND-05016",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 233.5,
    costPrice: 105.08,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-017",
    sku: "SKU-IND-05017",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 240.75,
    costPrice: 108.34,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-018",
    sku: "SKU-IND-05018",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 248.0,
    costPrice: 111.6,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-019",
    sku: "SKU-IND-05019",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 255.25,
    costPrice: 114.86,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-020",
    sku: "SKU-IND-05020",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 262.5,
    costPrice: 118.12,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-021",
    sku: "SKU-IND-05021",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 269.75,
    costPrice: 121.39,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-022",
    sku: "SKU-IND-05022",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 277.0,
    costPrice: 124.65,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-023",
    sku: "SKU-IND-05023",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 284.25,
    costPrice: 127.91,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-024",
    sku: "SKU-IND-05024",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 291.5,
    costPrice: 131.18,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-025",
    sku: "SKU-IND-05025",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 298.75,
    costPrice: 134.44,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-026",
    sku: "SKU-IND-05026",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 306.0,
    costPrice: 137.7,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-027",
    sku: "SKU-IND-05027",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 313.25,
    costPrice: 140.96,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-028",
    sku: "SKU-IND-05028",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 320.5,
    costPrice: 144.22,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-029",
    sku: "SKU-IND-05029",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 327.75,
    costPrice: 147.49,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-030",
    sku: "SKU-IND-05030",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 335.0,
    costPrice: 150.75,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-031",
    sku: "SKU-IND-05031",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 342.25,
    costPrice: 154.01,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-032",
    sku: "SKU-IND-05032",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 349.5,
    costPrice: 157.28,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-033",
    sku: "SKU-IND-05033",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 356.75,
    costPrice: 160.54,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-034",
    sku: "SKU-IND-05034",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 364.0,
    costPrice: 163.8,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-035",
    sku: "SKU-IND-05035",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 371.25,
    costPrice: 167.06,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-036",
    sku: "SKU-IND-05036",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 378.5,
    costPrice: 170.33,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-037",
    sku: "SKU-IND-05037",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 385.75,
    costPrice: 173.59,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-038",
    sku: "SKU-IND-05038",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 393.0,
    costPrice: 176.85,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-039",
    sku: "SKU-IND-05039",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 400.25,
    costPrice: 180.11,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Industrial Automation Unit Model-040",
    sku: "SKU-IND-05040",
    category: "Industrial Automation",
    brand: "Apex Corp",
    basePrice: 407.5,
    costPrice: 183.38,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-001",
    sku: "SKU-OFF-06001",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 143.25,
    costPrice: 64.46,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-002",
    sku: "SKU-OFF-06002",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 150.5,
    costPrice: 67.73,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-003",
    sku: "SKU-OFF-06003",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 157.75,
    costPrice: 70.99,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-004",
    sku: "SKU-OFF-06004",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 165.0,
    costPrice: 74.25,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-005",
    sku: "SKU-OFF-06005",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 172.25,
    costPrice: 77.51,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-006",
    sku: "SKU-OFF-06006",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 179.5,
    costPrice: 80.78,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-007",
    sku: "SKU-OFF-06007",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 186.75,
    costPrice: 84.04,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-008",
    sku: "SKU-OFF-06008",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 194.0,
    costPrice: 87.3,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-009",
    sku: "SKU-OFF-06009",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 201.25,
    costPrice: 90.56,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-010",
    sku: "SKU-OFF-06010",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 208.5,
    costPrice: 93.83,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-011",
    sku: "SKU-OFF-06011",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 215.75,
    costPrice: 97.09,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-012",
    sku: "SKU-OFF-06012",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 223.0,
    costPrice: 100.35,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-013",
    sku: "SKU-OFF-06013",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 230.25,
    costPrice: 103.61,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-014",
    sku: "SKU-OFF-06014",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 237.5,
    costPrice: 106.88,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-015",
    sku: "SKU-OFF-06015",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 244.75,
    costPrice: 110.14,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-016",
    sku: "SKU-OFF-06016",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 252.0,
    costPrice: 113.4,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-017",
    sku: "SKU-OFF-06017",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 259.25,
    costPrice: 116.66,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-018",
    sku: "SKU-OFF-06018",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 266.5,
    costPrice: 119.92,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-019",
    sku: "SKU-OFF-06019",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 273.75,
    costPrice: 123.19,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-020",
    sku: "SKU-OFF-06020",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 281.0,
    costPrice: 126.45,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-021",
    sku: "SKU-OFF-06021",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 288.25,
    costPrice: 129.71,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-022",
    sku: "SKU-OFF-06022",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 295.5,
    costPrice: 132.97,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-023",
    sku: "SKU-OFF-06023",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 302.75,
    costPrice: 136.24,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-024",
    sku: "SKU-OFF-06024",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 310.0,
    costPrice: 139.5,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-025",
    sku: "SKU-OFF-06025",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 317.25,
    costPrice: 142.76,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-026",
    sku: "SKU-OFF-06026",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 324.5,
    costPrice: 146.03,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-027",
    sku: "SKU-OFF-06027",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 331.75,
    costPrice: 149.29,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-028",
    sku: "SKU-OFF-06028",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 339.0,
    costPrice: 152.55,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-029",
    sku: "SKU-OFF-06029",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 346.25,
    costPrice: 155.81,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-030",
    sku: "SKU-OFF-06030",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 353.5,
    costPrice: 159.08,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-031",
    sku: "SKU-OFF-06031",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 360.75,
    costPrice: 162.34,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-032",
    sku: "SKU-OFF-06032",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 368.0,
    costPrice: 165.6,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-033",
    sku: "SKU-OFF-06033",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 375.25,
    costPrice: 168.86,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-034",
    sku: "SKU-OFF-06034",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 382.5,
    costPrice: 172.12,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-035",
    sku: "SKU-OFF-06035",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 389.75,
    costPrice: 175.39,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-036",
    sku: "SKU-OFF-06036",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 397.0,
    costPrice: 178.65,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-037",
    sku: "SKU-OFF-06037",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 404.25,
    costPrice: 181.91,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-038",
    sku: "SKU-OFF-06038",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 411.5,
    costPrice: 185.18,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-039",
    sku: "SKU-OFF-06039",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 418.75,
    costPrice: 188.44,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Office Ergonomics Unit Model-040",
    sku: "SKU-OFF-06040",
    category: "Office Ergonomics",
    brand: "Apex Corp",
    basePrice: 426.0,
    costPrice: 191.7,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-001",
    sku: "SKU-AUD-07001",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 161.75,
    costPrice: 72.79,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-002",
    sku: "SKU-AUD-07002",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 169.0,
    costPrice: 76.05,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-003",
    sku: "SKU-AUD-07003",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 176.25,
    costPrice: 79.31,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-004",
    sku: "SKU-AUD-07004",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 183.5,
    costPrice: 82.58,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-005",
    sku: "SKU-AUD-07005",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 190.75,
    costPrice: 85.84,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-006",
    sku: "SKU-AUD-07006",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 198.0,
    costPrice: 89.1,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-007",
    sku: "SKU-AUD-07007",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 205.25,
    costPrice: 92.36,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-008",
    sku: "SKU-AUD-07008",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 212.5,
    costPrice: 95.62,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-009",
    sku: "SKU-AUD-07009",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 219.75,
    costPrice: 98.89,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-010",
    sku: "SKU-AUD-07010",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 227.0,
    costPrice: 102.15,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-011",
    sku: "SKU-AUD-07011",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 234.25,
    costPrice: 105.41,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-012",
    sku: "SKU-AUD-07012",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 241.5,
    costPrice: 108.67,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-013",
    sku: "SKU-AUD-07013",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 248.75,
    costPrice: 111.94,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-014",
    sku: "SKU-AUD-07014",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 256.0,
    costPrice: 115.2,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-015",
    sku: "SKU-AUD-07015",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 263.25,
    costPrice: 118.46,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-016",
    sku: "SKU-AUD-07016",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 270.5,
    costPrice: 121.73,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-017",
    sku: "SKU-AUD-07017",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 277.75,
    costPrice: 124.99,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-018",
    sku: "SKU-AUD-07018",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 285.0,
    costPrice: 128.25,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-019",
    sku: "SKU-AUD-07019",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 292.25,
    costPrice: 131.51,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-020",
    sku: "SKU-AUD-07020",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 299.5,
    costPrice: 134.78,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-021",
    sku: "SKU-AUD-07021",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 306.75,
    costPrice: 138.04,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-022",
    sku: "SKU-AUD-07022",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 314.0,
    costPrice: 141.3,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-023",
    sku: "SKU-AUD-07023",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 321.25,
    costPrice: 144.56,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-024",
    sku: "SKU-AUD-07024",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 328.5,
    costPrice: 147.83,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-025",
    sku: "SKU-AUD-07025",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 335.75,
    costPrice: 151.09,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-026",
    sku: "SKU-AUD-07026",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 343.0,
    costPrice: 154.35,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-027",
    sku: "SKU-AUD-07027",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 350.25,
    costPrice: 157.61,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-028",
    sku: "SKU-AUD-07028",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 357.5,
    costPrice: 160.88,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-029",
    sku: "SKU-AUD-07029",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 364.75,
    costPrice: 164.14,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-030",
    sku: "SKU-AUD-07030",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 372.0,
    costPrice: 167.4,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-031",
    sku: "SKU-AUD-07031",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 379.25,
    costPrice: 170.66,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-032",
    sku: "SKU-AUD-07032",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 386.5,
    costPrice: 173.93,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-033",
    sku: "SKU-AUD-07033",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 393.75,
    costPrice: 177.19,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-034",
    sku: "SKU-AUD-07034",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 401.0,
    costPrice: 180.45,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-035",
    sku: "SKU-AUD-07035",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 408.25,
    costPrice: 183.71,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-036",
    sku: "SKU-AUD-07036",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 415.5,
    costPrice: 186.97,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-037",
    sku: "SKU-AUD-07037",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 422.75,
    costPrice: 190.24,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-038",
    sku: "SKU-AUD-07038",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 430.0,
    costPrice: 193.5,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-039",
    sku: "SKU-AUD-07039",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 437.25,
    costPrice: 196.76,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Audio Engineering Unit Model-040",
    sku: "SKU-AUD-07040",
    category: "Audio Engineering",
    brand: "Apex Corp",
    basePrice: 444.5,
    costPrice: 200.03,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-001",
    sku: "SKU-VIS-08001",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 180.25,
    costPrice: 81.11,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-002",
    sku: "SKU-VIS-08002",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 187.5,
    costPrice: 84.38,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-003",
    sku: "SKU-VIS-08003",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 194.75,
    costPrice: 87.64,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-004",
    sku: "SKU-VIS-08004",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 202.0,
    costPrice: 90.9,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-005",
    sku: "SKU-VIS-08005",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 209.25,
    costPrice: 94.16,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-006",
    sku: "SKU-VIS-08006",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 216.5,
    costPrice: 97.42,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-007",
    sku: "SKU-VIS-08007",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 223.75,
    costPrice: 100.69,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-008",
    sku: "SKU-VIS-08008",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 231.0,
    costPrice: 103.95,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-009",
    sku: "SKU-VIS-08009",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 238.25,
    costPrice: 107.21,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-010",
    sku: "SKU-VIS-08010",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 245.5,
    costPrice: 110.48,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-011",
    sku: "SKU-VIS-08011",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 252.75,
    costPrice: 113.74,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-012",
    sku: "SKU-VIS-08012",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 260.0,
    costPrice: 117.0,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-013",
    sku: "SKU-VIS-08013",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 267.25,
    costPrice: 120.26,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-014",
    sku: "SKU-VIS-08014",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 274.5,
    costPrice: 123.53,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-015",
    sku: "SKU-VIS-08015",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 281.75,
    costPrice: 126.79,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-016",
    sku: "SKU-VIS-08016",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 289.0,
    costPrice: 130.05,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-017",
    sku: "SKU-VIS-08017",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 296.25,
    costPrice: 133.31,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-018",
    sku: "SKU-VIS-08018",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 303.5,
    costPrice: 136.58,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-019",
    sku: "SKU-VIS-08019",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 310.75,
    costPrice: 139.84,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-020",
    sku: "SKU-VIS-08020",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 318.0,
    costPrice: 143.1,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-021",
    sku: "SKU-VIS-08021",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 325.25,
    costPrice: 146.36,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-022",
    sku: "SKU-VIS-08022",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 332.5,
    costPrice: 149.62,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-023",
    sku: "SKU-VIS-08023",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 339.75,
    costPrice: 152.89,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-024",
    sku: "SKU-VIS-08024",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 347.0,
    costPrice: 156.15,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-025",
    sku: "SKU-VIS-08025",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 354.25,
    costPrice: 159.41,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-026",
    sku: "SKU-VIS-08026",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 361.5,
    costPrice: 162.68,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-027",
    sku: "SKU-VIS-08027",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 368.75,
    costPrice: 165.94,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-028",
    sku: "SKU-VIS-08028",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 376.0,
    costPrice: 169.2,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-029",
    sku: "SKU-VIS-08029",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 383.25,
    costPrice: 172.46,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-030",
    sku: "SKU-VIS-08030",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 390.5,
    costPrice: 175.72,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-031",
    sku: "SKU-VIS-08031",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 397.75,
    costPrice: 178.99,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-032",
    sku: "SKU-VIS-08032",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 405.0,
    costPrice: 182.25,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-033",
    sku: "SKU-VIS-08033",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 412.25,
    costPrice: 185.51,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-034",
    sku: "SKU-VIS-08034",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 419.5,
    costPrice: 188.78,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-035",
    sku: "SKU-VIS-08035",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 426.75,
    costPrice: 192.04,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-036",
    sku: "SKU-VIS-08036",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 434.0,
    costPrice: 195.3,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-037",
    sku: "SKU-VIS-08037",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 441.25,
    costPrice: 198.56,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-038",
    sku: "SKU-VIS-08038",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 448.5,
    costPrice: 201.83,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-039",
    sku: "SKU-VIS-08039",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 455.75,
    costPrice: 205.09,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Visual Displays Unit Model-040",
    sku: "SKU-VIS-08040",
    category: "Visual Displays",
    brand: "Apex Corp",
    basePrice: 463.0,
    costPrice: 208.35,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-001",
    sku: "SKU-STO-09001",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 198.75,
    costPrice: 89.44,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-002",
    sku: "SKU-STO-09002",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 206.0,
    costPrice: 92.7,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-003",
    sku: "SKU-STO-09003",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 213.25,
    costPrice: 95.96,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-004",
    sku: "SKU-STO-09004",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 220.5,
    costPrice: 99.23,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-005",
    sku: "SKU-STO-09005",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 227.75,
    costPrice: 102.49,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-006",
    sku: "SKU-STO-09006",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 235.0,
    costPrice: 105.75,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-007",
    sku: "SKU-STO-09007",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 242.25,
    costPrice: 109.01,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-008",
    sku: "SKU-STO-09008",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 249.5,
    costPrice: 112.28,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-009",
    sku: "SKU-STO-09009",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 256.75,
    costPrice: 115.54,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-010",
    sku: "SKU-STO-09010",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 264.0,
    costPrice: 118.8,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-011",
    sku: "SKU-STO-09011",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 271.25,
    costPrice: 122.06,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-012",
    sku: "SKU-STO-09012",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 278.5,
    costPrice: 125.33,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-013",
    sku: "SKU-STO-09013",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 285.75,
    costPrice: 128.59,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-014",
    sku: "SKU-STO-09014",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 293.0,
    costPrice: 131.85,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-015",
    sku: "SKU-STO-09015",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 300.25,
    costPrice: 135.11,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-016",
    sku: "SKU-STO-09016",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 307.5,
    costPrice: 138.38,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-017",
    sku: "SKU-STO-09017",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 314.75,
    costPrice: 141.64,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-018",
    sku: "SKU-STO-09018",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 322.0,
    costPrice: 144.9,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-019",
    sku: "SKU-STO-09019",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 329.25,
    costPrice: 148.16,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-020",
    sku: "SKU-STO-09020",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 336.5,
    costPrice: 151.43,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-021",
    sku: "SKU-STO-09021",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 343.75,
    costPrice: 154.69,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-022",
    sku: "SKU-STO-09022",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 351.0,
    costPrice: 157.95,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-023",
    sku: "SKU-STO-09023",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 358.25,
    costPrice: 161.21,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-024",
    sku: "SKU-STO-09024",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 365.5,
    costPrice: 164.47,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-025",
    sku: "SKU-STO-09025",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 372.75,
    costPrice: 167.74,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-026",
    sku: "SKU-STO-09026",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 380.0,
    costPrice: 171.0,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-027",
    sku: "SKU-STO-09027",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 387.25,
    costPrice: 174.26,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-028",
    sku: "SKU-STO-09028",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 394.5,
    costPrice: 177.53,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-029",
    sku: "SKU-STO-09029",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 401.75,
    costPrice: 180.79,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-030",
    sku: "SKU-STO-09030",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 409.0,
    costPrice: 184.05,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-031",
    sku: "SKU-STO-09031",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 416.25,
    costPrice: 187.31,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-032",
    sku: "SKU-STO-09032",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 423.5,
    costPrice: 190.58,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-033",
    sku: "SKU-STO-09033",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 430.75,
    costPrice: 193.84,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-034",
    sku: "SKU-STO-09034",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 438.0,
    costPrice: 197.1,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-035",
    sku: "SKU-STO-09035",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 445.25,
    costPrice: 200.36,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-036",
    sku: "SKU-STO-09036",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 452.5,
    costPrice: 203.62,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-037",
    sku: "SKU-STO-09037",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 459.75,
    costPrice: 206.89,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-038",
    sku: "SKU-STO-09038",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 467.0,
    costPrice: 210.15,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-039",
    sku: "SKU-STO-09039",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 474.25,
    costPrice: 213.41,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Storage Solutions Unit Model-040",
    sku: "SKU-STO-09040",
    category: "Storage Solutions",
    brand: "Apex Corp",
    basePrice: 481.5,
    costPrice: 216.68,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-001",
    sku: "SKU-POW-10001",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 217.25,
    costPrice: 97.76,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-002",
    sku: "SKU-POW-10002",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 224.5,
    costPrice: 101.03,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-003",
    sku: "SKU-POW-10003",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 231.75,
    costPrice: 104.29,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-004",
    sku: "SKU-POW-10004",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 239.0,
    costPrice: 107.55,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-005",
    sku: "SKU-POW-10005",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 246.25,
    costPrice: 110.81,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-006",
    sku: "SKU-POW-10006",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 253.5,
    costPrice: 114.08,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-007",
    sku: "SKU-POW-10007",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 260.75,
    costPrice: 117.34,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-008",
    sku: "SKU-POW-10008",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 268.0,
    costPrice: 120.6,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-009",
    sku: "SKU-POW-10009",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 275.25,
    costPrice: 123.86,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-010",
    sku: "SKU-POW-10010",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 282.5,
    costPrice: 127.12,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-011",
    sku: "SKU-POW-10011",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 289.75,
    costPrice: 130.39,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-012",
    sku: "SKU-POW-10012",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 297.0,
    costPrice: 133.65,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-013",
    sku: "SKU-POW-10013",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 304.25,
    costPrice: 136.91,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-014",
    sku: "SKU-POW-10014",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 311.5,
    costPrice: 140.18,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-015",
    sku: "SKU-POW-10015",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 318.75,
    costPrice: 143.44,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-016",
    sku: "SKU-POW-10016",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 326.0,
    costPrice: 146.7,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-017",
    sku: "SKU-POW-10017",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 333.25,
    costPrice: 149.96,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-018",
    sku: "SKU-POW-10018",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 340.5,
    costPrice: 153.22,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-019",
    sku: "SKU-POW-10019",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 347.75,
    costPrice: 156.49,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-020",
    sku: "SKU-POW-10020",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 355.0,
    costPrice: 159.75,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-021",
    sku: "SKU-POW-10021",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 362.25,
    costPrice: 163.01,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-022",
    sku: "SKU-POW-10022",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 369.5,
    costPrice: 166.28,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-023",
    sku: "SKU-POW-10023",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 376.75,
    costPrice: 169.54,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-024",
    sku: "SKU-POW-10024",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 384.0,
    costPrice: 172.8,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-025",
    sku: "SKU-POW-10025",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 391.25,
    costPrice: 176.06,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-026",
    sku: "SKU-POW-10026",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 398.5,
    costPrice: 179.33,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-027",
    sku: "SKU-POW-10027",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 405.75,
    costPrice: 182.59,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-028",
    sku: "SKU-POW-10028",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 413.0,
    costPrice: 185.85,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-029",
    sku: "SKU-POW-10029",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 420.25,
    costPrice: 189.11,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-030",
    sku: "SKU-POW-10030",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 427.5,
    costPrice: 192.38,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-031",
    sku: "SKU-POW-10031",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 434.75,
    costPrice: 195.64,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-032",
    sku: "SKU-POW-10032",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 442.0,
    costPrice: 198.9,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-033",
    sku: "SKU-POW-10033",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 449.25,
    costPrice: 202.16,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-034",
    sku: "SKU-POW-10034",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 456.5,
    costPrice: 205.43,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-035",
    sku: "SKU-POW-10035",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 463.75,
    costPrice: 208.69,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-036",
    sku: "SKU-POW-10036",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 471.0,
    costPrice: 211.95,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-037",
    sku: "SKU-POW-10037",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 478.25,
    costPrice: 215.21,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-038",
    sku: "SKU-POW-10038",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 485.5,
    costPrice: 218.47,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-039",
    sku: "SKU-POW-10039",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 492.75,
    costPrice: 221.74,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Power & Battery Systems Unit Model-040",
    sku: "SKU-POW-10040",
    category: "Power & Battery Systems",
    brand: "Apex Corp",
    basePrice: 500.0,
    costPrice: 225.0,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-001",
    sku: "SKU-WEA-11001",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 235.75,
    costPrice: 106.09,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-002",
    sku: "SKU-WEA-11002",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 243.0,
    costPrice: 109.35,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-003",
    sku: "SKU-WEA-11003",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 250.25,
    costPrice: 112.61,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-004",
    sku: "SKU-WEA-11004",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 257.5,
    costPrice: 115.88,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-005",
    sku: "SKU-WEA-11005",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 264.75,
    costPrice: 119.14,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-006",
    sku: "SKU-WEA-11006",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 272.0,
    costPrice: 122.4,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-007",
    sku: "SKU-WEA-11007",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 279.25,
    costPrice: 125.66,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-008",
    sku: "SKU-WEA-11008",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 286.5,
    costPrice: 128.93,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-009",
    sku: "SKU-WEA-11009",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 293.75,
    costPrice: 132.19,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-010",
    sku: "SKU-WEA-11010",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 301.0,
    costPrice: 135.45,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-011",
    sku: "SKU-WEA-11011",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 308.25,
    costPrice: 138.71,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-012",
    sku: "SKU-WEA-11012",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 315.5,
    costPrice: 141.97,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-013",
    sku: "SKU-WEA-11013",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 322.75,
    costPrice: 145.24,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-014",
    sku: "SKU-WEA-11014",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 330.0,
    costPrice: 148.5,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-015",
    sku: "SKU-WEA-11015",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 337.25,
    costPrice: 151.76,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-016",
    sku: "SKU-WEA-11016",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 344.5,
    costPrice: 155.03,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-017",
    sku: "SKU-WEA-11017",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 351.75,
    costPrice: 158.29,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-018",
    sku: "SKU-WEA-11018",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 359.0,
    costPrice: 161.55,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-019",
    sku: "SKU-WEA-11019",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 366.25,
    costPrice: 164.81,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-020",
    sku: "SKU-WEA-11020",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 373.5,
    costPrice: 168.08,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-021",
    sku: "SKU-WEA-11021",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 380.75,
    costPrice: 171.34,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-022",
    sku: "SKU-WEA-11022",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 388.0,
    costPrice: 174.6,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-023",
    sku: "SKU-WEA-11023",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 395.25,
    costPrice: 177.86,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-024",
    sku: "SKU-WEA-11024",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 402.5,
    costPrice: 181.12,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-025",
    sku: "SKU-WEA-11025",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 409.75,
    costPrice: 184.39,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-026",
    sku: "SKU-WEA-11026",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 417.0,
    costPrice: 187.65,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-027",
    sku: "SKU-WEA-11027",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 424.25,
    costPrice: 190.91,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-028",
    sku: "SKU-WEA-11028",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 431.5,
    costPrice: 194.18,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-029",
    sku: "SKU-WEA-11029",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 438.75,
    costPrice: 197.44,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-030",
    sku: "SKU-WEA-11030",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 446.0,
    costPrice: 200.7,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-031",
    sku: "SKU-WEA-11031",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 453.25,
    costPrice: 203.96,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-032",
    sku: "SKU-WEA-11032",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 460.5,
    costPrice: 207.22,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-033",
    sku: "SKU-WEA-11033",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 467.75,
    costPrice: 210.49,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-034",
    sku: "SKU-WEA-11034",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 475.0,
    costPrice: 213.75,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-035",
    sku: "SKU-WEA-11035",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 482.25,
    costPrice: 217.01,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-036",
    sku: "SKU-WEA-11036",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 489.5,
    costPrice: 220.28,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-037",
    sku: "SKU-WEA-11037",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 496.75,
    costPrice: 223.54,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-038",
    sku: "SKU-WEA-11038",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 504.0,
    costPrice: 226.8,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-039",
    sku: "SKU-WEA-11039",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 511.25,
    costPrice: 230.06,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Wearable Technology Unit Model-040",
    sku: "SKU-WEA-11040",
    category: "Wearable Technology",
    brand: "Apex Corp",
    basePrice: 518.5,
    costPrice: 233.33,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-001",
    sku: "SKU-SEC-12001",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 254.25,
    costPrice: 114.41,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-002",
    sku: "SKU-SEC-12002",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 261.5,
    costPrice: 117.67,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-003",
    sku: "SKU-SEC-12003",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 268.75,
    costPrice: 120.94,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-004",
    sku: "SKU-SEC-12004",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 276.0,
    costPrice: 124.2,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-005",
    sku: "SKU-SEC-12005",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 283.25,
    costPrice: 127.46,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-006",
    sku: "SKU-SEC-12006",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 290.5,
    costPrice: 130.72,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-007",
    sku: "SKU-SEC-12007",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 297.75,
    costPrice: 133.99,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-008",
    sku: "SKU-SEC-12008",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 305.0,
    costPrice: 137.25,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-009",
    sku: "SKU-SEC-12009",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 312.25,
    costPrice: 140.51,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-010",
    sku: "SKU-SEC-12010",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 319.5,
    costPrice: 143.78,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-011",
    sku: "SKU-SEC-12011",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 326.75,
    costPrice: 147.04,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-012",
    sku: "SKU-SEC-12012",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 334.0,
    costPrice: 150.3,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-013",
    sku: "SKU-SEC-12013",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 341.25,
    costPrice: 153.56,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-014",
    sku: "SKU-SEC-12014",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 348.5,
    costPrice: 156.83,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-015",
    sku: "SKU-SEC-12015",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 355.75,
    costPrice: 160.09,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-016",
    sku: "SKU-SEC-12016",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 363.0,
    costPrice: 163.35,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-017",
    sku: "SKU-SEC-12017",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 370.25,
    costPrice: 166.61,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-018",
    sku: "SKU-SEC-12018",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 377.5,
    costPrice: 169.88,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-019",
    sku: "SKU-SEC-12019",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 384.75,
    costPrice: 173.14,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-020",
    sku: "SKU-SEC-12020",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 392.0,
    costPrice: 176.4,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-021",
    sku: "SKU-SEC-12021",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 399.25,
    costPrice: 179.66,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-022",
    sku: "SKU-SEC-12022",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 406.5,
    costPrice: 182.93,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-023",
    sku: "SKU-SEC-12023",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 413.75,
    costPrice: 186.19,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-024",
    sku: "SKU-SEC-12024",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 421.0,
    costPrice: 189.45,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-025",
    sku: "SKU-SEC-12025",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 428.25,
    costPrice: 192.71,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-026",
    sku: "SKU-SEC-12026",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 435.5,
    costPrice: 195.97,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-027",
    sku: "SKU-SEC-12027",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 442.75,
    costPrice: 199.24,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-028",
    sku: "SKU-SEC-12028",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 450.0,
    costPrice: 202.5,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-029",
    sku: "SKU-SEC-12029",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 457.25,
    costPrice: 205.76,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-030",
    sku: "SKU-SEC-12030",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 464.5,
    costPrice: 209.03,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-031",
    sku: "SKU-SEC-12031",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 471.75,
    costPrice: 212.29,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-032",
    sku: "SKU-SEC-12032",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 479.0,
    costPrice: 215.55,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-033",
    sku: "SKU-SEC-12033",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 486.25,
    costPrice: 218.81,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-034",
    sku: "SKU-SEC-12034",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 493.5,
    costPrice: 222.08,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-035",
    sku: "SKU-SEC-12035",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 500.75,
    costPrice: 225.34,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-036",
    sku: "SKU-SEC-12036",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 508.0,
    costPrice: 228.6,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-037",
    sku: "SKU-SEC-12037",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 515.25,
    costPrice: 231.86,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-038",
    sku: "SKU-SEC-12038",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 522.5,
    costPrice: 235.12,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-039",
    sku: "SKU-SEC-12039",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 529.75,
    costPrice: 238.39,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Security Systems Unit Model-040",
    sku: "SKU-SEC-12040",
    category: "Security Systems",
    brand: "Apex Corp",
    basePrice: 537.0,
    costPrice: 241.65,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-001",
    sku: "SKU-ROB-13001",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 272.75,
    costPrice: 122.74,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-002",
    sku: "SKU-ROB-13002",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 280.0,
    costPrice: 126.0,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-003",
    sku: "SKU-ROB-13003",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 287.25,
    costPrice: 129.26,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-004",
    sku: "SKU-ROB-13004",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 294.5,
    costPrice: 132.53,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-005",
    sku: "SKU-ROB-13005",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 301.75,
    costPrice: 135.79,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-006",
    sku: "SKU-ROB-13006",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 309.0,
    costPrice: 139.05,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-007",
    sku: "SKU-ROB-13007",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 316.25,
    costPrice: 142.31,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-008",
    sku: "SKU-ROB-13008",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 323.5,
    costPrice: 145.58,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-009",
    sku: "SKU-ROB-13009",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 330.75,
    costPrice: 148.84,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-010",
    sku: "SKU-ROB-13010",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 338.0,
    costPrice: 152.1,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-011",
    sku: "SKU-ROB-13011",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 345.25,
    costPrice: 155.36,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-012",
    sku: "SKU-ROB-13012",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 352.5,
    costPrice: 158.62,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-013",
    sku: "SKU-ROB-13013",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 359.75,
    costPrice: 161.89,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-014",
    sku: "SKU-ROB-13014",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 367.0,
    costPrice: 165.15,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-015",
    sku: "SKU-ROB-13015",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 374.25,
    costPrice: 168.41,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-016",
    sku: "SKU-ROB-13016",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 381.5,
    costPrice: 171.68,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-017",
    sku: "SKU-ROB-13017",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 388.75,
    costPrice: 174.94,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-018",
    sku: "SKU-ROB-13018",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 396.0,
    costPrice: 178.2,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-019",
    sku: "SKU-ROB-13019",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 403.25,
    costPrice: 181.46,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-020",
    sku: "SKU-ROB-13020",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 410.5,
    costPrice: 184.72,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-021",
    sku: "SKU-ROB-13021",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 417.75,
    costPrice: 187.99,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-022",
    sku: "SKU-ROB-13022",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 425.0,
    costPrice: 191.25,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-023",
    sku: "SKU-ROB-13023",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 432.25,
    costPrice: 194.51,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-024",
    sku: "SKU-ROB-13024",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 439.5,
    costPrice: 197.78,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-025",
    sku: "SKU-ROB-13025",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 446.75,
    costPrice: 201.04,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-026",
    sku: "SKU-ROB-13026",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 454.0,
    costPrice: 204.3,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-027",
    sku: "SKU-ROB-13027",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 461.25,
    costPrice: 207.56,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-028",
    sku: "SKU-ROB-13028",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 468.5,
    costPrice: 210.83,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-029",
    sku: "SKU-ROB-13029",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 475.75,
    costPrice: 214.09,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-030",
    sku: "SKU-ROB-13030",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 483.0,
    costPrice: 217.35,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-031",
    sku: "SKU-ROB-13031",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 490.25,
    costPrice: 220.61,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-032",
    sku: "SKU-ROB-13032",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 497.5,
    costPrice: 223.88,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-033",
    sku: "SKU-ROB-13033",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 504.75,
    costPrice: 227.14,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-034",
    sku: "SKU-ROB-13034",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 512.0,
    costPrice: 230.4,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-035",
    sku: "SKU-ROB-13035",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 519.25,
    costPrice: 233.66,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-036",
    sku: "SKU-ROB-13036",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 526.5,
    costPrice: 236.93,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-037",
    sku: "SKU-ROB-13037",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 533.75,
    costPrice: 240.19,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-038",
    sku: "SKU-ROB-13038",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 541.0,
    costPrice: 243.45,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-039",
    sku: "SKU-ROB-13039",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 548.25,
    costPrice: 246.71,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Robotics & Drones Unit Model-040",
    sku: "SKU-ROB-13040",
    category: "Robotics & Drones",
    brand: "Apex Corp",
    basePrice: 555.5,
    costPrice: 249.97,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-001",
    sku: "SKU-3D -14001",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 291.25,
    costPrice: 131.06,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-002",
    sku: "SKU-3D -14002",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 298.5,
    costPrice: 134.33,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-003",
    sku: "SKU-3D -14003",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 305.75,
    costPrice: 137.59,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-004",
    sku: "SKU-3D -14004",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 313.0,
    costPrice: 140.85,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-005",
    sku: "SKU-3D -14005",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 320.25,
    costPrice: 144.11,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-006",
    sku: "SKU-3D -14006",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 327.5,
    costPrice: 147.38,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-007",
    sku: "SKU-3D -14007",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 334.75,
    costPrice: 150.64,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-008",
    sku: "SKU-3D -14008",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 342.0,
    costPrice: 153.9,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-009",
    sku: "SKU-3D -14009",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 349.25,
    costPrice: 157.16,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-010",
    sku: "SKU-3D -14010",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 356.5,
    costPrice: 160.43,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-011",
    sku: "SKU-3D -14011",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 363.75,
    costPrice: 163.69,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-012",
    sku: "SKU-3D -14012",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 371.0,
    costPrice: 166.95,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-013",
    sku: "SKU-3D -14013",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 378.25,
    costPrice: 170.21,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-014",
    sku: "SKU-3D -14014",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 385.5,
    costPrice: 173.47,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-015",
    sku: "SKU-3D -14015",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 392.75,
    costPrice: 176.74,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-016",
    sku: "SKU-3D -14016",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 400.0,
    costPrice: 180.0,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-017",
    sku: "SKU-3D -14017",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 407.25,
    costPrice: 183.26,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-018",
    sku: "SKU-3D -14018",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 414.5,
    costPrice: 186.53,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-019",
    sku: "SKU-3D -14019",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 421.75,
    costPrice: 189.79,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-020",
    sku: "SKU-3D -14020",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 429.0,
    costPrice: 193.05,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-021",
    sku: "SKU-3D -14021",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 436.25,
    costPrice: 196.31,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-022",
    sku: "SKU-3D -14022",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 443.5,
    costPrice: 199.58,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-023",
    sku: "SKU-3D -14023",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 450.75,
    costPrice: 202.84,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-024",
    sku: "SKU-3D -14024",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 458.0,
    costPrice: 206.1,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-025",
    sku: "SKU-3D -14025",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 465.25,
    costPrice: 209.36,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-026",
    sku: "SKU-3D -14026",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 472.5,
    costPrice: 212.62,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-027",
    sku: "SKU-3D -14027",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 479.75,
    costPrice: 215.89,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-028",
    sku: "SKU-3D -14028",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 487.0,
    costPrice: 219.15,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-029",
    sku: "SKU-3D -14029",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 494.25,
    costPrice: 222.41,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-030",
    sku: "SKU-3D -14030",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 501.5,
    costPrice: 225.68,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-031",
    sku: "SKU-3D -14031",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 508.75,
    costPrice: 228.94,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-032",
    sku: "SKU-3D -14032",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 516.0,
    costPrice: 232.2,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-033",
    sku: "SKU-3D -14033",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 523.25,
    costPrice: 235.46,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-034",
    sku: "SKU-3D -14034",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 530.5,
    costPrice: 238.72,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-035",
    sku: "SKU-3D -14035",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 537.75,
    costPrice: 241.99,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-036",
    sku: "SKU-3D -14036",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 545.0,
    costPrice: 245.25,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-037",
    sku: "SKU-3D -14037",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 552.25,
    costPrice: 248.51,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-038",
    sku: "SKU-3D -14038",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 559.5,
    costPrice: 251.78,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-039",
    sku: "SKU-3D -14039",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 566.75,
    costPrice: 255.04,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise 3D Printing & Fabrication Unit Model-040",
    sku: "SKU-3D -14040",
    category: "3D Printing & Fabrication",
    brand: "Apex Corp",
    basePrice: 574.0,
    costPrice: 258.3,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-001",
    sku: "SKU-LAB-15001",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 309.75,
    costPrice: 139.39,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-002",
    sku: "SKU-LAB-15002",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 317.0,
    costPrice: 142.65,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-003",
    sku: "SKU-LAB-15003",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 324.25,
    costPrice: 145.91,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-004",
    sku: "SKU-LAB-15004",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 331.5,
    costPrice: 149.18,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-005",
    sku: "SKU-LAB-15005",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 338.75,
    costPrice: 152.44,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-006",
    sku: "SKU-LAB-15006",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 346.0,
    costPrice: 155.7,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-007",
    sku: "SKU-LAB-15007",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 353.25,
    costPrice: 158.96,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-008",
    sku: "SKU-LAB-15008",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 360.5,
    costPrice: 162.22,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-009",
    sku: "SKU-LAB-15009",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 367.75,
    costPrice: 165.49,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-010",
    sku: "SKU-LAB-15010",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 375.0,
    costPrice: 168.75,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-011",
    sku: "SKU-LAB-15011",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 382.25,
    costPrice: 172.01,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-012",
    sku: "SKU-LAB-15012",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 389.5,
    costPrice: 175.28,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-013",
    sku: "SKU-LAB-15013",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 396.75,
    costPrice: 178.54,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-014",
    sku: "SKU-LAB-15014",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 404.0,
    costPrice: 181.8,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-015",
    sku: "SKU-LAB-15015",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 411.25,
    costPrice: 185.06,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-016",
    sku: "SKU-LAB-15016",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 418.5,
    costPrice: 188.33,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-017",
    sku: "SKU-LAB-15017",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 425.75,
    costPrice: 191.59,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-018",
    sku: "SKU-LAB-15018",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 433.0,
    costPrice: 194.85,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-019",
    sku: "SKU-LAB-15019",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 440.25,
    costPrice: 198.11,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-020",
    sku: "SKU-LAB-15020",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 447.5,
    costPrice: 201.38,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-021",
    sku: "SKU-LAB-15021",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 454.75,
    costPrice: 204.64,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-022",
    sku: "SKU-LAB-15022",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 462.0,
    costPrice: 207.9,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-023",
    sku: "SKU-LAB-15023",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 469.25,
    costPrice: 211.16,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-024",
    sku: "SKU-LAB-15024",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 476.5,
    costPrice: 214.43,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-025",
    sku: "SKU-LAB-15025",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 483.75,
    costPrice: 217.69,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-026",
    sku: "SKU-LAB-15026",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 491.0,
    costPrice: 220.95,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-027",
    sku: "SKU-LAB-15027",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 498.25,
    costPrice: 224.21,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-028",
    sku: "SKU-LAB-15028",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 505.5,
    costPrice: 227.47,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-029",
    sku: "SKU-LAB-15029",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 512.75,
    costPrice: 230.74,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-030",
    sku: "SKU-LAB-15030",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 520.0,
    costPrice: 234.0,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-031",
    sku: "SKU-LAB-15031",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 527.25,
    costPrice: 237.26,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-032",
    sku: "SKU-LAB-15032",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 534.5,
    costPrice: 240.53,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-033",
    sku: "SKU-LAB-15033",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 541.75,
    costPrice: 243.79,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-034",
    sku: "SKU-LAB-15034",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 549.0,
    costPrice: 247.05,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-035",
    sku: "SKU-LAB-15035",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 556.25,
    costPrice: 250.31,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-036",
    sku: "SKU-LAB-15036",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 563.5,
    costPrice: 253.58,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-037",
    sku: "SKU-LAB-15037",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 570.75,
    costPrice: 256.84,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-038",
    sku: "SKU-LAB-15038",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 578.0,
    costPrice: 260.1,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-039",
    sku: "SKU-LAB-15039",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 585.25,
    costPrice: 263.36,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Laboratory Equipment Unit Model-040",
    sku: "SKU-LAB-15040",
    category: "Laboratory Equipment",
    brand: "Apex Corp",
    basePrice: 592.5,
    costPrice: 266.62,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-001",
    sku: "SKU-OPT-16001",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 328.25,
    costPrice: 147.71,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-002",
    sku: "SKU-OPT-16002",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 335.5,
    costPrice: 150.97,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-003",
    sku: "SKU-OPT-16003",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 342.75,
    costPrice: 154.24,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-004",
    sku: "SKU-OPT-16004",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 350.0,
    costPrice: 157.5,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-005",
    sku: "SKU-OPT-16005",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 357.25,
    costPrice: 160.76,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-006",
    sku: "SKU-OPT-16006",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 364.5,
    costPrice: 164.03,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-007",
    sku: "SKU-OPT-16007",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 371.75,
    costPrice: 167.29,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-008",
    sku: "SKU-OPT-16008",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 379.0,
    costPrice: 170.55,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-009",
    sku: "SKU-OPT-16009",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 386.25,
    costPrice: 173.81,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-010",
    sku: "SKU-OPT-16010",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 393.5,
    costPrice: 177.08,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-011",
    sku: "SKU-OPT-16011",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 400.75,
    costPrice: 180.34,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-012",
    sku: "SKU-OPT-16012",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 408.0,
    costPrice: 183.6,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-013",
    sku: "SKU-OPT-16013",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 415.25,
    costPrice: 186.86,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-014",
    sku: "SKU-OPT-16014",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 422.5,
    costPrice: 190.12,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-015",
    sku: "SKU-OPT-16015",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 429.75,
    costPrice: 193.39,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-016",
    sku: "SKU-OPT-16016",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 437.0,
    costPrice: 196.65,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-017",
    sku: "SKU-OPT-16017",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 444.25,
    costPrice: 199.91,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-018",
    sku: "SKU-OPT-16018",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 451.5,
    costPrice: 203.18,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-019",
    sku: "SKU-OPT-16019",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 458.75,
    costPrice: 206.44,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-020",
    sku: "SKU-OPT-16020",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 466.0,
    costPrice: 209.7,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-021",
    sku: "SKU-OPT-16021",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 473.25,
    costPrice: 212.96,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-022",
    sku: "SKU-OPT-16022",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 480.5,
    costPrice: 216.22,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-023",
    sku: "SKU-OPT-16023",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 487.75,
    costPrice: 219.49,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-024",
    sku: "SKU-OPT-16024",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 495.0,
    costPrice: 222.75,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-025",
    sku: "SKU-OPT-16025",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 502.25,
    costPrice: 226.01,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-026",
    sku: "SKU-OPT-16026",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 509.5,
    costPrice: 229.28,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-027",
    sku: "SKU-OPT-16027",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 516.75,
    costPrice: 232.54,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-028",
    sku: "SKU-OPT-16028",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 524.0,
    costPrice: 235.8,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-029",
    sku: "SKU-OPT-16029",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 531.25,
    costPrice: 239.06,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-030",
    sku: "SKU-OPT-16030",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 538.5,
    costPrice: 242.33,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-031",
    sku: "SKU-OPT-16031",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 545.75,
    costPrice: 245.59,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-032",
    sku: "SKU-OPT-16032",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 553.0,
    costPrice: 248.85,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-033",
    sku: "SKU-OPT-16033",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 560.25,
    costPrice: 252.11,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-034",
    sku: "SKU-OPT-16034",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 567.5,
    costPrice: 255.38,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-035",
    sku: "SKU-OPT-16035",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 574.75,
    costPrice: 258.64,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-036",
    sku: "SKU-OPT-16036",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 582.0,
    costPrice: 261.9,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-037",
    sku: "SKU-OPT-16037",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 589.25,
    costPrice: 265.16,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-038",
    sku: "SKU-OPT-16038",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 596.5,
    costPrice: 268.43,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-039",
    sku: "SKU-OPT-16039",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 603.75,
    costPrice: 271.69,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Optics & Photonics Unit Model-040",
    sku: "SKU-OPT-16040",
    category: "Optics & Photonics",
    brand: "Apex Corp",
    basePrice: 611.0,
    costPrice: 274.95,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-001",
    sku: "SKU-THE-17001",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 346.75,
    costPrice: 156.04,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-002",
    sku: "SKU-THE-17002",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 354.0,
    costPrice: 159.3,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-003",
    sku: "SKU-THE-17003",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 361.25,
    costPrice: 162.56,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-004",
    sku: "SKU-THE-17004",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 368.5,
    costPrice: 165.83,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-005",
    sku: "SKU-THE-17005",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 375.75,
    costPrice: 169.09,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-006",
    sku: "SKU-THE-17006",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 383.0,
    costPrice: 172.35,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-007",
    sku: "SKU-THE-17007",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 390.25,
    costPrice: 175.61,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-008",
    sku: "SKU-THE-17008",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 397.5,
    costPrice: 178.88,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-009",
    sku: "SKU-THE-17009",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 404.75,
    costPrice: 182.14,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-010",
    sku: "SKU-THE-17010",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 412.0,
    costPrice: 185.4,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-011",
    sku: "SKU-THE-17011",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 419.25,
    costPrice: 188.66,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-012",
    sku: "SKU-THE-17012",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 426.5,
    costPrice: 191.93,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-013",
    sku: "SKU-THE-17013",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 433.75,
    costPrice: 195.19,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-014",
    sku: "SKU-THE-17014",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 441.0,
    costPrice: 198.45,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-015",
    sku: "SKU-THE-17015",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 448.25,
    costPrice: 201.71,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-016",
    sku: "SKU-THE-17016",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 455.5,
    costPrice: 204.97,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-017",
    sku: "SKU-THE-17017",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 462.75,
    costPrice: 208.24,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-018",
    sku: "SKU-THE-17018",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 470.0,
    costPrice: 211.5,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-019",
    sku: "SKU-THE-17019",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 477.25,
    costPrice: 214.76,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-020",
    sku: "SKU-THE-17020",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 484.5,
    costPrice: 218.03,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-021",
    sku: "SKU-THE-17021",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 491.75,
    costPrice: 221.29,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-022",
    sku: "SKU-THE-17022",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 499.0,
    costPrice: 224.55,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-023",
    sku: "SKU-THE-17023",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 506.25,
    costPrice: 227.81,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-024",
    sku: "SKU-THE-17024",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 513.5,
    costPrice: 231.08,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-025",
    sku: "SKU-THE-17025",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 520.75,
    costPrice: 234.34,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-026",
    sku: "SKU-THE-17026",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 528.0,
    costPrice: 237.6,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-027",
    sku: "SKU-THE-17027",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 535.25,
    costPrice: 240.86,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-028",
    sku: "SKU-THE-17028",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 542.5,
    costPrice: 244.12,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-029",
    sku: "SKU-THE-17029",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 549.75,
    costPrice: 247.39,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-030",
    sku: "SKU-THE-17030",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 557.0,
    costPrice: 250.65,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-031",
    sku: "SKU-THE-17031",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 564.25,
    costPrice: 253.91,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-032",
    sku: "SKU-THE-17032",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 571.5,
    costPrice: 257.18,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-033",
    sku: "SKU-THE-17033",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 578.75,
    costPrice: 260.44,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-034",
    sku: "SKU-THE-17034",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 586.0,
    costPrice: 263.7,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-035",
    sku: "SKU-THE-17035",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 593.25,
    costPrice: 266.96,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-036",
    sku: "SKU-THE-17036",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 600.5,
    costPrice: 270.23,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-037",
    sku: "SKU-THE-17037",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 607.75,
    costPrice: 273.49,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-038",
    sku: "SKU-THE-17038",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 615.0,
    costPrice: 276.75,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-039",
    sku: "SKU-THE-17039",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 622.25,
    costPrice: 280.01,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Thermal Management Unit Model-040",
    sku: "SKU-THE-17040",
    category: "Thermal Management",
    brand: "Apex Corp",
    basePrice: 629.5,
    costPrice: 283.28,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-001",
    sku: "SKU-SER-18001",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 365.25,
    costPrice: 164.36,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-002",
    sku: "SKU-SER-18002",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 372.5,
    costPrice: 167.62,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-003",
    sku: "SKU-SER-18003",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 379.75,
    costPrice: 170.89,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-004",
    sku: "SKU-SER-18004",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 387.0,
    costPrice: 174.15,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-005",
    sku: "SKU-SER-18005",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 394.25,
    costPrice: 177.41,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-006",
    sku: "SKU-SER-18006",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 401.5,
    costPrice: 180.68,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-007",
    sku: "SKU-SER-18007",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 408.75,
    costPrice: 183.94,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-008",
    sku: "SKU-SER-18008",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 416.0,
    costPrice: 187.2,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-009",
    sku: "SKU-SER-18009",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 423.25,
    costPrice: 190.46,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-010",
    sku: "SKU-SER-18010",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 430.5,
    costPrice: 193.72,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-011",
    sku: "SKU-SER-18011",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 437.75,
    costPrice: 196.99,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-012",
    sku: "SKU-SER-18012",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 445.0,
    costPrice: 200.25,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-013",
    sku: "SKU-SER-18013",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 452.25,
    costPrice: 203.51,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-014",
    sku: "SKU-SER-18014",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 459.5,
    costPrice: 206.78,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-015",
    sku: "SKU-SER-18015",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 466.75,
    costPrice: 210.04,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-016",
    sku: "SKU-SER-18016",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 474.0,
    costPrice: 213.3,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-017",
    sku: "SKU-SER-18017",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 481.25,
    costPrice: 216.56,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-018",
    sku: "SKU-SER-18018",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 488.5,
    costPrice: 219.83,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-019",
    sku: "SKU-SER-18019",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 495.75,
    costPrice: 223.09,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-020",
    sku: "SKU-SER-18020",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 503.0,
    costPrice: 226.35,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-021",
    sku: "SKU-SER-18021",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 510.25,
    costPrice: 229.61,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-022",
    sku: "SKU-SER-18022",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 517.5,
    costPrice: 232.88,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-023",
    sku: "SKU-SER-18023",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 524.75,
    costPrice: 236.14,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-024",
    sku: "SKU-SER-18024",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 532.0,
    costPrice: 239.4,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-025",
    sku: "SKU-SER-18025",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 539.25,
    costPrice: 242.66,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-026",
    sku: "SKU-SER-18026",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 546.5,
    costPrice: 245.93,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-027",
    sku: "SKU-SER-18027",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 553.75,
    costPrice: 249.19,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-028",
    sku: "SKU-SER-18028",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 561.0,
    costPrice: 252.45,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-029",
    sku: "SKU-SER-18029",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 568.25,
    costPrice: 255.71,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-030",
    sku: "SKU-SER-18030",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 575.5,
    costPrice: 258.98,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-031",
    sku: "SKU-SER-18031",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 582.75,
    costPrice: 262.24,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-032",
    sku: "SKU-SER-18032",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 590.0,
    costPrice: 265.5,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-033",
    sku: "SKU-SER-18033",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 597.25,
    costPrice: 268.76,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-034",
    sku: "SKU-SER-18034",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 604.5,
    costPrice: 272.03,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-035",
    sku: "SKU-SER-18035",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 611.75,
    costPrice: 275.29,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-036",
    sku: "SKU-SER-18036",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 619.0,
    costPrice: 278.55,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-037",
    sku: "SKU-SER-18037",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 626.25,
    costPrice: 281.81,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-038",
    sku: "SKU-SER-18038",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 633.5,
    costPrice: 285.07,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-039",
    sku: "SKU-SER-18039",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 640.75,
    costPrice: 288.34,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Server Racks & Infrastructure Unit Model-040",
    sku: "SKU-SER-18040",
    category: "Server Racks & Infrastructure",
    brand: "Apex Corp",
    basePrice: 648.0,
    costPrice: 291.6,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-001",
    sku: "SKU-CAB-19001",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 383.75,
    costPrice: 172.69,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-002",
    sku: "SKU-CAB-19002",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 391.0,
    costPrice: 175.95,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-003",
    sku: "SKU-CAB-19003",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 398.25,
    costPrice: 179.21,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-004",
    sku: "SKU-CAB-19004",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 405.5,
    costPrice: 182.47,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-005",
    sku: "SKU-CAB-19005",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 412.75,
    costPrice: 185.74,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-006",
    sku: "SKU-CAB-19006",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 420.0,
    costPrice: 189.0,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-007",
    sku: "SKU-CAB-19007",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 427.25,
    costPrice: 192.26,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-008",
    sku: "SKU-CAB-19008",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 434.5,
    costPrice: 195.53,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-009",
    sku: "SKU-CAB-19009",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 441.75,
    costPrice: 198.79,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-010",
    sku: "SKU-CAB-19010",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 449.0,
    costPrice: 202.05,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-011",
    sku: "SKU-CAB-19011",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 456.25,
    costPrice: 205.31,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-012",
    sku: "SKU-CAB-19012",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 463.5,
    costPrice: 208.58,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-013",
    sku: "SKU-CAB-19013",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 470.75,
    costPrice: 211.84,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-014",
    sku: "SKU-CAB-19014",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 478.0,
    costPrice: 215.1,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-015",
    sku: "SKU-CAB-19015",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 485.25,
    costPrice: 218.36,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-016",
    sku: "SKU-CAB-19016",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 492.5,
    costPrice: 221.62,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-017",
    sku: "SKU-CAB-19017",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 499.75,
    costPrice: 224.89,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-018",
    sku: "SKU-CAB-19018",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 507.0,
    costPrice: 228.15,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-019",
    sku: "SKU-CAB-19019",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 514.25,
    costPrice: 231.41,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-020",
    sku: "SKU-CAB-19020",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 521.5,
    costPrice: 234.68,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-021",
    sku: "SKU-CAB-19021",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 528.75,
    costPrice: 237.94,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-022",
    sku: "SKU-CAB-19022",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 536.0,
    costPrice: 241.2,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-023",
    sku: "SKU-CAB-19023",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 543.25,
    costPrice: 244.46,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-024",
    sku: "SKU-CAB-19024",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 550.5,
    costPrice: 247.72,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-025",
    sku: "SKU-CAB-19025",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 557.75,
    costPrice: 250.99,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-026",
    sku: "SKU-CAB-19026",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 565.0,
    costPrice: 254.25,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-027",
    sku: "SKU-CAB-19027",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 572.25,
    costPrice: 257.51,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-028",
    sku: "SKU-CAB-19028",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 579.5,
    costPrice: 260.78,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-029",
    sku: "SKU-CAB-19029",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 586.75,
    costPrice: 264.04,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-030",
    sku: "SKU-CAB-19030",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 594.0,
    costPrice: 267.3,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-031",
    sku: "SKU-CAB-19031",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 601.25,
    costPrice: 270.56,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-032",
    sku: "SKU-CAB-19032",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 608.5,
    costPrice: 273.82,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-033",
    sku: "SKU-CAB-19033",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 615.75,
    costPrice: 277.09,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-034",
    sku: "SKU-CAB-19034",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 623.0,
    costPrice: 280.35,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-035",
    sku: "SKU-CAB-19035",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 630.25,
    costPrice: 283.61,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-036",
    sku: "SKU-CAB-19036",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 637.5,
    costPrice: 286.88,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-037",
    sku: "SKU-CAB-19037",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 644.75,
    costPrice: 290.14,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-038",
    sku: "SKU-CAB-19038",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 652.0,
    costPrice: 293.4,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-039",
    sku: "SKU-CAB-19039",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 659.25,
    costPrice: 296.66,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Cables & Interconnects Unit Model-040",
    sku: "SKU-CAB-19040",
    category: "Cables & Interconnects",
    brand: "Apex Corp",
    basePrice: 666.5,
    costPrice: 299.93,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-001",
    sku: "SKU-TES-20001",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 402.25,
    costPrice: 181.01,
    safetyStock: 11,
    specs: { "Series": "Gen-1", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v1.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 43 },
      { warehouse: "WH-EAST", qty: 22 },
      { warehouse: "WH-WEST", qty: 16 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-002",
    sku: "SKU-TES-20002",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 409.5,
    costPrice: 184.28,
    safetyStock: 12,
    specs: { "Series": "Gen-2", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v2.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 46 },
      { warehouse: "WH-EAST", qty: 24 },
      { warehouse: "WH-WEST", qty: 17 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-003",
    sku: "SKU-TES-20003",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 416.75,
    costPrice: 187.54,
    safetyStock: 13,
    specs: { "Series": "Gen-3", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v3.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 49 },
      { warehouse: "WH-EAST", qty: 26 },
      { warehouse: "WH-WEST", qty: 18 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-004",
    sku: "SKU-TES-20004",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 424.0,
    costPrice: 190.8,
    safetyStock: 14,
    specs: { "Series": "Gen-4", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v4.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 52 },
      { warehouse: "WH-EAST", qty: 28 },
      { warehouse: "WH-WEST", qty: 19 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-005",
    sku: "SKU-TES-20005",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 431.25,
    costPrice: 194.06,
    safetyStock: 15,
    specs: { "Series": "Gen-5", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v5.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 55 },
      { warehouse: "WH-EAST", qty: 30 },
      { warehouse: "WH-WEST", qty: 20 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-006",
    sku: "SKU-TES-20006",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 438.5,
    costPrice: 197.33,
    safetyStock: 16,
    specs: { "Series": "Gen-6", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v6.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 58 },
      { warehouse: "WH-EAST", qty: 32 },
      { warehouse: "WH-WEST", qty: 21 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-007",
    sku: "SKU-TES-20007",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 445.75,
    costPrice: 200.59,
    safetyStock: 17,
    specs: { "Series": "Gen-7", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v7.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 61 },
      { warehouse: "WH-EAST", qty: 34 },
      { warehouse: "WH-WEST", qty: 22 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-008",
    sku: "SKU-TES-20008",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 453.0,
    costPrice: 203.85,
    safetyStock: 18,
    specs: { "Series": "Gen-8", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v8.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 64 },
      { warehouse: "WH-EAST", qty: 36 },
      { warehouse: "WH-WEST", qty: 23 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-009",
    sku: "SKU-TES-20009",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 460.25,
    costPrice: 207.11,
    safetyStock: 19,
    specs: { "Series": "Gen-9", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v9.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 67 },
      { warehouse: "WH-EAST", qty: 38 },
      { warehouse: "WH-WEST", qty: 24 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-010",
    sku: "SKU-TES-20010",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 467.5,
    costPrice: 210.38,
    safetyStock: 20,
    specs: { "Series": "Gen-10", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v10.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 70 },
      { warehouse: "WH-EAST", qty: 40 },
      { warehouse: "WH-WEST", qty: 25 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-011",
    sku: "SKU-TES-20011",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 474.75,
    costPrice: 213.64,
    safetyStock: 21,
    specs: { "Series": "Gen-11", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v11.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 73 },
      { warehouse: "WH-EAST", qty: 42 },
      { warehouse: "WH-WEST", qty: 26 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-012",
    sku: "SKU-TES-20012",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 482.0,
    costPrice: 216.9,
    safetyStock: 22,
    specs: { "Series": "Gen-12", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v12.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 76 },
      { warehouse: "WH-EAST", qty: 44 },
      { warehouse: "WH-WEST", qty: 27 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-013",
    sku: "SKU-TES-20013",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 489.25,
    costPrice: 220.16,
    safetyStock: 23,
    specs: { "Series": "Gen-13", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v13.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 79 },
      { warehouse: "WH-EAST", qty: 46 },
      { warehouse: "WH-WEST", qty: 28 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-014",
    sku: "SKU-TES-20014",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 496.5,
    costPrice: 223.43,
    safetyStock: 24,
    specs: { "Series": "Gen-14", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v14.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 82 },
      { warehouse: "WH-EAST", qty: 48 },
      { warehouse: "WH-WEST", qty: 29 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-015",
    sku: "SKU-TES-20015",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 503.75,
    costPrice: 226.69,
    safetyStock: 10,
    specs: { "Series": "Gen-15", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v15.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 85 },
      { warehouse: "WH-EAST", qty: 50 },
      { warehouse: "WH-WEST", qty: 30 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-016",
    sku: "SKU-TES-20016",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 511.0,
    costPrice: 229.95,
    safetyStock: 11,
    specs: { "Series": "Gen-16", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v16.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 88 },
      { warehouse: "WH-EAST", qty: 52 },
      { warehouse: "WH-WEST", qty: 31 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-017",
    sku: "SKU-TES-20017",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 518.25,
    costPrice: 233.21,
    safetyStock: 12,
    specs: { "Series": "Gen-17", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v17.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 91 },
      { warehouse: "WH-EAST", qty: 54 },
      { warehouse: "WH-WEST", qty: 32 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-018",
    sku: "SKU-TES-20018",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 525.5,
    costPrice: 236.47,
    safetyStock: 13,
    specs: { "Series": "Gen-18", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v18.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 94 },
      { warehouse: "WH-EAST", qty: 56 },
      { warehouse: "WH-WEST", qty: 33 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-019",
    sku: "SKU-TES-20019",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 532.75,
    costPrice: 239.74,
    safetyStock: 14,
    specs: { "Series": "Gen-19", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v19.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 97 },
      { warehouse: "WH-EAST", qty: 58 },
      { warehouse: "WH-WEST", qty: 34 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-020",
    sku: "SKU-TES-20020",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 540.0,
    costPrice: 243.0,
    safetyStock: 15,
    specs: { "Series": "Gen-20", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v20.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 100 },
      { warehouse: "WH-EAST", qty: 60 },
      { warehouse: "WH-WEST", qty: 35 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-021",
    sku: "SKU-TES-20021",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 547.25,
    costPrice: 246.26,
    safetyStock: 16,
    specs: { "Series": "Gen-21", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v21.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 103 },
      { warehouse: "WH-EAST", qty: 62 },
      { warehouse: "WH-WEST", qty: 36 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-022",
    sku: "SKU-TES-20022",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 554.5,
    costPrice: 249.53,
    safetyStock: 17,
    specs: { "Series": "Gen-22", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v22.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 106 },
      { warehouse: "WH-EAST", qty: 64 },
      { warehouse: "WH-WEST", qty: 37 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-023",
    sku: "SKU-TES-20023",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 561.75,
    costPrice: 252.79,
    safetyStock: 18,
    specs: { "Series": "Gen-23", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v23.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 109 },
      { warehouse: "WH-EAST", qty: 66 },
      { warehouse: "WH-WEST", qty: 38 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-024",
    sku: "SKU-TES-20024",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 569.0,
    costPrice: 256.05,
    safetyStock: 19,
    specs: { "Series": "Gen-24", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v24.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 112 },
      { warehouse: "WH-EAST", qty: 68 },
      { warehouse: "WH-WEST", qty: 39 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-025",
    sku: "SKU-TES-20025",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 576.25,
    costPrice: 259.31,
    safetyStock: 20,
    specs: { "Series": "Gen-25", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v25.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 115 },
      { warehouse: "WH-EAST", qty: 70 },
      { warehouse: "WH-WEST", qty: 40 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-026",
    sku: "SKU-TES-20026",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 583.5,
    costPrice: 262.57,
    safetyStock: 21,
    specs: { "Series": "Gen-26", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v26.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 118 },
      { warehouse: "WH-EAST", qty: 72 },
      { warehouse: "WH-WEST", qty: 41 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-027",
    sku: "SKU-TES-20027",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 590.75,
    costPrice: 265.84,
    safetyStock: 22,
    specs: { "Series": "Gen-27", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v27.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 121 },
      { warehouse: "WH-EAST", qty: 74 },
      { warehouse: "WH-WEST", qty: 42 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-028",
    sku: "SKU-TES-20028",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 598.0,
    costPrice: 269.1,
    safetyStock: 23,
    specs: { "Series": "Gen-28", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v28.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 124 },
      { warehouse: "WH-EAST", qty: 76 },
      { warehouse: "WH-WEST", qty: 43 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-029",
    sku: "SKU-TES-20029",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 605.25,
    costPrice: 272.36,
    safetyStock: 24,
    specs: { "Series": "Gen-29", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v29.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 127 },
      { warehouse: "WH-EAST", qty: 78 },
      { warehouse: "WH-WEST", qty: 44 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-030",
    sku: "SKU-TES-20030",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 612.5,
    costPrice: 275.62,
    safetyStock: 10,
    specs: { "Series": "Gen-30", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v30.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 130 },
      { warehouse: "WH-EAST", qty: 80 },
      { warehouse: "WH-WEST", qty: 45 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-031",
    sku: "SKU-TES-20031",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 619.75,
    costPrice: 278.89,
    safetyStock: 11,
    specs: { "Series": "Gen-31", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v31.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 133 },
      { warehouse: "WH-EAST", qty: 82 },
      { warehouse: "WH-WEST", qty: 46 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-032",
    sku: "SKU-TES-20032",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 627.0,
    costPrice: 282.15,
    safetyStock: 12,
    specs: { "Series": "Gen-32", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v32.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 136 },
      { warehouse: "WH-EAST", qty: 84 },
      { warehouse: "WH-WEST", qty: 47 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-033",
    sku: "SKU-TES-20033",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 634.25,
    costPrice: 285.41,
    safetyStock: 13,
    specs: { "Series": "Gen-33", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v33.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 139 },
      { warehouse: "WH-EAST", qty: 86 },
      { warehouse: "WH-WEST", qty: 48 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-034",
    sku: "SKU-TES-20034",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 641.5,
    costPrice: 288.68,
    safetyStock: 14,
    specs: { "Series": "Gen-34", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v34.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 142 },
      { warehouse: "WH-EAST", qty: 88 },
      { warehouse: "WH-WEST", qty: 49 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-035",
    sku: "SKU-TES-20035",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 648.75,
    costPrice: 291.94,
    safetyStock: 15,
    specs: { "Series": "Gen-35", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v35.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 145 },
      { warehouse: "WH-EAST", qty: 90 },
      { warehouse: "WH-WEST", qty: 50 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-036",
    sku: "SKU-TES-20036",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 656.0,
    costPrice: 295.2,
    safetyStock: 16,
    specs: { "Series": "Gen-36", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v36.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 148 },
      { warehouse: "WH-EAST", qty: 92 },
      { warehouse: "WH-WEST", qty: 51 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-037",
    sku: "SKU-TES-20037",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 663.25,
    costPrice: 298.46,
    safetyStock: 17,
    specs: { "Series": "Gen-37", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v37.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 151 },
      { warehouse: "WH-EAST", qty: 94 },
      { warehouse: "WH-WEST", qty: 52 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-038",
    sku: "SKU-TES-20038",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 670.5,
    costPrice: 301.73,
    safetyStock: 18,
    specs: { "Series": "Gen-38", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v38.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 154 },
      { warehouse: "WH-EAST", qty: 96 },
      { warehouse: "WH-WEST", qty: 53 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-039",
    sku: "SKU-TES-20039",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 677.75,
    costPrice: 304.99,
    safetyStock: 19,
    specs: { "Series": "Gen-39", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v39.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 157 },
      { warehouse: "WH-EAST", qty: 98 },
      { warehouse: "WH-WEST", qty: 54 }
    ]
  },
  {
    name: "Enterprise Test & Measurement Unit Model-040",
    sku: "SKU-TES-20040",
    category: "Test & Measurement",
    brand: "Apex Corp",
    basePrice: 685.0,
    costPrice: 308.25,
    safetyStock: 20,
    specs: { "Series": "Gen-40", "Tier": "Enterprise", "Warranty": "3 Years", "Revision": "v40.1", "Origin": "Global Logistics Center" },
    initialStock: [
      { warehouse: "WH-PRIMARY", qty: 160 },
      { warehouse: "WH-EAST", qty: 100 },
      { warehouse: "WH-WEST", qty: 55 }
    ]
  },
];
