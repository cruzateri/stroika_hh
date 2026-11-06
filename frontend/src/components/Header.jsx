import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Заказчикам', href: '#clients' },
    { name: 'Вакансии', href: '#vacancies' },
    { name: 'Услуги', href: '#services' },
    { name: 'Оплата', href: '#pricing' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[80rem] mx-auto px-4 flex items-center justify-between">
        {/* Логотип */}
        <a href="#" className="text-2xl font-bold text-[#0A0A0C] tracking-tight">
          [Название]
        </a>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#0A0A0C] font-medium hover:text-[#FF5A20] transition-colors relative group"
            >
              {link.name}
              {/* Анимированное подчеркивание */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5A20] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Правая часть для десктопа */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+70000000000" className="flex items-center gap-2 text-[#0A0A0C] font-semibold hover:text-[#FF5A20] transition-colors">
            <Phone size={18} />
            +7(000) 000-00-00
          </a>
          <button className="bg-[#FF5A20] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E4521E] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Оставить заявку
          </button>
        </div>

        {/* Кнопка гамбургера для мобильных */}
        <button 
          className="md:hidden text-[#0A0A0C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-[#E8E8E8] py-6 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-[#0A0A0C] hover:text-[#FF5A20]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+70000000000" className="text-lg font-semibold text-[#0A0A0C] flex items-center gap-2">
            <Phone size={18} /> +7(000) 000-00-00
          </a>
          <button className="bg-[#FF5A20] text-white px-6 py-3 rounded-full font-semibold w-full">
            Оставить заявку
          </button>
        </div>
      )}
    </header>
  );
}