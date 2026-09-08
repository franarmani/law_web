'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import { cn } from '@/lib/cn'
import { t } from '@/i18n'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.body.setAttribute('data-mobile-menu-open', 'true')
      return () => {
        document.body.style.overflow = originalOverflow
        document.body.removeAttribute('data-mobile-menu-open')
      }
    } else {
      document.body.removeAttribute('data-mobile-menu-open')
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [open])

  const navLinks = useMemo(
    () => [
      { label: t('navbar.links.home'), href: '/#inicio' },
      { label: t('navbar.links.areas'), href: '/#areas' },
      { label: t('navbar.links.about'), href: '/#nosotros' },
      { label: t('navbar.links.contact'), href: '/#contacto' },
    ],
    [],
  )

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 relative',
        'border-b border-[#DDD7CC] bg-[#FCFBF8]',
        scrolled ? 'shadow-[0_4px_30px_rgba(16,29,50,0.07)]' : '',
      )}
    >
      <div className="mx-auto flex h-[62px] sm:h-[68px] lg:h-[72px] max-w-[1240px] items-center justify-between px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3.5 focus-visible:outline-none"
          aria-label="Romio & Asociados — Inicio"
        >
          <span className="relative h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] lg:h-[48px] lg:w-[48px] shrink-0 border border-[#DDD7CC] bg-[#FCFBF8] p-0.5 shadow-xs transition-transform duration-300 group-hover:border-[#9A7538]">
            <Image
              src="/logo/romio-color.jpg"
              alt="Romio & Asociados"
              fill
              className="object-contain p-0.5"
              sizes="(max-width: 640px) 40px, 48px"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-[15px] sm:text-[17px] lg:text-[18.5px] font-medium tracking-[-0.015em] text-[#101D32] transition-colors group-hover:text-[#9A7538] leading-tight">
              Romio &amp; Asociados
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-semibold uppercase tracking-[0.14em] text-[#59616C] leading-tight mt-0.5">
              Estudio Jurídico · Mar del Plata
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-[13.5px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors duration-200 hover:text-[#9A7538]',
                  isActive && 'text-[#101D32]',
                )}
              >
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] text-[#101D32] transition-colors hover:border-[#101D32] hover:bg-[#F5F1E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7538] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('common.aria.closeMenu') : t('common.aria.openMenu')}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 top-[62px] sm:top-[68px] z-40 bg-[#101D32]/40 backdrop-blur-xs lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal de navegación"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 z-50 max-h-[calc(100dvh-62px)] sm:max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-[#DDD7CC] bg-[#FCFBF8] shadow-[0_20px_40px_rgba(16,29,50,0.14)] lg:hidden"
            >
              <div className="px-4 min-[375px]:px-5 pt-1 pb-4 flex flex-col">
                <nav className="flex flex-col border-t border-[#DDD7CC]/60" aria-label="Navegación móvil">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-3 border-b border-[#DDD7CC]/60 transition-colors hover:bg-[#F5F1E9]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
                    >
                      <span className="font-sans text-[15px] font-medium text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                        {link.label}
                      </span>
                      <span className="font-sans text-[14px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

