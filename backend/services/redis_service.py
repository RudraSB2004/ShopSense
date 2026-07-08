import json
import redis

from config import REDIS_HOST, REDIS_PORT

redis_client = redis.Redis(
    host=REDIS_HOST,
    port=REDIS_PORT,
    decode_responses=True
)
def get_events(session_id: str) :
    data = redis_client.get(f"session:{session_id}")
    if data is None:
        return []
    return json.loads(data)

def save_events(
        session_id: str,
        events: list
):
    redis_client.set(
        f"session:{session_id}",
        json.dumps(events),
        ex=3600
    )