from fastapi import APIRouter

from models.simulation import SimulationRequest

from services.session_service import SessionService
from services.groq_service import GroqService
from services.scenarios_service import ScenarioService

router = APIRouter()


@router.post("/simulate")
async def simulate(request: SimulationRequest):

    events = ScenarioService.get_events(
        request.scenario
    )

    SessionService.replace_session(
        request.sessionId,
        events
    )

    classification = GroqService.classify(events)

    return {
        "sessionId": request.sessionId,
        "scenario": request.scenario,
        "events": events,
        "classification": classification
    }