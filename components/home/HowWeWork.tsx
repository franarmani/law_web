// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { eyebrow, title, steps } = getDictionary().home.howWeWork

  const stepNumbers = ['01', '02', '03', '04']

  return (
    <section className="w-full bg-[#FCFBF8] py-24 lg:py-28 border-t border-[#DDD7CC]" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-10 border-b border-[#DDD7CC]">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
              {eyebrow}
            </p>
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
            {title}
          </h2>
          <p className="mt-4 font-sans text-[16.5px] sm:text-[17.5px] text-[#4A5260]">
            Un método de trabajo estructurado para garantizar claridad, agilidad y transparencia en cada etapa procesal.
          </p>
        </div>

        {/* 4 Stages Editorial Columns */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'lg:border-l lg:border-[#DDD7CC] lg:pl-8 xl:pl-10' : ''
              } ${idx !== 3 ? 'lg:pr-8 xl:pr-10' : ''}`}
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-4">
                  <span className="font-display text-[32px] font-semibold text-[#9C7737]">
                    {stepNumbers[idx]}
                  </span>
                  <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#555E6D]">
                    Etapa {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="mt-6 text-[22px] font-semibold text-[#101D32]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3.5 font-sans text-[16px] leading-[1.7] text-[#4A5260]">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 h-1 w-10 bg-[#9C7737]/30" aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
