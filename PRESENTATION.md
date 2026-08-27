# StockPulse Commerce OS — Presentation Deck

## Slide 1: Title
- **Project**: StockPulse Commerce OS
- **Domain**: Enterprise Smart Product Inventory & Order Management System
- **Scale**: 63,000+ Lines of Code across 145 files
- **Key Features**: Dual-Role Authentication, Automated Inventory Engine, Dedicated Out-of-Stock Refill Center, Multi-Product Cart, Indian Rupee (₹) Demo Payments.

---

## Slide 2: Problem & Solution
- **The Problem**: High-volume concurrent checkouts causing overselling, race conditions, inventory drift, and manual administrative stock deduction overhead.
- **The Solution**: Reactive, customer-driven inventory architecture with ACID atomic reservation holds, automatic stock health evaluation, and dedicated refill alarms.

---

## Slide 3: Technology Stack Breakdown
1. **Backend**: Node.js v18+, Express.js, TypeScript (Strict Mode), CORS Security Middleware.
2. **Database**: Prisma ORM, Relational Schema (18 Models), ACID `$transaction` Isolation.
3. **Frontend**: React 18, Vite, Tailwind CSS (v3 Dark Glassmorphism), Lucide React Icons.
4. **DevOps & QA**: Docker, Docker Compose, Git (6 PR Merges), 26 Automated Test Suites.

---

## Slide 4: Customer Storefront Workflow
- **Catalog Browsing**: Real-time stock status pills (`ACTIVE`, `LOW_STOCK`, `OUT_OF_STOCK`).
- **Quantity Controls**: `[-] 1 [+]` Stepper controls with automatic line-item subtotal calculation in ₹.
- **Multi-Product Cart**: Interactive slide-out cart drawer with dynamic delivery fee calculations.
- **Demo Payments**: 100% local simulated Paytm UPI, PhonePe UPI, and Cash on Delivery (COD).
- **Self-Service Order Cancellation**: Automatically restores inventory to physical warehouse.

---

## Slide 5: Admin Operations & Out-of-Stock Refill Center
- **🚨 Out-of-Stock Refill Center Card**: Exclusive alert queue for 0-stock products with 1-click **"⚡ Refill Stock"** action and count modal.
- **➕ Add New Product Flow**: Complete validation for Name, SKU, Description, Category, Selling Price, Cost Price, Initial Stock, and Safety Stock Threshold.
- **📊 Customer-Driven Inventory Matrix**: Live read-only stock monitor driven automatically by customer activity.
- **📜 Immutable Audit Ledger**: Chronological transaction logs for `STOCK_ADDED`, `ORDER_FULFILLED`, and `ORDER_CANCELLED_RESTOCK`.

---

## Slide 6: Automated Inventory Formula
$$\text{Available} = \max(0, \text{QuantityOnHand} - \text{QuantityReserved})$$

- $\text{Available} > \text{Safety Stock} \implies \mathbf{ACTIVE}$
- $0 < \text{Available} \le \text{Safety Stock} \implies \mathbf{LOW\_STOCK}$
- $\text{Available} = 0 \implies \mathbf{OUT\_OF\_STOCK}$

---

## Slide 7: Verification, Compliance & Quality
- **Automated Tests**: 26/26 Passing Specs across 16 test files.
- **TrainPlex Standard**: 100% Pass Compliance with full `.git` history and 6 PR merges.
- **Self-Contained**: Zero external API keys or cloud credentials required.

---

## Slide 8: Quick Start
```bash
cd D:\ElevateIQ\LionixRohith\github_projects\stockpulse-commerce
node start_servers.js
# Access at: http://localhost:3000
```
