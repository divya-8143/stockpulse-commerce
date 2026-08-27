import React, { useState } from "react";
import { Badge, Button } from "@stockpulse/ui-kit";
import { Plus, Search, Filter, Edit, Eye, Tag } from "lucide-react";

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockProducts = [
    { id: "1", name: "Apex Wireless ANC Headphones", sku: "HDPH-WRLS-BLK", category: "Electronics", price: 149.99, cost: 65.00, stock: 124, status: "ACTIVE" },
    { id: "2", name: "Ergonomic Mechanical Keyboard", sku: "KB-MECH-RGB", category: "Peripherals", price: 119.00, cost: 48.00, stock: 45, status: "ACTIVE" },
    { id: "3", name: "Ultra-Fast USB-C GaN Charger 100W", sku: "PWR-GAN-100", category: "Accessories", price: 49.99, cost: 18.50, stock: 8, status: "LOW_STOCK" },
    { id: "4", name: "Pro 4K Ultra-Wide Monitor 34-inch", sku: "DISP-4K-34", category: "Displays", price: 599.00, cost: 320.00, stock: 0, status: "OUT_OF_STOCK" },
    { id: "5", name: "Precision Optical Gaming Mouse", sku: "MOU-OPT-PRO", category: "Peripherals", price: 59.99, cost: 22.00, stock: 88, status: "ACTIVE" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Product Catalog & SKUs</h1>
          <p className="text-xs text-slate-500">Manage multi-variant products, pricing rules, and safety thresholds</p>
        </div>
        <Button size="md" className="gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by product name, SKU, barcode..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3.5">Product / SKU</th>
              <th className="px-6 py-3.5">Category</th>
              <th className="px-6 py-3.5">Retail Price</th>
              <th className="px-6 py-3.5">Cost</th>
              <th className="px-6 py-3.5">Available Stock</th>
              <th className="px-6 py-3.5">Status</th>
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockProducts.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{p.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{p.sku}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <Tag className="w-3 h-3 text-slate-400" /> {p.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-900">${p.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-slate-500">${p.cost.toFixed(2)}</td>
                <td className="px-6 py-4 font-semibold text-slate-900">
                  {p.stock === 0 ? (
                    <span className="text-rose-600">0 units</span>
                  ) : (
                    `${p.stock} units`
                  )}
                </td>
                <td className="px-6 py-4">
                  {p.status === "ACTIVE" && <Badge variant="success">Active</Badge>}
                  {p.status === "LOW_STOCK" && <Badge variant="warning">Low Stock</Badge>}
                  {p.status === "OUT_OF_STOCK" && <Badge variant="danger">Out of Stock</Badge>}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
