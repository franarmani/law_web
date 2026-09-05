// components/areas/ServiceList.tsx
'use client'

import type { Area } from '@/lib/areas'
import { t } from '@/i18n'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="w-full bg-[#FCFBF8] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Left Column: Heading & Description */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {t('areas.ui.serviceList.eyebrow')}
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] font-semibold leading-[1.2] text-[#101D32]">
              {t('areas.ui.serviceList.title')}
            </h2>

            <p className="mt-6 max-w-[460px] font-sans text-[16.5px] sm:text-[17.5px] leading-[1.75] text-[#5F6670]">
              {area.description}
            </p>
          </div>

          {/* Right Column: List of Services */}
          <div className="border border-[#DDD7CC] bg-[#F5F1E9]">
            <ul className="flex flex-col">
              {area.services.map((service, i) => (
                <li
                  key={service}
                  className="flex items-baseline gap-6 border-b border-[#DDD7CC] p-6 last:border-b-0 sm:p-7"
                >
                  <span className="font-display shrink-0 text-[18px] font-semibold text-[#A27D3F]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[16px] sm:text-[16.5px] leading-[1.65] text-[#20242A]">
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
