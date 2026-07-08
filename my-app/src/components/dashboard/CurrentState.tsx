"use client";

import { useSessionStore } from "@/store/sessionStore";

export default function CurrentState() {
  const state = useSessionStore((s) => s.state);

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-bold">
        Shopper State
      </h2>

      <p className="text-3xl font-bold text-green-600">
        {state}
      </p>
    </div>
  );
}