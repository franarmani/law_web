// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative w-full bg-[#F5F1E9] border-b border-[#DDD7CC] py-14 sm:py-20 lg:py-24" aria-label="Inicio">
      <div className="relative mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col max-w-[860px]">
          
          {/* Label & Gold Axis */}
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              Estudio Jurídico · Mar del Plata
            </p>
          </div>

          {/* Main Title: Balanced typographic composition without rigid line breaks */}
          <h1 className="mt-4 sm:mt-6 text-[30px] min-[375px]:text-[34px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#101D32]">
            Derecho pensado con{' '}
            <span className="text-[#9A7538] italic font-normal">estrategia</span>, claridad y compromiso.
          </h1>

          {/* Description: Controlled reading width */}
          <p className="mt-4 sm:mt-5 max-w-[620px] font-sans text-[15.5px] min-[375px]:text-[16px] sm:text-[17px] leading-[1.65] text-[#59616C]">
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
      </div>
    </section>
  )
}


