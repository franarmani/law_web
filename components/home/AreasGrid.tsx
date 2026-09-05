// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreasGrid() {
  return (
    <section id="areas" className="w-full bg-[#F5F1E9] py-24 lg:py-30" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                {t('home.areasGrid.eyebrow')}
              </p>
            </div>
            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[480px] font-sans text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[#4A5260]">
            {t('home.areasGrid.description')}
          </p>
        </div>

        {/* Editorial Grid (Equal height cards, cleaner services) */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {areas.map((area, i) => (
            <div
              key={area.slug}
              className="group flex h-full flex-col justify-between border border-[#DDD7CC] bg-[#FCFBF8] p-8 sm:p-11 transition-all duration-200 hover:border-[#9C7737] hover:shadow-[0_8px_30px_rgba(16,29,50,0.06)]"
            >
              <div>
                {/* Number & Specialty Tag */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-5">
                  <span className="font-display text-[28px] font-semibold text-[#9C7737]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#555E6D]">
                    Especialidad Jurídica
                  </span>
                </div>

                {/* Area Title */}
                <h3 className="mt-7 text-[24px] sm:text-[27px] font-semibold text-[#101D32] transition-colors group-hover:text-[#9C7737]">
                  {area.name}
                </h3>

                {/* Description */}
                <p className="mt-4 font-sans text-[16px] sm:text-[16.5px] leading-[1.7] text-[#4A5260]">
                  {area.tagline}
                </p>

                {/* 2 to 3 Key Services Highlighted */}
                <ul className="mt-6 space-y-3 border-t border-[#DDD7CC]/60 pt-6">
                  {area.services.slice(0, 2).map((service, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 font-sans text-[14.5px] text-[#1A1F28]">
                      <span className="text-[#9C7737] font-bold text-sm leading-none mt-1">―</span>
                      <span className="leading-snug">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-9 border-t border-[#DDD7CC] pt-6">
                <Link
                  href={`/areas/${area.slug}`}
                  className="link-primary inline-flex items-center text-[14.5px] font-bold"
                >
                  Conocer el área
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted CTA Piece (Navy Card) */}
        <div className="mt-14 border border-[#101D32] bg-[#101D32] p-9 sm:p-12 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#B8934C]">
                Orientación personalizada
              </span>
              <h3 className="mt-3 text-[26px] sm:text-[30px] font-semibold text-white">
                {t('home.areasGrid.ctaCardTitle')}
              </h3>
              <p className="mt-2.5 font-sans text-[16.5px] leading-[1.65] text-[#CCD6E5]">
                {t('home.areasGrid.ctaCardBody')}
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-[#B8934C] !border-[#B8934C] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32] min-h-[52px] px-9 text-[15px]"
            >
              {t('common.cta.letsTalk')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
