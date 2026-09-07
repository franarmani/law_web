// components/areas/AreaFAQ.tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type { Area } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreaFAQ({ area }: { area: Area }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section className="w-full bg-[#F5F1E9] py-9 min-[375px]:py-11 sm:py-16 lg:py-24 border-t border-[#DDD7CC]">
      <div className="mx-auto max-w-[1240px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mx-auto mb-7 sm:mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-5 sm:w-7 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[10.5px] min-[375px]:text-[11px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              {t('areas.ui.faq.eyebrow')}
            </p>
            <span className="h-px w-5 sm:w-7 bg-[#9A7538]" aria-hidden="true" />
          </div>
          <h2 className="mt-2.5 sm:mt-3 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
            {t('areas.ui.faq.title')}
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="mx-auto flex max-w-[860px] flex-col border border-[#DDD7CC] bg-[#FCFBF8]">
          {area.faq.map((item, i) => {
            const isOpen = openIndex === i
            const btnId = `area-faq-btn-${i}`
            const panelId = `area-faq-panel-${i}`

            return (
              <div key={i} className="border-b border-[#DDD7CC] last:border-b-0">
                <button
                  type="button"
                  id={btnId}
                  className="flex min-h-[48px] sm:min-h-[58px] w-full items-center justify-between gap-3 sm:gap-6 px-3.5 min-[375px]:px-4 py-3 sm:px-8 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/60 focus-visible:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-display text-[14px] min-[375px]:text-[14.5px] sm:text-[16.5px] font-semibold text-[#101D32] leading-snug">
                    {item.q}
                  </span>
                  <span className="font-display shrink-0 text-lg font-normal text-[#9A7538]">
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
                      transition={{ duration: 0.22, ease: 'easeOut' }}
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

      </div>
    </section>
  )
}

