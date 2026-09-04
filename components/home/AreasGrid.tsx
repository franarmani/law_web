// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { toRoman } from '@/lib/numerals'
import { t } from '@/i18n'

export default function AreasGrid() {
  return (
    <section id="areas" className="bg-white py-24 lg:py-36" aria-label="Áreas de práctica">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-24 max-w-2xl text-center">
          <p className="eyebrow">{t('home.areasGrid.eyebrow')}</p>
          <h2 className="mt-6">{t('home.areasGrid.title')}</h2>
          <p className="mt-5">{t('home.areasGrid.description')}</p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="border-b border-r border-border px-8 py-12 text-center transition-colors hover:bg-ivory"
            >
              <span className="font-sans text-[13px] font-light tracking-[0.1em] text-champagne">
                {toRoman(i + 1)}
              </span>
              <p className="font-display mt-6 text-[19px] font-light leading-[1.3] text-navy">
                {area.name}
              </p>
              <p className="mt-3.5 font-sans text-[13px] font-light leading-[1.6] text-muted">
                {area.tagline}
              </p>
            </Link>
          ))}

          {/* CTA cell */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border-b border-r border-border bg-ivory px-8 py-12 text-center transition-colors hover:bg-white"
          >
            <p className="font-display text-[19px] font-light leading-[1.3] text-navy">
              {t('home.areasGrid.ctaCardTitle')}
            </p>
            <p className="mt-3.5 font-sans text-[13px] font-light leading-[1.6] text-muted">
              {t('home.areasGrid.ctaCardBody')}
            </p>
            <span className="link-primary mt-6">{t('common.cta.letsTalk')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
