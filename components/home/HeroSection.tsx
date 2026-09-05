// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  const trustItems = [
    { num: '01', title: 'Atención directa', desc: 'Contacto continuo y sin intermediarios' },
    { num: '02', title: 'Estrategias personalizadas', desc: 'Soluciones a la medida de cada caso' },
    { num: '03', title: 'Confidencialidad', desc: 'Rigor y secreto profesional absoluto' },
    { num: '04', title: 'Presencial y virtual', desc: 'Consultas en sede Mar del Plata y online' },
  ]

  return (
    <section id="inicio" className="relative w-full bg-[#FCFBF8]" aria-label="Inicio">
      {/* Main Hero Container */}
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">
          
          {/* Left Column: Editorial Typography */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                  Estudio Jurídico · Mar del Plata
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="mt-7 text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#101D32]">
                Derecho pensado<br className="hidden sm:inline" />
                con <span className="text-[#9C7737] italic font-normal">estrategia</span>,<br className="hidden sm:inline" />
                claridad y compromiso.
              </h1>

              {/* Lead Paragraph */}
              <p className="mt-8 max-w-[560px] font-sans text-[18px] sm:text-[19px] leading-[1.75] text-[#4A5260]">
                Asesoramiento jurídico personalizado, con atención directa y soluciones concretas para cada situación legal.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary min-h-[54px] px-9 text-[15.5px]"
                >
                  Consultar por WhatsApp
                </a>
                <Link href="/#areas" className="btn-secondary min-h-[54px] px-9 text-[15.5px]">
                  Conocer áreas de práctica
                </Link>
              </div>
            </div>

            {/* Practice Areas Bar */}
            <div className="mt-14 border-t border-[#DDD7CC] pt-7">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#555E6D] mb-3">
                Áreas de Práctica Principal:
              </p>
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 font-sans text-[15px] font-semibold text-[#101D32]">
                <Link href="/areas/consumidor" className="hover:text-[#9C7737] transition-colors">Consumidor</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/salud" className="hover:text-[#9C7737] transition-colors">Salud</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/accidentes-transito" className="hover:text-[#9C7737] transition-colors">Accidentes</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/laboral" className="hover:text-[#9C7737] transition-colors">Laboral</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/familia" className="hover:text-[#9C7737] transition-colors">Familia &amp; Usucapión</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/legal-tech" className="hover:text-[#9C7737] transition-colors">Legal Tech</Link>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Institutional Panel (Seamless Grid Integration) */}
          <div className="relative flex flex-col justify-between overflow-hidden border border-[#101D32] bg-[#101D32] p-8 sm:p-11 lg:p-12 text-white">
            {/* Background Monogram Watermark */}
            <div
              className="pointer-events-none absolute -bottom-12 -right-8 select-none font-display text-[210px] font-bold leading-none text-white/[0.04]"
              aria-hidden="true"
            >
              R&amp;A
            </div>

            {/* Top Details */}
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/15 pb-6">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#B8934C]" />
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#B8934C]">
                    Identidad Institucional
                  </span>
                </div>
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  Est. 2020
                </span>
              </div>

              {/* Brand Header */}
              <div className="mt-9 flex items-start gap-4">
                <div className="h-16 w-[3.5px] shrink-0 bg-[#B8934C]" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-[28px] sm:text-[32px] font-semibold tracking-[0.02em] text-white">
                    Romio &amp; Asociados
                  </h2>
                  <p className="mt-1.5 font-sans text-[13.5px] font-semibold uppercase tracking-[0.14em] text-[#B8934C]">
                    Estudio Jurídico · Mar del Plata
                  </p>
                </div>
              </div>

              {/* Statement */}
              <p className="font-display mt-9 text-[20px] sm:text-[22px] font-normal italic leading-[1.6] text-white/95">
                “Atención personalizada, seguimiento riguroso de cada expediente y visión estratégica orientada a resultados.”
              </p>
            </div>

            {/* Bottom Specs */}
            <div className="relative z-10 mt-12 border-t border-white/15 pt-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8934C]">
                    Sede Central
                  </p>
                  <p className="mt-1.5 font-sans text-[14.5px] font-medium text-white/90 leading-snug">
                    Rivadavia 3188, Of. 15<br />Mar del Plata, Bs. As.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8934C]">
                    Modalidad
                  </p>
                  <p className="mt-1.5 font-sans text-[14.5px] font-medium text-white/90 leading-snug">
                    Atención Presencial<br />y Consultas Virtuales
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Franja de Confianza (Trust Bar) */}
      <div className="w-full border-y border-[#DDD7CC] bg-[#101D32] py-10 text-white">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, idx) => (
              <div
                key={item.num}
                className={`flex items-start gap-4.5 ${
                  idx !== 0 ? 'lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10' : ''
                }`}
              >
                <span className="font-display text-[26px] font-semibold text-[#B8934C]">
                  {item.num}
                </span>
                <div>
                  <p className="font-display text-[18px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 font-sans text-[14.5px] leading-snug text-[#CCD6E5]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
