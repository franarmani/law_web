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
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 xl:gap-16">
          
          {/* Left Column: Editorial Typography (62% approx) */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow with gold accent */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
                <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                  Estudio Jurídico · Mar del Plata
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="mt-8 text-[40px] sm:text-[54px] lg:text-[64px] xl:text-[70px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#101D32]">
                Derecho pensado<br className="hidden sm:inline" />
                con <span className="text-[#A27D3F] italic font-normal">estrategia</span>,<br className="hidden sm:inline" />
                claridad y compromiso.
              </h1>

              {/* Lead Paragraph */}
              <p className="mt-7 max-w-[540px] font-sans text-[17px] sm:text-[18px] leading-[1.7] text-[#5F6670]">
                Asesoramiento jurídico personalizado, con atención directa y soluciones concretas para cada situación legal.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Consultar por WhatsApp
                </a>
                <Link href="/#areas" className="btn-secondary">
                  Conocer áreas de práctica
                </Link>
              </div>
            </div>

            {/* Practice Areas Pill Bar */}
            <div className="mt-12 border-t border-[#DDD7CC] pt-6">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5F6670] mb-2.5">
                Áreas de Práctica Principal:
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-[14px] font-medium text-[#101D32]">
                <Link href="/areas/consumidor" className="hover:text-[#A27D3F] transition-colors">Consumidor</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/salud" className="hover:text-[#A27D3F] transition-colors">Salud</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/accidentes-transito" className="hover:text-[#A27D3F] transition-colors">Accidentes</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/laboral" className="hover:text-[#A27D3F] transition-colors">Laboral</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/familia" className="hover:text-[#A27D3F] transition-colors">Familia &amp; Usucapión</Link>
                <span className="text-[#DDD7CC]">·</span>
                <Link href="/areas/legal-tech" className="hover:text-[#A27D3F] transition-colors">Legal Tech</Link>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Institutional Panel (38% approx) */}
          <div className="relative flex flex-col justify-between overflow-hidden border border-[#101D32] bg-[#101D32] p-8 sm:p-10 lg:p-12 text-white shadow-lg">
            {/* Background Monogram Watermark */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-8 select-none font-display text-[190px] font-bold leading-none text-white/[0.035]"
              aria-hidden="true"
            >
              R&amp;A
            </div>

            {/* Top Badge & Line */}
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/15 pb-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#A27D3F]" />
                  <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#A27D3F]">
                    Identidad Institucional
                  </span>
                </div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Est. 2020
                </span>
              </div>

              {/* Brand Header */}
              <div className="mt-8 flex items-start gap-4">
                <div className="h-14 w-[3px] shrink-0 bg-[#A27D3F]" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-[26px] sm:text-[30px] font-semibold tracking-[0.02em] text-white">
                    Romio &amp; Asociados
                  </h2>
                  <p className="mt-1 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-[#A27D3F]">
                    Estudio Jurídico · Mar del Plata
                  </p>
                </div>
              </div>

              {/* Core Philosophy Statement */}
              <p className="font-display mt-8 text-[19px] sm:text-[21px] font-normal italic leading-[1.55] text-white/90">
                “Atención personalizada, seguimiento riguroso de cada expediente y visión estratégica orientada a resultados.”
              </p>
            </div>

            {/* Bottom Details */}
            <div className="relative z-10 mt-10 border-t border-white/15 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Sede Central
                  </p>
                  <p className="mt-1 font-sans text-[13.5px] font-medium text-white/80">
                    Rivadavia 3188, Of. 15<br />Mar del Plata, Bs. As.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Modalidad
                  </p>
                  <p className="mt-1 font-sans text-[13.5px] font-medium text-white/80">
                    Atención Presencial<br />y Consultas Virtuales
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Franja de Confianza (Trust Bar) — Full Width Navy Strip */}
      <div className="w-full border-y border-[#DDD7CC] bg-[#101D32] py-8 text-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {trustItems.map((item, idx) => (
              <div
                key={item.num}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? 'lg:border-l lg:border-white/15 lg:pl-8' : ''
                }`}
              >
                <span className="font-display text-[22px] font-semibold text-[#A27D3F]">
                  {item.num}
                </span>
                <div>
                  <p className="font-display text-[16.5px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-sans text-[13px] text-[#A9B4C2]">
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
