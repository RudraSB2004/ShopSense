from services.redis_service import (
    get_events,
    save_events
)
from services.redis_service import save_events

class SessionService:
    @staticmethod
    def append_event(event):
        history = get_events(event.sessionId)
        history.append(event.model_dump())

        save_events(
            event.sessionId,
            history
        )

        return history
    @staticmethod
    def replace_session(
        session_id: str,
        events: list
    ):
        save_events(
            session_id,
            events
        )
        return events