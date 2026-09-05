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
        scrolled ? 'shadow-[0_4px_24px_rgba(16,29,50,0.06)]' : '',
      )}
    >
      <div className="mx-auto flex h-[88px] max-w-[1240px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Brand Logo (+20%) & Name */}
        <Link
          href="/"
          className="group flex items-center gap-4 focus-visible:outline-none"
          aria-label="Romio & Asociados — Inicio"
        >
          <span className="relative h-[58px] w-[58px] shrink-0 overflow-hidden border border-[#DDD7CC] bg-[#FCFBF8] shadow-sm">
            <Image
              src="/logo/romio-color.jpg"
              alt="Romio & Asociados"
              fill
              className="object-contain p-1"
              sizes="58px"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[23px] font-semibold tracking-[0.02em] text-[#101D32] transition-colors group-hover:text-[#9C7737]">
              Romio &amp; Asociados
            </span>
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.15em] text-[#424956]">
              Estudio Jurídico · Mar del Plata
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 xl:gap-12 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-sans text-[15.5px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors duration-200 hover:text-[#9C7737]',
                  'py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#9C7737] after:transition-all after:duration-200 hover:after:w-full',
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
            className="btn-primary min-h-[50px] px-8 text-[15px]"
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
            className="border-t border-[#DDD7CC] bg-[#FCFBF8] px-6 pb-8 pt-6 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[17px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors hover:text-[#9C7737]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[#DDD7CC] pt-5 font-sans text-sm text-[#424956]">
                <p className="font-bold text-[#101D32]">Atención directa:</p>
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
