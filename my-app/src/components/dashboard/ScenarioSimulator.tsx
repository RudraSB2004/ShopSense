"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { simulateScenario } from "@/services/simulation.service";

import { useSessionStore } from "@/store/sessionStore";

const SCENARIOS = [
    "browser",
    "comparer",
    "high_intent",
    "buyer",
    "cart_abandoner",
];

export default function ScenarioSimulator() {

    const [scenario, setScenario] = useState("browser");

    const addEvent = useSessionStore(s => s.addEvent);

    const clearEvents = useSessionStore(s => s.clearEvents);

    const setPrediction = useSessionStore(s => s.setPrediction);

    const runSimulation = async () => {

        const response = await simulateScenario({

            sessionId: "demo-user",

            scenario

        });

        clearEvents();

        response.events.forEach(addEvent);

        setPrediction(

            response.classification.state,

            response.classification.confidence,

            response.classification.recommendation,

            response.classification.reason

        );

    }

    return (

        <div className="rounded-xl border p-6 space-y-4">

            <h2 className="text-xl font-bold">
                Scenario Simulator
            </h2>

            <Select
                value={scenario}
                onValueChange={setScenario}
            >

                <SelectTrigger>

                    <SelectValue />

                </SelectTrigger>

                <SelectContent>

                    {SCENARIOS.map(item => (

                        <SelectItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </SelectItem>

                    ))}

                </SelectContent>

            </Select>

            <Button
                onClick={runSimulation}
                className="w-full"
            >
                Run Simulation
            </Button>

        </div>

    );

}