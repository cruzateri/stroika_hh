from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Разрешаем абсолютно любые запросы, методы и заголовки для тестов
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Application(BaseModel):
    name: str | None = None
    phone: str
    message: str | None = None

# Тестовый эндпоинт, чтобы проверить работу в браузере
@app.get("/")
async def root():
    return {"status": "working", "message": "FastAPI сервер готов к работе!"}

@app.post("/api/applications")
async def create_application(data: Application):
    print("\n" + "="*40)
    print("🔥 ПОЛУЧЕНА НОВАЯ ЗАЯВКА!")
    print(f"👤 Имя: {data.name}")
    print(f"📞 Телефон: {data.phone}")
    print(f"💬 Сообщение: {data.message}")
    print("="*40 + "\n")
    return {"status": "success", "message": "Заявка успешно получена тестовым сервером!"}
