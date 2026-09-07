// components/areas/ServiceList.tsx
'use client'

import type { Area } from '@/lib/areas'
import { t } from '@/i18n'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="w-full bg-[#FCFBF8] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Left Column: Heading & Description */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                {t('areas.ui.serviceList.eyebrow')}
              </p>
            </div>

            <h2 className="mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#101D32]">
              {t('areas.ui.serviceList.title')}
            </h2>

            <p className="mt-4 sm:mt-6 max-w-[460px] font-sans text-[15.5px] sm:text-[17.5px] leading-[1.75] text-[#59616C]">
              {area.description}
            </p>
          </div>

          {/* Right Column: List of Services */}
          <div className="border border-[#DDD7CC] bg-[#F5F1E9]">
            <ul className="flex flex-col">
              {area.services.map((service, i) => (
                <li
                  key={service}
                  className="flex items-baseline gap-4 sm:gap-6 border-b border-[#DDD7CC] p-4 min-[375px]:p-5 last:border-b-0 sm:p-7"
                >
                  <span className="font-display shrink-0 text-[16px] sm:text-[18px] font-semibold text-[#9A7538]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[15px] sm:text-[16.5px] leading-[1.65] text-[#20242A]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

