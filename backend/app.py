from fastapi import FastAPI
from routes.events import router as events_router
from routes.simulate import router as simulate_router
app = FastAPI(
    title = "Shopsense AI",
    version="1.0.0"
)

@app.get("/")
async def home():
    return {
        "status": "Running"
    }

app.include_router(events_router)
app.include_router(simulate_router)