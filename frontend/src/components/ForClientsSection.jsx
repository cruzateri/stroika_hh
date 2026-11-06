import { Users, Clock, RefreshCw } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ForClientsSection() {
  const features = [
    { icon: <Users size={24} />, text: 'Бригады строителей и разнорабочих' },
    { icon: <Clock size={24} />, text: 'Работа за смену или за объём' },
    { icon: <RefreshCw size={24} />, text: 'Замена сотрудника по запросу' }
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0C]">Заказчикам</h2>
              <h3 className="text-2xl text-[#0A0A0C] font-medium">Бригада под ваш объект и бюджет</h3>
              <p className="text-lg text-[#8E8E96] max-w-xl">
                Строительные компании и частные заказчики оставляют заявку, мы подбираем состав, согласуем условия и выводим людей на объект.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-[#FF5A20] mt-1 bg-[#FF5A20]/10 p-2 rounded-lg">{feature.icon}</div>
                  <p className="text-lg text-[#0A0A0C] font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#FF5A20] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E4521E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Оставить заявку
            </button>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={`${import.meta.env.BASE_URL}images/brigade.jpg`} 
              alt="Строительная бригада"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
