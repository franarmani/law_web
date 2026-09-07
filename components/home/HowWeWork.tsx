// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { title, steps } = getDictionary().home.howWeWork
  const stepNumbers = ['01', '02', '03', '04']

  return (
    <section id="metodo" className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-24 border-t border-[#DDD7CC]" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-5 sm:pb-8 border-b border-[#DDD7CC]">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              <span className="sm:hidden">Método</span>
              <span className="hidden sm:inline">Método · Proceso de Trabajo</span>
            </p>
          </div>
          <h2 className="mt-2.5 sm:mt-3 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
            {title}
          </h2>
          <p className="mt-1.5 font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
            Un método de trabajo estructurado para garantizar claridad, agilidad y transparencia en cada etapa procesal.
          </p>
        </div>

        {/* Desktop 4-column layout */}
        <div className="relative mt-8 sm:mt-10 hidden lg:block">
          <div
            className="absolute left-4 right-4 top-5 h-[1px] bg-[#DDD7CC]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex flex-col justify-between ${
                  idx !== 0 ? 'border-l border-[#DDD7CC] pl-6 xl:pl-7' : ''
                } ${idx !== 3 ? 'pr-6 xl:pr-7' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[13px] font-semibold text-[#9A7538] shadow-xs">
                      {stepNumbers[idx]}
                    </span>
                    <span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#59616C]">
                      Etapa {idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[17px] xl:text-[18px] font-semibold text-[#101D32] leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 font-sans text-[13.5px] leading-[1.6] text-[#59616C]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="mt-6 sm:mt-8 lg:hidden flex flex-col">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-3.5 pb-5 last:pb-0 relative">
              {idx !== steps.length - 1 && (
                <div 
                  className="absolute left-[16px] top-8 bottom-0 w-px bg-[#DDD7CC]" 
                  aria-hidden="true" 
                />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[12px] font-semibold text-[#9A7538] shadow-xs">
                {stepNumbers[idx]}
              </span>
              <div className="pt-0.5">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#9A7538] block">
                  Etapa {idx + 1}
                </span>
                <h3 className="mt-0.5 text-[15px] min-[375px]:text-[15.5px] sm:text-[17px] font-semibold text-[#101D32] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 font-sans text-[12.5px] min-[375px]:text-[13px] sm:text-[14px] leading-[1.55] text-[#59616C]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

