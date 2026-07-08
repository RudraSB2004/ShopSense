from fastapi import APIRouter
from models.event import Event
from services.session_service import SessionService

router = APIRouter()

@router.post("/events")
async def classify(
    event: Event
): 
    history = SessionService.append_event(
        event
    )
    response = {
        "state" : "Browser",
        "confidence": 25,
        "recommendation" : "Show Trending Product",
        "events": history
    }
    return response