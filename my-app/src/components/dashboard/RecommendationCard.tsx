"use client";

import { Sparkles } from "lucide-react";
import { useSessionStore } from "@/store/sessionStore";

export default function RecommendationCard() {
  const recommendation = useSessionStore(
    (state) => state.recommendation
  );

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-blue-500" />

        <h2 className="text-xl font-bold">
          AI Recommendation
        </h2>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
        <p className="text-base leading-7">
          {recommendation ||
            "Run a simulation to generate an AI recommendation."}
        </p>
      </div>
    </div>
  );
}