from pydantic import BaseModel
class Event(BaseModel):
    sessionId: str
    id: str
    type: str
    timestamp: str