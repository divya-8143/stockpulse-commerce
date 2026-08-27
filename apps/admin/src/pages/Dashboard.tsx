import React from "react";
import { MetricCard } from "@stockpulse/ui-kit";
import { DollarSign, ShoppingCart, AlertCircle, Package2, ArrowUpRight, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const chartData = [
  { date: "Mon", revenue: 4200, orders: 38 },
  { date: "Tue", revenue: 5800, orders: 52 },
  { date: "Wed", revenue: 7400, orders: 64 },
  { date: "Thu", revenue: 6100, orders: 49 },
  { date: "Fri", revenue: 8900, orders: 81 },
  { date: "Sat", revenue: 11400, orders: 104 },
  { date: "Sun", revenue: 9800, orders: 90 },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Alert Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-amber-900">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-medium">
            <strong>3 SKUs breached Safety Stock threshold</strong> in Primary Warehouse. Immediate reordering recommended.
          </span>
        </div>
        <button className="text-xs font-bold px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
          View Alerts
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Gross Revenue"
          value="$53,600.00"
          change="14.8%"
          isPositive={true}
          subtitle="vs. previous 7 days"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <MetricCard
          title="Orders Fulfilled"
          value="478"
          change="8.2%"
          isPositive={true}
          subtitle="99.2% on-time fulfillment"
          icon={<ShoppingCart className="w-5 h-5" />}
        />
        <MetricCard
          title="Inventory Valuation"
          value="$248,500.00"
          subtitle="Across 4 Warehouses"
          icon={<Package2 className="w-5 h-5" />}
        />
        <MetricCard
          title="Low-Stock SKUs"
          value="3"
          change="Action Required"
          isPositive={false}
          subtitle="Stockout risk within 4 days"
          icon={<AlertCircle className="w-5 h-5" />}
        />
      </div>

      {/* Revenue Trend Chart */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">Weekly Revenue & Demand Curve</h2>
            <p className="text-xs text-slate-500">Real-time order revenue aggregation</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg">
            Live Stream
          </span>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v}`} />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#revenueGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
