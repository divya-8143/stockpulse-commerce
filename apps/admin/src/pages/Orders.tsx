import React, { useState } from "react";
import { Badge, Button } from "@stockpulse/ui-kit";
import { Search, Filter, Eye, Download, CheckCircle2, Truck, XCircle } from "lucide-react";

export const OrdersPage: React.FC = () => {
  const mockOrders = [
    { id: "ORD-948201", customer: "John Doe (john@example.com)", items: 3, total: 249.98, status: "PROCESSING", payment: "PAID", date: "2026-08-27 11:42" },
    { id: "ORD-948200", customer: "Sarah Miller (sarah@miller.com)", items: 1, total: 119.00, status: "SHIPPED", payment: "PAID", date: "2026-08-27 10:15" },
    { id: "ORD-948199", customer: "Alex Mercer (alex@mercer.dev)", items: 2, total: 89.98, status: "DELIVERED", payment: "PAID", date: "2026-08-26 18:20" },
    { id: "ORD-948198", customer: "Emma Watson (emma@studio.com)", items: 4, total: 412.50, status: "CANCELLED", payment: "REFUNDED", date: "2026-08-26 14:05" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Order Management & Fulfillment</h1>
          <p className="text-xs text-slate-500">Automated order lifecycle pipeline, state machine transitions, and stock sync</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3.5">Order ID</th>
              <th className="px-6 py-3.5">Customer</th>
              <th className="px-6 py-3.5">Items</th>
              <th className="px-6 py-3.5">Total Amount</th>
              <th className="px-6 py-3.5">Payment</th>
              <th className="px-6 py-3.5">Fulfillment Status</th>
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-indigo-600">{order.id}</td>
                <td className="px-6 py-4 font-medium text-slate-900">{order.customer}</td>
                <td className="px-6 py-4">{order.items} items</td>
                <td className="px-6 py-4 font-bold text-slate-900">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <Badge variant={order.payment === "PAID" ? "success" : "neutral"}>{order.payment}</Badge>
                </td>
                <td className="px-6 py-4">
                  {order.status === "PROCESSING" && <Badge variant="warning">Processing</Badge>}
                  {order.status === "SHIPPED" && <Badge variant="info">Shipped</Badge>}
                  {order.status === "DELIVERED" && <Badge variant="success">Delivered</Badge>}
                  {order.status === "CANCELLED" && <Badge variant="danger">Cancelled (Restocked)</Badge>}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg">
                    <Download className="w-4 h-4" />
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
