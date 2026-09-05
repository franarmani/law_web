// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreasGrid() {
  return (
    <section id="areas" className="w-full bg-[#F5F1E9] py-24 lg:py-32" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {t('home.areasGrid.eyebrow')}
              </p>
            </div>
            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              {t('home.areasGrid.title')}
            </h2>
          </div>
          <p className="max-w-[460px] font-sans text-[16px] sm:text-[17px] leading-[1.65] text-[#5F6670]">
            {t('home.areasGrid.description')}
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {areas.map((area, i) => (
            <div
              key={area.slug}
              className="group flex flex-col justify-between border border-[#DDD7CC] bg-[#FCFBF8] p-8 sm:p-10 transition-all duration-200 hover:border-[#A27D3F] hover:shadow-[0_8px_30px_rgba(16,29,50,0.05)]"
            >
              <div>
                {/* Header: Number & Tag */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-5">
                  <span className="font-display text-[26px] font-semibold text-[#A27D3F]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F6670]">
                    Especialidad Jurídica
                  </span>
                </div>

                {/* Area Title */}
                <h3 className="mt-6 text-[23px] sm:text-[26px] font-semibold text-[#101D32] transition-colors group-hover:text-[#A27D3F]">
                  {area.name}
                </h3>

                {/* Description */}
                <p className="mt-3.5 font-sans text-[15.5px] sm:text-[16px] leading-[1.65] text-[#5F6670]">
                  {area.tagline}
                </p>

                {/* Services Bullet List Preview */}
                <ul className="mt-6 space-y-2.5 border-t border-[#DDD7CC]/60 pt-6">
                  {area.services.slice(0, 3).map((service, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 font-sans text-[14px] text-[#20242A]">
                      <span className="text-[#A27D3F] font-bold text-xs mt-1">―</span>
                      <span className="leading-snug">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 border-t border-[#DDD7CC] pt-6">
                <Link
                  href={`/areas/${area.slug}`}
                  className="link-primary inline-flex items-center text-[13.5px]"
                >
                  Conocer el área
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted CTA Piece (Navy Card) */}
        <div className="mt-12 border border-[#101D32] bg-[#101D32] p-8 sm:p-12 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#A27D3F]">
                Orientación personalizada
              </span>
              <h3 className="mt-3 text-[24px] sm:text-[28px] font-semibold text-white">
                {t('home.areasGrid.ctaCardTitle')}
              </h3>
              <p className="mt-2 font-sans text-[16px] text-[#A9B4C2]">
                {t('home.areasGrid.ctaCardBody')}
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-[#A27D3F] !border-[#A27D3F] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32]"
            >
              {t('common.cta.letsTalk')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
