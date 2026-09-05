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
    <section className="w-full bg-[#F5F1E9] py-24 lg:py-30" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading & WhatsApp Helper Box */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              {title}
            </h2>

            <p className="mt-6 font-sans text-[17px] sm:text-[18px] leading-[1.75] text-[#4A5260]">
              Respuestas claras y directas a las inquietudes más habituales antes de iniciar una consulta o proceso legal.
            </p>

            <div className="mt-10 border border-[#DDD7CC] bg-[#FCFBF8] p-9 shadow-sm">
              <p className="font-display text-[20px] sm:text-[21px] font-semibold text-[#101D32]">
                ¿Tenés una consulta específica?
              </p>
              <p className="mt-2.5 font-sans text-[15.5px] leading-[1.65] text-[#4A5260]">
                Escribinos por WhatsApp y analizamos tu caso de forma directa y confidencial.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 w-full text-center min-h-[50px] text-[15px]"
              >
                Hacer consulta directa
              </a>
            </div>
          </div>

          {/* Right Column: Wide Accordion List (68px min row height) */}
          <div className="flex flex-col border border-[#DDD7CC] bg-[#FCFBF8] shadow-sm">
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="border-b border-[#DDD7CC] last:border-b-0">
                  <button
                    type="button"
                    className="flex min-h-[72px] w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/60 focus-visible:outline-none sm:px-9"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[18.5px] sm:text-[19.5px] font-semibold text-[#101D32]">
                      {item.q}
                    </span>
                    <span className="font-display shrink-0 text-2xl font-semibold text-[#9C7737]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#DDD7CC]/50 px-6 pb-7 pt-5 sm:px-9">
                          <p className="font-sans text-[16.5px] sm:text-[17px] leading-[1.75] text-[#4A5260]">
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
