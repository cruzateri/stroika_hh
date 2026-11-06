import { useState } from 'react';
import FadeIn from './FadeIn';

export default function FinalCTASection() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://stroika-backend.onrender.com/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message: "Заявка из нижней секции сайта" })
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('Заявка успешно отправлена на Python-сервер!');
        setName('');
        setPhone('');
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
      alert('Ошибка: Не удалось связаться с Python-сервером.');
    }
  };

  return (
    <section id="contacts" className="py-24 bg-gradient-to-br from-[#FF5A20] to-[#E4521E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Расскажите о задаче.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Вернёмся с предложением в течение рабочего дня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-white text-[#FF5A20] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Оставить заявку
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
              Контакты
            </button>
          </div>
        </FadeIn>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative text-gray-800">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-[#E4521E]">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ваше имя</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван" 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF5A20]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00" 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF5A20]"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#FF5A20] text-white p-3 rounded-lg font-semibold hover:bg-[#E4521E] transition"
              >
                Отправить бэкенду
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
