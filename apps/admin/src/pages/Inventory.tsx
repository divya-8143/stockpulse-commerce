import React, { useState } from "react";
import { Badge, Button } from "@stockpulse/ui-kit";
import { ArrowLeftRight, RefreshCw, AlertTriangle, ShieldCheck, History } from "lucide-react";

export const InventoryPage: React.FC = () => {
  const [showAdjustModal, setShowAdjustModal] = useState(false);

  const inventoryStock = [
    { sku: "HDPH-WRLS-BLK", name: "Apex Wireless ANC Headphones", warehouse: "Primary Hub (WH-01)", onHand: 130, reserved: 6, available: 124, reorderPt: 25 },
    { sku: "KB-MECH-RGB", name: "Ergonomic Mechanical Keyboard", warehouse: "Primary Hub (WH-01)", onHand: 50, reserved: 5, available: 45, reorderPt: 15 },
    { sku: "PWR-GAN-100", name: "Ultra-Fast USB-C GaN Charger", warehouse: "East Coast (WH-02)", onHand: 10, reserved: 2, available: 8, reorderPt: 20 },
    { sku: "DISP-4K-34", name: "Pro 4K Ultra-Wide Monitor", warehouse: "Primary Hub (WH-01)", onHand: 0, reserved: 0, available: 0, reorderPt: 5 },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Inventory Matrix & Balances</h1>
          <p className="text-xs text-slate-500">Real-time stock levels, reservations, multi-location balances, and audit history</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="md" className="gap-2">
            <ArrowLeftRight className="w-4 h-4" /> Transfer Stock
          </Button>
          <Button size="md" className="gap-2" onClick={() => setShowAdjustModal(true)}>
            <RefreshCw className="w-4 h-4" /> Manual Adjustment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Atomic Stock Lock</p>
            <p className="text-sm font-bold text-slate-900">Active (ACID Protected)</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Total Units On Hand</p>
            <p className="text-sm font-bold text-slate-900">190 Units across 2 WHs</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Low Stock Breaches</p>
            <p className="text-sm font-bold text-rose-600">2 Items at Reorder Point</p>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3.5">SKU / Item</th>
              <th className="px-6 py-3.5">Warehouse Location</th>
              <th className="px-6 py-3.5">On Hand</th>
              <th className="px-6 py-3.5">Reserved (In-Checkout)</th>
              <th className="px-6 py-3.5">Available for Sale</th>
              <th className="px-6 py-3.5">Reorder Point</th>
              <th className="px-6 py-3.5 text-right">Audit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {inventoryStock.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{item.sku}</div>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">{item.warehouse}</td>
                <td className="px-6 py-4 font-semibold text-slate-900">{item.onHand}</td>
                <td className="px-6 py-4 text-amber-600 font-medium">{item.reserved}</td>
                <td className="px-6 py-4 font-bold text-emerald-600">{item.available}</td>
                <td className="px-6 py-4 text-slate-500">{item.reorderPt} units</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs text-indigo-600 hover:underline font-semibold flex items-center justify-end gap-1 ml-auto">
                    <History className="w-3.5 h-3.5" /> History
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
