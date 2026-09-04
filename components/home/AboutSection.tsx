// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary, t } from '@/i18n'

export default function AboutSection() {
  const about = getDictionary().home.about

  return (
    <section id="nosotros" className="bg-navy py-24 lg:py-36" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">{t('home.about.eyebrow')}</p>

          <p className="font-display mt-8 text-[28px] font-light italic leading-[1.4] text-white sm:text-[38px]">
            &ldquo;{about.quote}&rdquo;
          </p>

          <p className="mx-auto mt-7 max-w-[520px] !text-white/55">{about.body}</p>

          <div className="mt-12 flex justify-center gap-16">
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
            href="/#areas"
            className="link-primary on-navy mt-12 inline-block"
          >
            Ver áreas de práctica
          </Link>
        </div>
      </div>
    </section>
  )
}
