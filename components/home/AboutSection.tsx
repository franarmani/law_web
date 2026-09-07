// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-24" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Single Header Line (no overlapping labels) */}
        <div className="flex items-center gap-2 sm:gap-2.5 border-b border-[#DDD7CC] pb-3.5 sm:pb-4">
          <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
          <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
            <span className="sm:hidden">Sobre el estudio</span>
            <span className="hidden sm:inline">Nosotros · Trayectoria y Compromiso</span>
          </p>
        </div>

        {/* Content Flow */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Narrative Body */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
              <span className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</span> nace en 2020 con el propósito de brindar una solución jurídica moderna, transparente y eficiente. Combinamos la experiencia en el litigio tradicional con la agilidad y adaptación a las nuevas necesidades digitales, ofreciendo también facilidades y opciones de pago adaptadas a cada cliente.
            </p>

            {/* Modalities of attention integrated from the removed trust bar */}
            <div className="mt-3.5 sm:mt-4 flex items-start gap-2.5 border-l-2 border-[#9A7538] bg-[#F5F1E9] p-3 sm:p-3.5">
              <p className="font-sans text-[12.5px] min-[375px]:text-[13px] sm:text-[13.5px] leading-relaxed text-[#101D32]">
                <strong className="font-semibold text-[#101D32]">Modalidad presencial y virtual:</strong> Sede profesional en Rivadavia 3188, Mar del Plata, y atención remota para causas en toda la Provincia de Buenos Aires y el país.
              </p>
            </div>

            {/* Compact Institutional Quote */}
            <blockquote className="mt-3.5 sm:mt-4 border-l-2 border-[#9A7538] bg-[#F5F1E9] p-3.5 sm:p-4">
              <p className="font-display text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] font-normal italic leading-[1.55] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right Column: Principles, Metrics, and Action */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-0 lg:pt-1">
            
            {/* Principles */}
            <div className="border-t lg:border-t-0 border-[#DDD7CC] pt-4 lg:pt-0">
              <p className="font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538] mb-1">
                Nuestros Principios Rectores:
              </p>
              <p className="font-display text-[14px] min-[375px]:text-[14.5px] sm:text-[16px] font-medium leading-[1.55] text-[#101D32]">
                {about.valuesLine}
              </p>
            </div>

            {/* Metrics (Moderate scale, no awkward line cuts) */}
            <div className="mt-5 sm:mt-7 border-t border-[#DDD7CC] pt-4 sm:pt-5 flex flex-wrap gap-7 sm:gap-12 items-baseline">
              <div>
                <p className="font-display text-[22px] min-[375px]:text-[24px] sm:text-[28px] font-bold text-[#101D32] leading-none whitespace-nowrap">
                  Desde 2020
                </p>
                <p className="mt-1 font-sans text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#9A7538]">
                  Trayectoria institucional
                </p>
              </div>

              <div>
                <p className="font-display text-[22px] min-[375px]:text-[24px] sm:text-[28px] font-bold text-[#101D32] leading-none">
                  6
                </p>
                <p className="mt-1 font-sans text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#9A7538]">
                  Áreas de práctica
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/#areas"
                className="btn-secondary w-full sm:w-auto min-h-[44px] h-[44px] px-6 text-[13px] sm:text-[13.5px] inline-flex items-center justify-center gap-2 text-center"
              >
                <span>Ver áreas de práctica</span>
                <span className="text-[15px] text-[#9A7538]">→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

