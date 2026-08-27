import { create } from "zustand";

interface AdminState {
  currentWarehouseId: string;
  isSidebarOpen: boolean;
  selectedTimeRange: "7d" | "30d" | "90d" | "year";
  activeAlertCount: number;
  setWarehouse: (id: string) => void;
  toggleSidebar: () => void;
  setTimeRange: (range: "7d" | "30d" | "90d" | "year") => void;
  setAlertCount: (count: number) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  currentWarehouseId: "all",
  isSidebarOpen: true,
  selectedTimeRange: "30d",
  activeAlertCount: 3,
  setWarehouse: (id) => set({ currentWarehouseId: id }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setTimeRange: (range) => set({ selectedTimeRange: range }),
  setAlertCount: (count) => set({ activeAlertCount: count })
}));
