// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'
import ImageSlot from '@/components/ui/ImageSlot'

export default function HeroSection() {
  const { hero, trustBar } = getDictionary().home

  return (
    <section id="inicio" className="bg-ivory pt-24" aria-label="Inicio">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="mt-10 text-[42px] sm:text-[56px] lg:text-[72px]">
              {hero.titleLine1}
              <br />
              <span className="accent">{hero.titleLine2}</span>
            </h1>

            <p className="mt-8 max-w-[440px]">{hero.description}</p>

            <div className="mt-12 flex flex-wrap items-center gap-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-primary">
                {hero.cta.primary}
              </a>
              <Link href="/#areas" className="link-secondary">
                {hero.cta.areas}
              </Link>
            </div>
          </div>

          <ImageSlot label="Foto del abogado o del estudio (4:5 vertical)" aspect="4/5" />
        </div>

        <div className="mt-24 flex flex-col flex-wrap items-center justify-center gap-6 border-t border-border py-10 sm:flex-row sm:gap-16 lg:mt-32">
          {trustBar.items.map((item) => (
            <span
              key={item}
              className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
