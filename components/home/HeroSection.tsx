// components/home/HeroSection.tsx
'use client'

import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="snap-section relative w-full bg-[#F5F1E9] border-b border-[#DDD7CC] py-11 min-[375px]:py-13 sm:py-16 lg:py-20 xl:py-24"
      aria-label="Inicio"
    >
      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center mx-auto max-w-[850px]">
          
          {/* 1. Fine gold line: 16px to label */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-4"
          >
            <span className="h-[2px] w-8 bg-[#9A7538]" aria-hidden="true" />
          </motion.div>

          {/* 2. Label: Institutional gold, bold uppercase tracking matching all sections: 24px to title */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.05 }}
            className="mb-6"
          >
            <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538] max-w-[320px] sm:max-w-none mx-auto leading-relaxed">
              ROMIO &amp; ASOCIADOS · MAR DEL PLATA
            </p>
          </motion.div>

          {/* 3. Title: Playfair Display, weight 500/600, fluid 31-40px mobile to 56-72px desktop, 20px to description */}
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.08 }}
            className="font-display font-semibold text-[31px] min-[360px]:text-[35px] min-[390px]:text-[38px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] leading-[1.10] md:leading-[1.12] tracking-[-0.015em] text-[#101D32] mb-5 max-w-[850px]"
          >
            <span className="sm:block">Asesoramiento legal. </span>
            <span className="sm:block">Atención personal.</span>
          </motion.h1>

          {/* 4. Description: Inter 16px mobile, 17-18px desktop, max-w-[460px], 28px to button */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.12 }}
            className="font-sans text-[16px] md:text-[17.5px] lg:text-[18px] leading-[1.6] text-[#59616C] max-w-[460px] mx-auto mb-7"
          >
            Te acompañamos con claridad y una estrategia para tu caso.
          </motion.p>

          {/* 5. Button: Navy with white text, ~50px height, centered, full width max 320px on mobile */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: reduced ? 0 : 0.16 }}
            className="w-full flex justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[50px] min-h-[50px] w-full max-w-[320px] sm:w-auto sm:max-w-none px-8 bg-[#101D32] text-white font-sans text-[14px] font-semibold border border-[#101D32] transition-all duration-200 hover:bg-[#9A7538] hover:border-[#9A7538] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7538] shadow-xs"
            >
              Consultar por WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}




