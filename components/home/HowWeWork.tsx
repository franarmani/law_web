// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { eyebrow, title, steps } = getDictionary().home.howWeWork

  const stepNumbers = ['01', '02', '03', '04']

  return (
    <section className="w-full bg-[#FCFBF8] py-24 lg:py-32 border-t border-[#DDD7CC]" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
              {eyebrow}
            </p>
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
            {title}
          </h2>
          <p className="mt-4 font-sans text-[16px] sm:text-[17px] text-[#5F6670]">
            Un método de trabajo estructurado para garantizar claridad, agilidad y transparencia en cada etapa.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="relative mt-16">
          {/* Continuous Line (Desktop) */}
          <div
            className="absolute left-6 right-6 top-8 hidden h-[2px] bg-[#DDD7CC] lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex flex-col border border-[#DDD7CC] bg-[#F5F1E9] p-8 transition-all duration-200 hover:border-[#A27D3F]"
              >
                {/* Step Number Stamp */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-4">
                  <span className="font-display text-[26px] font-semibold text-[#A27D3F]">
                    {stepNumbers[idx]}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6670]">
                    Etapa {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="mt-6 text-[21px] font-semibold text-[#101D32]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 font-sans text-[15.5px] sm:text-[16px] leading-[1.65] text-[#5F6670]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
