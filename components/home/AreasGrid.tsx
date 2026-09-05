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
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-[#9C7737]">
                {t('home.areasGrid.eyebrow')} · Especialidades
              </p>
            </div>
            <h2 className="mt-4 text-[38px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.12] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[500px] font-sans text-[17px] sm:text-[18px] leading-[1.7] text-[#424956]">
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
                className={`group relative block w-full border-t border-[#DDD7CC] py-8 sm:py-10 px-6 sm:px-10 transition-all duration-300 ${
                  isHoveredOrActive
                    ? 'bg-[#101D32] text-white'
                    : 'bg-[#FCFBF8] text-[#101D32] hover:bg-[#101D32] hover:text-white'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Column 1: Large Gold Numeral + Area Name (6 cols) */}
                  <div className="lg:col-span-6 flex items-start sm:items-center gap-6 sm:gap-8">
                    <span 
                      className={`font-display text-[32px] sm:text-[38px] font-semibold transition-all duration-300 ${
                        isHoveredOrActive ? 'text-[#B8934C] translate-x-1' : 'text-[#9C7737] group-hover:text-[#B8934C] group-hover:translate-x-1'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[26px] sm:text-[30px] font-semibold leading-tight transition-colors">
                        {area.name}
                      </h3>
                      <p className={`mt-1 font-sans text-[13px] font-bold uppercase tracking-[0.16em] ${
                        isHoveredOrActive ? 'text-[#B8934C]' : 'text-[#555E6D] group-hover:text-[#B8934C]'
                      }`}>
                        Especialidad Jurídica
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Tagline & Top Service Summary (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <p className={`font-sans text-[16px] sm:text-[16.5px] leading-[1.65] ${
                      isHoveredOrActive ? 'text-[#D4DEEB]' : 'text-[#424956] group-hover:text-[#D4DEEB]'
                    }`}>
                      {area.tagline}
                    </p>
                    
                    {/* Inline Key Services Preview */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[13.5px]">
                      {area.services.slice(0, 2).map((srv, sIdx) => (
                        <span 
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 ${
                            isHoveredOrActive ? 'text-white/80' : 'text-[#1A1F28] group-hover:text-white/80'
                          }`}
                        >
                          <span className="text-[#9C7737] font-bold">―</span>
                          <span className="truncate max-w-[280px]">{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Big Editorial Arrow (1 col) */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <span 
                      className={`font-display text-[32px] transition-transform duration-300 ${
                        isHoveredOrActive ? 'text-[#B8934C] translate-x-2' : 'text-[#9C7737] group-hover:text-[#B8934C] group-hover:translate-x-2'
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
        <div className="mt-16 border border-[#101D32] bg-[#101D32] p-10 sm:p-14 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#B8934C]">
                Orientación Legal Personalizada
              </span>
              <h3 className="mt-3 text-[28px] sm:text-[34px] font-semibold text-white">
                {t('home.areasGrid.ctaCardTitle')}
              </h3>
              <p className="mt-3 font-sans text-[17px] leading-[1.7] text-[#D4DEEB]">
                {t('home.areasGrid.ctaCardBody')}
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-[#B8934C] !border-[#B8934C] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32] min-h-[56px] px-10 text-[16px]"
            >
              {t('common.cta.letsTalk')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
