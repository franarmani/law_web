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
    <section id="faq" className="w-full bg-[#F5F1E9] py-14 sm:py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-18">
          
          {/* Left Column: Heading & WhatsApp Helper Box */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Preguntas frecuentes</span>
                <span className="hidden sm:inline">Preguntas frecuentes · Claridad</span>
              </p>
            </div>

            <h2 className="mt-3 sm:mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.16] text-[#101D32]">
              {title}
            </h2>

            <p className="mt-3.5 sm:mt-4 font-sans text-[15.5px] sm:text-[17px] leading-[1.65] text-[#59616C]">
              Respuestas claras y directas a las inquietudes más habituales antes de iniciar una consulta o proceso legal.
            </p>

            {/* Desktop Helper Box (Hidden on mobile to place it after accordion) */}
            <div className="hidden lg:block mt-7 sm:mt-8 border border-[#DDD7CC] bg-[#FCFBF8] p-6 sm:p-7 shadow-xs">
              <p className="font-display text-[18px] sm:text-[19px] font-semibold text-[#101D32]">
                ¿Aún tenés alguna duda?
              </p>
              <p className="mt-2 font-sans text-[14.5px] sm:text-[15px] leading-[1.6] text-[#59616C]">
                Escribinos por WhatsApp y analizamos tu consulta directamente con el equipo profesional.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-full text-center min-h-[48px] h-[48px] text-[14px] flex items-center justify-center"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Wide Accordion List */}
          <div className="flex flex-col">
            <div className="flex flex-col border border-[#DDD7CC] bg-[#FCFBF8]">
              {items.map((item, i) => {
                const isOpen = openIndex === i
                const btnId = `faq-btn-${i}`
                const panelId = `faq-panel-${i}`

                return (
                  <div key={item.q} className="border-b border-[#DDD7CC] last:border-b-0">
                    <button
                      type="button"
                      id={btnId}
                      className="flex min-h-[56px] sm:min-h-[64px] w-full items-center justify-between gap-4 sm:gap-6 px-4 min-[375px]:px-5 py-4 sm:px-8 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/50 focus-visible:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-display text-[16px] sm:text-[18px] font-semibold text-[#101D32] leading-snug">
                        {item.q}
                      </span>
                      <span className="font-display shrink-0 text-xl font-semibold text-[#9A7538]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#DDD7CC]/50 px-4 min-[375px]:px-5 pb-5 pt-3 sm:px-8 sm:pb-6 sm:pt-4">
                            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-[#59616C]">
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

            {/* Mobile Closing Invitation (Clean and concise below accordion) */}
            <div className="mt-6 flex flex-col p-5 bg-[#FCFBF8] border border-[#DDD7CC] lg:hidden">
              <p className="font-display text-[17px] font-semibold text-[#101D32]">
                ¿Aún tenés alguna duda?
              </p>
              <p className="mt-1.5 font-sans text-[14px] leading-relaxed text-[#59616C]">
                Escribinos directamente por WhatsApp y analizamos tu consulta sin compromiso.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full h-[48px] min-h-[48px] text-[14px] font-semibold flex items-center justify-center text-center shadow-xs"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

