"use client";

import { useSessionStore } from "@/store/sessionStore";

export default function ReasonCard() {
  const reason = useSessionStore((s) => s.reason);

  return (
    <div className="rounded-xl border p-5">
      <h2 className="mb-4 text-xl font-bold">
        AI Reasoning
      </h2>

      <p>{reason}</p>
    </div>
  );
}