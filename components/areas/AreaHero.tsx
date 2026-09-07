// components/areas/AreaHero.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL, type Area } from '@/lib/areas'
import { t } from '@/i18n'

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export default function AreaHero({ area }: { area: Area }) {
  return (
    <section className="w-full bg-[#F5F1E9] pb-14 sm:pb-20 lg:pb-28 pt-8 sm:pt-14 lg:pt-20 border-b border-[#DDD7CC]">
      <div className="mx-auto max-w-[1240px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <Link
          href="/#areas"
          className="inline-flex min-h-[44px] items-center gap-2.5 font-sans text-[12px] min-[375px]:text-[13px] font-bold uppercase tracking-[0.1em] text-[#59616C] transition-colors hover:text-[#101D32]"
        >
          <ArrowLeftIcon />
          {t('areas.ui.hero.backToAreas')}
        </Link>

        <div className="mx-auto mt-6 sm:mt-10 max-w-[840px] text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11.5px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              Especialidad Jurídica
            </p>
            <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
          </div>

          <h1 className="mt-4 sm:mt-6 text-[30px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.18] text-[#101D32]">
            {area.name}
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl font-sans text-[16px] sm:text-[18px] leading-[1.7] text-[#59616C]">
            {area.tagline}
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center min-h-[48px] h-[48px]"
            >
              {t('areas.ui.hero.primaryCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

