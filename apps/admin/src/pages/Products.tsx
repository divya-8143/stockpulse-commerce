import React, { useState } from "react";
import { Badge, Button } from "@stockpulse/ui-kit";
import { Plus, Search, Filter, Edit, Eye, Tag, PackagePlus, X, CheckCircle2 } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  safetyStock: number;
  status: string;
  image?: string;
}

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [products, setProducts] = useState<ProductItem[]>([
    { id: "1", name: "Apex Wireless ANC Headphones", sku: "HDPH-ANC-BLK", category: "Audio & Headphones", price: 14999, cost: 6500, stock: 120, safetyStock: 15, status: "ACTIVE", image: "🎧" },
    { id: "2", name: "HyperGear RGB Mechanical Keyboard", sku: "KB-MECH-RED", category: "PC Peripherals", price: 8999, cost: 4200, stock: 95, safetyStock: 20, status: "ACTIVE", image: "⌨️" },
    { id: "3", name: "HyperCharge 120W GaN Desktop Charger", sku: "PWR-GAN-120W", category: "Power & Cables", price: 4499, cost: 1800, stock: 12, safetyStock: 15, status: "LOW_STOCK", image: "🔌" },
    { id: "4", name: "Apex Precision Wireless 8K Gaming Mouse", sku: "MOU-8K-BLK", category: "PC Peripherals", price: 5999, cost: 2400, stock: 6, safetyStock: 12, status: "LOW_STOCK", image: "🖱️" },
    { id: "5", name: "Pro 4K Ultra-Wide Monitor 34-inch", sku: "DISP-4K-34", category: "Displays", price: 45999, cost: 26000, stock: 0, safetyStock: 5, status: "OUT_OF_STOCK", image: "🖥️" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "Smart Hardware",
    description: "",
    price: 4999,
    cost: 2100,
    initialStock: 30,
    safetyStock: 8,
    image: "📦"
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.sku || formData.price <= 0) {
      alert("Please fill in all required fields.");
      return;
    }

    const newProd: ProductItem = {
      id: `prod-${Date.now()}`,
      name: formData.name,
      sku: formData.sku.toUpperCase(),
      category: formData.category,
      price: Number(formData.price),
      cost: Number(formData.cost),
      stock: Number(formData.initialStock),
      safetyStock: Number(formData.safetyStock),
      status: Number(formData.initialStock) > Number(formData.safetyStock) ? "ACTIVE" : (Number(formData.initialStock) === 0 ? "OUT_OF_STOCK" : "LOW_STOCK"),
      image: formData.image
    };

    setProducts([newProd, ...products]);
    setIsModalOpen(false);
    setToastMessage(`Product '${newProd.name}' (${newProd.sku}) added successfully!`);
    setTimeout(() => setToastMessage(null), 4000);

    setFormData({
      name: "",
      sku: "",
      category: "Smart Hardware",
      description: "",
      price: 4999,
      cost: 2100,
      initialStock: 30,
      safetyStock: 8,
      image: "📦"
    });
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6 bg-slate-950 text-slate-100 min-h-screen">
      {toastMessage && (
        <div className="p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-2xl flex items-center gap-3 text-emerald-200 text-sm shadow-2xl">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Admin Catalog Management</span>
          <h1 className="text-2xl font-black text-white mt-1">Products & SKU Master</h1>
          <p className="text-xs text-slate-400 mt-1">Manage catalog definitions, safety thresholds, and initial stock allocations.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2"
        >
          <PackagePlus className="w-4 h-4" />
          <span>+ Add New Product</span>
        </button>
      </div>

      <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by product name, SKU, or category..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/60 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Product / SKU</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Selling Price (INR)</th>
              <th className="px-6 py-4">Cost (INR)</th>
              <th className="px-6 py-4">Available Stock</th>
              <th className="px-6 py-4">Safety Stock</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70 text-xs font-medium">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-slate-800/40 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.image || "📦"}</span>
                    <div>
                      <div className="font-bold text-white text-sm">{p.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{p.sku}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                    <Tag className="w-3 h-3 text-slate-400" /> {p.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-black text-white">Rs. {p.price.toLocaleString("en-IN")}</td>
                <td className="px-6 py-4 text-slate-400">Rs. {p.cost.toLocaleString("en-IN")}</td>
                <td className="px-6 py-4 font-bold">
                  {p.stock === 0 ? (
                    <span className="text-rose-400">0 units</span>
                  ) : (
                    <span className={p.stock <= p.safetyStock ? "text-amber-400" : "text-emerald-400"}>
                      {p.stock} units
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-slate-400">{p.safetyStock} units</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    p.status === 'ACTIVE' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' :
                    p.status === 'LOW_STOCK' ? 'bg-amber-950/80 text-amber-300 border-amber-500/40' :
                    'bg-rose-950/80 text-rose-300 border-rose-500/40'
                  }`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <PackagePlus className="w-5 h-5 text-indigo-400" />
                <span>Add New Product to Catalog</span>
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex 4K Security Cam"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">SKU Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CAM-4K-PRO"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white uppercase font-mono"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Category *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Product features and specifications..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Selling Price (INR) *</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Cost Price (INR)</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                    value={formData.cost}
                    onChange={(e) => setFormData({ ...formData, cost: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Initial Stock (Units) *</label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                    value={formData.initialStock}
                    onChange={(e) => setFormData({ ...formData, initialStock: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Safety Stock Threshold</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white"
                    value={formData.safetyStock}
                    onChange={(e) => setFormData({ ...formData, safetyStock: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl shadow-lg shadow-indigo-600/30 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
