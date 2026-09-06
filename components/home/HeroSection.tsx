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
      
      {/* Main Hero Container */}
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[600px]">
          
          {/* Left Sector: Ivory background, spans 8 columns */}
          <div className="lg:col-span-8 flex flex-col justify-between py-12 lg:py-16 pr-0 lg:pr-10">
            
            {/* Top Bar: Label & Gold Axis */}
            <div className="flex items-center gap-3.5">
              <span className="h-[2px] w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                Estudio Jurídico · Mar del Plata
              </p>
              <span className="hidden sm:inline-block h-px w-6 bg-[#DDD7CC]" aria-hidden="true" />
              <span className="hidden sm:inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#59616C]">
                Fundado 2020
              </span>
            </div>

            {/* Main Title (66px to 72px on desktop, Playfair Display, max 3 lines) */}
            <h1 className="mt-7 text-[40px] sm:text-[52px] md:text-[60px] lg:text-[66px] xl:text-[70px] font-semibold leading-[1.06] tracking-[-0.02em] text-[#101D32]">
              Derecho pensado con{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#9A7538] italic font-normal">estrategia</span>, claridad{' '}
              <br className="hidden sm:inline" />
              y compromiso.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] font-sans text-[17px] sm:text-[18px] leading-[1.7] text-[#59616C]">
              Asesoramiento jurídico personalizado, con atención directa de las abogadas a cargo y soluciones concretas para cada situación legal.
            </p>

            {/* Action Group */}
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[50px] h-[50px] px-8 text-[15px]"
              >
                Consultar por WhatsApp
              </a>
              
              <Link
                href="/#areas"
                className="group inline-flex items-center gap-2.5 font-sans text-[14.5px] font-bold uppercase tracking-[0.08em] text-[#101D32] hover:text-[#9A7538] transition-colors"
              >
                <span>Conocer áreas de práctica</span>
                <span className="text-[18px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>

            {/* Practice Areas Single Line */}
            <div className="mt-12 border-t border-[#DDD7CC] pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5 font-sans text-[14px]">
                <span className="font-bold uppercase tracking-[0.16em] text-[#9A7538] text-[11.5px] shrink-0">
                  Áreas Legales:
                </span>
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 font-medium text-[#101D32]">
                  <Link href="/areas/consumidor" className="hover:text-[#9A7538] transition-colors">Consumidor</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/salud" className="hover:text-[#9A7538] transition-colors">Salud</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/accidentes-transito" className="hover:text-[#9A7538] transition-colors">Accidentes</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/laboral" className="hover:text-[#9A7538] transition-colors">Laboral</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/familia" className="hover:text-[#9A7538] transition-colors">Familia &amp; Usucapión</Link>
                  <span className="text-[#DDD7CC]">/</span>
                  <Link href="/areas/legal-tech" className="hover:text-[#9A7538] transition-colors">Legal Tech</Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sector: Navy background spanning 4 cols and bleeding to the right edge */}
          <div className="hidden lg:flex lg:col-span-4 relative flex-col justify-between py-12 lg:py-16 pl-8 xl:pl-10 text-white z-10 bg-[#101D32] before:absolute before:inset-y-0 before:left-0 before:w-[2000px] before:bg-[#101D32] before:-z-10 border-l border-[#9A7538]/50">
            {/* Subtle Monogram RA with very low opacity */}
            <div className="pointer-events-none absolute -right-16 -bottom-12 text-white/[0.035] select-none -z-10">
              <RomioMonogram className="w-[480px] h-[480px]" />
            </div>

            <div>
              <span className="font-display text-[22px] font-semibold tracking-wide text-white block">
                Romio &amp; Asociados
              </span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7538] block mt-1">
                Estudio Jurídico · Mar del Plata
              </span>

              <p className="mt-8 font-display text-[19px] xl:text-[20px] font-normal italic leading-[1.45] text-white/95 border-l-2 border-[#9A7538] pl-5">
                “Asesoramiento integral con rigor técnico, ética y cercanía humana en cada instancia.”
              </p>
            </div>

            <div className="border-t border-white/15 pt-6 flex flex-col gap-4">
              <div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7538] block">
                  Sede Central
                </span>
                <p className="mt-1 font-sans text-[14px] leading-snug text-[#D4DEEB]">
                  Rivadavia 3188, 1° Piso, Of. 15<br />Mar del Plata, Argentina
                </p>
              </div>

              <div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7538] block">
                  Modalidad de Atención
                </span>
                <p className="mt-1 font-sans text-[14px] text-[#D4DEEB]">
                  Presencial en sede &amp; consultas online
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Franja de Confianza (Connected Navy Strip) */}
      <div className="w-full border-t border-[#DDD7CC] bg-[#101D32] py-10 lg:py-12 text-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
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
                    <span className="font-display text-[26px] font-bold text-[#9A7538]">
                      {item.num}
                    </span>
                    <span className="h-px w-6 bg-[#9A7538]/40" aria-hidden="true" />
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
