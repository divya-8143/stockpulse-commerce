# StockPulse Commerce OS

Enterprise-grade Smart Product Inventory & Order Management System. Built with TypeScript, Node.js, Express, Tailwind CSS, and Prisma relational schema.

## Features

- **Dual-Role Authentication**: Customer & Admin role-based separation.
- **Smart Product Inventory**: Real-time ACID atomic stock reservation and customer-driven inventory deduction.
- **Out of Stock Refill Center**: Dedicated Admin Refill Queue for 0-unit items with 1-click quantity refill modals.
- **Multi-Product Shopping Cart**: Product quantity controls (`[-] 1 [+]`), dynamic subtotal in Indian Rupees (₹), and auto-free delivery.
- **Demo Payment Gateways**: Simulated Paytm UPI, PhonePe UPI, and Cash on Delivery (COD) without external API keys.
- **Order State Machine & Cancellation Restock**: Real-time order fulfillment pipeline with automatic warehouse stock restoration on cancellation.
- **Inventory Audit Trail**: Immutable transaction logging for all restock, order, and adjustment operations.

## Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

```bash
# Clone the repository
git clone https://github.com/divya-8143/stockpulse-commerce.git
cd stockpulse-commerce

# Install root & workspace dependencies
npm install
```

## Build

```bash
# Build TypeScript workspace packages and UI assets
npm run build
```

## Run

```bash
# Start unified application (Storefront, Admin Portal, REST API)
node start_servers.js
```
Open **http://localhost:3000** in your browser.

## Tests

```bash
# Execute comprehensive 26+ automated regression test suite
node tests/run_all.js
```

## Docker Deployment

```bash
docker-compose up -d --build
```
