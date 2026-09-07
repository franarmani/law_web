// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="w-full bg-[#FCFBF8] py-14 sm:py-20 lg:py-28" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Single Header Line (no overlapping labels) */}
        <div className="flex items-center gap-2.5 sm:gap-3 border-b border-[#DDD7CC] pb-4 sm:pb-5">
          <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
          <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
            <span className="sm:hidden">Sobre el estudio</span>
            <span className="hidden sm:inline">Nosotros · Trayectoria &amp; Compromiso</span>
          </p>
        </div>

        {/* Content Flow */}
        <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Narrative Body */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-[1.18] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            <p className="mt-4 sm:mt-5 font-sans text-[15.5px] sm:text-[16.5px] leading-[1.75] text-[#59616C]">
              {about.body}
            </p>

            {/* Modalities of attention integrated from the removed trust bar */}
            <div className="mt-4 sm:mt-5 flex items-start gap-3 border-l-2 border-[#9A7538] bg-[#F5F1E9] p-3.5 sm:p-4">
              <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#101D32]">
                <strong className="font-semibold text-[#101D32]">Modalidad presencial y virtual:</strong> Sede profesional en Rivadavia 3188, Mar del Plata, y atención remota para causas en toda la Provincia de Buenos Aires y el país.
              </p>
            </div>

            {/* Compact Institutional Quote */}
            <blockquote className="mt-4 sm:mt-5 border-l-2 border-[#9A7538] bg-[#F5F1E9] p-4 sm:p-5">
              <p className="font-display text-[15.5px] sm:text-[17px] font-normal italic leading-[1.55] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right Column: Principles, Metrics, and Action */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-0 lg:pt-2">
            
            {/* Principles */}
            <div className="border-t lg:border-t-0 border-[#DDD7CC] pt-5 lg:pt-0">
              <p className="font-sans text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538] mb-1.5">
                Nuestros Principios Rectores:
              </p>
              <p className="font-display text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[#101D32]">
                {about.valuesLine}
              </p>
            </div>

            {/* Metrics (Moderate scale, no awkward line cuts) */}
            <div className="mt-6 sm:mt-8 border-t border-[#DDD7CC] pt-5 sm:pt-6 flex flex-wrap gap-8 sm:gap-14 items-baseline">
              <div>
                <p className="font-display text-[26px] sm:text-[32px] font-bold text-[#101D32] leading-none whitespace-nowrap">
                  Desde 2020
                </p>
                <p className="mt-1.5 font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-[#9A7538]">
                  Trayectoria institucional
                </p>
              </div>

              <div>
                <p className="font-display text-[26px] sm:text-[32px] font-bold text-[#101D32] leading-none">
                  6
                </p>
                <p className="mt-1.5 font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-[#9A7538]">
                  Áreas de práctica
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-7 sm:mt-9">
              <Link
                href="/#areas"
                className="btn-secondary w-full sm:w-auto min-h-[48px] h-[48px] px-7 text-[14px] inline-flex items-center justify-center gap-2 text-center"
              >
                <span>Ver áreas de práctica</span>
                <span className="text-[16px] text-[#9A7538]">→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

