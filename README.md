# ⚡ StockPulse Commerce

> Enterprise-grade Smart Product Inventory & Order Management System. Built with TypeScript, Node.js, Express, React 18, Tailwind CSS, Prisma, and Turborepo.

---

## 🌟 Key Highlights & Capabilities

- **Atomic Stock Reservation Engine**: ACID-compliant stock reservation preventing race conditions and double-selling during flash sales.
- **Out-of-Stock Order Prevention**: Real-time pre-flight checkout validation with variant-level availability checks and diagnostic error reporting.
- **Automated Order Lifecycle & State Machine**: State transitions (`PENDING` $	o$ `CONFIRMED` $	o$ `PROCESSING` $	o$ `SHIPPED` $	o$ `DELIVERED` / `CANCELLED`) with automatic inventory sync and instant cancellation restocking.
- **Multi-Warehouse Matrix**: Track and transfer stock balances across central logistics hubs and regional fulfillment centers.
- **Automated Safety Stock Alarms**: Real-time low-stock alerts with `HIGH` and `CRITICAL` severity dispatch.
- **Executive Analytics & ABC Classification**: Pareto (80/20) inventory categorization, daily sales velocity, turnover rates, and exportable CSV/JSON audit reports.
- **Customer CRM & LTV Intelligence**: Real-time customer Lifetime Value (LTV) calculation, Average Order Value (AOV), and automatic VIP tier progression.

---

## 📐 Monorepo Architecture

```
stockpulse-commerce/
├── apps/
│   ├── api/                 # Modular Express / TypeScript REST API & Domain Services
│   ├── admin/               # React 18 + Vite + Tailwind CSS Enterprise Dashboard
│   └── storefront/          # Customer Store & Real-time Stock Reservation Portal
├── packages/
│   ├── shared-types/        # Universal TypeScript DTOs, Enums & Zod Schemas
│   ├── database/            # Prisma ORM schema, Multi-Warehouse models & Seeds
│   ├── reporting-engine/    # ABC Pareto analysis, Forecasting & Valuation Exporters
│   ├── ui-kit/              # Reusable React component system
│   └── logger/              # Structured JSON telemetry & Audit log sink
├── tests/                   # Automated Unit, Concurrency & Integration Test Suites
└── docs/                    # Architecture diagrams, API specs & Deployment guides
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: `v18.0.0` or later
- **NPM**: `v9.0.0` or later

### 2. Installation
```bash
git clone <repository-url>
cd stockpulse-commerce
npm install
```

### 3. Run Automated Tests
```bash
node tests/run_all.js
```

### 4. Database Setup & Seeding
```bash
npm run db:push
npm run db:seed
```

### 5. Start Development Servers
```bash
npm run dev
```
- **Admin Dashboard**: `http://localhost:3000`
- **REST API Gateway**: `http://localhost:4000`
- **Health Endpoint**: `http://localhost:4000/api/v1/health`

---

## 🧪 Automated Test Suite Coverage

| Test Suite | Focus Area | Status |
| :--- | :--- | :--- |
| `Stock Reservation & Concurrency` | ACID reservation locks & race condition defense | ✅ PASS |
| `Out-of-Stock Prevention` | Zero-stock rejection & diagnostics | ✅ PASS |
| `Order State Machine Sync` | Stock reservation hold, fulfillment deduction, cancellation release | ✅ PASS |
| `Low Stock Safety Alarms` | Reorder point triggers & critical alarms | ✅ PASS |
| `Pareto ABC Classification` | 80/20 inventory categorization & turnover analytics | ✅ PASS |
| `Customer CRM & LTV` | Spend aggregation & VIP tier progression | ✅ PASS |

---

## 📄 License
MIT License. Open source enterprise software.
