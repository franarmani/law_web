// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary, t } from '@/i18n'
import ImageSlot from '@/components/ui/ImageSlot'

export default function AboutSection() {
  const about = getDictionary().home.about

  return (
    <section id="nosotros" className="bg-navy py-24 lg:py-36" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ImageSlot label="Foto del estudio o del equipo (4:5 vertical)" aspect="4/5" onNavy />

          <div>
            <p className="eyebrow">{t('home.about.eyebrow')}</p>

            <p className="font-display mt-8 text-[26px] font-light italic leading-[1.4] text-white sm:text-[34px]">
              &ldquo;{about.quote}&rdquo;
            </p>

            <p className="mt-7 max-w-[440px] !text-white/55">{about.body}</p>

            <div className="mt-12 flex gap-16">
              {about.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-[30px] font-light text-white">{m.value}</p>
                  <p className="mt-2 font-sans text-[10px] font-normal uppercase tracking-[0.15em] text-white/40">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/#contacto"
              className="link-primary on-navy mt-12 inline-block"
            >
              Conocé al estudio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
