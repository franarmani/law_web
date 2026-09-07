// components/home/HeroSection.tsx
'use client'

import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="snap-section relative w-full bg-[#F5F1E9] border-b border-[#DDD7CC] py-10 min-[375px]:py-12 sm:py-16 lg:py-20"
      aria-label="Inicio"
    >
      <div className="relative mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col max-w-[760px] text-left">
          
          {/* Label with discrete gold line as sole detail */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
            <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              Abogadas en Mar del Plata
            </p>
          </motion.div>

          {/* Main Title: 34-38px mobile, pure serif, single color without mixed italics */}
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.06 }}
            className="mt-3.5 sm:mt-4 font-display text-[34px] min-[375px]:text-[36px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-semibold leading-[1.14] tracking-[-0.015em] text-[#101D32]"
          >
            Asesoramiento legal.<br className="hidden min-[360px]:inline" /> Atención personal.
          </motion.h1>

          {/* Description: 16px, comfortable line height, 16px gap after title */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.12 }}
            className="mt-4 max-w-[540px] font-sans text-[16px] leading-[1.6] text-[#59616C]"
          >
            Te acompañamos con claridad y una estrategia para tu caso.
          </motion.p>

          {/* Single Action: 48px high, 24px gap after description */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.18 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto min-h-[48px] h-[48px] px-8 text-[14px] font-semibold flex items-center justify-center text-center shadow-xs"
            >
              Consultar por WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}




