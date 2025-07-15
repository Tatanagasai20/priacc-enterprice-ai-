from fastapi import FastAPI

app = FastAPI()

@app.post("/sap/apply-leave")
def apply_leave():
    return {
        "status": "Approved",
        "workflow_id": "HR-REQ-001",
        "timestamp": "2025-07-15T10:00:00"
    }
