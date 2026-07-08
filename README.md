# 🛍️ ShopSense AI - Ecommerce Personalization Rules Engine

An AI-powered Ecommerce Personalization Engine that analyzes shopper behavior and recommends the next best action using LLMs.

Built with **Next.js**, **FastAPI**, **Redis**, and **Groq Llama 3**.

---

## 📌 Overview

Traditional ecommerce websites react to user clicks.

ShopSense AI goes one step further by **understanding user intent**.

Given a sequence of shopper events, the system classifies the shopper into different behavioral states such as:

- Browser
- Comparer
- High Intent
- Buyer
- Cart Abandoner

and recommends the next best personalization strategy.

---

# 🏗 Architecture

```
                    Next.js Dashboard
                           │
                           ▼
                  Next.js API Routes
                           │
                           ▼
                      FastAPI Backend
                           │
            ┌──────────────┴──────────────┐
            ▼                             ▼
         Redis Cache                  Groq LLM
            │                             │
            └──────────────┬──────────────┘
                           ▼
                    AI Classification
                           │
                           ▼
                     Dashboard Updates
```

---

# 🚀 Features

- AI Shopper Classification
- Event Simulation Engine
- Redis Session Storage
- Groq Llama 3 Integration
- Next.js Dashboard
- FastAPI Backend
- REST API Architecture
- AI Recommendation Engine
- Explainable AI (Reasoning)
- Zustand State Management

---

# 🧠 Shopper States

The AI predicts one of the following shopper states:

| State          | Description                          |
| -------------- | ------------------------------------ |
| Browser        | User is casually browsing products   |
| Comparer       | User is comparing multiple products  |
| Interested     | User shows buying interest           |
| High Intent    | User is close to purchasing          |
| Buyer          | User completed checkout              |
| Cart Abandoner | User left after adding items to cart |

---

# 🤖 AI Response

Example AI response:

```json
{
  "state": "Comparer",
  "confidence": 95,
  "recommendation": "Show Product Comparison Table",
  "reason": "The shopper viewed competing products before making a decision."
}
```

---

# 🖥 Tech Stack

## Frontend

- Next.js 16
- TypeScript
- Tailwind CSS v4
- ShadCN UI
- Zustand

---

## Backend

- FastAPI
- Redis
- Groq SDK
- Pydantic

---

## AI

- Llama 3.1 8B Instant (Groq)

---

# 📂 Project Structure

```
Helium/

│
├── frontend/
│
│   ├── src/
│   │
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── store/
│   └── data/
│
└── backend/
    │
    ├── app.py
    ├── config.py
    ├── routes/
    ├── services/
    ├── models/
    ├── prompts/
    ├── data/
    └── .env
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/shopsense-ai.git

cd shopsense-ai
```

---

## 2. Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:3000
```

---

## 3. Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

Runs on

```
http://127.0.0.1:8000
```

Swagger UI

```
http://127.0.0.1:8000/docs
```

---

## 4. Redis

Using Docker

```bash
docker run -d \
--name shopsense-redis \
-p 6379:6379 \
redis:7
```

Verify

```bash
docker ps
```

---

## 5. Environment Variables

Create

```
backend/.env
```

```env
REDIS_HOST=localhost
REDIS_PORT=6379

GROQ_API_KEY=YOUR_GROQ_API_KEY

MODEL_NAME=llama-3.1-8b-instant
```

---

# 🧪 Demo Scenarios

The dashboard includes simulated shopper journeys.

Available scenarios:

- Browser
- Comparer
- High Intent
- Buyer
- Cart Abandoner

Each scenario generates realistic shopping events that are stored in Redis and classified by the AI.

---

# 📊 Dashboard

The dashboard displays

- Shopper State
- Confidence Score
- AI Recommendation
- AI Reasoning
- Event Timeline

---

# API Endpoints

## Simulate Shopper

```
POST /simulate
```

Request

```json
{
  "sessionId": "demo-user",
  "scenario": "comparer"
}
```

Response

```json
{
  "classification": {
    "state": "Comparer",
    "confidence": 95,
    "recommendation": "Show Comparison Table",
    "reason": "Customer compared multiple competing products."
  }
}
```

---

## Event API

```
POST /events
```

Stores shopper events in Redis.

---

# Future Improvements

- Real Ecommerce Integration
- Authentication
- PostgreSQL
- Coupon Recommendation Engine
- Real-time Event Streaming
- Analytics Dashboard
- LangGraph Multi-Agent Workflow
- Vector Database Integration
- A/B Testing Support

---

# Why Redis?

Redis stores temporary shopper sessions.

This allows the AI to analyze complete browsing history without repeatedly sending the full event history from the frontend.

---

# Why Groq?

Groq provides extremely fast LLM inference, making it suitable for real-time ecommerce personalization.

---

# Future AI Enhancements

- Dynamic Discounts
- Personalized Coupons
- Cross-selling
- Upselling
- Churn Prediction
- Product Recommendation
- Marketing Email Generation

---

# License

MIT License

---

## Author

**Rudra Shankar Biswas**

Built as part of an AI Engineering Assignment using modern full-stack technologies.
