from fastapi import FastAPI, Request

app = FastAPI()

@app.post("/ai/intent")
async def detect_intent(req: Request):
    data = await req.json()
    message = data.get("message", "").lower()
    if "leave" in message:
        return {"intent": "apply_leave"}
    elif "po" in message:
        return {"intent": "raise_po"}
    else:
        return {"intent": "unknown"}
