import React, { useState } from "react";
import { ShoppingBag, CheckCircle, ShieldAlert, Truck } from "lucide-react";

export const App: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-indigo-600">StockPulse Store</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold">
          <ShoppingBag className="w-4 h-4" /> Cart ({cart.length})
        </button>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Featured Catalog</h1>
          <p className="text-sm text-slate-500">Direct real-time inventory allocation prevents out-of-stock orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-full h-44 bg-slate-100 rounded-lg mb-4 flex items-center justify-center font-bold text-slate-400">
              Product Image
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">In Stock</span>
              <span className="text-sm font-bold text-slate-900">$149.99</span>
            </div>
            <h3 className="mt-2 font-bold text-slate-900">Apex Wireless ANC Headphones</h3>
            <p className="text-xs text-slate-500 mt-1">Noise cancelling, 40h battery life</p>
            <button
              onClick={() => setCart([...cart, { id: "1", name: "Apex Wireless ANC Headphones", price: 149.99 }])}
              className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
