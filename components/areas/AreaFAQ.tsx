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
    <section className="w-full bg-[#F5F1E9] py-14 sm:py-20 lg:py-28 border-t border-[#DDD7CC]">
      <div className="mx-auto max-w-[1240px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11.5px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              {t('areas.ui.faq.eyebrow')}
            </p>
            <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#101D32]">
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
                  className="flex min-h-[56px] sm:min-h-[64px] w-full items-center justify-between gap-4 sm:gap-6 px-4 min-[375px]:px-5 py-4 sm:px-8 text-left transition-colors duration-150 hover:bg-[#F5F1E9]/60 focus-visible:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-display text-[16px] sm:text-[18px] font-semibold text-[#101D32] leading-snug">
                    {item.q}
                  </span>
                  <span className="font-display shrink-0 text-xl sm:text-2xl font-normal text-[#9A7538]">
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
                      <div className="border-t border-[#DDD7CC]/50 px-4 min-[375px]:px-5 pb-5 pt-3 sm:px-8 sm:pb-6 sm:pt-4">
                        <p className="font-sans text-[15px] sm:text-[16px] leading-[1.75] text-[#59616C]">
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

