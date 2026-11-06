import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'

const WORK_TYPES = [
  'Общестроительные работы',
  'Отделка и ремонт',
  'Демонтаж',
  'Кровля и фасады',
  'Земляные работы',
  'Разнорабочие',
]

const inputClassName =
  'w-full rounded-xl bg-[#F6F6F4] px-4 py-3 text-base text-[#0A0A0C] outline-none transition-all placeholder:text-[#8E8E96] focus:ring-2 focus:ring-[#FF5A20]/30 border border-[#E8E8E8] focus:border-[#FF5A20]'

export default function HeroSection() {
  const [audience, setAudience] = useState('client')
  const [workType, setWorkType] = useState(WORK_TYPES[0])
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Заявка отправлена')
  }

  return (
    <section className="min-h-screen bg-[#F6F6F4] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        
        {/* Левая колонка */}
        <FadeIn>
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0A0C] leading-[1.1] tracking-tight">
              Бригады и рабочие для строительных объектов
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium">
              <span className="block text-[#0A0A0C]">Рабочие для объекта.</span>
              <span className="block text-[#8E8E96]">Объекты для бригад.</span>
            </h2>
            <p className="max-w-xl text-lg text-[#8E8E96] leading-relaxed">
              Подбираем бригады строителей и разнорабочих для заказчиков и берём в
              команду специалистов, которым нужна стабильная работа.
            </p>

            <div className="flex flex-wrap items-end gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-[#8E8E96]">Мне нужны рабочие</span>
                <a
                  href="#zayavka"
                  onClick={() => setAudience('client')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5A20] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#E4521E] hover:scale-105 active:scale-95 hover:shadow-xl"
                >
                  Нужны рабочие
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-[#8E8E96]">Ищу работу</span>
                <a
                  href="#vakansii"
                  onClick={() => setAudience('worker')}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#0A0A0C] bg-white px-8 py-4 text-base font-semibold text-[#0A0A0C] transition-all duration-300 hover:bg-[#0A0A0C] hover:text-white hover:scale-105 active:scale-95"
                >
                  Ищу работу
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Правая колонка (форма) */}
        <FadeIn delay={200}>
          <div
            id="zayavka"
            className="rounded-2xl bg-white p-8 shadow-lg border border-[#E8E8E8]"
          >
            {/* Табы переключения */}
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-full bg-[#F6F6F4] p-1">
              <button
                type="button"
                onClick={() => setAudience('client')}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  audience === 'client'
                    ? 'bg-white text-[#0A0A0C] shadow-sm'
                    : 'bg-transparent text-[#8E8E96] hover:text-[#0A0A0C]'
                }`}
              >
                Мне нужны рабочие
              </button>
              <button
                type="button"
                onClick={() => setAudience('worker')}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  audience === 'worker'
                    ? 'bg-white text-[#0A0A0C] shadow-sm'
                    : 'bg-transparent text-[#8E8E96] hover:text-[#0A0A0C]'
                }`}
              >
                Ищу работу
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-2xl font-bold text-[#0A0A0C]">Заявка на бригаду</h3>
                <p className="mt-1 text-sm text-[#8E8E96]">
                  Ответим в течение рабочего дня с составом и условиями.
                </p>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm text-[#8E8E96]">Вид работ</span>
                <div className="relative">
                  <select
                    name="workType"
                    value={workType}
                    onChange={(event) => setWorkType(event.target.value)}
                    className={`${inputClassName} appearance-none pr-10 cursor-pointer`}
                  >
                    {WORK_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8E8E96]"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm text-[#8E8E96]">Адрес объекта</span>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Город, улица"
                  className={inputClassName}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm text-[#8E8E96]">Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className={inputClassName}
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#FF5A20] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#E4521E] hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
              >
                Получить предложение
              </button>

              <p className="text-center text-xs text-[#8E8E96]">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}