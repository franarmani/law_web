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
      { label: t('navbar.links.home'), href: '/#inicio', num: '01' },
      { label: t('navbar.links.about'), href: '/#nosotros', num: '02' },
      { label: t('navbar.links.areas'), href: '/#areas', num: '03' },
      { label: t('navbar.links.contact'), href: '/#contacto', num: '04' },
    ],
    [],
  )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'border-b border-[#DDD7CC] bg-[#FCFBF8]',
        scrolled ? 'shadow-[0_4px_30px_rgba(16,29,50,0.07)]' : '',
      )}
    >
      <div className="mx-auto flex h-[62px] sm:h-[68px] lg:h-[72px] max-w-[1240px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Brand Logo & Editorial Signature */}
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
            <span className="font-display text-[17px] sm:text-[19px] lg:text-[21px] font-semibold tracking-[0.01em] text-[#101D32] transition-colors group-hover:text-[#9A7538] leading-tight">
              Romio &amp; Asociados
            </span>
            <span className="font-sans text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold uppercase tracking-[0.14em] text-[#59616C] leading-tight mt-0.5">
              Estudio Jurídico · Mar del Plata
            </span>
          </div>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group flex items-baseline gap-1.5 font-sans text-[13.5px] font-semibold uppercase tracking-[0.06em] text-[#101D32] transition-colors duration-200 hover:text-[#9A7538]',
                  isActive && 'text-[#101D32]',
                )}
              >
                <span className="font-display text-[11px] font-normal text-[#9A7538] group-hover:text-[#101D32] transition-colors">
                  {link.num}
                </span>
                <span>{link.label}</span>
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
            className="btn-primary min-h-[42px] h-[42px] px-5 text-[13px]"
          >
            Solicitar consulta
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] text-[#101D32] transition-colors hover:border-[#101D32] hover:bg-[#F5F1E9] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('common.aria.closeMenu') : t('common.aria.openMenu')}
          aria-expanded={open}
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-b border-[#DDD7CC] bg-[#FCFBF8] shadow-[0_16px_36px_rgba(16,29,50,0.12)] lg:hidden overflow-hidden"
          >
            <div className="px-5 pt-2 pb-6 flex flex-col">
              {/* Navigation Items in Structured Rows */}
              <nav className="flex flex-col border-t border-[#DDD7CC]/60" aria-label="Navegación móvil">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-3.5 border-b border-[#DDD7CC]/60 transition-colors hover:bg-[#F5F1E9]/60"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-display text-[13px] font-semibold text-[#9A7538]">
                        {link.num}
                      </span>
                      <span className="font-display text-[17px] font-semibold text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <span className="font-sans text-[15px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Direct Contact Card on Ivory */}
              <div className="mt-4 border border-[#DDD7CC] bg-[#F5F1E9] p-4">
                <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                  Atención Directa · Estudio
                </p>
                <a
                  href={`https://wa.me/5492233118656`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-1 block text-[16px] font-semibold text-[#101D32] hover:text-[#9A7538] transition-colors"
                >
                  {CONTACT_PHONES[0].display}
                </a>
                <p className="mt-0.5 font-sans text-[12px] text-[#59616C]">
                  Lunes a Viernes de 9:00 a 17:00 hs · Presencial &amp; Virtual
                </p>
              </div>

              {/* Primary Consultation Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full h-[46px] min-h-[46px] text-[13.5px] font-bold tracking-[0.06em]"
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
