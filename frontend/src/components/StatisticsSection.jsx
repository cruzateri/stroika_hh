import FadeIn from './FadeIn';
import AnimatedNumber from './AnimatedNumber';

export default function StatisticsSection() {
  const stats = [
    { number: '10', label: 'лет на рынке' },
    { number: '250+', label: 'завершённых объектов' },
    { number: '40+', label: 'бригад в базе' },
    { number: '500+', label: 'рабочих на объектах' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-[#FF5A20] mb-2">
                  <AnimatedNumber target={stat.number} />
                </div>
                <div className="text-lg text-[#8E8E96] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}