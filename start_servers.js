const express = require('express');
const cors = require('cors');

const app = express();
let PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(cors());
app.use(express.json());

// In-Memory Production State
let state = {
  products: [
    { id: "1", name: "Apex Wireless ANC Headphones", sku: "HDPH-ANC-BLK", category: "Audio & Headphones", price: 199.99, cost: 78.00, onHand: 120, reserved: 5, safetyStock: 15 },
    { id: "2", name: "HyperGear RGB Mechanical Keyboard", sku: "KB-MECH-RED", category: "PC Peripherals", price: 129.99, cost: 52.00, onHand: 95, reserved: 5, safetyStock: 20 },
    { id: "3", name: "HyperCharge 120W GaN Desktop Charger", sku: "PWR-GAN-120W", category: "Power & Cables", price: 69.99, cost: 24.50, onHand: 12, reserved: 4, safetyStock: 15 },
    { id: "4", name: "Apex Precision Wireless 8K Gaming Mouse", sku: "MOU-8K-BLK", category: "PC Peripherals", price: 89.99, cost: 31.00, onHand: 6, reserved: 2, safetyStock: 12 },
    { id: "5", name: "Pro 4K Ultra-Wide Monitor 34-inch", sku: "DISP-4K-34", category: "Displays", price: 599.00, cost: 320.00, onHand: 0, reserved: 0, safetyStock: 5 }
  ],
  customers: [
    { id: "cust-1", name: "John Doe", email: "user@stockpulse.commerce", password: "user123", role: "CUSTOMER", tier: "GOLD" }
  ],
  admins: [
    { id: "admin-1", name: "Alex Mercer", email: "admin@stockpulse.commerce", password: "admin123", role: "SUPER_ADMIN" }
  ],
  orders: [
    { id: "ORD-948201", customerId: "cust-1", customerName: "John Doe", items: [{ sku: "HDPH-ANC-BLK", name: "Apex Wireless ANC Headphones", quantity: 2, price: 199.99 }], total: 399.98, status: "CONFIRMED", date: "2026-08-27 12:30" },
    { id: "ORD-948200", customerId: "cust-1", customerName: "John Doe", items: [{ sku: "KB-MECH-RED", name: "HyperGear RGB Keyboard", quantity: 1, price: 129.99 }], total: 129.99, status: "SHIPPED", date: "2026-08-26 15:40" }
  ]
};

function getProductStatus(onHand, reserved, safety) {
  const avail = Math.max(0, onHand - reserved);
  if (avail === 0) return "OUT_OF_STOCK";
  if (avail <= safety) return "LOW_STOCK";
  return "ACTIVE";
}

// API Health
app.get("/api/v1/health", (req, res) => {
  res.json({ status: "HEALTHY", service: "StockPulse Dual-Portal OS", timestamp: new Date().toISOString() });
});

// User Auth Endpoints
app.post("/api/v1/auth/user-login", (req, res) => {
  const { email, password } = req.body;
  const user = state.customers.find(c => c.email === email && c.password === password);
  if (!user) return res.status(401).json({ success: false, error: "Invalid customer credentials" });
  res.json({ success: true, token: "jwt_user_demo_token", user });
});

app.post("/api/v1/auth/user-register", (req, res) => {
  const { name, email, password } = req.body;
  if (state.customers.some(c => c.email === email)) {
    return res.status(409).json({ success: false, error: "Email is already registered" });
  }
  const newCust = { id: `cust-${Date.now()}`, name, email, password, role: "CUSTOMER", tier: "STANDARD" };
  state.customers.push(newCust);
  res.status(201).json({ success: true, token: "jwt_user_demo_token", user: newCust });
});

// Admin Auth Endpoint
app.post("/api/v1/auth/admin-login", (req, res) => {
  const { email, password } = req.body;
  const admin = state.admins.find(a => a.email === email && a.password === password);
  if (!admin) return res.status(401).json({ success: false, error: "Invalid administrator credentials" });
  res.json({ success: true, token: "jwt_admin_demo_token", user: admin });
});

// Products & Real-time Stock
app.get("/api/v1/catalog/products", (req, res) => {
  const list = state.products.map(p => ({
    ...p,
    available: Math.max(0, p.onHand - p.reserved),
    status: getProductStatus(p.onHand, p.reserved, p.safetyStock)
  }));
  res.json({ success: true, data: list });
});

// Customer Place Order -> AUTOMATIC INVENTORY DEDUCTION
app.post("/api/v1/orders/place-order", (req, res) => {
  const { customerId, customerName, items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, error: "Order must contain at least 1 item." });
  }

  // 1. Check Out of Stock
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

  // 2. Automatically update inventory: decrement onHand, maintain available
  let total = 0;
  const orderItems = [];

  for (const item of items) {
    const prod = state.products.find(p => p.sku === item.sku);
    prod.onHand = Math.max(0, prod.onHand - item.quantity);
    total += prod.price * item.quantity;
    orderItems.push({ sku: prod.sku, name: prod.name, quantity: item.quantity, price: prod.price });
  }

  const order = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    customerId: customerId || "cust-1",
    customerName: customerName || "Customer",
    items: orderItems,
    total: Math.round(total * 100) / 100,
    status: "CONFIRMED",
    date: new Date().toISOString().replace("T", " ").slice(0, 16)
  };

  state.orders.unshift(order);
  res.status(201).json({ success: true, data: order, message: "Order placed! Inventory automatically deducted." });
});

// Customer Order Cancellation -> AUTOMATIC INVENTORY RESTORATION
app.post("/api/v1/orders/:id/cancel", (req, res) => {
  const order = state.orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, error: "Order not found" });

  if (order.status === "SHIPPED" || order.status === "DELIVERED") {
    return res.status(400).json({ success: false, error: `Cannot cancel order in '${order.status}' status.` });
  }
  if (order.status === "CANCELLED") {
    return res.status(400).json({ success: false, error: "Order is already cancelled." });
  }

  // Automatically restore inventory
  for (const item of order.items) {
    const prod = state.products.find(p => p.sku === item.sku);
    if (prod) {
      prod.onHand += item.quantity;
    }
  }

  order.status = "CANCELLED";
  res.json({ success: true, data: order, message: "Order cancelled! Inventory automatically restored." });
});

// Customer's Orders
app.get("/api/v1/users/:customerId/orders", (req, res) => {
  const list = state.orders.filter(o => o.customerId === req.params.customerId);
  res.json({ success: true, data: list });
});

// Admin All Orders
app.get("/api/v1/admin/orders", (req, res) => {
  res.json({ success: true, data: state.orders });
});

// Admin Read-Only Inventory View
app.get("/api/v1/admin/inventory-view", (req, res) => {
  const inv = state.products.map(p => ({
    product: p.name,
    sku: p.sku,
    warehouse: "Central Logistics Hub",
    onHand: p.onHand,
    reserved: p.reserved,
    available: Math.max(0, p.onHand - p.reserved),
    safetyStock: p.safetyStock,
    status: getProductStatus(p.onHand, p.reserved, p.safetyStock)
  }));
  res.json({ success: true, data: inv });
});

// Admin Dashboard Summary
app.get("/api/v1/admin/summary", (req, res) => {
  const totalRev = state.orders.filter(o => o.status !== "CANCELLED").reduce((s, o) => s + o.total, 0);
  const totalVal = state.products.reduce((s, p) => s + (p.onHand * p.cost), 0);
  const lowStock = state.products.filter(p => getProductStatus(p.onHand, p.reserved, p.safetyStock) !== "ACTIVE").length;

  res.json({
    success: true,
    data: {
      revenue: Math.round(totalRev * 100) / 100,
      ordersCount: state.orders.length,
      valuation: Math.round(totalVal * 100) / 100,
      lowStockCount: lowStock
    }
  });
});

// Serve Unified Dual-Portal Frontend
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StockPulse Commerce OS | Dual Portal & Automatic Inventory</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen">
  <!-- Top App Navigation -->
  <header class="bg-slate-900/90 backdrop-blur border-b border-slate-800 sticky top-0 z-50 px-8 py-3.5 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">⚡</div>
      <div>
        <h1 class="text-base font-bold text-white tracking-tight">StockPulse Commerce OS</h1>
        <p class="text-[11px] text-emerald-400 font-medium">● Automatic Inventory & Dual-Role Engine</p>
      </div>
    </div>

    <!-- Mode Switcher Tabs -->
    <div class="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
      <button id="btn-tab-customer" onclick="switchPortal('customer')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow">
        🛍️ Customer Storefront & Portal
      </button>
      <button id="btn-tab-admin" onclick="switchPortal('admin')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white">
        🛡️ Admin Monitoring Dashboard
      </button>
    </div>

    <!-- Active Session Pill -->
    <div id="session-pill" class="text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-2">
      <span id="session-avatar">👤</span>
      <span id="session-name">John Doe (Customer)</span>
      <button onclick="logoutSession()" class="text-rose-400 hover:underline text-[11px] ml-2">Logout</button>
    </div>
  </header>

  <main class="max-w-7xl mx-auto p-8 space-y-8">
    
    <!-- ======================================================== -->
    <!-- CUSTOMER STOREFRONT & PORTAL VIEW -->
    <!-- ======================================================== -->
    <div id="portal-customer" class="space-y-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-extrabold text-white">Customer Shopping Experience</h2>
          <p class="text-xs text-slate-400">Orders automatically update inventory. Out-of-stock items cannot be ordered.</p>
        </div>
      </div>

      <!-- Real-time Product Catalog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="customer-products-grid">
        <!-- Populated via JS -->
      </div>

      <!-- Customer's Own Orders Section with Cancellation -->
      <div class="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-white">My Orders & Live Order Status</h3>
            <p class="text-xs text-slate-400">Cancelling eligible orders automatically restores warehouse inventory.</p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-3">Order ID</th>
                <th class="py-3 px-3">Items</th>
                <th class="py-3 px-3">Total</th>
                <th class="py-3 px-3">Status</th>
                <th class="py-3 px-3">Date</th>
                <th class="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="customer-orders-tbody" class="divide-y divide-slate-800 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ======================================================== -->
    <!-- ADMIN MONITORING DASHBOARD VIEW -->
    <!-- ======================================================== -->
    <div id="portal-admin" class="space-y-8 hidden">
      <div class="p-4 bg-indigo-950/60 border border-indigo-500/40 rounded-2xl flex items-center justify-between text-indigo-200 shadow-xl">
        <div class="flex items-center gap-3">
          <span class="text-xl">🛡️</span>
          <div class="text-sm font-medium">
            <strong class="text-indigo-300">Admin Read-Only Monitoring Mode Active.</strong> Inventory updates are driven automatically by customer activity.
          </div>
        </div>
      </div>

      <!-- Executive KPIs -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Sales Revenue</span>
          <div class="mt-2 text-3xl font-extrabold text-white" id="admin-kpi-rev">$0.00</div>
          <span class="inline-block mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Live Stream</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Customer Orders</span>
          <div class="mt-2 text-3xl font-extrabold text-white" id="admin-kpi-orders">0</div>
          <span class="inline-block mt-2 text-xs font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">Auto-Fulfillment</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inventory Valuation</span>
          <div class="mt-2 text-3xl font-extrabold text-white" id="admin-kpi-val">$0.00</div>
          <span class="inline-block mt-2 text-xs font-medium text-slate-400">At Cost Price</span>
        </div>
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Low/Out-of-Stock SKUs</span>
          <div class="mt-2 text-3xl font-extrabold text-amber-400" id="admin-kpi-alerts">0 SKUs</div>
          <span class="inline-block mt-2 text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">Threshold Alerts</span>
        </div>
      </div>

      <!-- Admin Read-Only Inventory Table -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6">
        <h3 class="text-lg font-bold text-white mb-2">Customer-Driven Inventory Balances</h3>
        <p class="text-xs text-slate-400 mb-4">Real-time status automatically determined by safety stock thresholds.</p>
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
                <th class="py-3 px-3 text-slate-400">Safety Stock</th>
                <th class="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody id="admin-inv-tbody" class="divide-y divide-slate-800 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Admin All Orders View -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6">
        <h3 class="text-lg font-bold text-white mb-4">All Customer Orders Stream</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-3">Order ID</th>
                <th class="py-3 px-3">Customer</th>
                <th class="py-3 px-3">Items Summary</th>
                <th class="py-3 px-3">Total Amount</th>
                <th class="py-3 px-3">Fulfillment Status</th>
                <th class="py-3 px-3">Timestamp</th>
              </tr>
            </thead>
            <tbody id="admin-orders-tbody" class="divide-y divide-slate-800 text-xs font-medium">
              <!-- Populated via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>

  <script>
    let currentRole = "CUSTOMER";
    let currentUser = { id: "cust-1", name: "John Doe", email: "user@stockpulse.commerce" };

    function switchPortal(portal) {
      const custTab = document.getElementById('btn-tab-customer');
      const adminTab = document.getElementById('btn-tab-admin');
      const custView = document.getElementById('portal-customer');
      const adminView = document.getElementById('portal-admin');

      if (portal === 'customer') {
        currentRole = "CUSTOMER";
        custTab.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
        adminTab.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
        custView.classList.remove('hidden');
        adminView.classList.add('hidden');
        document.getElementById('session-name').innerText = "John Doe (Customer)";
      } else {
        currentRole = "SUPER_ADMIN";
        adminTab.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow";
        custTab.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white";
        adminView.classList.remove('hidden');
        custView.classList.add('hidden');
        document.getElementById('session-name').innerText = "Alex Mercer (Admin)";
      }
      refreshData();
    }

    function logoutSession() {
      alert("Logged out of session.");
    }

    async function refreshData() {
      // 1. Fetch Products
      const prodRes = await fetch('/api/v1/catalog/products');
      const prods = await prodRes.json();

      const prodGrid = document.getElementById('customer-products-grid');
      prodGrid.innerHTML = prods.data.map(p => \`
        <div class="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full border \${
                p.status === 'ACTIVE' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' :
                p.status === 'LOW_STOCK' ? 'bg-amber-950/80 text-amber-300 border-amber-500/40' :
                'bg-rose-950/80 text-rose-300 border-rose-500/40'
              }">\${p.status}</span>
              <span class="text-lg font-black text-white">$\${p.price.toFixed(2)}</span>
            </div>
            <h4 class="mt-3 text-base font-bold text-white">\${p.name}</h4>
            <p class="text-xs text-slate-400 font-mono mt-0.5">\${p.sku}</p>
            <div class="mt-3 text-xs text-slate-300 flex items-center gap-4">
              <span>On Hand: <strong>\${p.onHand}</strong></span>
              <span>Available: <strong class="\${p.available === 0 ? 'text-rose-400' : 'text-emerald-400'}">\${p.available}</strong></span>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-800 space-y-2">
            <div class="flex items-center gap-2">
              <input id="qty-\${p.sku}" type="number" min="1" max="50" value="1" \${p.available === 0 ? 'disabled' : ''} class="w-16 bg-slate-800 border border-slate-700 text-white rounded-lg px-2 py-1.5 text-xs text-center font-bold" />
              <button onclick="placeCustomerOrder('\${p.sku}')" \${p.available === 0 ? 'disabled' : ''} class="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-xs rounded-lg transition shadow-lg shadow-indigo-600/30">
                \${p.available === 0 ? 'Out of Stock' : '⚡ Order Now'}
              </button>
            </div>
          </div>
        </div>
      \`).join('');

      // 2. Fetch Customer Orders
      const custOrdersRes = await fetch('/api/v1/users/cust-1/orders');
      const custOrders = await custOrdersRes.json();
      const custTbody = document.getElementById('customer-orders-tbody');
      custTbody.innerHTML = custOrders.data.map(o => \`
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-3 font-mono font-bold text-indigo-400">\${o.id}</td>
          <td class="py-3 px-3 text-slate-200">\${o.items.map(i => \`\${i.name} (x\${i.quantity})\`).join(', ')}</td>
          <td class="py-3 px-3 font-bold text-white">$\${o.total.toFixed(2)}</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              o.status === 'CONFIRMED' ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40' :
              o.status === 'SHIPPED' ? 'bg-sky-950 text-sky-300 border border-sky-500/40' :
              o.status === 'DELIVERED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${o.status}</span>
          </td>
          <td class="py-3 px-3 text-slate-400">\${o.date}</td>
          <td class="py-3 px-3 text-right">
            \${o.status === 'CONFIRMED' ? \`
              <button onclick="cancelCustomerOrder('\${o.id}')" class="px-2.5 py-1 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-lg transition">
                Cancel Order
              </button>
            \` : \`<span class="text-xs text-slate-500">-</span>\`}
          </td>
        </tr>
      \`).join('');

      // 3. Admin View Data
      const adminInvRes = await fetch('/api/v1/admin/inventory-view');
      const adminInv = await adminInvRes.json();
      const adminInvTbody = document.getElementById('admin-inv-tbody');
      adminInvTbody.innerHTML = adminInv.data.map(i => \`
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-3 font-bold text-white">\${i.product}</td>
          <td class="py-3 px-3 font-mono text-slate-400">\${i.sku}</td>
          <td class="py-3 px-3 text-slate-300">\${i.warehouse}</td>
          <td class="py-3 px-3 text-white font-semibold">\${i.onHand}</td>
          <td class="py-3 px-3 text-amber-400 font-bold">\${i.reserved}</td>
          <td class="py-3 px-3 text-emerald-400 font-extrabold">\${i.available}</td>
          <td class="py-3 px-3 text-slate-400">\${i.safetyStock} units</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              i.status === 'ACTIVE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              i.status === 'LOW_STOCK' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${i.status}</span>
          </td>
        </tr>
      \`).join('');

      const adminOrdersRes = await fetch('/api/v1/admin/orders');
      const adminOrders = await adminOrdersRes.json();
      const adminOrdersTbody = document.getElementById('admin-orders-tbody');
      adminOrdersTbody.innerHTML = adminOrders.data.map(o => \`
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-3 font-mono font-bold text-indigo-400">\${o.id}</td>
          <td class="py-3 px-3 font-semibold text-white">\${o.customerName}</td>
          <td class="py-3 px-3 text-slate-300">\${o.items.map(i => \`\${i.name} (x\${i.quantity})\`).join(', ')}</td>
          <td class="py-3 px-3 font-bold text-white">$\${o.total.toFixed(2)}</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              o.status === 'CONFIRMED' ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40' :
              o.status === 'SHIPPED' ? 'bg-sky-950 text-sky-300 border border-sky-500/40' :
              o.status === 'DELIVERED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${o.status}</span>
          </td>
          <td class="py-3 px-3 text-slate-400">\${o.date}</td>
        </tr>
      \`).join('');

      const summaryRes = await fetch('/api/v1/admin/summary');
      const summary = await summaryRes.json();
      document.getElementById('admin-kpi-rev').innerText = \`$\${summary.data.revenue.toFixed(2)}\`;
      document.getElementById('admin-kpi-orders').innerText = summary.data.ordersCount;
      document.getElementById('admin-kpi-val').innerText = \`$\${summary.data.valuation.toFixed(2)}\`;
      document.getElementById('admin-kpi-alerts').innerText = \`\${summary.data.lowStockCount} SKUs\`;
    }

    async function placeCustomerOrder(sku) {
      const qtyInput = document.getElementById(\`qty-\${sku}\`);
      const quantity = parseInt(qtyInput.value, 10) || 1;

      try {
        const res = await fetch('/api/v1/orders/place-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerId: "cust-1",
            customerName: "John Doe",
            items: [{ sku, quantity }]
          })
        });
        const data = await res.json();
        if (data.success) {
          alert(\`✓ Order \${data.data.id} placed successfully! Inventory automatically updated.\`);
        } else {
          alert(\`✗ \${data.error}\`);
        }
      } catch (err) {
        alert(\`Connection error: \${err.message}\`);
      }
      refreshData();
    }

    async function cancelCustomerOrder(orderId) {
      if (!confirm(\`Are you sure you want to cancel order \${orderId}? This will automatically restore inventory.\`)) return;

      try {
        const res = await fetch(\`/api/v1/orders/\${orderId}/cancel\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reason: "Cancelled by user" })
        });
        const data = await res.json();
        if (data.success) {
          alert(\`✓ Order \${orderId} cancelled! Stock automatically restored back to inventory.\`);
        } else {
          alert(\`✗ \${data.error}\`);
        }
      } catch (err) {
        alert(\`Connection error: \${err.message}\`);
      }
      refreshData();
    }

    refreshData();
  </script>
</body>
</html>
  `);
});

function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`\n🚀 StockPulse Commerce OS is live!`);
    console.log(`👉 Access Dashboard: http://localhost:\${portToTry}`);
    console.log(`👉 Health Probe:     http://localhost:\${portToTry}/api/v1/health`);
    console.log(`👉 API Endpoints:    http://localhost:\${portToTry}/api/v1/catalog/products\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`[PORT IN USE] Port \${portToTry} is occupied, trying port \${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
