// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { eyebrow, title, steps } = getDictionary().home.howWeWork

  const stepNumbers = ['01', '02', '03', '04']

  return (
    <section className="w-full bg-[#FCFBF8] py-24 lg:py-26 border-t border-[#DDD7CC]" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
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
          <p className="mt-4 font-sans text-[16.5px] sm:text-[17.5px] text-[#424956]">
            Un método de trabajo estructurado para garantizar claridad, agilidad y transparencia en cada etapa procesal.
          </p>
        </div>

        {/* 4 Stages Editorial Structure with Connecting Line */}
        <div className="relative mt-14">
          {/* Superior Connecting Horizontal Line (Desktop) */}
          <div
            className="absolute left-4 right-4 top-5 hidden h-[1.5px] bg-[#DDD7CC] lg:block"
            aria-hidden="true"
          />

          {/* Left Connecting Vertical Line (Mobile/Tablet) */}
          <div
            className="absolute left-6 top-6 bottom-6 w-[1.5px] bg-[#DDD7CC] lg:hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex flex-col justify-between pl-14 lg:pl-0 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#DDD7CC] lg:pl-8 xl:pl-9' : ''
                } ${idx !== 3 ? 'lg:pr-8 xl:pr-9' : ''}`}
              >
                <div>
                  {/* Step Monogram / Number Anchor */}
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-11 w-11 items-center justify-center border border-[#9C7737] bg-[#FCFBF8] font-display text-[18px] font-semibold text-[#9C7737] shadow-sm -ml-14 lg:ml-0">
                      {stepNumbers[idx]}
                    </span>
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#4E5664]">
                      Etapa {idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-7 text-[21px] sm:text-[22px] font-semibold text-[#101D32]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-3.5 font-sans text-[16px] sm:text-[16.5px] leading-[1.7] text-[#424956]">
                    {step.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 h-1 w-12 bg-[#9C7737]/35" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
