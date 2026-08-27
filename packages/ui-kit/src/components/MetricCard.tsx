import React from "react";
import { cn } from "../utils.js";

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  subtitle,
  className
}) => {
  return (
    <div className={cn("p-6 bg-white rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        {icon && <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{icon}</div>}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-slate-900">{value}</span>
        {change && (
          <span className={cn("text-xs font-semibold px-1.5 py-0.5 rounded", isPositive ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50")}>
            {isPositive ? "+" : ""}{change}
          </span>
        )}
      </div>
      {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
    </div>
  );
};
