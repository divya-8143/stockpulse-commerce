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

// Products API
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

// Admin Transactions
app.get("/api/v1/admin/transactions", (req, res) => {
  res.json({ success: true, data: state.transactions });
});

// Customer Place Order
app.post("/api/v1/orders/place-order", (req, res) => {
  const { customerId, customerName, customerEmail, shippingAddress, items, paymentMethod } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, error: "Order cart is empty." });
  }

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

// Cancel Order
app.post("/api/v1/orders/:id/cancel", (req, res) => {
  const order = state.orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, error: "Order not found" });

  if (order.status === "SHIPPED" || order.status === "DELIVERED") {
    return res.status(400).json({ success: false, error: `Cannot cancel order in '${order.status}' status.` });
  }
  if (order.status === "CANCELLED") {
    return res.status(400).json({ success: false, error: "Order is already cancelled." });
  }

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

// Customer Orders
app.get("/api/v1/users/:customerId/orders", (req, res) => {
  const list = state.orders.filter(o => o.customerId === req.params.customerId);
  res.json({ success: true, data: list });
});

// Admin All Orders
app.get("/api/v1/admin/orders", (req, res) => {
  res.json({ success: true, data: state.orders });
});

// Admin Summary
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

// Single Unified HTML Application
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StockPulse Commerce OS | Enterprise Edition</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col">

  <!-- TOP BAR -->
  <header class="bg-slate-900/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50 px-6 py-3.5">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/30">⚡</div>
        <div>
          <h1 class="text-lg font-black text-white tracking-tight">StockPulse <span class="text-indigo-400">Commerce OS</span></h1>
          <p class="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">● Enterprise Inventory & Dual Role Engine</p>
        </div>
      </div>

      <!-- TABS -->
      <div class="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700">
        <button id="tab-btn-store" onclick="setMainView('store')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white">
          🛍️ Customer Storefront & Portal
        </button>
        <button id="tab-btn-admin" onclick="setMainView('admin')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow">
          🛡️ Admin Monitoring Dashboard
        </button>
      </div>

      <!-- CART & USER -->
      <div class="flex items-center gap-3">
        <button onclick="openCartDrawer()" class="relative flex items-center gap-2 px-3.5 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 rounded-xl font-bold text-xs transition">
          🛒 <span>Cart</span>
          <span id="cart-badge-count" class="px-1.5 py-0.2 bg-indigo-500 text-white text-[11px] rounded-full font-black">0</span>
        </button>
        <div class="text-xs bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-white font-bold">
          👤 Alex Mercer (Admin)
        </div>
      </div>
    </div>
  </header>

  <!-- MAIN -->
  <main class="max-w-7xl mx-auto p-6 flex-1 w-full space-y-8">

    <!-- VIEW: STOREFRONT -->
    <div id="view-store" class="space-y-6 hidden">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl">
        <div>
          <span class="text-xs font-bold text-indigo-400 tracking-wider uppercase">Live Storefront Catalog</span>
          <h2 class="text-2xl font-black text-white mt-1">High-Performance Electronics & Hardware</h2>
          <p class="text-xs text-slate-400 mt-1">Real-time atomic reservation and automatic inventory decrement.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="products-catalog-grid"></div>
    </div>

    <!-- VIEW: ADMIN DASHBOARD -->
    <div id="view-admin" class="space-y-6">
      
      <!-- Admin Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-bold uppercase">Executive Portal</span>
            <span class="text-xs text-emerald-400 font-bold">● Automatic Inventory System Online</span>
          </div>
          <h2 class="text-2xl font-black text-white mt-2">Customer-Driven Inventory & Operations</h2>
          <p class="text-xs text-slate-400">Inventory updates are automatically driven by customer purchases. Admins can refill out-of-stock items and add new products.</p>
        </div>
        <button onclick="openAddProductModal()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2">
          <span>+</span> Add New Product
        </button>
      </div>

      <!-- KPI Box Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Sales Revenue</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-rev">₹0</div>
          <span class="inline-block mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Live Stream</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Customer Orders</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-orders">0</div>
          <span class="inline-block mt-2 text-xs font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">Auto-Fulfillment</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Inventory Valuation</span>
          <div class="mt-2 text-2xl font-black text-white" id="admin-stat-val">₹0</div>
          <span class="inline-block mt-2 text-xs font-medium text-slate-400">At Cost Price</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Low/Out-of-Stock SKUs</span>
          <div class="mt-2 text-2xl font-black text-amber-400" id="admin-stat-alerts">0 SKUs</div>
          <span class="inline-block mt-2 text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">Threshold Alerts</span>
        </div>
      </div>

      <!-- ================= URGENT OUT-OF-STOCK REFILL CENTER CARD ================= -->
      <div class="bg-gradient-to-r from-rose-950/70 via-slate-900 to-amber-950/40 rounded-3xl border-2 border-rose-500/50 p-6 shadow-2xl space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-rose-500/20">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-rose-600/30 text-rose-400 border border-rose-500/50 flex items-center justify-center text-xl font-bold animate-pulse">
              🚨
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-black text-white">Out of Stock Refill Center</h3>
                <span id="refill-badge-count" class="px-2.5 py-0.5 bg-rose-500 text-white text-[11px] font-black rounded-full uppercase">1 Item Needs Refill</span>
              </div>
              <p class="text-xs text-rose-200/80">Only out-of-stock items (0 units) are listed here. Click "Refill Stock" to add inventory count.</p>
            </div>
          </div>
          <div class="text-xs text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 font-bold">
            ⚡ 1-Click Refill • Instant Storefront Sync
          </div>
        </div>

        <!-- OUT OF STOCK PRODUCTS LIST -->
        <div id="refill-items-list" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>

      <!-- ALL INVENTORY BALANCES TABLE -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">Customer-Driven Inventory Balances</h3>
            <p class="text-xs text-slate-400">Real-time status automatically determined by safety stock thresholds.</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-3">Product Name</th>
                <th class="py-3 px-3">SKU</th>
                <th class="py-3 px-3">Warehouse</th>
                <th class="py-3 px-3">On Hand</th>
                <th class="py-3 px-3 text-amber-400">Reserved</th>
                <th class="py-3 px-3 text-emerald-400">Available</th>
                <th class="py-3 px-3">Safety Stock</th>
                <th class="py-3 px-3">Status</th>
                <th class="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody id="admin-inventory-tbody" class="divide-y divide-slate-800 text-xs font-medium"></tbody>
          </table>
        </div>
      </div>

      <!-- TRANSACTION HISTORY AUDIT LOG -->
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
                <th class="py-3 px-3">Qty</th>
                <th class="py-3 px-3">Stock Before → After</th>
                <th class="py-3 px-3">Performed By</th>
                <th class="py-3 px-3">Timestamp</th>
                <th class="py-3 px-3">Reason</th>
              </tr>
            </thead>
            <tbody id="admin-transactions-tbody" class="divide-y divide-slate-800 text-xs font-medium"></tbody>
          </table>
        </div>
      </div>
    </div>
  </main>

  <!-- ADD STOCK / REFILL MODAL -->
  <div id="add-stock-modal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <h3 class="text-base font-black text-white flex items-center gap-2">
          <span>📦</span>
          <span>Refill Product Inventory</span>
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
            <option value="Inbound Supplier Shipment">Inbound Supplier Shipment</option>
            <option value="Warehouse Transfer Receipt">Warehouse Transfer Receipt</option>
            <option value="Physical Inventory Audit Correction">Physical Inventory Audit Correction</option>
          </select>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeAddStockModal()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition">
            Cancel
          </button>
          <button type="submit" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-600/30 transition">
            ⚡ Confirm Refill
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ADD NEW PRODUCT MODAL -->
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
          <textarea id="new-prod-desc" rows="2" placeholder="Product details..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"></textarea>
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

  <!-- CART DRAWER -->
  <div id="cart-drawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex justify-end">
    <div class="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full p-6 flex flex-col justify-between shadow-2xl">
      <div>
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🛒</span>
            <h3 class="text-lg font-bold text-white">Shopping Cart</h3>
          </div>
          <button onclick="closeCartDrawer()" class="text-slate-400 hover:text-white text-lg">✕</button>
        </div>
        <div id="cart-items-container" class="mt-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1"></div>
      </div>
      <div class="pt-4 border-t border-slate-800 space-y-3">
        <div class="flex justify-between text-sm font-black text-white"><span>Grand Total:</span><span id="cart-grandtotal" class="text-indigo-400">₹0</span></div>
        <button onclick="closeCartDrawer()" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition">Close</button>
      </div>
    </div>
  </div>

  <script>
    let stateProducts = [];
    let stateCart = [];
    let stateQuantities = {};

    function formatRupees(amount) {
      return '₹' + Number(amount).toLocaleString('en-IN');
    }

    function setMainView(view) {
      document.getElementById('view-store').classList.add('hidden');
      document.getElementById('view-admin').classList.add('hidden');

      document.getElementById('tab-btn-store').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
      document.getElementById('tab-btn-admin').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";

      if (view === 'store') {
        document.getElementById('view-store').classList.remove('hidden');
        document.getElementById('tab-btn-store').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
      } else {
        document.getElementById('view-admin').classList.remove('hidden');
        document.getElementById('tab-btn-admin').className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
      }
      refreshData();
    }

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

    function openCartDrawer() { document.getElementById('cart-drawer').classList.remove('hidden'); }
    function closeCartDrawer() { document.getElementById('cart-drawer').classList.add('hidden'); }

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

    async function refreshData() {
      const prodRes = await fetch('/api/v1/catalog/products');
      const prodData = await prodRes.json();
      stateProducts = prodData.data;

      // Filter OUT OF STOCK products for the dedicated Refill Center Card
      const outOfStockItems = stateProducts.filter(p => p.available === 0 || p.onHand === 0);
      const refillBadge = document.getElementById('refill-badge-count');
      const refillList = document.getElementById('refill-items-list');

      if (refillBadge && refillList) {
        refillBadge.innerText = outOfStockItems.length + (outOfStockItems.length === 1 ? ' Item Needs Refill' : ' Items Need Refill');
        
        if (outOfStockItems.length === 0) {
          refillList.innerHTML = '<div class="md:col-span-2 p-6 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl flex items-center justify-between text-emerald-300 text-xs"><div class="flex items-center gap-2"><span class="text-base">✓</span><span class="font-bold">All products are in stock! No out-of-stock items requiring refill.</span></div><span class="text-slate-400">Inventory Status: Optimal</span></div>';
        } else {
          refillList.innerHTML = outOfStockItems.map(p => {
            return '<div class="p-4 bg-slate-900/90 border border-rose-500/50 hover:border-rose-400 rounded-2xl flex items-center justify-between gap-4 shadow-lg transition">' +
              '<div class="flex items-center gap-3">' +
                '<div class="text-3xl p-2 bg-slate-800 rounded-xl border border-slate-700">' + (p.image || '📦') + '</div>' +
                '<div>' +
                  '<div class="font-bold text-white text-sm">' + p.name + '</div>' +
                  '<div class="text-xs font-mono text-slate-400">' + p.sku + ' • ' + p.category + '</div>' +
                  '<div class="mt-1 flex items-center gap-2">' +
                    '<span class="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-500/50 rounded-md text-[10px] font-black">OUT OF STOCK (0 units)</span>' +
                    '<span class="text-[11px] text-slate-400">Safety: ' + p.safetyStock + ' units</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div>' +
                '<button onclick="openAddStockModal(\\\'' + p.sku + '\\\', \\\'' + p.name.replace(/'/g, "\\\\'") + '\\\', ' + p.onHand + ')" class="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 transition transform hover:scale-105">' +
                  '<span>⚡</span><span>Refill Stock</span>' +
                '</button>' +
              '</div>' +
            '</div>';
          }).join('');
        }
      }

      // Render Admin Inventory Table
      const adminInvTbody = document.getElementById('admin-inventory-tbody');
      adminInvTbody.innerHTML = stateProducts.map(p => {
        const avail = Math.max(0, p.onHand - p.reserved);
        const status = getProductStatus(p.onHand, p.reserved, p.safetyStock);
        return '<tr class="hover:bg-slate-800/40 transition">' +
          '<td class="py-3 px-3 font-bold text-white flex items-center gap-2"><span>' + (p.image || '📦') + '</span><span>' + p.name + '</span></td>' +
          '<td class="py-3 px-3 font-mono text-slate-400">' + p.sku + '</td>' +
          '<td class="py-3 px-3 text-slate-300">' + (p.warehouse || 'Central Logistics Hub') + '</td>' +
          '<td class="py-3 px-3 text-white font-semibold">' + p.onHand + '</td>' +
          '<td class="py-3 px-3 text-amber-400 font-bold">' + p.reserved + '</td>' +
          '<td class="py-3 px-3 text-emerald-400 font-extrabold">' + avail + '</td>' +
          '<td class="py-3 px-3 text-slate-400">' + p.safetyStock + ' units</td>' +
          '<td class="py-3 px-3">' +
            '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ' +
              (status === 'ACTIVE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              status === 'LOW_STOCK' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40') + '">' + status + '</span>' +
          '</td>' +
          '<td class="py-3 px-3 text-right">' +
            '<button onclick="openAddStockModal(\\\'' + p.sku + '\\\', \\\'' + p.name.replace(/'/g, "\\\\'") + '\\\', ' + p.onHand + ')" class="px-2.5 py-1 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded text-[11px] font-bold">Add Stock</button>' +
          '</td>' +
        '</tr>';
      }).join('');

      // Render Admin Transactions History
      const txRes = await fetch('/api/v1/admin/transactions');
      const txData = await txRes.json();
      const txTbody = document.getElementById('admin-transactions-tbody');
      txTbody.innerHTML = txData.data.map(t => {
        return '<tr class="hover:bg-slate-800/40 transition">' +
          '<td class="py-3 px-3 font-mono font-bold text-indigo-400">' + t.id + '</td>' +
          '<td class="py-3 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold ' +
            (t.type === 'STOCK_ADDED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
            t.type === 'ORDER_FULFILLED' ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/30' :
            'bg-amber-950 text-amber-300 border border-amber-500/30') + '">' + t.type + '</span></td>' +
          '<td class="py-3 px-3 font-semibold text-white">' + t.productName + ' <span class="text-slate-400 font-mono text-[11px]">(' + t.sku + ')</span></td>' +
          '<td class="py-3 px-3 text-slate-300">' + t.warehouse + '</td>' +
          '<td class="py-3 px-3 font-bold ' + (t.quantityChanged > 0 ? 'text-emerald-400' : 'text-rose-400') + '">' + (t.quantityChanged > 0 ? '+' : '') + t.quantityChanged + '</td>' +
          '<td class="py-3 px-3 text-slate-300 font-mono">' + t.previousStock + ' → ' + t.newStock + '</td>' +
          '<td class="py-3 px-3 text-slate-300">' + t.performedBy + '</td>' +
          '<td class="py-3 px-3 text-slate-400">' + t.timestamp + '</td>' +
          '<td class="py-3 px-3 text-slate-400 text-[11px]">' + t.reason + '</td>' +
        '</tr>';
      }).join('');

      // Summary KPIs
      const summaryRes = await fetch('/api/v1/admin/summary');
      const summary = await summaryRes.json();
      document.getElementById('admin-stat-rev').innerText = formatRupees(summary.data.revenue);
      document.getElementById('admin-stat-orders').innerText = summary.data.ordersCount;
      document.getElementById('admin-stat-val').innerText = formatRupees(summary.data.valuation);
      document.getElementById('admin-stat-alerts').innerText = summary.data.lowStockCount + ' SKUs';
    }

    setMainView('admin');
  </script>
</body>
</html>
  `);
});

function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`\n🚀 StockPulse Enterprise OS is running live on port ${portToTry}!`);
    console.log(`👉 Access Portal: http://localhost:${portToTry}\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`[PORT IN USE] Port ${portToTry} occupied, trying ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
