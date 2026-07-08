"use client";

import { useSessionStore } from "@/store/sessionStore";

export default function ConfidenceCard() {
  const confidence = useSessionStore(
    (s) => s.confidence
  );

  return (
    <div className="mt-6 rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-bold">
        Confidence
      </h2>

      <div className="h-4 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{
            width: `${confidence}%`,
          }}
        />
      </div>

      <p className="mt-2 font-semibold">
        {confidence}%
      </p>
    </div>
  );
}