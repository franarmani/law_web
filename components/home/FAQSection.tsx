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
    <section className="w-full bg-[#F5F1E9] py-24 lg:py-32" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* Left Column: Heading & WhatsApp Help Box */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              {title}
            </h2>

            <p className="mt-6 font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#5F6670]">
              Respuestas claras y directas a las inquietudes más habituales antes de iniciar una consulta o proceso legal.
            </p>

            <div className="mt-10 border border-[#DDD7CC] bg-[#FCFBF8] p-8">
              <p className="font-display text-[19px] font-semibold text-[#101D32]">
                ¿Tenés una consulta específica?
              </p>
              <p className="mt-2 font-sans text-[14.5px] text-[#5F6670]">
                Escribinos por WhatsApp y analizamos tu caso de forma directa y confidencial.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full text-center"
              >
                Hacer consulta directa
              </a>
            </div>
          </div>

          {/* Right Column: Wide Accordion List */}
          <div className="flex flex-col border border-[#DDD7CC] bg-[#FCFBF8]">
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="border-b border-[#DDD7CC] last:border-b-0">
                  <button
                    type="button"
                    className="flex min-h-[68px] w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/60 focus-visible:outline-none sm:px-8"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17.5px] sm:text-[18.5px] font-semibold text-[#101D32]">
                      {item.q}
                    </span>
                    <span className="font-display shrink-0 text-2xl font-normal text-[#A27D3F]">
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
                        <div className="border-t border-[#DDD7CC]/50 px-6 pb-6 pt-4 sm:px-8">
                          <p className="font-sans text-[15.5px] sm:text-[16px] leading-[1.75] text-[#5F6670]">
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
