import React from "react";
import { Badge, Button } from "@stockpulse/ui-kit";
import { Download, PieChart, TrendingUp, BarChart2 } from "lucide-react";

export const ReportsPage: React.FC = () => {
  const abcItems = [
    { sku: "HDPH-WRLS-BLK", name: "Apex Wireless ANC Headphones", revenue: "$18,598.76", units: 124, class: "CLASS_A", strategy: "Tight cycle counts & priority reordering" },
    { sku: "KB-MECH-RGB", name: "Ergonomic Mechanical Keyboard", revenue: "$5,355.00", units: 45, class: "CLASS_B", strategy: "Standard bi-weekly safety check" },
    { sku: "PWR-GAN-100", name: "Ultra-Fast USB-C GaN Charger", revenue: "$1,899.62", units: 38, class: "CLASS_C", strategy: "Bulk safety stock buffer" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Executive Reports & ABC Analytics</h1>
          <p className="text-xs text-slate-500">Pareto 80/20 inventory classification, turnover rates, and valuation audits</p>
        </div>
        <Button size="md" className="gap-2">
          <Download className="w-4 h-4" /> Export CSV Report
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6">
        <h2 className="text-base font-bold text-slate-900 mb-4">ABC Inventory Pareto Classification</h2>
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3.5">SKU / Product</th>
              <th className="px-6 py-3.5">Revenue Contribution</th>
              <th className="px-6 py-3.5">Units Sold</th>
              <th className="px-6 py-3.5">Classification</th>
              <th className="px-6 py-3.5">Stocking Recommendation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {abcItems.map((i) => (
              <tr key={i.sku}>
                <td className="px-6 py-4 font-semibold text-slate-900">{i.name}</td>
                <td className="px-6 py-4 font-bold text-slate-900">{i.revenue}</td>
                <td className="px-6 py-4">{i.units} units</td>
                <td className="px-6 py-4">
                  <Badge variant={i.class === "CLASS_A" ? "success" : i.class === "CLASS_B" ? "warning" : "neutral"}>
                    {i.class}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-xs text-slate-500">{i.strategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
