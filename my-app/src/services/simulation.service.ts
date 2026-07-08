export interface SimulationRequest {
    sessionId : string;
    scenario : string
}

export async function  simulateScenario(payload:SimulationRequest) {
    const response = await fetch("/api/simulate", {
        method: "POST",
          headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
    });
    if(!response.ok) {
        throw new Error("Simulation failed")
    }
    return response.json(); 
}