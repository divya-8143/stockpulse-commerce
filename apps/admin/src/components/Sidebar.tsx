import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  AlertTriangle
} from "lucide-react";
import { useAdminStore } from "../store/useStore.js";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const activeAlertCount = useAdminStore((s) => s.activeAlertCount);

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Products & SKUs", path: "/products", icon: Package },
    { name: "Inventory Matrix", path: "/inventory", icon: Boxes, badge: activeAlertCount > 0 ? activeAlertCount : undefined },
    { name: "Orders", path: "/orders", icon: ShoppingCart },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Reports & Analytics", path: "/reports", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col flex-shrink-0 h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
          ⚡
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white">StockPulse OS</h1>
          <p className="text-[11px] text-slate-400">Enterprise Inventory</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </div>
              {item.badge !== undefined && (
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-rose-500 text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-900 border border-indigo-700 flex items-center justify-center font-bold text-indigo-300">
          AD
        </div>
        <div>
          <p className="font-semibold text-white">Admin Lead</p>
          <p className="text-[11px] text-emerald-400">● System Online</p>
        </div>
      </div>
    </aside>
  );
};
