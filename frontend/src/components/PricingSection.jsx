import FadeIn from './FadeIn';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0C] text-center mb-16">
            Два формата оплаты
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-[#F6F6F4] rounded-2xl p-8 border border-[#E8E8E8] h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#0A0A0C] mb-4">Дневная оплата</h3>
              <p className="text-[#8E8E96] mb-6 flex-grow leading-relaxed">
                Для подсобных и срочных работ. Платите за отработанные смены, без привязки к объёму.
              </p>
              <div className="border-t border-[#E8E8E8] pt-6">
                <p className="text-xl font-bold text-[#FF5A20]">от 3 000 ₽ за человека в смену</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="bg-[#F6F6F4] rounded-2xl p-8 border-2 border-[#FF5A20] h-full flex flex-col relative hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-3 right-8 bg-[#FF5A20] text-white text-sm px-4 py-1 rounded-full font-medium">
                Рекомендуем
              </div>
              <h3 className="text-2xl font-bold text-[#0A0A0C] mb-4">Работа на объём</h3>
              <p className="text-[#8E8E96] mb-6 flex-grow leading-relaxed">
                Для крупных задач: фиксируем стоимость и срок за весь объём, бригада отвечает за результат.
              </p>
              <div className="border-t border-[#E8E8E8] pt-6">
                <p className="text-xl font-bold text-[#FF5A20]">от 500 ₽ за единицу объёма</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}