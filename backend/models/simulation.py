from pydantic import BaseModel

class SimulationRequest(BaseModel):
    sessionId: str

    scenario: str