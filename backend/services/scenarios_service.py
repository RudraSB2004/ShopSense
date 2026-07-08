from data.scenarios import SCENARIOS

class ScenarioService:
    @staticmethod
    def get_events(scenario: str):
        if scenario not in SCENARIOS:
            return []
        return SCENARIOS[scenario]
    