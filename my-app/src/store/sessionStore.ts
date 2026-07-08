"use client";

import { create } from "zustand";
import { ShopperEvent } from "@/types/session";

interface SessionStore {
  events: ShopperEvent[];

  state: string;

  confidence: number;

  recommendation: string;

  reason : string;

  addEvent: (event: ShopperEvent) => void;

  setPrediction: (
    state: string,
    confidence: number,
    recommendation: string,
    reason: string
  ) => void;

  clearEvents: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  events: [],

  state: "Browser",

  confidence: 0,

  recommendation: "No Recommendation",

  reason: "" ,

  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),

  setPrediction: (
    state,
    confidence,
    recommendation,
    reason
  ) =>
    set({
      state,
      confidence,
      recommendation,
      reason
    }),

  clearEvents: () =>
    set({
      events: [],
      state: "Browser",
      confidence: 0,
      recommendation: "No Recommendation",
      reason: ""
    }),
}));