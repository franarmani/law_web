// components/home/FAQSection.tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { getDictionary } from '@/i18n'

export default function FAQSection() {
  const { eyebrow, title, items } = getDictionary().home.faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section className="bg-white py-24 lg:py-36" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-24 max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
        </div>

        <div className="mx-auto flex max-w-[720px] flex-col">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="border-t border-border py-8 last:border-b">
                <button
                  type="button"
                  className="flex w-full items-baseline justify-between gap-6 text-left focus-visible:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[18px] font-light text-navy">
                    {item.q}
                  </span>
                  <span className="font-display shrink-0 text-xl font-light text-champagne">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[520px] pt-4 text-[14px]">{item.a}</p>
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
