// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  const trustItems = [
    { num: '01', title: 'Atención Directa', desc: 'Contacto continuo con las profesionales a cargo de tu causa' },
    { num: '02', title: 'Estrategias a Medida', desc: 'Planes jurídicos adaptados a la realidad de cada situación' },
    { num: '03', title: 'Confidencialidad Absoluta', desc: 'Reserva estricta y secreto profesional en cada consulta' },
    { num: '04', title: 'Presencial & Virtual', desc: 'Sede en Mar del Plata y atención virtual en todo el país' },
  ]

  return (
    <section id="inicio" className="relative w-full bg-[#F5F1E9]" aria-label="Inicio">
      
      {/* Main Hero Container */}
      <div className="relative mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Sector: Ivory clear background */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pt-8 pb-10 sm:py-12 lg:py-16 pr-0">
            
            {/* Label & Gold Axis */}
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Estudio Jurídico · Mar del Plata
              </p>
            </div>

            {/* Main Title: Controlled reading width, natural wrapping */}
            <h1 className="mt-4 sm:mt-6 text-[32px] min-[375px]:text-[36px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#101D32] max-w-[680px]">
              Derecho pensado con{' '}
              <span className="text-[#9A7538] italic font-normal">estrategia</span>, claridad{' '}
              <span className="inline lg:block">y compromiso.</span>
            </h1>

            {/* Description */}
            <p className="mt-3.5 sm:mt-5 max-w-[500px] font-sans text-[16px] sm:text-[17px] leading-[1.65] text-[#59616C]">
              Asesoramiento jurídico personalizado, con atención directa de las abogadas a cargo y soluciones concretas para cada situación legal.
            </p>

            {/* Action Group: Full-width button on mobile, clean secondary link */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto min-h-[48px] h-[48px] px-7 text-[14.5px] font-semibold flex items-center justify-center text-center shadow-xs"
              >
                Consultar por WhatsApp
              </a>
              
              <Link
                href="/#areas"
                className="group inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-1.5 py-2 font-sans text-[13.5px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#101D32] hover:text-[#9A7538] transition-colors"
              >
                <span>Ver áreas de práctica</span>
                <span className="text-[16px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* Desktop Right Sector: Clean uniform Navy banner panel, height adjusted to content */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 self-center my-auto">
            <div className="w-full bg-[#101D32] p-8 lg:p-9 xl:p-10 text-white shadow-xs">
              <span className="font-sans text-[17.5px] xl:text-[19px] font-medium tracking-[-0.015em] text-white block leading-tight">
                Romio &amp; Asociados
              </span>
              <span className="font-sans text-[10px] xl:text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#9A7538] block mt-1.5">
                Estudio Jurídico · Mar del Plata
              </span>

              {/* Fine gold divider line as single accent */}
              <div className="my-5 h-px w-10 bg-[#9A7538]" aria-hidden="true" />

              <p className="font-display text-[16px] xl:text-[17px] font-normal italic leading-[1.6] text-[#F5F1E9]">
                “Asesoramiento integral con rigor técnico, ética y cercanía humana en cada instancia.”
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Franja de Confianza: Compact, balanced */}
      <div className="w-full border-t border-[#DDD7CC] bg-[#101D32] py-7 sm:py-8 lg:py-10 text-white">
        <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {trustItems.map((item, idx) => (
              <div
                key={item.num}
                className={`flex flex-col justify-start ${
                  idx !== 0 ? 'lg:border-l lg:border-white/15 lg:pl-6 xl:pl-8' : ''
                } ${
                  idx % 2 !== 0 ? 'min-[480px]:pl-4 lg:pl-6 xl:pl-8' : ''
                } border-b min-[480px]:border-b-0 border-white/10 pb-4 min-[480px]:pb-0 last:border-b-0`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[20px] sm:text-[22px] font-bold text-[#9A7538]">
                      {item.num}
                    </span>
                    <span className="h-px w-4 bg-[#9A7538]/40" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 font-display text-[16px] sm:text-[17px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#D4DEEB]">
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

