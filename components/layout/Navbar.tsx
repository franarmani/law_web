// components/layout/Navbar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CONTACT_PHONES, WHATSAPP_URL } from '@/lib/areas'
import { cn } from '@/lib/cn'
import { t } from '@/i18n'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = useMemo(
    () => [
      { label: t('navbar.links.home'), href: '/#inicio' },
      { label: t('navbar.links.about'), href: '/#nosotros' },
      { label: t('navbar.links.areas'), href: '/#areas' },
      { label: t('navbar.links.contact'), href: '/#contacto' },
    ],
    [],
  )

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        'border-b border-[#DDD7CC] bg-[#FCFBF8]',
        scrolled ? 'shadow-[0_4px_20px_rgba(16,29,50,0.06)]' : '',
      )}
    >
      <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus-visible:outline-none"
          aria-label="Romio & Asociados — Inicio"
        >
          <span className="relative h-[48px] w-[48px] shrink-0 overflow-hidden border border-[#DDD7CC] bg-[#FCFBF8]">
            <Image
              src="/logo/romio-color.jpg"
              alt="Romio & Asociados"
              fill
              className="object-contain p-1"
              sizes="48px"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[21px] font-semibold tracking-[0.02em] text-[#101D32] transition-colors group-hover:text-[#A27D3F]">
              Romio &amp; Asociados
            </span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5F6670]">
              Estudio Jurídico · Mar del Plata
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-sans text-[14.5px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors duration-200 hover:text-[#A27D3F]',
                  'py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#A27D3F] after:transition-all after:duration-200 hover:after:w-full',
                  isActive && 'text-[#101D32]',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar consulta
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] text-[#101D32] transition-colors hover:border-[#101D32] hover:bg-[#F5F1E9] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('common.aria.closeMenu') : t('common.aria.openMenu')}
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-[#DDD7CC] bg-[#FCFBF8] px-6 pb-8 pt-5 lg:hidden"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[16px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors hover:text-[#A27D3F]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[#DDD7CC] pt-4 font-sans text-sm text-[#5F6670]">
                <p className="font-semibold text-[#101D32]">Atención directa:</p>
                <p className="mt-1">{CONTACT_PHONES[0].display} · Lunes a Viernes de 9:00 a 17:00 hs</p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center"
              >
                Solicitar consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
