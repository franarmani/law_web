// components/home/AreasGrid.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreasGrid() {
  const [activeArea, setActiveArea] = useState<string | null>(areas[0]?.slug ?? null)

  return (
    <section id="areas" className="w-full bg-[#F5F1E9] py-28 lg:py-36 border-t border-[#DDD7CC]" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                {t('home.areasGrid.eyebrow')} · Especialidades
              </p>
            </div>
            <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[48px] font-semibold leading-[1.14] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[480px] font-sans text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[#59616C]">
            {t('home.areasGrid.description')}
          </p>
        </div>

        {/* Editorial Signature List (Interactive Full-Width Rows) */}
        <div className="border-b border-[#DDD7CC]">
          {areas.map((area, i) => {
            const isHoveredOrActive = activeArea === area.slug
            return (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                onMouseEnter={() => setActiveArea(area.slug)}
                className={`group relative block w-full border-t border-[#DDD7CC] py-7 sm:py-8 px-6 sm:px-10 transition-all duration-200 ${
                  isHoveredOrActive
                    ? 'bg-[#101D32] text-white'
                    : 'bg-[#FCFBF8] text-[#101D32] hover:bg-[#101D32] hover:text-white'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Column 1: Large Gold Numeral + Area Name (6 cols) */}
                  <div className="lg:col-span-6 flex items-start sm:items-center gap-6 sm:gap-8">
                    <span 
                      className={`font-display text-[30px] sm:text-[34px] font-semibold transition-all duration-200 ${
                        isHoveredOrActive ? 'text-[#9A7538] translate-x-1' : 'text-[#9A7538]'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`text-[24px] sm:text-[28px] font-semibold leading-tight transition-colors ${
                        isHoveredOrActive ? '!text-white' : '!text-[#101D32] group-hover:!text-white'
                      }`}>
                        {area.name}
                      </h3>
                      <p className={`mt-1 font-sans text-[12px] font-bold uppercase tracking-[0.16em] ${
                        isHoveredOrActive ? 'text-[#9A7538]' : 'text-[#59616C]'
                      }`}>
                        Especialidad Jurídica
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Tagline & Top Service Summary (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <p className={`font-sans text-[15.5px] sm:text-[16px] leading-[1.65] ${
                      isHoveredOrActive ? 'text-[#D4DEEB]' : 'text-[#59616C]'
                    }`}>
                      {area.tagline}
                    </p>
                    
                    {/* Inline Key Services Preview */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[13px]">
                      {area.services.slice(0, 2).map((srv, sIdx) => (
                        <span 
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 ${
                            isHoveredOrActive ? 'text-white/80' : 'text-[#20242A]'
                          }`}
                        >
                          <span className="text-[#9A7538] font-bold">―</span>
                          <span className="truncate max-w-[280px]">{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Big Editorial Arrow (1 col) */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <span 
                      className={`font-display text-[28px] transition-transform duration-200 ${
                        isHoveredOrActive ? 'text-[#9A7538] translate-x-2' : 'text-[#9A7538]'
                      }`}
                    >
                      →
                    </span>
                  </div>

                </div>
              </Link>
            )
          })}
        </div>

        {/* Highlighted Full-Width Consultation Banner */}
        <div className="mt-14 border border-[#101D32] bg-[#101D32] p-8 sm:p-12 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                Orientación Legal Personalizada
              </span>
              <h3 className="mt-2.5 text-[26px] sm:text-[30px] font-semibold !text-white">
                {t('home.areasGrid.ctaCardTitle')}
              </h3>
              <p className="mt-2.5 font-sans text-[16px] leading-[1.7] text-[#D4DEEB]">
                {t('home.areasGrid.ctaCardBody')}
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-[#9A7538] !border-[#9A7538] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32] min-h-[50px] px-8 text-[15px]"
            >
              {t('common.cta.letsTalk')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
