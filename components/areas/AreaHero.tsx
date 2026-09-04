// components/areas/AreaHero.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL, areaImages, type Area } from '@/lib/areas'
import { t } from '@/i18n'

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
    <section className="bg-ivory pb-24 pt-16 lg:pb-36 lg:pt-24">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <Link
          href="/#areas"
          className="inline-flex items-center gap-2 font-sans text-[12px] font-light uppercase tracking-[0.12em] text-muted transition-colors hover:text-navy"
        >
          <ArrowLeftIcon />
          {t('areas.ui.hero.backToAreas')}
        </Link>

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">Área de especialidad jurídica</p>

            <h1 className="mt-6 text-[38px] sm:text-[48px] lg:text-[58px]">{area.name}</h1>

            <p className="mt-6 max-w-2xl">{area.tagline}</p>

            <div className="mt-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-primary">
                {t('areas.ui.hero.primaryCta')}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={areaImages[area.slug]}
              alt={area.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
