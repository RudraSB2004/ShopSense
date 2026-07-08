"use client"

import { useSessionStore } from "@/store/sessionStore"
import { Button } from "../ui/button"
import { sendEvent } from "@/services/event.service";

const EVENTS =  [
  { label: "View Product", type: "view_product" },
  { label: "Compare Product", type: "compare_product" },
  { label: "Wishlist", type: "wishlist" },
  { label: "Add To Cart", type: "add_to_cart" },
  { label: "Checkout", type: "checkout" },
];

export default function EventSimulator() {
    const addEvent = useSessionStore((state) => state.addEvent);
    const setPrediction = useSessionStore(
      (state) => state.setPrediction
    )
    async function simulate(type: string) {
  const event = {
    id: crypto.randomUUID(),
    type,
    timestamp: new Date().toLocaleTimeString(),
  };

  try {
    const response = await sendEvent(event);

    setPrediction(
      response.state,
      response.confidence,
      response.recommendation,
      response.reason
    );

    addEvent(event);
  } catch (error) {
    console.error(error);
  }
}

    return (
      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold">
          Event Simulator
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {EVENTS.map((eventItem) => (
            <Button
              key={eventItem.type}
              onClick={() => simulate(eventItem.type)}
            >
              {eventItem.label}
            </Button>
          ))}
        </div>
      </div>
    )
}