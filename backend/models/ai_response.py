from pydantic import BaseModel

class AIResponse(BaseModel):
    state: str
    confidence: int
    recommendation: str
    reason: str