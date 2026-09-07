// components/areas/ServiceList.tsx
'use client'

import type { Area } from '@/lib/areas'
import { t } from '@/i18n'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Left Column: Heading & Description */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[10.5px] min-[375px]:text-[11px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                {t('areas.ui.serviceList.eyebrow')}
              </p>
            </div>

            <h2 className="mt-2.5 sm:mt-3 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              {t('areas.ui.serviceList.title')}
            </h2>

            <p className="mt-2.5 sm:mt-4 max-w-[460px] font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
              {area.description}
            </p>
          </div>

          {/* Right Column: List of Services */}
          <div className="border border-[#DDD7CC] bg-[#F5F1E9]">
            <ul className="flex flex-col">
              {area.services.map((service, i) => (
                <li
                  key={service}
                  className="flex items-baseline gap-3 sm:gap-5 border-b border-[#DDD7CC] p-3 min-[375px]:p-3.5 last:border-b-0 sm:p-6"
                >
                  <span className="font-display shrink-0 text-[14px] sm:text-[16px] font-semibold text-[#9A7538]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[13px] min-[375px]:text-[13.5px] sm:text-[15px] leading-[1.55] text-[#20242A]">
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

