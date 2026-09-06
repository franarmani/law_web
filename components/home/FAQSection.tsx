// components/home/FAQSection.tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'

export default function FAQSection() {
  const { eyebrow, title, items } = getDictionary().home.faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="w-full bg-[#F5F1E9] py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading & WhatsApp Helper Box */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                {eyebrow} · Claridad
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.15] text-[#101D32]">
              {title}
            </h2>

            <p className="mt-4 font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#59616C]">
              Respuestas claras y directas a las inquietudes más habituales antes de iniciar una consulta o proceso legal.
            </p>

            <div className="mt-8 border border-[#DDD7CC] bg-[#FCFBF8] p-7 shadow-xs">
              <p className="font-display text-[19px] font-semibold text-[#101D32]">
                ¿Aún tenés alguna duda?
              </p>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-[#59616C]">
                Escribinos por WhatsApp y analizamos tu consulta directamente con el equipo profesional.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-full text-center min-h-[46px] h-[46px] text-[14px]"
              >
                Hacer consulta directa
              </a>
            </div>
          </div>

          {/* Right Column: Wide Accordion List (64px rows) */}
          <div className="flex flex-col border border-[#DDD7CC] bg-[#FCFBF8]">
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="border-b border-[#DDD7CC] last:border-b-0">
                  <button
                    type="button"
                    className="flex min-h-[64px] w-full items-center justify-between gap-6 px-6 py-4 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/50 focus-visible:outline-none sm:px-8"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17px] sm:text-[18px] font-semibold text-[#101D32]">
                      {item.q}
                    </span>
                    <span className="font-display shrink-0 text-xl font-semibold text-[#9A7538]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#DDD7CC]/50 px-6 pb-6 pt-4 sm:px-8">
                          <p className="font-sans text-[15.5px] sm:text-[16px] leading-[1.7] text-[#59616C]">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
