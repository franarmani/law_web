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
    <section id="faq" className="w-full bg-[#F5F1E9] py-9 min-[375px]:py-11 sm:py-16 lg:py-24 border-t border-[#DDD7CC]" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-18">
          
          {/* Left Column: Heading & WhatsApp Helper Box */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Preguntas frecuentes</span>
                <span className="hidden sm:inline">Preguntas frecuentes · Claridad</span>
              </p>
            </div>

            <h2 className="mt-2.5 sm:mt-3 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              {title}
            </h2>

            <p className="mt-2.5 sm:mt-3 font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
              Respuestas claras y directas a las inquietudes más habituales antes de iniciar una consulta o proceso legal.
            </p>

            {/* Desktop Helper Box (Hidden on mobile to place it after accordion) */}
            <div className="hidden lg:block mt-7 sm:mt-8 border border-[#DDD7CC] bg-[#FCFBF8] p-5 sm:p-7 shadow-xs">
              <p className="font-display text-[17px] sm:text-[18px] font-semibold text-[#101D32]">
                ¿Aún tenés alguna duda?
              </p>
              <p className="mt-1.5 font-sans text-[13.5px] leading-[1.6] text-[#59616C]">
                Escribinos por WhatsApp y analizamos tu consulta directamente con el equipo profesional.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-center min-h-[44px] h-[44px] text-[13px] flex items-center justify-center"
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
                      className="flex min-h-[48px] sm:min-h-[58px] w-full items-center justify-between gap-3 sm:gap-6 px-3.5 min-[375px]:px-4 py-3 sm:px-8 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/50 focus-visible:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-display text-[14px] min-[375px]:text-[14.5px] sm:text-[16.5px] font-semibold text-[#101D32] leading-snug">
                        {item.q}
                      </span>
                      <span className="font-display shrink-0 text-lg font-semibold text-[#9A7538]">
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
                          <div className="border-t border-[#DDD7CC]/50 px-3.5 min-[375px]:px-4 pb-4 pt-2.5 sm:px-8 sm:pb-5 sm:pt-3">
                            <p className="font-sans text-[12.5px] min-[375px]:text-[13px] sm:text-[14.5px] leading-[1.65] text-[#59616C]">
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
            <div className="mt-5 flex flex-col p-4 min-[375px]:p-4.5 bg-[#FCFBF8] border border-[#DDD7CC] lg:hidden">
              <p className="font-display text-[15.5px] min-[375px]:text-[16px] font-semibold text-[#101D32]">
                ¿Aún tenés alguna duda?
              </p>
              <p className="mt-1 font-sans text-[12.5px] min-[375px]:text-[13px] leading-relaxed text-[#59616C]">
                Escribinos directamente por WhatsApp y analizamos tu consulta sin compromiso.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3.5 w-full h-[44px] min-h-[44px] text-[13px] font-semibold flex items-center justify-center text-center shadow-xs"
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

