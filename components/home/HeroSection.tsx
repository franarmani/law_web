// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'
import RomioMonogram from '@/components/brand/RomioMonogram'

export default function HeroSection() {
  const trustItems = [
    { num: '01', title: 'Atención Directa', desc: 'Contacto continuo con los profesionales a cargo de tu causa' },
    { num: '02', title: 'Estrategias a Medida', desc: 'Planes jurídicos adaptados a la realidad de cada situación' },
    { num: '03', title: 'Confidencialidad Absoluta', desc: 'Reserva estricta y secreto profesional en cada consulta' },
    { num: '04', title: 'Presencial & Virtual', desc: 'Atención en sede Mar del Plata y consultas online en todo el país' },
  ]

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#F5F1E9]" aria-label="Inicio">
      
      {/* Bleeding Right Navy Block (36% screen width, full height) */}
      <div 
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 hidden w-[36%] bg-[#101D32] lg:block overflow-hidden"
        aria-hidden="true"
      >
        {/* Giant Architectural Monogram cropped by edges */}
        <div className="absolute -right-20 -bottom-16 text-white/[0.045] select-none">
          <RomioMonogram className="w-[520px] h-[520px]" />
        </div>

        {/* Editorial Watermark Wordmark */}
        <div className="absolute -left-14 bottom-12 -rotate-90 origin-bottom-left font-display text-[72px] font-bold uppercase tracking-[0.25em] text-white/[0.035] whitespace-nowrap select-none">
          ROMIO &amp; ASOCIADOS
        </div>

        {/* Vertical subtle gold axis line on border */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9C7737] via-[#B8934C] to-[#9C7737]/40" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] lg:min-h-[640px]">
          
          {/* Left / Center Editorial Block (Spans 10 of 12 columns on desktop) */}
          <div className="lg:col-span-10 xl:col-span-9 flex flex-col justify-between py-2">
            
            {/* Top Bar: Vertical Label & Gold Axis */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#9C7737]">
                Estudio Jurídico · Mar del Plata
              </p>
              <span className="hidden sm:inline-block h-px w-8 bg-[#DDD7CC]" aria-hidden="true" />
              <span className="hidden sm:inline-block font-sans text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#555E6D]">
                Fundado 2020
              </span>
            </div>

            {/* Dominant Editorial Signature Title (76px - 88px desktop, ~0.98 line-height) */}
            <h1 className="mt-8 text-[44px] sm:text-[62px] md:text-[74px] lg:text-[82px] xl:text-[88px] font-semibold leading-[0.98] tracking-[-0.025em] text-[#101D32]">
              Derecho pensado con{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#9C7737] italic font-normal">estrategia</span>, claridad{' '}
              <br className="hidden sm:inline" />
              y compromiso.
            </h1>

            {/* Lead Narrative Description */}
            <p className="mt-8 max-w-[620px] font-sans text-[18px] sm:text-[20px] leading-[1.7] text-[#424956]">
              Asesoramiento jurídico personalizado, con atención directa de las abogadas a cargo y soluciones concretas para cada situación legal.
            </p>

            {/* Action Group */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[56px] px-10 text-[16px]"
              >
                Consultar por WhatsApp
              </a>
              
              <Link
                href="/#areas"
                className="group inline-flex items-center gap-3 font-sans text-[15.5px] font-bold uppercase tracking-[0.08em] text-[#101D32] hover:text-[#9C7737] transition-colors"
              >
                <span>Conocer áreas de práctica</span>
                <span className="text-[20px] text-[#9C7737] transition-transform duration-200 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>

            {/* Practice Areas Editorial Single Line */}
            <div className="mt-14 border-t border-[#DDD7CC] pt-7">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 font-sans text-[14.5px]">
                <span className="font-bold uppercase tracking-[0.16em] text-[#9C7737] text-[12px] shrink-0">
                  Áreas Legales:
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-[#101D32]">
                  <Link href="/areas/consumidor" className="hover:text-[#9C7737] transition-colors">Consumidor</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/salud" className="hover:text-[#9C7737] transition-colors">Salud</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/accidentes-transito" className="hover:text-[#9C7737] transition-colors">Accidentes</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/laboral" className="hover:text-[#9C7737] transition-colors">Laboral</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/familia" className="hover:text-[#9C7737] transition-colors">Familia &amp; Usucapión</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/legal-tech" className="hover:text-[#9C7737] transition-colors">Legal Tech</Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Editorial Axis Information (Overlay inside the bleeding navy on desktop) */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-3 flex-col justify-between h-full pl-6 xl:pl-10 text-white z-10">
            <div className="border-l border-white/20 pl-6 py-2">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#B8934C] block">
                Sede Central
              </span>
              <p className="mt-2 font-display text-[18px] font-normal leading-snug text-white/90">
                Rivadavia 3188<br />1° Piso, Oficina 15<br />Mar del Plata
              </p>
            </div>

            <div className="border-l border-white/20 pl-6 py-2 my-auto">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#B8934C] block">
                Atención Directa
              </span>
              <p className="mt-2 font-sans text-[14.5px] leading-relaxed text-[#D4DEEB]">
                Trato personalizado y seguimiento riguroso de cada causa.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6 py-2">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#B8934C] block">
                Modalidades
              </span>
              <p className="mt-1 font-sans text-[14.5px] text-[#D4DEEB]">
                Presencial &amp; Virtual
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Franja de Confianza (Connected Navy Strip) */}
      <div className="w-full border-t border-[#DDD7CC] bg-[#101D32] py-10 lg:py-12 text-white">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, idx) => (
              <div
                key={item.num}
                className={`flex flex-col justify-between ${
                  idx !== 0 ? 'lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[26px] font-bold text-[#B8934C]">
                      {item.num}
                    </span>
                    <span className="h-px w-6 bg-[#B8934C]/40" aria-hidden="true" />
                  </div>
                  <p className="mt-2.5 font-display text-[19px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1.5 font-sans text-[15px] leading-relaxed text-[#D4DEEB]">
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
