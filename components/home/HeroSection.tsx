// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative w-full bg-[#F5F1E9] border-b border-[#DDD7CC] py-9 min-[375px]:py-11 sm:py-16 lg:py-22" aria-label="Inicio">
      <div className="relative mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col max-w-[860px]">
          
          {/* Label & Gold Axis */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              Estudio Jurídico · Mar del Plata
            </p>
          </div>

          {/* Main Title: Balanced typographic composition without rigid line breaks */}
          <h1 className="mt-3.5 sm:mt-5 text-[24px] min-[375px]:text-[27px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#101D32]">
            Derecho pensado con{' '}
            <span className="text-[#9A7538] italic font-normal">estrategia</span>, claridad y compromiso.
          </h1>

          {/* Description: Controlled reading width */}
          <p className="mt-3 sm:mt-4 max-w-[600px] font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[16px] leading-[1.6] text-[#59616C]">
            Asesoramiento jurídico personalizado, con atención directa de las abogadas a cargo y soluciones concretas para cada situación legal.
          </p>

          {/* Action Group: Full-width button on mobile, clean secondary link */}
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto min-h-[44px] h-[44px] px-6 text-[13.5px] font-semibold flex items-center justify-center text-center shadow-xs"
            >
              Consultar por WhatsApp
            </a>
            
            <Link
              href="/#areas"
              className="group inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-1.5 py-1.5 font-sans text-[13px] sm:text-[13.5px] font-bold uppercase tracking-[0.06em] text-[#101D32] hover:text-[#9A7538] transition-colors"
            >
              <span>Ver áreas de práctica</span>
              <span className="text-[15px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}


