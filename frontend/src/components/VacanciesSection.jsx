import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function VacanciesSection() {
  const vacancies = [
    { title: 'Разнорабочий', type: 'Смены, дневная оплата', price: 'от 3 000 ₽' },
    { title: 'Монтажник', type: 'Объёмы, сдельная оплата', price: 'от 5 000 ₽' },
    { title: 'Отделочник', type: 'Объёмы, сдельная оплата', price: 'от 5 500 ₽' },
    { title: 'Бригадир', type: 'Руководство бригадой', price: 'от 7 000 ₽' }
  ];

  return (
    <section id="vacancies" className="py-24 bg-[#F6F6F4]">
      <div className="max-w-[80rem] mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0C]">
              Открытые вакансии
            </h2>
            <a href="#" className="text-[#FF5A20] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Все вакансии <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vacancies.map((vacancy, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="bg-white rounded-2xl p-6 border border-[#E8E8E8] hover:border-[#FF5A20] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                <h3 className="text-xl font-bold text-[#0A0A0C] mb-2">{vacancy.title}</h3>
                <p className="text-[#8E8E96] mb-4 flex-grow">{vacancy.type}</p>
                <p className="text-lg font-bold text-[#FF5A20]">{vacancy.price}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}