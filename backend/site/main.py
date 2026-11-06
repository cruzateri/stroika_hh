from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TELEGRAM_TOKEN = "9200876225:AAEbiDMac945uu8XEjeCQ75C070bW24c84"
TELEGRAM_CHAT_ID = "-1005540406434"

class Application(BaseModel):
    name: str | None = None
    phone: str
    message: str | None = None

@app.get("/")
async def root():
    return {"status": "working", "message": "FastAPI сервер готов к работе!"}

@app.post("/api/applications")
async def create_application(data: Application):
    text = (
        f"🔥 ПОЛУЧЕНА НОВАЯ ЗАЯВКА!\n\n"
        f"👤 Имя: {data.name if data.name else 'Не указано'}\n"
        f"📞 Телефон: {data.phone}\n"
        f"💬 Сообщение: {data.message if data.message else 'Без комментария'}"
    )
    
    try:
        url = f"https://telegram.org/{TELEGRAM_TOKEN}/sendMessage"
        response = requests.post(url, json={"chat_id": TELEGRAM_CHAT_ID, "text": text}, timeout=5)
        print(f"Ответ от Telegram: {response.text}")
    except Exception as e:
        print(f"Ошибка отправки в Telegram: {e}")

    return {"status": "success", "message": "Заявка получена!"}
