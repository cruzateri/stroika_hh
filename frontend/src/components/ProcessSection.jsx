import FadeIn from './FadeIn';

export default function ProcessSection() {
  const steps = [
    { 
      number: '1', 
      title: 'Заявка', 
      description: 'Вы описываете объект, объём работ и сроки.' 
    },
    { 
      number: '2', 
      title: 'Подбор бригады', 
      description: 'Предлагаем состав, условия и стоимость.' 
    },
    { 
      number: '3', 
      title: 'Выход на объект', 
      description: 'Подписываем договор, бригада приступает к работе.' 
    },
    { 
      number: '4', 
      title: 'Контроль и закрытие', 
      description: 'Координатор на связи, работы закрываем актом.' 
    }
  ];

  return (
    <section className="py-24 bg-[#F6F6F4]">
      <div className="max-w-[80rem] mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0C] text-center mb-16">
            Четыре шага до выхода на объект
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="relative">
                {/* Соединительная линия (только на десктопе) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-[calc(100%+2rem)] h-0.5 bg-[#E8E8E8] -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FF5A20] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0C] mb-3 text-center lg:text-left">{step.title}</h3>
                  <p className="text-[#8E8E96] leading-relaxed text-center lg:text-left">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}