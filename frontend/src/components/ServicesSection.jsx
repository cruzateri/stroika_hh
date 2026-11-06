import { Hammer, Paintbrush, Trash2, Home, Mountain, Users } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ServicesSection() {
  const services = [
    { 
      icon: <Hammer size={28} />, 
      title: 'Общестроительные работы', 
      description: 'Кладка, монтаж, бетонные и железобетонные конструкции.' 
    },
    { 
      icon: <Paintbrush size={28} />, 
      title: 'Отделка и ремонт', 
      description: 'Черновая и чистовая отделка помещений под ключ.' 
    },
    { 
      icon: <Trash2 size={28} />, 
      title: 'Демонтаж', 
      description: 'Разборка конструкций, вывоз и уборка строительного мусора.' 
    },
    { 
      icon: <Home size={28} />, 
      title: 'Кровля и фасады', 
      description: 'Монтаж кровли, утепление и облицовка фасадов.' 
    },
    { 
      icon: <Mountain size={28} />, 
      title: 'Земляные работы', 
      description: 'Котлованы, траншеи, благоустройство территории.' 
    },
    { 
      icon: <Users size={28} />, 
      title: 'Разнорабочие', 
      description: 'Погрузка, подсобные работы, уборка на объекте. Выход от 1 дня.' 
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0C] mb-4">
              Виды работ, которые мы закрываем
            </h2>
            <p className="text-lg text-[#8E8E96] max-w-2xl mx-auto">
              Жилые, коммерческие и промышленные объекты. Состав бригады определяем под задачу.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="bg-[#F6F6F4] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full"
              >
                <div className="w-14 h-14 bg-[#FF5A20]/10 rounded-2xl flex items-center justify-center text-[#FF5A20] mb-5 group-hover:scale-110 group-hover:bg-[#FF5A20] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0C] mb-3">{service.title}</h3>
                <p className="text-[#8E8E96] leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}