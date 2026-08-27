import React from "react";
import { cn } from "../utils.js";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "neutral",
  size = "md",
  ...props
}) => {
  const variants = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    info: "bg-sky-50 text-sky-700 border-sky-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200"
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 font-medium border rounded-full",
    md: "text-xs px-2.5 py-1 font-semibold border rounded-full"
  };

  return (
    <span className={cn("inline-flex items-center gap-1", variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
