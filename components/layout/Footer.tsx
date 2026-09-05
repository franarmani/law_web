// components/layout/Footer.tsx
import Link from 'next/link'
import { areas, CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#101D32] py-20 lg:py-24 text-white border-t border-white/10" aria-label="Pie de página">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 pb-16 border-b border-white/15 lg:grid-cols-12 lg:gap-14">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center border border-[#B8934C] bg-[#1D304D] font-display text-[16px] font-semibold text-[#B8934C]">
                RA
              </span>
              <p className="font-display text-[24px] font-semibold tracking-[0.02em] text-white">
                Romio &amp; Asociados
              </p>
            </div>

            <p className="mt-6 max-w-[380px] font-sans text-[16px] leading-[1.8] text-[#CCD6E5]">
              {t('footer.studioBlurbLine1')} {t('footer.studioBlurbLine2')}
            </p>

            <div className="mt-8 flex items-center gap-2 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#B8934C]">
              <span>Mar del Plata</span>
              <span>·</span>
              <span>Buenos Aires</span>
              <span>·</span>
              <span>Argentina</span>
            </div>
          </div>

          {/* Column 2: Practice Areas (4 cols) */}
          <div className="lg:col-span-4">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#B8934C]">
              {t('footer.areasHeading')}
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="font-sans text-[16px] text-white/80 transition-colors hover:text-[#B8934C]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Attention (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#B8934C]">
              {t('footer.contactHeading')}
            </p>
            <div className="mt-6 flex flex-col gap-4 font-sans text-[15.5px] text-white/80">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#B8934C]"
              >
                WhatsApp: +54 9 223 311-8656
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-[#B8934C]"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-white/70 leading-snug">
                Rivadavia 3188, 1° Piso, Of. 15<br />Mar del Plata, Argentina
              </p>
              <p className="text-white/70">
                Atención: L–V de 9:00 a 17:00 hs
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-8 font-sans text-[13px] uppercase tracking-[0.08em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year })}</p>
          <div className="flex gap-8">
            <Link href="/privacidad" className="transition-colors hover:text-[#B8934C]">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="transition-colors hover:text-[#B8934C]">
              Aviso Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
