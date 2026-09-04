// components/home/HowWeWork.tsx
'use client'

import { getDictionary } from '@/i18n'

export default function HowWeWork() {
  const { eyebrow, title, steps } = getDictionary().home.howWeWork

  return (
    <section className="bg-white py-24 lg:py-36" aria-label="Proceso de trabajo">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
        </div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="absolute left-5 right-5 top-5 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-4 sm:gap-8">
            {steps.map((step) => (
              <div key={step.title} className="relative flex gap-5 sm:block sm:gap-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne bg-white font-display text-[14px] font-light text-champagne">
                  {step.roman}
                </span>
                <div className="sm:mt-6">
                  <p className="font-display text-[17px] font-light text-navy">{step.title}</p>
                  <p className="mt-2.5 max-w-[280px] text-[13px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
