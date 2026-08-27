const express = require('express');
const cors = require('cors');

const app = express();
let PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(cors());
app.use(express.json());

// In-Memory Production State (in INR ₹)
let state = {
  products: [
    { id: "1", name: "Apex Wireless ANC Headphones", sku: "HDPH-ANC-BLK", category: "Audio & Headphones", description: "Studio-grade 45dB Active Noise Cancellation with 40h battery.", price: 14999, cost: 6500, onHand: 120, reserved: 5, safetyStock: 15, warehouse: "Central Logistics Hub", image: "🎧" },
    { id: "2", name: "HyperGear RGB Mechanical Keyboard", sku: "KB-MECH-RED", category: "PC Peripherals", description: "Hot-swappable tactile switches with aircraft aluminum body.", price: 8999, cost: 4200, onHand: 95, reserved: 5, safetyStock: 20, warehouse: "Central Logistics Hub", image: "⌨️" },
    { id: "3", name: "HyperCharge 120W GaN Desktop Charger", sku: "PWR-GAN-120W", category: "Power & Cables", description: "4-Port fast GaN III power station with dynamic load balancing.", price: 4499, cost: 1800, onHand: 12, reserved: 4, safetyStock: 15, warehouse: "East Coast Hub", image: "🔌" },
    { id: "4", name: "Apex Precision Wireless 8K Gaming Mouse", sku: "MOU-8K-BLK", category: "PC Peripherals", description: "Ultralight 49g mouse with 8000Hz polling rate and optical clicks.", price: 5999, cost: 2400, onHand: 6, reserved: 2, safetyStock: 12, warehouse: "West Coast Hub", image: "🖱️" },
    { id: "5", name: "Pro 4K Ultra-Wide Monitor 34-inch", sku: "DISP-4K-34", category: "Displays", description: "144Hz curved IPS 1ms panel with 99% DCI-P3 color gamut.", price: 45999, cost: 26000, onHand: 0, reserved: 0, safetyStock: 5, warehouse: "Central Logistics Hub", image: "🖥️" }
  ],
  transactions: [
    { id: "TXN-901", type: "STOCK_ADDED", productName: "Apex Wireless ANC Headphones", sku: "HDPH-ANC-BLK", warehouse: "Central Logistics Hub", quantityChanged: 50, previousStock: 70, newStock: 120, performedBy: "Alex Mercer (Admin)", timestamp: "2026-08-27 10:00", reason: "Inbound Supplier Batch #841" }
  ],
  customers: [
    { id: "cust-1", name: "John Doe", email: "user@stockpulse.commerce", password: "user123", role: "CUSTOMER", tier: "GOLD", phone: "9876543210" }
  ],
  admins: [
    { id: "admin-1", name: "Alex Mercer", email: "admin@stockpulse.commerce", password: "admin123", role: "SUPER_ADMIN" }
  ],
  orders: [
    { id: "ORD-948201", customerId: "cust-1", customerName: "John Doe", items: [{ sku: "HDPH-ANC-BLK", name: "Apex Wireless ANC Headphones", quantity: 2, price: 14999 }], total: 29998, paymentMethod: "PhonePe UPI (Demo)", paymentStatus: "PAID", status: "CONFIRMED", date: "2026-08-27 12:30" }
  ]
};

function getProductStatus(onHand, reserved, safety) {
  const avail = Math.max(0, onHand - reserved);
  if (avail === 0) return "OUT_OF_STOCK";
  if (avail <= safety) return "LOW_STOCK";
  return "ACTIVE";
}

// Health API
app.get("/api/v1/health", (req, res) => {
  res.json({ status: "HEALTHY", service: "StockPulse E-Commerce OS", currency: "INR", symbol: "₹" });
});

// Products API (Storefront & Admin)
app.get("/api/v1/catalog/products", (req, res) => {
  const list = state.products.map(p => ({
    ...p,
    available: Math.max(0, p.onHand - p.reserved),
    status: getProductStatus(p.onHand, p.reserved, p.safetyStock)
  }));
  res.json({ success: true, data: list });
});

// Admin Add New Product API
app.post("/api/v1/admin/products", (req, res) => {
  const { name, sku, category, description, price, cost, initialStock, safetyStock, warehouse, image } = req.body;
  if (!name || !sku || !price) {
    return res.status(400).json({ success: false, error: "Product name, SKU, and selling price are required." });
  }

  const skuUpper = sku.trim().toUpperCase();
  if (state.products.some(p => p.sku === skuUpper)) {
    return res.status(409).json({ success: false, error: `SKU '${skuUpper}' already exists in catalog.` });
  }

  const initialQty = Math.max(0, parseInt(initialStock, 10) || 0);
  const safetyThreshold = Math.max(1, parseInt(safetyStock, 10) || 10);
  const warehouseName = warehouse || "Central Logistics Hub";

  const newProd = {
    id: `prod-${Date.now()}`,
    name: name.trim(),
    sku: skuUpper,
    category: category || "General",
    description: description || "Enterprise high-performance hardware item.",
    price: parseFloat(price),
    cost: parseFloat(cost || price * 0.5),
    onHand: initialQty,
    reserved: 0,
    safetyStock: safetyThreshold,
    warehouse: warehouseName,
    image: image || "📦"
  };

  state.products.unshift(newProd);

  // Record initial stock transaction
  if (initialQty > 0) {
    state.transactions.unshift({
      id: `TXN-${Date.now().toString().slice(-6)}`,
      type: "STOCK_ADDED",
      productName: newProd.name,
      sku: newProd.sku,
      warehouse: warehouseName,
      quantityChanged: initialQty,
      previousStock: 0,
      newStock: initialQty,
      performedBy: "Alex Mercer (Admin)",
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
      reason: "Initial Product Creation Stock"
    });
  }

  res.status(201).json({
    success: true,
    data: {
      ...newProd,
      available: initialQty,
      status: getProductStatus(initialQty, 0, safetyThreshold)
    },
    message: `Product '${newProd.name}' (${newProd.sku}) created successfully with ${initialQty} initial stock!`
  });
});

// Admin Add Stock / Refill API
app.post("/api/v1/admin/add-stock", (req, res) => {
  const { sku, quantityToAdd, reason, adminName } = req.body;
  const prod = state.products.find(p => p.sku === sku);
  if (!prod) return res.status(404).json({ success: false, error: `Product with SKU '${sku}' not found.` });

  const qty = parseInt(quantityToAdd, 10);
  if (isNaN(qty) || qty <= 0) {
    return res.status(400).json({ success: false, error: "Quantity to add must be a positive integer." });
  }

  const prevStock = prod.onHand;
  prod.onHand += qty;
  const newAvailable = Math.max(0, prod.onHand - prod.reserved);
  const newStatus = getProductStatus(prod.onHand, prod.reserved, prod.safetyStock);

  const tx = {
    id: `TXN-${Date.now().toString().slice(-6)}`,
    type: "STOCK_ADDED",
    productName: prod.name,
    sku: prod.sku,
    warehouse: prod.warehouse || "Central Logistics Hub",
    quantityChanged: qty,
    previousStock: prevStock,
    newStock: prod.onHand,
    performedBy: adminName || "Alex Mercer (Admin)",
    timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
    reason: reason || "Inbound Physical Stock Arrival"
  };

  state.transactions.unshift(tx);

  res.json({
    success: true,
    data: {
      sku: prod.sku,
      name: prod.name,
      previousStock: prevStock,
      added: qty,
      newStock: prod.onHand,
      available: newAvailable,
      status: newStatus
    },
    message: `Added ${qty} units to '${prod.name}'. Status is now ${newStatus}.`
  });
});

// Admin Edit Product Info API
app.post("/api/v1/admin/products/:sku/edit", (req, res) => {
  const prod = state.products.find(p => p.sku === req.params.sku);
  if (!prod) return res.status(404).json({ success: false, error: "Product not found" });

  const { name, category, description, price, cost, safetyStock, warehouse } = req.body;
  if (name) prod.name = name;
  if (category) prod.category = category;
  if (description) prod.description = description;
  if (price && Number(price) > 0) prod.price = parseFloat(price);
  if (cost && Number(cost) >= 0) prod.cost = parseFloat(cost);
  if (safetyStock && Number(safetyStock) >= 1) prod.safetyStock = parseInt(safetyStock, 10);
  if (warehouse) prod.warehouse = warehouse;

  res.json({ success: true, data: prod, message: "Product details updated successfully!" });
});

// Admin Inventory Transactions API
app.get("/api/v1/admin/transactions", (req, res) => {
  res.json({ success: true, data: state.transactions });
});

// Customer Place Multi-Product Order (Automatic Inventory Deduction)
app.post("/api/v1/orders/place-order", (req, res) => {
  const { customerId, customerName, customerEmail, shippingAddress, items, paymentMethod } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, error: "Order cart is empty." });
  }

  // 1. Out-of-Stock Pre-flight Guard
  for (const item of items) {
    const prod = state.products.find(p => p.sku === item.sku);
    if (!prod) return res.status(404).json({ success: false, error: `SKU '${item.sku}' not found.` });

    const avail = Math.max(0, prod.onHand - prod.reserved);
    if (item.quantity > avail) {
      return res.status(400).json({
        success: false,
        error: `Order cannot be placed. Only ${avail} unit${avail === 1 ? '' : 's'} ${avail === 1 ? 'is' : 'are'} currently available for '${prod.name}'.`
      });
    }
  }

  // 2. Atomic Stock Reduction
  let subtotal = 0;
  const orderItems = [];

  for (const item of items) {
    const prod = state.products.find(p => p.sku === item.sku);
    const prevOnHand = prod.onHand;
    prod.onHand = Math.max(0, prod.onHand - item.quantity);
    const lineTotal = prod.price * item.quantity;
    subtotal += lineTotal;

    orderItems.push({
      sku: prod.sku,
      name: prod.name,
      quantity: item.quantity,
      price: prod.price,
      lineTotal
    });

    state.transactions.unshift({
      id: `TXN-${Date.now().toString().slice(-6)}`,
      type: "ORDER_FULFILLED",
      productName: prod.name,
      sku: prod.sku,
      warehouse: prod.warehouse || "Central Logistics Hub",
      quantityChanged: -item.quantity,
      previousStock: prevOnHand,
      newStock: prod.onHand,
      performedBy: customerName || "Customer",
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
      reason: `Customer Order Checkout`
    });
  }

  const shippingFee = subtotal >= 2000 ? 0 : 99;
  const grandTotal = subtotal + shippingFee;

  let payLabel = "Paytm UPI (Demo)";
  let payStatus = "PAID";
  if (paymentMethod === "PHONEPE_DEMO") payLabel = "PhonePe UPI (Demo)";
  else if (paymentMethod === "COD") {
    payLabel = "Cash on Delivery";
    payStatus = "PENDING (COD)";
  }

  const order = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    customerId: customerId || "cust-1",
    customerName: customerName || "John Doe",
    customerEmail: customerEmail || "user@stockpulse.commerce",
    shippingAddress: shippingAddress || {},
    items: orderItems,
    subtotal,
    shippingFee,
    total: grandTotal,
    paymentMethod: payLabel,
    paymentStatus: payStatus,
    status: "CONFIRMED",
    estimatedDelivery: "3–5 business days",
    date: new Date().toISOString().replace("T", " ").slice(0, 16)
  };

  state.orders.unshift(order);
  res.status(201).json({ success: true, data: order, message: "Order placed successfully!" });
});

// Cancel Order & Automatic Restock
app.post("/api/v1/orders/:id/cancel", (req, res) => {
  const order = state.orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, error: "Order not found" });

  if (order.status === "SHIPPED" || order.status === "DELIVERED") {
    return res.status(400).json({ success: false, error: `Cannot cancel order in '${order.status}' status.` });
  }
  if (order.status === "CANCELLED") {
    return res.status(400).json({ success: false, error: "Order is already cancelled." });
  }

  // Restore inventory
  for (const item of order.items) {
    const prod = state.products.find(p => p.sku === item.sku);
    if (prod) {
      const prev = prod.onHand;
      prod.onHand += item.quantity;
      state.transactions.unshift({
        id: `TXN-${Date.now().toString().slice(-6)}`,
        type: "ORDER_CANCELLED_RESTOCK",
        productName: prod.name,
        sku: prod.sku,
        warehouse: prod.warehouse || "Central Logistics Hub",
        quantityChanged: item.quantity,
        previousStock: prev,
        newStock: prod.onHand,
        performedBy: "System (Cancellation Restock)",
        timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
        reason: `Cancellation Restock for Order ${order.id}`
      });
    }
  }

  order.status = "CANCELLED";
  res.json({ success: true, data: order, message: "Order cancelled. Inventory automatically restored!" });
});

// Customer Orders API
app.get("/api/v1/users/:customerId/orders", (req, res) => {
  const list = state.orders.filter(o => o.customerId === req.params.customerId);
  res.json({ success: true, data: list });
});

// Admin All Orders API
app.get("/api/v1/admin/orders", (req, res) => {
  res.json({ success: true, data: state.orders });
});

// Admin Summary Metrics API
app.get("/api/v1/admin/summary", (req, res) => {
  const totalRev = state.orders.filter(o => o.status !== "CANCELLED").reduce((s, o) => s + o.total, 0);
  const totalVal = state.products.reduce((s, p) => s + (p.onHand * p.cost), 0);
  const lowStock = state.products.filter(p => getProductStatus(p.onHand, p.reserved, p.safetyStock) !== "ACTIVE").length;

  res.json({
    success: true,
    data: {
      revenue: totalRev,
      ordersCount: state.orders.length,
      valuation: totalVal,
      lowStockCount: lowStock
    }
  });
});

// Master Dual Portal Frontend
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StockPulse Commerce | Enterprise OS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col">

  <!-- ================= TOP HEADER ================= -->
  <header class="bg-slate-900/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50 px-6 py-3.5">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/30">⚡</div>
        <div>
          <h1 class="text-lg font-black text-white tracking-tight">StockPulse <span class="text-indigo-400">Commerce</span></h1>
          <p class="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">● Enterprise Inventory & Order OS</p>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
        <button id="tab-btn-store" onclick="setMainView('store')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow">
          🛍️ Storefront
        </button>
        <button id="tab-btn-orders" onclick="setMainView('orders')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white">
          📦 My Orders
        </button>
        <button id="tab-btn-admin" onclick="setMainView('admin')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white">
          🛡️ Admin Portal
        </button>
      </div>

      <!-- User Session & Cart Trigger -->
      <div class="flex items-center gap-3">
        <button onclick="openCartDrawer()" class="relative flex items-center gap-2 px-3.5 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 rounded-xl font-bold text-xs transition">
          🛒 <span>Cart</span>
          <span id="cart-badge-count" class="px-1.5 py-0.2 bg-indigo-500 text-white text-[11px] rounded-full font-black">0</span>
        </button>
        
        <div id="auth-widget" class="flex items-center gap-2">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </header>

  <!-- ================= MAIN CONTAINER ================= -->
  <main class="max-w-7xl mx-auto p-6 flex-1 w-full space-y-8">

    <!-- VIEW 1: STOREFRONT -->
    <div id="view-store" class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl">
        <div>
          <span class="text-xs font-bold text-indigo-400 tracking-wider uppercase">Live Products & Hardware Catalog</span>
          <h2 class="text-2xl font-black text-white mt-1">Featured Inventory Items</h2>
          <p class="text-xs text-slate-400 mt-1">Automatic real-time stock deduction on customer orders. Out-of-stock items cannot be ordered.</p>
        </div>
        <div class="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700 text-xs">
          <span>⚡ Free Express Delivery on orders above <strong>₹2,000</strong></span>
        </div>
      </div>

      <!-- Product Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="products-catalog-grid">
        <!-- Dynamically rendered -->
      </div>
    </div>

    <!-- VIEW 2: CUSTOMER MY ORDERS -->
    <div id="view-orders" class="space-y-6 hidden">
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div>
          <h2 class="text-xl font-black text-white">My Orders & Order History</h2>
          <p class="text-xs text-slate-400">Track shipment status and cancel eligible orders with instant automatic stock restoration.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3.5 px-4">Order ID</th>
                <th class="py-3.5 px-4">Date</th>
                <th class="py-3.5 px-4">Products & Quantities</th>
                <th class="py-3.5 px-4">Total Amount (₹)</th>
                <th class="py-3.5 px-4">Payment Method</th>
                <th class="py-3.5 px-4">Status</th>
                <th class="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody id="user-orders-tbody" class="divide-y divide-slate-800/70 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- VIEW 3: ADMIN PORTAL -->
    <div id="view-admin" class="space-y-6 hidden">
      <!-- Admin Header with Prominent Add New Product Button -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-bold uppercase">Executive Portal</span>
            <span class="text-xs text-emerald-400 font-bold">● Automatic Inventory System Active</span>
          </div>
          <h2 class="text-2xl font-black text-white mt-2">Product & Inventory Management</h2>
          <p class="text-xs text-slate-400">Add new products with initial stock, refill existing products, and monitor customer-driven inventory.</p>
        </div>
        <button onclick="openAddProductModal()" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2">
          <span class="text-base font-bold">+</span>
          <span>Add New Product</span>
        </button>
      </div>

      <!-- KPI Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Sales Revenue</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-rev">₹0</div>
          <span class="inline-block mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Live Stream</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Orders</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-orders">0</div>
          <span class="inline-block mt-2 text-xs font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">Auto-Fulfillment</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Inventory Valuation</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-val">₹0</div>
          <span class="inline-block mt-2 text-xs font-medium text-slate-400">At Cost</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Low/Out of Stock SKUs</span>
          <div class="mt-2 text-2xl font-black text-amber-400" id="admin-stat-alerts">0</div>
          <span class="inline-block mt-2 text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">Safety Alarms</span>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <div class="relative flex-1">
          <input id="admin-search-input" oninput="applyAdminFilters()" type="text" placeholder="Search products by name or SKU..." class="w-full pl-4 pr-4 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="flex items-center gap-3">
          <select id="admin-filter-status" onchange="applyAdminFilters()" class="bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-indigo-500">
            <option value="ALL">All Stock Statuses</option>
            <option value="ACTIVE">Active (In Stock)</option>
            <option value="LOW_STOCK">Low Stock</option>
            <option value="OUT_OF_STOCK">Out of Stock</option>
          </select>
        </div>
      </div>

      <!-- Admin Product Management Table -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">Product Catalog & Inventory Matrix</h3>
            <p class="text-xs text-slate-400">Available stock and statuses update automatically when customer orders are placed.</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-3">Product</th>
                <th class="py-3 px-3">SKU</th>
                <th class="py-3 px-3">Price (₹)</th>
                <th class="py-3 px-3">On Hand</th>
                <th class="py-3 px-3 text-amber-400">Reserved</th>
                <th class="py-3 px-3 text-emerald-400">Available</th>
                <th class="py-3 px-3">Safety Stock</th>
                <th class="py-3 px-3">Status</th>
                <th class="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="admin-inventory-tbody" class="divide-y divide-slate-800 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Inventory Transaction History Log -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 space-y-4">
        <div>
          <h3 class="text-lg font-bold text-white">Inventory Transaction History Log</h3>
          <p class="text-xs text-slate-400">Audit trail of all administrative stock additions and customer order allocations.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-3">Transaction ID</th>
                <th class="py-3 px-3">Type</th>
                <th class="py-3 px-3">Product / SKU</th>
                <th class="py-3 px-3">Warehouse</th>
                <th class="py-3 px-3">Qty Added / Deducted</th>
                <th class="py-3 px-3">Stock Before → After</th>
                <th class="py-3 px-3">Performed By</th>
                <th class="py-3 px-3">Timestamp</th>
                <th class="py-3 px-3">Reason</th>
              </tr>
            </thead>
            <tbody id="admin-transactions-tbody" class="divide-y divide-slate-800 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>

  <!-- ================= ADD NEW PRODUCT MODAL (ADMIN) ================= -->
  <div id="add-product-modal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h3 class="text-base font-black text-white flex items-center gap-2">
          <span class="text-indigo-400">➕</span>
          <span>Add New Product to Catalog</span>
        </h3>
        <button onclick="closeAddProductModal()" class="text-slate-400 hover:text-white">✕</button>
      </div>

      <form id="add-product-form" class="space-y-3 text-xs">
        <div>
          <label class="block text-slate-300 font-medium mb-1">Product Name *</label>
          <input id="new-prod-name" type="text" required placeholder="e.g. Apex Smart Watch Series 5" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-300 font-medium mb-1">SKU Code *</label>
            <input id="new-prod-sku" type="text" required placeholder="e.g. WAT-APX-05" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white uppercase font-mono" />
          </div>
          <div>
            <label class="block text-slate-300 font-medium mb-1">Category *</label>
            <input id="new-prod-cat" type="text" required value="Wearables" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
        </div>

        <div>
          <label class="block text-slate-300 font-medium mb-1">Description</label>
          <textarea id="new-prod-desc" rows="2" placeholder="Product features and specifications..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"></textarea>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-300 font-medium mb-1">Selling Price (₹) *</label>
            <input id="new-prod-price" type="number" min="1" required value="18999" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
          <div>
            <label class="block text-slate-300 font-medium mb-1">Cost Price (₹)</label>
            <input id="new-prod-cost" type="number" min="1" value="8500" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-300 font-medium mb-1">Initial Stock Quantity *</label>
            <input id="new-prod-stock" type="number" min="0" required value="50" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white font-bold text-indigo-400" />
          </div>
          <div>
            <label class="block text-slate-300 font-medium mb-1">Safety Stock Threshold</label>
            <input id="new-prod-safety" type="number" min="1" value="10" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
        </div>

        <div>
          <label class="block text-slate-300 font-medium mb-1">Assigned Warehouse</label>
          <select id="new-prod-warehouse" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
            <option value="Central Logistics Hub">Central Logistics Hub</option>
            <option value="East Coast Hub">East Coast Hub</option>
            <option value="West Coast Hub">West Coast Hub</option>
          </select>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeAddProductModal()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition">
            Cancel
          </button>
          <button type="submit" class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl shadow-lg shadow-indigo-600/30 transition">
            Create Product
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= ADD STOCK MODAL (ADMIN) ================= -->
  <div id="add-stock-modal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h3 class="text-base font-black text-white flex items-center gap-2">
          <span>📦</span>
          <span>Add Stock to Product</span>
        </h3>
        <button onclick="closeAddStockModal()" class="text-slate-400 hover:text-white">✕</button>
      </div>

      <form id="add-stock-form" class="space-y-3.5 text-xs">
        <input type="hidden" id="add-stock-sku" />
        <div>
          <label class="block text-slate-400 mb-1">Target Product</label>
          <div id="add-stock-prod-name" class="font-bold text-white text-sm bg-slate-800 p-2.5 rounded-xl border border-slate-700"></div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-400 mb-1">Current On Hand</label>
            <div id="add-stock-current-val" class="font-mono font-bold text-amber-400 bg-slate-800 p-2.5 rounded-xl border border-slate-700"></div>
          </div>
          <div>
            <label class="block text-slate-400 mb-1">Quantity to Add (+) *</label>
            <input id="add-stock-qty" type="number" min="1" max="10000" required value="50" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white font-bold text-sm focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>
        <div>
          <label class="block text-slate-400 mb-1">Restock Reason</label>
          <select id="add-stock-reason" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
            <option value="Supplier Shipment Inbound">Supplier Shipment Inbound</option>
            <option value="Warehouse Transfer Receipt">Warehouse Transfer Receipt</option>
            <option value="Physical Inventory Audit Correction">Physical Inventory Audit Correction</option>
            <option value="Production Batch Arrival">Production Batch Arrival</option>
          </select>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeAddStockModal()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition">
            Cancel
          </button>
          <button type="submit" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-600/30 transition">
            Confirm Add Stock
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= EDIT PRODUCT MODAL (ADMIN) ================= -->
  <div id="edit-product-modal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h3 class="text-base font-black text-white flex items-center gap-2">
          <span>✏️</span>
          <span>Edit Product Information</span>
        </h3>
        <button onclick="closeEditProductModal()" class="text-slate-400 hover:text-white">✕</button>
      </div>

      <form id="edit-product-form" class="space-y-3 text-xs">
        <input type="hidden" id="edit-prod-sku" />
        <div>
          <label class="block text-slate-300 font-medium mb-1">Product Name</label>
          <input id="edit-prod-name" type="text" required class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-300 font-medium mb-1">Category</label>
            <input id="edit-prod-cat" type="text" required class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
          <div>
            <label class="block text-slate-300 font-medium mb-1">Selling Price (₹)</label>
            <input id="edit-prod-price" type="number" min="1" required class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-slate-300 font-medium mb-1">Cost Price (₹)</label>
            <input id="edit-prod-cost" type="number" min="1" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
          <div>
            <label class="block text-slate-300 font-medium mb-1">Safety Stock Threshold</label>
            <input id="edit-prod-safety" type="number" min="1" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
          </div>
        </div>
        <div>
          <label class="block text-slate-300 font-medium mb-1">Warehouse</label>
          <input id="edit-prod-warehouse" type="text" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeEditProductModal()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition">
            Cancel
          </button>
          <button type="submit" class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl shadow-lg shadow-indigo-600/30 transition">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= SHOPPING CART SLIDEOUT DRAWER ================= -->
  <div id="cart-drawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex justify-end transition-opacity">
    <div class="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full p-6 flex flex-col justify-between shadow-2xl">
      <div>
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🛒</span>
            <h3 class="text-lg font-bold text-white">Shopping Cart</h3>
          </div>
          <button onclick="closeCartDrawer()" class="text-slate-400 hover:text-white text-lg">✕</button>
        </div>

        <!-- Cart Items List -->
        <div id="cart-items-container" class="mt-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- Cart Footer -->
      <div class="pt-4 border-t border-slate-800 space-y-3">
        <div class="space-y-1 text-xs text-slate-300">
          <div class="flex justify-between"><span>Items Subtotal:</span><span id="cart-subtotal" class="font-bold text-white">₹0</span></div>
          <div class="flex justify-between"><span>Delivery:</span><span id="cart-delivery" class="text-emerald-400 font-bold">FREE</span></div>
          <div class="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800"><span>Grand Total:</span><span id="cart-grandtotal" class="text-indigo-400">₹0</span></div>
        </div>

        <div class="flex gap-2">
          <button onclick="closeCartDrawer()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition">
            Continue Shopping
          </button>
          <button id="btn-proceed-checkout" onclick="openCheckoutModal()" class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-black rounded-xl shadow-lg shadow-indigo-600/30 transition">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= CHECKOUT & DEMO PAYMENT MODAL ================= -->
  <div id="checkout-modal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h3 class="text-lg font-black text-white flex items-center gap-2"><span>🛡️</span> Secure Checkout</h3>
        <button onclick="closeCheckoutModal()" class="text-slate-400 hover:text-white">✕</button>
      </div>

      <form id="checkout-form" class="space-y-4">
        <div>
          <h4 class="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">1. Delivery Address</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div>
              <label class="block text-slate-400 mb-1">Full Name *</label>
              <input id="chk-name" type="text" required value="John Doe" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label class="block text-slate-400 mb-1">Mobile Phone *</label>
              <input id="chk-phone" type="text" required value="9876543210" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-slate-400 mb-1">Street Address *</label>
              <input id="chk-address" type="text" required value="402, Prestige Tech Park, Marathahalli" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label class="block text-slate-400 mb-1">City *</label>
              <input id="chk-city" type="text" required value="Bengaluru" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label class="block text-slate-400 mb-1">PIN Code *</label>
              <input id="chk-pincode" type="text" required value="560103" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white" />
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">2. Select Payment Method (Demo Simulation)</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <label class="flex items-center gap-3 p-3.5 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 transition">
              <input type="radio" name="payment-method" value="PAYTM_DEMO" checked class="text-indigo-600 focus:ring-0" />
              <div>
                <span class="text-xs font-bold text-white block">Paytm UPI</span>
                <span class="text-[10px] text-slate-400">Demo Instant Verify</span>
              </div>
            </label>
            <label class="flex items-center gap-3 p-3.5 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 transition">
              <input type="radio" name="payment-method" value="PHONEPE_DEMO" class="text-indigo-600 focus:ring-0" />
              <div>
                <span class="text-xs font-bold text-white block">PhonePe UPI</span>
                <span class="text-[10px] text-slate-400">Demo QR / Instant</span>
              </div>
            </label>
            <label class="flex items-center gap-3 p-3.5 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 transition">
              <input type="radio" name="payment-method" value="COD" class="text-indigo-600 focus:ring-0" />
              <div>
                <span class="text-xs font-bold text-white block">Cash on Delivery</span>
                <span class="text-[10px] text-slate-400">Pay at Doorstep</span>
              </div>
            </label>
          </div>
        </div>

        <div class="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2 text-xs">
          <div class="flex justify-between font-bold text-slate-300">
            <span>Total Payable Amount:</span>
            <span id="chk-final-amount" class="text-base text-indigo-400 font-black">₹0</span>
          </div>
        </div>

        <div class="flex gap-3">
          <button type="button" onclick="closeCheckoutModal()" class="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition">
            Cancel
          </button>
          <button type="submit" id="btn-place-order-submit" class="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2">
            ⚡ Place Order
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ================= ORDER CONFIRMATION MODAL ================= -->
  <div id="confirmation-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl text-center space-y-5">
      <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center text-3xl mx-auto">
        ✓
      </div>
      <div>
        <h3 class="text-xl font-black text-white">Order Placed Successfully!</h3>
        <p class="text-xs text-slate-400 mt-1">Inventory has been automatically deducted in real time.</p>
      </div>

      <div class="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-left text-xs space-y-2">
        <div class="flex justify-between"><span class="text-slate-400">Order ID:</span><span id="conf-order-id" class="font-mono font-bold text-indigo-400">ORD-000000</span></div>
        <div class="flex justify-between"><span class="text-slate-400">Payment Method:</span><span id="conf-payment-method" class="font-bold text-white">PhonePe (Demo)</span></div>
        <div class="flex justify-between"><span class="text-slate-400">Payment Status:</span><span class="text-emerald-400 font-bold">PAID</span></div>
        <div class="flex justify-between"><span class="text-slate-400">Estimated Delivery:</span><span class="text-slate-200">3–5 Business Days</span></div>
        <div class="flex justify-between pt-2 border-t border-slate-800 font-bold"><span class="text-white">Total Amount Paid:</span><span id="conf-total" class="text-indigo-400 font-black">₹0</span></div>
      </div>

      <div class="flex gap-2">
        <button onclick="closeConfirmationAndGoOrders()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition">
          View My Orders
        </button>
        <button onclick="closeConfirmationAndGoStore()" class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  </div>

  <script>
    let stateProducts = [];
    let stateCart = [];
    let stateQuantities = {};
    let currentUser = { id: "cust-1", name: "John Doe", email: "user@stockpulse.commerce", role: "CUSTOMER" };

    function formatRupees(amount) {
      return '₹' + Number(amount).toLocaleString('en-IN');
    }

    function setMainView(view) {
      document.getElementById('view-store').classList.add('hidden');
      document.getElementById('view-orders').classList.add('hidden');
      document.getElementById('view-admin').classList.add('hidden');

      document.getElementById('tab-btn-store').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
      document.getElementById('tab-btn-orders').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
      document.getElementById('tab-btn-admin').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";

      if (view === 'store') {
        document.getElementById('view-store').classList.remove('hidden');
        document.getElementById('tab-btn-store').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
      } else if (view === 'orders') {
        document.getElementById('view-orders').classList.remove('hidden');
        document.getElementById('tab-btn-orders').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
      } else if (view === 'admin') {
        document.getElementById('view-admin').classList.remove('hidden');
        document.getElementById('tab-btn-admin').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
      }
      refreshData();
    }

    function changeQuantity(sku, delta, maxAvailable) {
      const current = stateQuantities[sku] || 1;
      let next = current + delta;
      if (next < 1) next = 1;
      if (next > maxAvailable) next = maxAvailable;
      stateQuantities[sku] = next;

      const display = document.getElementById(\`qty-val-\${sku}\`);
      if (display) display.innerText = next;

      const subDisplay = document.getElementById(\`prod-subtotal-\${sku}\`);
      const prod = stateProducts.find(p => p.sku === sku);
      if (subDisplay && prod) {
        subDisplay.innerText = formatRupees(prod.price * next);
      }
    }

    function addToCart(sku) {
      const prod = stateProducts.find(p => p.sku === sku);
      if (!prod || prod.available === 0) return;

      const qty = stateQuantities[sku] || 1;
      const existing = stateCart.find(i => i.sku === sku);

      if (existing) {
        existing.quantity = Math.min(prod.available, existing.quantity + qty);
      } else {
        stateCart.push({
          sku: prod.sku,
          name: prod.name,
          price: prod.price,
          quantity: qty,
          availableStock: prod.available,
          image: prod.image
        });
      }

      renderCart();
      openCartDrawer();
    }

    function updateCartQuantity(sku, delta) {
      const item = stateCart.find(i => i.sku === sku);
      if (!item) return;

      item.quantity += delta;
      if (item.quantity <= 0) {
        stateCart = stateCart.filter(i => i.sku !== sku);
      } else if (item.quantity > item.availableStock) {
        item.quantity = item.availableStock;
      }
      renderCart();
    }

    function renderCart() {
      const countBadge = document.getElementById('cart-badge-count');
      const totalItems = stateCart.reduce((s, i) => s + i.quantity, 0);
      countBadge.innerText = totalItems;

      const container = document.getElementById('cart-items-container');
      if (stateCart.length === 0) {
        container.innerHTML = \`<div class="text-center py-12 text-slate-500 text-xs">Your shopping cart is empty.</div>\`;
        document.getElementById('btn-proceed-checkout').disabled = true;
      } else {
        document.getElementById('btn-proceed-checkout').disabled = false;
        container.innerHTML = stateCart.map(item => \`
          <div class="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 flex items-center justify-between gap-3 text-xs">
            <div>
              <div class="font-bold text-white">\${item.name}</div>
              <div class="text-[11px] text-slate-400">\${formatRupees(item.price)} each</div>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-1">
                <button onclick="updateCartQuantity('\${item.sku}', -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold text-slate-300">-</button>
                <span class="px-2 font-bold text-white">\${item.quantity}</span>
                <button onclick="updateCartQuantity('\${item.sku}', 1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold text-slate-300">+</button>
              </div>
              <span class="font-black text-indigo-400">\${formatRupees(item.price * item.quantity)}</span>
            </div>
          </div>
        \`).join('');
      }

      const subtotal = stateCart.reduce((s, i) => s + (i.price * i.quantity), 0);
      const delivery = (subtotal >= 2000 || subtotal === 0) ? 0 : 99;
      const grandTotal = subtotal + delivery;

      document.getElementById('cart-subtotal').innerText = formatRupees(subtotal);
      document.getElementById('cart-delivery').innerText = delivery === 0 ? 'FREE' : formatRupees(delivery);
      document.getElementById('cart-grandtotal').innerText = formatRupees(grandTotal);
      document.getElementById('chk-final-amount').innerText = formatRupees(grandTotal);
    }

    function openCartDrawer() { document.getElementById('cart-drawer').classList.remove('hidden'); }
    function closeCartDrawer() { document.getElementById('cart-drawer').classList.add('hidden'); }

    function openCheckoutModal() { closeCartDrawer(); document.getElementById('checkout-modal').classList.remove('hidden'); }
    function closeCheckoutModal() { document.getElementById('checkout-modal').classList.add('hidden'); }

    function openAddProductModal() { document.getElementById('add-product-modal').classList.remove('hidden'); }
    function closeAddProductModal() { document.getElementById('add-product-modal').classList.add('hidden'); }

    function openAddStockModal(sku, name, onHand) {
      document.getElementById('add-stock-sku').value = sku;
      document.getElementById('add-stock-prod-name').innerText = name + ' (' + sku + ')';
      document.getElementById('add-stock-current-val').innerText = onHand + ' units';
      document.getElementById('add-stock-qty').value = onHand === 0 ? '50' : '25';
      document.getElementById('add-stock-modal').classList.remove('hidden');
    }
    function closeAddStockModal() { document.getElementById('add-stock-modal').classList.add('hidden'); }

    function openEditProductModal(sku, name, category, price, cost, safetyStock, warehouse) {
      document.getElementById('edit-prod-sku').value = sku;
      document.getElementById('edit-prod-name').value = name;
      document.getElementById('edit-prod-cat').value = category;
      document.getElementById('edit-prod-price').value = price;
      document.getElementById('edit-prod-cost').value = cost;
      document.getElementById('edit-prod-safety').value = safetyStock;
      document.getElementById('edit-prod-warehouse').value = warehouse || "Central Logistics Hub";
      document.getElementById('edit-product-modal').classList.remove('hidden');
    }
    function closeEditProductModal() { document.getElementById('edit-product-modal').classList.add('hidden'); }

    document.getElementById('add-product-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('new-prod-name').value;
      const sku = document.getElementById('new-prod-sku').value;
      const category = document.getElementById('new-prod-cat').value;
      const description = document.getElementById('new-prod-desc').value;
      const price = parseFloat(document.getElementById('new-prod-price').value);
      const cost = parseFloat(document.getElementById('new-prod-cost').value);
      const initialStock = parseInt(document.getElementById('new-prod-stock').value, 10);
      const safetyStock = parseInt(document.getElementById('new-prod-safety').value, 10);
      const warehouse = document.getElementById('new-prod-warehouse').value;

      try {
        const res = await fetch('/api/v1/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, sku, category, description, price, cost, initialStock, safetyStock, warehouse })
        });
        const data = await res.json();
        if (data.success) {
          alert('✓ ' + data.message);
          closeAddProductModal();
          refreshData();
        } else {
          alert('✗ ' + data.error);
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });

    document.getElementById('add-stock-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const sku = document.getElementById('add-stock-sku').value;
      const quantityToAdd = parseInt(document.getElementById('add-stock-qty').value, 10);
      const reason = document.getElementById('add-stock-reason').value;

      try {
        const res = await fetch('/api/v1/admin/add-stock', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sku, quantityToAdd, reason })
        });
        const data = await res.json();
        if (data.success) {
          alert('✓ ' + data.message);
          closeAddStockModal();
          refreshData();
        } else {
          alert('✗ ' + data.error);
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });

    document.getElementById('edit-product-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const sku = document.getElementById('edit-prod-sku').value;
      const name = document.getElementById('edit-prod-name').value;
      const category = document.getElementById('edit-prod-cat').value;
      const price = parseFloat(document.getElementById('edit-prod-price').value);
      const cost = parseFloat(document.getElementById('edit-prod-cost').value);
      const safetyStock = parseInt(document.getElementById('edit-prod-safety').value, 10);
      const warehouse = document.getElementById('edit-prod-warehouse').value;

      try {
        const res = await fetch(\`/api/v1/admin/products/\${sku}/edit\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, category, price, cost, safetyStock, warehouse })
        });
        const data = await res.json();
        if (data.success) {
          alert('✓ ' + data.message);
          closeEditProductModal();
          refreshData();
        } else {
          alert('✗ ' + data.error);
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });

    document.getElementById('checkout-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-place-order-submit');
      submitBtn.disabled = true;
      submitBtn.innerHTML = "⏳ Processing Demo Payment...";

      const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
      const fullName = document.getElementById('chk-name').value;
      const address = document.getElementById('chk-address').value;

      try {
        const res = await fetch('/api/v1/orders/place-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerId: currentUser.id,
            customerName: fullName,
            customerEmail: currentUser.email,
            shippingAddress: { address },
            items: stateCart.map(i => ({ sku: i.sku, quantity: i.quantity })),
            paymentMethod
          })
        });
        const data = await res.json();
        if (data.success) {
          stateCart = [];
          renderCart();
          closeCheckoutModal();
          showConfirmationModal(data.data);
        } else {
          alert('✗ ' + data.error);
        }
      } catch (err) {
        alert('Connection error: ' + err.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "⚡ Place Order";
        refreshData();
      }
    });

    function showConfirmationModal(order) {
      document.getElementById('conf-order-id').innerText = order.id;
      document.getElementById('conf-payment-method').innerText = order.paymentMethod;
      document.getElementById('conf-total').innerText = formatRupees(order.total);
      document.getElementById('confirmation-modal').classList.remove('hidden');
    }

    function closeConfirmationAndGoOrders() { document.getElementById('confirmation-modal').classList.add('hidden'); setMainView('orders'); }
    function closeConfirmationAndGoStore() { document.getElementById('confirmation-modal').classList.add('hidden'); setMainView('store'); }

    async function cancelOrder(orderId) {
      if (!confirm('Are you sure you want to cancel order ' + orderId + '? Inventory will be automatically restored.')) return;

      try {
        const res = await fetch('/api/v1/orders/' + orderId + '/cancel', { method: 'POST' });
        const data = await res.json();
        if (data.success) {
          alert('✓ ' + data.message);
        } else {
          alert('✗ ' + data.error);
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
      refreshData();
    }

    function applyAdminFilters() {
      const q = document.getElementById('admin-search-input').value.toLowerCase();
      const statusFilter = document.getElementById('admin-filter-status').value;

      const rows = document.querySelectorAll('#admin-inventory-tbody tr');
      rows.forEach(r => {
        const text = r.innerText.toLowerCase();
        const matchesQ = text.includes(q);
        const matchesStatus = statusFilter === 'ALL' || text.includes(statusFilter.toLowerCase());
        r.style.display = (matchesQ && matchesStatus) ? '' : 'none';
      });
    }

    async function refreshData() {
      const prodRes = await fetch('/api/v1/catalog/products');
      const prodData = await prodRes.json();
      stateProducts = prodData.data;

      // Render Storefront Grid
      const grid = document.getElementById('products-catalog-grid');
      grid.innerHTML = stateProducts.map(p => {
        const currentQty = stateQuantities[p.sku] || 1;
        return \`
          <div class="bg-slate-900 rounded-3xl border border-slate-800/80 p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-3xl">\${p.image || '📦'}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border \${
                  p.status === 'ACTIVE' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' :
                  p.status === 'LOW_STOCK' ? 'bg-amber-950/80 text-amber-300 border-amber-500/40' :
                  'bg-rose-950/80 text-rose-300 border-rose-500/40'
                }">\${p.status}</span>
              </div>
              <div>
                <h3 class="text-base font-bold text-white">\${p.name}</h3>
                <p class="text-xs text-slate-400 font-mono mt-0.5">\${p.sku} • \${p.category}</p>
                <p class="text-xs text-slate-400 mt-2 line-clamp-2">\${p.description || ''}</p>
              </div>
              <div class="flex items-baseline justify-between pt-2">
                <span class="text-xl font-black text-white">\${formatRupees(p.price)}</span>
                <span class="text-xs text-slate-400">Avail: <strong class="\${p.available === 0 ? 'text-rose-400' : 'text-emerald-400'}">\${p.available}</strong></span>
              </div>
            </div>

            <div class="space-y-2 pt-3 border-t border-slate-800">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Quantity:</span>
                <div class="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-1">
                  <button onclick="changeQuantity('\${p.sku}', -1, \${p.available})" \${p.available === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-900 hover:bg-slate-700 font-bold text-slate-300">-</button>
                  <span id="qty-val-\${p.sku}" class="px-3 font-black text-white">\${currentQty}</span>
                  <button onclick="changeQuantity('\${p.sku}', 1, \${p.available})" \${p.available === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-900 hover:bg-slate-700 font-bold text-slate-300">+</button>
                </div>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-400">
                <span>Subtotal:</span>
                <strong id="prod-subtotal-\${p.sku}" class="text-indigo-300">\${formatRupees(p.price * currentQty)}</strong>
              </div>
              <button onclick="addToCart('\${p.sku}')" \${p.available === 0 ? 'disabled' : ''} class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-xs rounded-xl transition shadow-lg shadow-indigo-600/30">
                \${p.available === 0 ? 'Out of Stock' : '🛒 Add to Cart'}
              </button>
            </div>
          </div>
        \`;
      }).join('');

      // Render User Orders
      const ordRes = await fetch('/api/v1/users/cust-1/orders');
      const ordData = await ordRes.json();
      const ordTbody = document.getElementById('user-orders-tbody');
      ordTbody.innerHTML = ordData.data.map(o => \`
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-4 font-mono font-bold text-indigo-400">\${o.id}</td>
          <td class="py-3 px-4 text-slate-400">\${o.date}</td>
          <td class="py-3 px-4 text-slate-200">\${o.items.map(i => \`\${i.name} (×\${i.quantity})\`).join(', ')}</td>
          <td class="py-3 px-4 font-black text-white">\${formatRupees(o.total)}</td>
          <td class="py-3 px-4 text-slate-300">\${o.paymentMethod || 'PhonePe (Demo)'}</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              o.status === 'CONFIRMED' ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40' :
              o.status === 'SHIPPED' ? 'bg-sky-950 text-sky-300 border border-sky-500/40' :
              o.status === 'DELIVERED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${o.status}</span>
          </td>
          <td class="py-3 px-4 text-right">
            \${o.status === 'CONFIRMED' ? \`
              <button onclick="cancelOrder('\${o.id}')" class="px-2.5 py-1 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-[11px] font-bold rounded-lg transition">
                Cancel Order
              </button>
            \` : '<span class="text-slate-500">-</span>'}
          </td>
        </tr>
      \`).join('');

      // Render Admin Inventory Table with Actions [View] [Edit] [Add Stock]
      const adminInvTbody = document.getElementById('admin-inventory-tbody');
      adminInvTbody.innerHTML = stateProducts.map(p => {
        const avail = Math.max(0, p.onHand - p.reserved);
        const status = getProductStatus(p.onHand, p.reserved, p.safetyStock);
        return \`
          <tr class="hover:bg-slate-800/40 transition">
            <td class="py-3 px-3 font-bold text-white flex items-center gap-2">
              <span>\${p.image || '📦'}</span>
              <span>\${p.name}</span>
            </td>
            <td class="py-3 px-3 font-mono text-slate-400">\${p.sku}</td>
            <td class="py-3 px-3 font-bold text-white">\${formatRupees(p.price)}</td>
            <td class="py-3 px-3 text-white font-semibold">\${p.onHand}</td>
            <td class="py-3 px-3 text-amber-400 font-bold">\${p.reserved}</td>
            <td class="py-3 px-3 text-emerald-400 font-extrabold">\${avail}</td>
            <td class="py-3 px-3 text-slate-400">\${p.safetyStock} units</td>
            <td class="py-3 px-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
                status === 'ACTIVE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
                status === 'LOW_STOCK' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                'bg-rose-950 text-rose-300 border border-rose-500/40'
              }">\${status}</span>
            </td>
            <td class="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
              <button onclick="alert('Product: ' + '\${p.name}' + '\\nSKU: ' + '\${p.sku}' + '\\nPrice: ' + formatRupees(\${p.price}) + '\\nCost: ' + formatRupees(\${p.cost}) + '\\nWarehouse: ' + '\${p.warehouse || 'Central Logistics Hub'}')" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-semibold">View</button>
              <button onclick="openEditProductModal('\${p.sku}', '\${p.name.replace(/'/g, "\\'")}', '\${p.category}', \${p.price}, \${p.cost}, \${p.safetyStock}, '\${p.warehouse || 'Central Logistics Hub'}')" class="px-2 py-1 bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded text-[11px] font-semibold">Edit</button>
              <button onclick="openAddStockModal('\${p.sku}', '\${p.name.replace(/'/g, "\\'")}', \${p.onHand})" class="px-2.5 py-1 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded text-[11px] font-bold">Add Stock</button>
            </td>
          </tr>
        \`;
      }).join('');

      // Render Admin Transactions History
      const txRes = await fetch('/api/v1/admin/transactions');
      const txData = await txRes.json();
      const txTbody = document.getElementById('admin-transactions-tbody');
      txTbody.innerHTML = txData.data.map(t => \`
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-3 font-mono font-bold text-indigo-400">\${t.id}</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold \${
              t.type === 'STOCK_ADDED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
              t.type === 'ORDER_FULFILLED' ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/30' :
              'bg-amber-950 text-amber-300 border border-amber-500/30'
            }">\${t.type}</span>
          </td>
          <td class="py-3 px-3 font-semibold text-white">\${t.productName} <span class="text-slate-400 font-mono text-[11px]">(\${t.sku})</span></td>
          <td class="py-3 px-3 text-slate-300">\${t.warehouse}</td>
          <td class="py-3 px-3 font-bold \${t.quantityChanged > 0 ? 'text-emerald-400' : 'text-rose-400'}">\${t.quantityChanged > 0 ? '+' : ''}\${t.quantityChanged}</td>
          <td class="py-3 px-3 text-slate-300 font-mono">\${t.previousStock} → \${t.newStock}</td>
          <td class="py-3 px-3 text-slate-300">\${t.performedBy}</td>
          <td class="py-3 px-3 text-slate-400">\${t.timestamp}</td>
          <td class="py-3 px-3 text-slate-400 text-[11px]">\${t.reason}</td>
        </tr>
      \`).join('');

      // Summary KPIs
      const summaryRes = await fetch('/api/v1/admin/summary');
      const summary = await summaryRes.json();
      document.getElementById('admin-stat-rev').innerText = formatRupees(summary.data.revenue);
      document.getElementById('admin-stat-orders').innerText = summary.data.ordersCount;
      document.getElementById('admin-stat-val').innerText = formatRupees(summary.data.valuation);
      document.getElementById('admin-stat-alerts').innerText = summary.data.lowStockCount + ' SKUs';
    }

    renderCart();
    refreshData();
  </script>
</body>
</html>
  `);
});

function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`\n🚀 StockPulse Enterprise OS is running live on port \${portToTry}!`);
    console.log(`👉 Access Portal: http://localhost:\${portToTry}`);
    console.log(`👉 Health Probe:  http://localhost:\${portToTry}/api/v1/health\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`[PORT IN USE] Port \${portToTry} occupied, trying \${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
