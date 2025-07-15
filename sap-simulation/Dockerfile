FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn
EXPOSE 9000
CMD ["uvicorn", "sap:app", "--host", "0.0.0.0", "--port", "9000"]
