// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { areas } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreasGrid() {
  return (
    <section id="areas" className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-20 border-b border-[#DDD7CC]" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-8 pb-5 sm:pb-7 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
              <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Áreas de práctica
              </p>
            </div>
            <h2 className="mt-2 sm:mt-3 font-display text-[22px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[460px] font-sans text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
            {t('home.areasGrid.description')}
          </p>
        </div>

        {/* Practice Areas List: Clean rows with subtle dividers and auto height */}
        <div className="border-b border-[#DDD7CC]">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group relative block w-full border-t border-[#DDD7CC] py-4 sm:py-5 lg:py-6 px-3 min-[375px]:px-4 sm:px-6 lg:px-7 bg-[#FCFBF8] text-[#101D32] transition-colors duration-150 hover:bg-[#F5F1E9]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
            >
              {/* Desktop layout: 12-column grid */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
                {/* Column 1: Numeral + Name (5 cols) */}
                <div className="lg:col-span-5 flex items-center gap-5">
                  <span className="font-display text-[22px] font-semibold text-[#9A7538] shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[19px] xl:text-[21px] font-semibold leading-tight text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                    {area.name}
                  </h3>
                </div>

                {/* Column 2: Short explanation (~12 words) (6 cols) */}
                <div className="lg:col-span-6 flex items-center">
                  <p className="font-sans text-[14.5px] leading-[1.55] text-[#59616C]">
                    {area.tagline}
                  </p>
                </div>

                {/* Column 3: Arrow (1 col) */}
                <div className="lg:col-span-1 flex justify-end">
                  <span className="font-display text-[22px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Mobile / Tablet layout: Name, short ~12-word explanation, and clean arrow */}
              <div className="flex items-center justify-between gap-4 lg:hidden">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[14px] font-semibold text-[#9A7538] shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[16px] min-[375px]:text-[17px] sm:text-[18px] font-semibold leading-snug text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <p className="mt-1 font-sans text-[13.5px] min-[375px]:text-[14px] leading-[1.5] text-[#59616C] pl-5">
                    {area.tagline}
                  </p>
                </div>
                <span className="font-display text-[20px] text-[#9A7538] shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}


