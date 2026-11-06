import { useEffect, useRef, useState } from 'react';

export default function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Извлекаем число и суффикс (например, "250" и "+")
    const match = target.toString().match(/(\d+)(.*)/);
    const num = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000; // 2 секунды на анимацию
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 } // Запуск, когда 30% элемента видно
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{target.toString().replace(/\d+/, '')} {/* Добавляем оригинальный суффикс, если он был */}
    </span>
  );
}