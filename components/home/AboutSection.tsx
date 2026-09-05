// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'
import RomioMonogram from '@/components/brand/RomioMonogram'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[#FCFBF8] py-28 lg:py-36" aria-label="Sobre el estudio">
      
      {/* Background Giant 2020 Outline Numeral */}
      <div 
        className="pointer-events-none absolute right-[-2%] top-[10%] select-none font-display text-[160px] sm:text-[240px] lg:text-[300px] font-bold leading-none text-transparent text-stroke-gold opacity-15"
        style={{
          WebkitTextStroke: '2px #9C7737',
        }}
        aria-hidden="true"
      >
        2020
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        
        {/* Top Eyebrow Bar */}
        <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-[#9C7737]">
              {about.eyebrow} · Trayectoria &amp; Compromiso
            </p>
          </div>
          <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.16em] text-[#4E5664]">
            Perfil Institucional
          </span>
        </div>

        {/* Asymmetric 12-Column Editorial Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Large Quote (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-semibold leading-[1.12] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            {/* Prominent Cross-Column Quote */}
            <blockquote className="mt-10 border-l-2 border-[#9C7737] bg-[#F5F1E9] p-8 sm:p-10 shadow-sm">
              <p className="font-display text-[22px] sm:text-[25px] font-normal italic leading-[1.5] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#DDD7CC] pt-4">
                <span className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#9C7737]">
                  Dedicación Directa
                </span>
                <RomioMonogram className="h-6 w-6 text-[#9C7737]" />
              </div>
            </blockquote>

            {/* Real Integrated Metrics (No boxes) */}
            <div className="mt-14 grid grid-cols-2 gap-10 border-t border-[#DDD7CC] pt-8">
              {about.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-[44px] sm:text-[52px] font-bold text-[#101D32] leading-none">
                    {m.value}
                  </p>
                  <p className="mt-2 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#9C7737]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Body & Values (5 cols, Vertically Offset) */}
          <div className="lg:col-span-5 lg:pt-8">
            <div className="border-t-2 border-[#101D32] pt-8">
              <p className="font-sans text-[18px] sm:text-[19px] leading-[1.8] text-[#424956]">
                {about.body}
              </p>

              <div className="mt-10 border-t border-[#DDD7CC] pt-8">
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#9C7737] mb-3">
                  Nuestros Principios Rectores:
                </p>
                <p className="font-display text-[19px] font-medium leading-[1.6] text-[#101D32]">
                  {about.valuesLine}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-12">
                <Link
                  href="/#areas"
                  className="btn-secondary min-h-[52px] px-9 text-[15px] inline-flex"
                >
                  Explorar áreas de práctica
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
