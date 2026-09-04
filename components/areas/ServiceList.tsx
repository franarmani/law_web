// components/areas/ServiceList.tsx
'use client'

import type { Area } from '@/lib/areas'
import { t } from '@/i18n'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Column: Heading & Area Description */}
          <div>
            <p className="eyebrow">{t('areas.ui.serviceList.eyebrow')}</p>
            <h2 className="mt-6">{t('areas.ui.serviceList.title')}</h2>
            <p className="mt-5 max-w-[420px]">{area.description}</p>
          </div>

          {/* Right Column: List of Services */}
          <ul className="flex flex-col border-t border-border">
            {area.services.map((service, i) => (
              <li key={service} className="flex items-baseline gap-6 border-b border-border py-6">
                <span className="font-display shrink-0 text-[13px] font-light text-champagne">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[15px] font-light leading-[1.7] text-ink">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
