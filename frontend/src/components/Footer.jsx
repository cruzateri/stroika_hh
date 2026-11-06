export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] text-white py-16">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Логотип и описание */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">[Название]</h3>
            <p className="text-[#8E8E96] leading-relaxed">
              Бригады и рабочие для строительных объектов.
            </p>
          </div>

          {/* Разделы */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Разделы</h4>
            <ul className="space-y-3">
              <li><a href="#clients" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">Заказчикам</a></li>
              <li><a href="#vacancies" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">Вакансии</a></li>
              <li><a href="#services" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">Услуги</a></li>
              <li><a href="#contacts" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Связаться */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Связаться</h4>
            <ul className="space-y-3">
              <li><a href="tel:+70000000000" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">+7(000) 000-00-00</a></li>
              <li><a href="mailto:info@example.ru" className="text-[#8E8E96] hover:text-[#FF5A20] transition-colors">info@example.ru</a></li>
              <li className="text-[#8E8E96]">Выполняем работы: [регион]</li>
            </ul>
          </div>

          {/* Пустой блок для выравнивания */}
          <div></div>
        </div>

        {/* Разделитель и копирайт */}
        <div className="border-t border-[#2A2A2C] pt-8">
          <p className="text-[#8E8E96] text-sm text-center">
            © [Название]. [ИП/ООО], ИНН [__________], ОГРН [__________]. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}