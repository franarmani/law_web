// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="w-full bg-[#FCFBF8] py-20 lg:py-28" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Top Eyebrow Bar */}
        <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
              {about.eyebrow} · Trayectoria &amp; Compromiso
            </p>
          </div>
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#59616C]">
            Perfil Institucional
          </span>
        </div>

        {/* Two-Column Composition */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Quote (6 cols) */}
          <div className="lg:col-span-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.15] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            <blockquote className="mt-8 border-l-2 border-[#9A7538] bg-[#F5F1E9] p-7 sm:p-8">
              <p className="font-display text-[20px] sm:text-[22px] font-normal italic leading-[1.5] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
              <p className="mt-4 font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Dedicación Directa
              </p>
            </blockquote>
          </div>

          {/* Right Column: Narrative & Values (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1">
            <div>
              <p className="font-sans text-[16.5px] sm:text-[17px] leading-[1.8] text-[#59616C]">
                {about.body}
              </p>

              <div className="mt-8 border-t border-[#DDD7CC] pt-6">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538] mb-2">
                  Nuestros Principios Rectores:
                </p>
                <p className="font-display text-[18px] sm:text-[19px] font-medium leading-[1.6] text-[#101D32]">
                  {about.valuesLine}
                </p>
              </div>
            </div>

            <div className="mt-9">
              <Link
                href="/#areas"
                className="btn-secondary min-h-[48px] px-8 text-[14.5px] inline-flex items-center gap-2"
              >
                <span>Explorar áreas de práctica</span>
                <span className="text-[17px] text-[#9A7538]">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Metrics Below (Spanning across full width) */}
        <div className="mt-16 border-t border-[#DDD7CC] pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {about.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-[40px] sm:text-[46px] font-bold text-[#101D32] leading-none">
                {m.value}
              </p>
              <p className="mt-2 font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                {m.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
