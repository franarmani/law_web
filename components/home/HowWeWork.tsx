// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { eyebrow, title, steps } = getDictionary().home.howWeWork

  const stepNumbers = ['01', '02', '03', '04']

  return (
    <section id="metodo" className="w-full bg-[#FCFBF8] py-20 lg:py-24 border-t border-[#DDD7CC]" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-10 border-b border-[#DDD7CC]">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
              {eyebrow} · Metodología
            </p>
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.15] text-[#101D32]">
            {title}
          </h2>
          <p className="mt-3 font-sans text-[16px] sm:text-[17px] text-[#59616C]">
            Un método de trabajo estructurado para garantizar claridad, agilidad y transparencia en cada etapa procesal.
          </p>
        </div>

        {/* 4 Stages Structure with Connecting Line */}
        <div className="relative mt-12">
          {/* Superior Connecting Horizontal Line (Desktop) */}
          <div
            className="absolute left-4 right-4 top-5 hidden h-[1px] bg-[#DDD7CC] lg:block"
            aria-hidden="true"
          />

          {/* Left Connecting Vertical Line (Mobile/Tablet) */}
          <div
            className="absolute left-5 top-5 bottom-5 w-[1px] bg-[#DDD7CC] lg:hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex flex-col justify-between pl-12 lg:pl-0 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#DDD7CC] lg:pl-7 xl:pl-8' : ''
                } ${idx !== 3 ? 'lg:pr-7 xl:pr-8' : ''}`}
              >
                <div>
                  {/* Step Number Anchor */}
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[15px] font-semibold text-[#9A7538] shadow-xs -ml-12 lg:ml-0">
                      {stepNumbers[idx]}
                    </span>
                    <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#59616C]">
                      Etapa {idx + 1}
                    </span>
                  </div>

                  {/* Step Title (20 px) */}
                  <h3 className="mt-6 text-[20px] font-semibold text-[#101D32] leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description (15-16 px) */}
                  <p className="mt-2.5 font-sans text-[15px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
