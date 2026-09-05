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
    <section className="w-full bg-[#F5F1E9] py-24 lg:py-32 border-t border-[#DDD7CC]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
              {t('areas.ui.faq.eyebrow')}
            </p>
            <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[42px] font-semibold leading-[1.2] text-[#101D32]">
            {t('areas.ui.faq.title')}
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="mx-auto flex max-w-[860px] flex-col border border-[#DDD7CC] bg-[#FCFBF8]">
          {area.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-[#DDD7CC] last:border-b-0">
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
    </section>
  )
}
