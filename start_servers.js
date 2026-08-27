const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let state = {
  warehouses: [
    { id: "wh-1", code: "WH-PRIMARY", name: "Central Logistics Hub (Chicago)", isPrimary: true, totalStock: 480 },
    { id: "wh-2", code: "WH-EAST", name: "East Coast Fulfillment Center (Newark)", isPrimary: false, totalStock: 215 },
    { id: "wh-3", code: "WH-WEST", name: "West Coast Pacific Center (Seattle)", isPrimary: false, totalStock: 160 }
  ],
  products: [
    { id: "1", name: "Apex Wireless ANC Headphones", sku: "HDPH-ANC-BLK", category: "Audio & Headphones", price: 199.99, cost: 78.00, onHand: 120, reserved: 4, available: 116, threshold: 15, status: "ACTIVE" },
    { id: "2", name: "HyperGear RGB Mechanical Keyboard", sku: "KB-MECH-RED", category: "PC Peripherals", price: 129.99, cost: 52.00, onHand: 95, reserved: 5, available: 90, threshold: 20, status: "ACTIVE" },
    { id: "3", name: "HyperCharge 120W GaN Desktop Charger", sku: "PWR-GAN-120W", category: "Power & Cables", price: 69.99, cost: 24.50, onHand: 12, reserved: 4, available: 8, threshold: 15, status: "LOW_STOCK" },
    { id: "4", name: "Apex Precision Wireless 8K Gaming Mouse", sku: "MOU-8K-BLK", category: "PC Peripherals", price: 89.99, cost: 31.00, onHand: 6, reserved: 2, available: 4, threshold: 12, status: "LOW_STOCK" },
    { id: "5", name: "Pro 4K Ultra-Wide Monitor 34-inch", sku: "DISP-4K-34", category: "Displays", price: 599.00, cost: 320.00, onHand: 0, reserved: 0, available: 0, threshold: 5, status: "OUT_OF_STOCK" }
  ],
  orders: [
    { id: "ORD-948201", customer: "David Sterling", email: "david@acme.corp", itemsCount: 3, total: 429.97, status: "PROCESSING", payment: "PAID", date: "2026-08-27 12:15" },
    { id: "ORD-948200", customer: "Sarah Connor", email: "sarah@cyber.io", itemsCount: 1, total: 199.99, status: "SHIPPED", payment: "PAID", date: "2026-08-27 11:30" },
    { id: "ORD-948199", customer: "Alex Mercer", email: "alex@mercer.dev", itemsCount: 2, total: 159.98, status: "DELIVERED", payment: "PAID", date: "2026-08-26 17:45" },
    { id: "ORD-948198", customer: "Emma Watson", email: "emma@studio.com", itemsCount: 4, total: 389.96, status: "CANCELLED", payment: "REFUNDED", date: "2026-08-26 14:10" }
  ],
  alerts: [
    { id: "alt-1", sku: "PWR-GAN-120W", name: "HyperCharge 120W GaN Desktop Charger", currentAvailable: 8, threshold: 15, severity: "HIGH" },
    { id: "alt-2", sku: "MOU-8K-BLK", name: "Apex Precision Wireless 8K Gaming Mouse", currentAvailable: 4, threshold: 12, severity: "HIGH" },
    { id: "alt-3", sku: "DISP-4K-34", name: "Pro 4K Ultra-Wide Monitor 34-inch", currentAvailable: 0, threshold: 5, severity: "CRITICAL" }
  ]
};

// Health Check API
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "HEALTHY",
    service: "StockPulse Enterprise API Gateway",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Products API
app.get("/api/v1/catalog/products", (req, res) => {
  res.json({ success: true, data: state.products });
});

// Inventory API
app.get("/api/v1/inventory/stock", (req, res) => {
  res.json({ success: true, data: state.products });
});

app.get("/api/v1/inventory/alerts", (req, res) => {
  res.json({ success: true, data: state.alerts });
});

// Stock Adjustment API
app.post("/api/v1/inventory/adjust", (req, res) => {
  const { sku, changeQuantity, reason } = req.body;
  const prod = state.products.find(p => p.sku === sku);
  if (!prod) return res.status(404).json({ success: false, error: "Product not found" });

  const qty = parseInt(changeQuantity, 10);
  prod.onHand = Math.max(0, prod.onHand + qty);
  prod.available = Math.max(0, prod.onHand - prod.reserved);
  if (prod.available === 0) prod.status = "OUT_OF_STOCK";
  else if (prod.available <= prod.threshold) prod.status = "LOW_STOCK";
  else prod.status = "ACTIVE";

  res.json({ success: true, data: prod, message: `Stock adjusted by ${qty} units (${reason})` });
});

// Orders API
app.get("/api/v1/orders", (req, res) => {
  res.json({ success: true, data: state.orders });
});

// Place Order with Atomic Reservation & Out-of-Stock Guard
app.post("/api/v1/orders", (req, res) => {
  const { customer, email, items } = req.body;

  // Check out of stock
  for (const item of items) {
    const prod = state.products.find(p => p.sku === item.sku);
    if (!prod || prod.available < item.quantity) {
      return res.status(400).json({
        success: false,
        error: `Out of stock: '${prod ? prod.name : item.sku}'. Requested: ${item.quantity}, Available: ${prod ? prod.available : 0}`
      });
    }
  }

  // Atomically reserve
  let total = 0;
  for (const item of items) {
    const prod = state.products.find(p => p.sku === item.sku);
    prod.reserved += item.quantity;
    prod.available = prod.onHand - prod.reserved;
    total += prod.price * item.quantity;
  }

  const newOrder = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    customer: customer || "Guest Customer",
    email: email || "customer@example.com",
    itemsCount: items.reduce((s, i) => s + i.quantity, 0),
    total: Math.round(total * 100) / 100,
    status: "PROCESSING",
    payment: "PAID",
    date: new Date().toISOString().replace("T", " ").slice(0, 16)
  };

  state.orders.unshift(newOrder);
  res.status(201).json({ success: true, data: newOrder });
});

// Analytics Dashboard API
app.get("/api/v1/analytics/dashboard-kpis", (req, res) => {
  const totalRevenue = state.orders.filter(o => o.status !== "CANCELLED").reduce((s, o) => s + o.total, 0);
  const totalValuation = state.products.reduce((s, p) => s + (p.onHand * p.cost), 0);

  res.json({
    success: true,
    data: {
      revenue: { total: Math.round(totalRevenue * 100) / 100, aov: Math.round((totalRevenue / state.orders.length) * 100) / 100 },
      orders: { total: state.orders.length },
      inventory: {
        totalValuation: Math.round(totalValuation * 100) / 100,
        lowStockAlerts: state.alerts.length,
        outOfStockSKUs: state.products.filter(p => p.available === 0).length
      }
    }
  });
});

// Serve Interactive Admin & Storefront Portal UI
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StockPulse Commerce | Enterprise OS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen">
  <!-- Top Navigation -->
  <header class="bg-slate-800/90 backdrop-blur border-b border-slate-700 sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">⚡</div>
      <div>
        <h1 class="text-base font-bold text-white tracking-tight">StockPulse Commerce OS</h1>
        <p class="text-xs text-emerald-400 font-medium">● Localhost Cluster Online (Port ${PORT})</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="/api/v1/health" target="_blank" class="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg text-slate-200 font-medium transition">
        REST Health Probe
      </a>
      <a href="/api/v1/catalog/products" target="_blank" class="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg text-slate-200 font-medium transition">
        JSON API Catalog
      </a>
    </div>
  </header>

  <main class="max-w-7xl mx-auto p-8 space-y-8">
    <!-- Real-time Low-Stock Alert Banner -->
    <div class="p-4 bg-amber-950/60 border border-amber-500/40 rounded-2xl flex items-center justify-between text-amber-200 shadow-xl">
      <div class="flex items-center gap-3">
        <span class="text-xl">⚠️</span>
        <div class="text-sm font-medium">
          <strong class="text-amber-300">3 SKUs breached safety stock threshold</strong> in Central Logistics Hub. Atomic lock prevents negative inventory.
        </div>
      </div>
      <span class="text-xs font-bold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg">High Severity</span>
    </div>

    <!-- Executive KPI Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gross Sales Revenue</span>
        <div class="mt-2 text-3xl font-extrabold text-white">$54,820.50</div>
        <span class="inline-block mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">+14.8% this week</span>
      </div>
      <div class="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Orders Processed</span>
        <div class="mt-2 text-3xl font-extrabold text-white">478</div>
        <span class="inline-block mt-2 text-xs font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">99.4% On-Time</span>
      </div>
      <div class="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inventory Valuation</span>
        <div class="mt-2 text-3xl font-extrabold text-white">$248,500.00</div>
        <span class="inline-block mt-2 text-xs font-medium text-slate-400">3 Warehouses</span>
      </div>
      <div class="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stockout Risk SKUs</span>
        <div class="mt-2 text-3xl font-extrabold text-rose-400">3 SKUs</div>
        <span class="inline-block mt-2 text-xs font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">Action Needed</span>
      </div>
    </div>

    <!-- Live Smart Inventory Matrix & Order Placement Interactive Widget -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Inventory Matrix -->
      <div class="lg:col-span-2 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-bold text-white">Smart Inventory Matrix</h2>
            <p class="text-xs text-slate-400">Real-time atomic stock balances across warehouse hubs</p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-slate-300">
            <thead class="text-xs uppercase text-slate-400 border-b border-slate-700">
              <tr>
                <th class="py-3 px-3">Product / SKU</th>
                <th class="py-3 px-3">On Hand</th>
                <th class="py-3 px-3 text-amber-400">Reserved</th>
                <th class="py-3 px-3 text-emerald-400">Available</th>
                <th class="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody id="inventory-tbody" class="divide-y divide-slate-700/60 text-xs font-medium">
              <!-- Dynamically Populated -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Live Order Simulator (Testing Out-of-Stock Guard & Concurrency) -->
      <div class="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl p-6 space-y-4">
        <div>
          <h2 class="text-lg font-bold text-white">Instant Order Simulator</h2>
          <p class="text-xs text-slate-400">Test ACID stock reservation and out-of-stock guard</p>
        </div>

        <form id="order-form" class="space-y-3">
          <div>
            <label class="text-xs font-semibold text-slate-300">Select Item</label>
            <select id="order-sku" class="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:ring-2 focus:ring-indigo-500">
              <option value="HDPH-ANC-BLK">Apex Wireless ANC Headphones ($199.99)</option>
              <option value="KB-MECH-RED">HyperGear RGB Keyboard ($129.99)</option>
              <option value="PWR-GAN-120W">HyperCharge 120W GaN Charger ($69.99)</option>
              <option value="MOU-8K-BLK">Apex Precision 8K Mouse ($89.99)</option>
              <option value="DISP-4K-34">Pro 4K Ultra-Wide Monitor (OUT OF STOCK)</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-slate-300">Quantity</label>
            <input id="order-qty" type="number" min="1" max="100" value="1" class="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label class="text-xs font-semibold text-slate-300">Customer Name</label>
            <input id="order-customer" type="text" value="Enterprise Demo Client" class="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" class="w-full mt-2 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition">
            ⚡ Place Order & Reserve Stock
          </button>
        </form>

        <div id="order-feedback" class="text-xs p-3 rounded-xl hidden"></div>
      </div>
    </div>

    <!-- Live Orders Fulfillment Pipeline Table -->
    <div class="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl p-6">
      <h2 class="text-lg font-bold text-white mb-4">Live Order Fulfillment Pipeline</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-300">
          <thead class="text-xs uppercase text-slate-400 border-b border-slate-700">
            <tr>
              <th class="py-3 px-3">Order ID</th>
              <th class="py-3 px-3">Customer</th>
              <th class="py-3 px-3">Items</th>
              <th class="py-3 px-3">Total Amount</th>
              <th class="py-3 px-3">Status</th>
              <th class="py-3 px-3">Timestamp</th>
            </tr>
          </thead>
          <tbody id="orders-tbody" class="divide-y divide-slate-700/60 text-xs font-medium">
            <!-- Dynamically Populated -->
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <script>
    async function loadData() {
      const invRes = await fetch('/api/v1/inventory/stock');
      const inv = await invRes.json();
      const tbody = document.getElementById('inventory-tbody');
      tbody.innerHTML = inv.data.map(p => \`
        <tr class="hover:bg-slate-700/30 transition">
          <td class="py-3 px-3">
            <div class="font-bold text-white">\${p.name}</div>
            <div class="text-[11px] text-slate-400 font-mono">\${p.sku}</div>
          </td>
          <td class="py-3 px-3 text-slate-200">\${p.onHand}</td>
          <td class="py-3 px-3 text-amber-400 font-bold">\${p.reserved}</td>
          <td class="py-3 px-3 text-emerald-400 font-extrabold">\${p.available}</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              p.status === 'ACTIVE' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              p.status === 'LOW_STOCK' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${p.status}</span>
          </td>
        </tr>
      \`).join('');

      const ordRes = await fetch('/api/v1/orders');
      const orders = await ordRes.json();
      const ordTbody = document.getElementById('orders-tbody');
      ordTbody.innerHTML = orders.data.map(o => \`
        <tr class="hover:bg-slate-700/30 transition">
          <td class="py-3 px-3 font-mono font-bold text-indigo-400">\${o.id}</td>
          <td class="py-3 px-3 font-semibold text-white">\${o.customer}</td>
          <td class="py-3 px-3 text-slate-300">\${o.itemsCount} items</td>
          <td class="py-3 px-3 font-bold text-white">$\${o.total.toFixed(2)}</td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${
              o.status === 'PROCESSING' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
              o.status === 'SHIPPED' ? 'bg-sky-950 text-sky-300 border border-sky-500/40' :
              o.status === 'DELIVERED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
              'bg-rose-950 text-rose-300 border border-rose-500/40'
            }">\${o.status}</span>
          </td>
          <td class="py-3 px-3 text-slate-400">\${o.date}</td>
        </tr>
      \`).join('');
    }

    document.getElementById('order-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const sku = document.getElementById('order-sku').value;
      const quantity = parseInt(document.getElementById('order-qty').value, 10);
      const customer = document.getElementById('order-customer').value;
      const feedback = document.getElementById('order-feedback');

      feedback.classList.remove('hidden', 'bg-emerald-950', 'text-emerald-200', 'border-emerald-500', 'bg-rose-950', 'text-rose-200', 'border-rose-500');
      feedback.classList.add('border');

      try {
        const res = await fetch('/api/v1/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ customer, items: [{ sku, quantity }] })
        });
        const data = await res.json();
        if (data.success) {
          feedback.classList.add('bg-emerald-950', 'text-emerald-200', 'border-emerald-500/40');
          feedback.innerHTML = \`✓ <strong>Order \${data.data.id} Placed!</strong> \${quantity} units atomically reserved.\`;
        } else {
          feedback.classList.add('bg-rose-950', 'text-rose-200', 'border-rose-500/40');
          feedback.innerHTML = \`✗ <strong>Rejection:</strong> \${data.error}\`;
        }
      } catch (err) {
        feedback.classList.add('bg-rose-950', 'text-rose-200', 'border-rose-500/40');
        feedback.innerHTML = \`✗ <strong>Connection Error:</strong> \${err.message}\`;
      }

      loadData();
    });

    loadData();
  </script>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`[SERVER_RUNNING] StockPulse Live on Port ${PORT}`);
});
