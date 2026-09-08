'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { getDictionary } from '@/i18n'
import SectionReveal from '@/components/motion/SectionReveal'

export default function FAQSection() {
  const { title, items } = getDictionary().home.faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section
      id="faq"
      className="snap-section w-full bg-[#F5F1E9] py-9 min-[375px]:py-11 sm:py-16 lg:py-20 border-b border-[#DDD7CC]"
      aria-label="Preguntas frecuentes"
    >
      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14 xl:gap-18">
          
          <SectionReveal delay={0}>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
                <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                  Preguntas frecuentes
                </p>
              </div>

              <h2 className="mt-2 sm:mt-3 font-display text-[22px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
                {title}
              </h2>

              <p className="mt-2 sm:mt-3 font-sans text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
                Respuestas directas a las dudas habituales antes de iniciar tu consulta.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
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
                      className="flex min-h-[48px] sm:min-h-[54px] w-full items-center justify-between gap-3 sm:gap-6 px-4 py-3 sm:px-6 text-left transition-colors duration-200 hover:bg-[#F5F1E9]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-display text-[14.5px] min-[375px]:text-[15px] sm:text-[16.5px] font-semibold text-[#101D32] leading-snug">
                        {item.q}
                      </span>
                      <span className="font-display shrink-0 text-xl font-semibold text-[#9A7538] transition-all duration-200">
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
                          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#DDD7CC]/50 px-4 pb-4 pt-2.5 sm:px-6 sm:pb-5 sm:pt-3 bg-[#FCFBF8]">
                            <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#59616C]">
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
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}



