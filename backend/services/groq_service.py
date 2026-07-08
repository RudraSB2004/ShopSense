import json
from groq import Groq
from config import GROQ_API_KEY
from config import MODEL_NAME

from prompts.shopper_prompt import SYSTEM_PROMPT
client = Groq(api_key=GROQ_API_KEY)

class GroqService:
    @staticmethod
    def classify(events):
        completion = client.chat.completions.create(
            model=MODEL_NAME,
            response_format={
                "type": "json_object"

            },
            messages=[
                {
                    "role" : "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content" : json.dumps(events, indent=2)
                }
            ]
        )

        return json.loads(
            completion.choices[0].message.content
        )