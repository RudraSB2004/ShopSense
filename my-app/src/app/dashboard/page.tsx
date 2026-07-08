import Navbar from "@/components/layout/Navbar";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EventSimulator from "@/components/dashboard/EventSimulator";
import EventTimeline from "@/components/dashboard/EventTimeline";
import CurrentState from "@/components/dashboard/CurrentState";
import RecommendationCard from "@/components/dashboard/RecommendationCard";
import ConfidenceCard from "@/components/dashboard/ConfidenceCard";
import SessionCard from "@/components/dashboard/SessionCard";
import ReasonCard from "@/components/dashboard/ReasonCard";
import ScenarioSimulator from "@/components/dashboard/ScenarioSimulator";
export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl p-8">
        <DashboardHeader />

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <ScenarioSimulator />

            <EventTimeline />
          </div>

          <div>
            <SessionCard />

            <CurrentState />

            <ConfidenceCard />

            <RecommendationCard />
            <ReasonCard />
          </div>
        </div>
      </div>
    </>
  );
}