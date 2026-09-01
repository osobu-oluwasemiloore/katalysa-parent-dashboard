"use client";

import { create } from "zustand";
import { DashboardData, Child } from "../types/dashboard";
import { fetchDashboardData } from "../services/api";

interface DashboardState {
  data: DashboardData | null;
  selectedChildId: string | null;
  loading: boolean;
  error: string | null;
  fetchDashboard: () => Promise<void>;
  selectChild: (id: string) => void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  data: null,
  selectedChildId: null,
  loading: false,
  error: null,
  fetchDashboard: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchDashboardData();
      set({ data, loading: false, selectedChildId: data.parent.children[0]?.id ?? null });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      set({ error: message, loading: false });
    }
  },
  selectChild: (id: string) => {
    const state = get();
    if (!state.data) return;
    const found = state.data.parent.children.find((c) => c.id === id);
    if (found) set({ selectedChildId: id });
  },
}));

export function useSelectedChild(): Child | null {
  const { data, selectedChildId } = useDashboardStore();
  if (!data || !selectedChildId) return null;
  return data.parent.children.find((c) => c.id === selectedChildId) ?? null;
}
