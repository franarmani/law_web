// components/layout/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import { cn } from '@/lib/cn'
import { t } from '@/i18n'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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
    <header className="w-full bg-ivory">
      <div className="mx-auto flex h-[100px] max-w-[1180px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-[20px] font-light uppercase tracking-[0.08em] text-navy focus-visible:outline-none"
        >
          Romio &amp; Asociados
        </Link>

        <nav className="hidden items-center gap-14 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-[13px] font-light uppercase tracking-[0.12em] text-navy transition-opacity hover:opacity-100',
                  isActive ? 'opacity-100' : 'opacity-65',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary hidden lg:inline-block"
        >
          Consulta
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-navy transition-colors hover:bg-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('common.aria.closeMenu') : t('common.aria.openMenu')}
          aria-expanded={open}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.2"
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
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-border bg-ivory px-6 pb-6 pt-4 lg:hidden"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm font-light uppercase tracking-[0.1em] text-navy"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="link-primary w-fit"
              >
                Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
