import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar.js";
import { DashboardPage } from "./pages/Dashboard.js";
import { ProductsPage } from "./pages/Products.js";
import { InventoryPage } from "./pages/Inventory.js";
import { OrdersPage } from "./pages/Orders.js";
import { ReportsPage } from "./pages/Reports.js";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/customers" element={<div className="p-8 font-bold">Customer CRM Directory</div>} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<div className="p-8 font-bold">System Warehouse Settings</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
