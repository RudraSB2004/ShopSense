"use client";

import { useSessionStore } from "@/store/sessionStore";

export default function SessionCard() {
  const events = useSessionStore((state) => state.events);

  return (
    <div className="mb-6 rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-bold">
        Session
      </h2>

      <p>
        Session ID:
      </p>

      <p className="font-bold">
        DEMO-001
      </p>

      <p className="mt-3">
        Events:
      </p>

      <p className="font-bold">
        {events.length}
      </p>
    </div>
  );
}