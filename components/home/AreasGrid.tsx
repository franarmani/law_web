// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreasGrid() {
  return (
    <section id="areas" className="w-full bg-[#F5F1E9] py-14 sm:py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header: Independent rows on mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8 pb-7 sm:pb-10 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Áreas de práctica</span>
                <span className="hidden sm:inline">Áreas de práctica · Especialidades</span>
              </p>
            </div>
            <h2 className="mt-3 sm:mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.16] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[460px] font-sans text-[15px] sm:text-[16.5px] leading-[1.65] text-[#59616C]">
            {t('home.areasGrid.description')}
          </p>
        </div>

        {/* Editorial Signature List */}
        <div className="border-b border-[#DDD7CC]">
          {areas.map((area, i) => {
            return (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group relative block w-full border-t border-[#DDD7CC] py-5 sm:py-6 lg:py-7 px-4 min-[375px]:px-5 sm:px-7 lg:px-8 bg-[#FCFBF8] text-[#101D32] transition-colors duration-150 [@media(hover:hover)]:hover:bg-[#101D32] [@media(hover:hover)]:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
              >
                {/* Desktop layout: 12-column grid */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
                  {/* Column 1: Numeral + Name (6 cols) */}
                  <div className="lg:col-span-6 flex items-center gap-6">
                    <span className="font-display text-[26px] xl:text-[28px] font-semibold text-[#9A7538] shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[22px] xl:text-[24px] font-semibold leading-tight text-[#101D32] [@media(hover:hover)]:group-hover:text-white transition-colors">
                        {area.name}
                      </h3>
                      <p className="mt-0.5 font-sans text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#59616C] [@media(hover:hover)]:group-hover:text-[#9A7538] transition-colors">
                        Especialidad Jurídica
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Tagline & Top Service Summary (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <p className="font-sans text-[15px] leading-[1.6] text-[#59616C] [@media(hover:hover)]:group-hover:text-[#D4DEEB] transition-colors">
                      {area.tagline}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[13px]">
                      {area.services.slice(0, 2).map((srv, sIdx) => (
                        <span 
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 text-[#20242A] [@media(hover:hover)]:group-hover:text-white/80 transition-colors"
                        >
                          <span className="text-[#9A7538] font-bold">―</span>
                          <span className="truncate max-w-[260px]">{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Big Arrow (1 col) */}
                  <div className="lg:col-span-1 flex justify-end">
                    <span className="font-display text-[24px] text-[#9A7538] transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>

                {/* Mobile / Tablet layout: Stacked with flexible header */}
                <div className="flex flex-col lg:hidden">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="font-display text-[18px] sm:text-[22px] font-semibold text-[#9A7538] shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-[17px] sm:text-[20px] font-semibold leading-tight text-[#101D32] truncate sm:whitespace-normal">
                        {area.name}
                      </h3>
                    </div>
                    <span className="font-display text-[19px] text-[#9A7538] shrink-0" aria-hidden="true">
                      →
                    </span>
                  </div>

                  <p className="mt-2 font-sans text-[14px] sm:text-[15px] leading-[1.6] text-[#59616C]">
                    {area.tagline}
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-sans text-[12.5px] sm:text-[13px]">
                    {area.services.slice(0, 2).map((srv, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1.5 text-[#20242A]">
                        <span className="text-[#9A7538] font-bold">―</span>
                        <span>{srv}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Highlighted Full-Width Consultation Banner */}
        <div className="mt-8 sm:mt-12 border border-[#101D32] bg-[#101D32] p-5 sm:p-7 lg:p-10 text-white shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
            <div className="max-w-2xl">
              <span className="font-sans text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                Orientación Legal Personalizada
              </span>
              <h3 className="mt-1.5 text-[20px] sm:text-[26px] font-semibold !text-white">
                {t('home.areasGrid.ctaCardTitle')}
              </h3>
              <p className="mt-1.5 font-sans text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#D4DEEB]">
                {t('home.areasGrid.ctaCardBody')}
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto shrink-0 !bg-[#9A7538] !border-[#9A7538] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32] min-h-[48px] h-[48px] px-7 text-[14px] font-semibold flex items-center justify-center text-center"
            >
              {t('common.cta.letsTalk')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

