export interface EventPayload {
  id: string;
  type: string;
  timestamp: string;
}

export async function sendEvent(event: EventPayload) {
  const response = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    throw new Error("Failed to send event");
  }

  return response.json();
}