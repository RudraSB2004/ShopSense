"use client";

import { useSessionStore } from "@/store/sessionStore";

export default function EventTimeline() {
  const events = useSessionStore((state) => state.events);

  return (
    <div className="mt-8 rounded-xl border p-6">
      <h2 className="mb-5 text-2xl font-bold">
        Event Timeline
      </h2>

      {events.length === 0 ? (
        <p>No Events Yet</p>
      ) : (
        <div className="space-y-3">
          {events.map((event, index) => (
  <div key={`${event.type}-${index}`}
              className="rounded-lg bg-muted p-3"
            >
              <div className="font-semibold">
                {event.type}
              </div>

              <div className="text-sm text-muted-foreground">
                {event.timestamp}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}