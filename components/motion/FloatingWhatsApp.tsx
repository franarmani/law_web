'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function FloatingWhatsApp() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // En la portada principal no se muestra el botón flotante para no duplicar
  // las llamadas a WhatsApp del header, hero y sección final de contacto.
  if (pathname === '/') {
    return null
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="group floating-whatsapp-container fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 min-[375px]:right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3.5"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 14 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <span className="pointer-events-none hidden whitespace-nowrap border border-[#DDD7CC] bg-[#FCFBF8] px-4 py-2.5 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#101D32] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
            {t('common.cta.freeConsultSticky')}
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('common.cta.consultWhatsAppFloatingAria')}
            className="flex h-[52px] w-[52px] sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#DDD7CC] bg-[#101D32] text-[#FCFBF8] shadow-lg transition-all duration-200 hover:bg-[#9A7538] hover:border-[#9A7538] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7538]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.205-.506-4.484-1.37l-.321-.202-3.32.871.887-3.23-.222-.335A7.955 7.955 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


