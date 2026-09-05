// components/layout/Footer.tsx
import Link from 'next/link'
import { areas, CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#101D32] py-20 lg:py-24 text-white border-t border-white/10" aria-label="Pie de página">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 pb-16 border-b border-white/15 lg:grid-cols-12 lg:gap-14">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#A27D3F] bg-[#1D304D] font-display text-[15px] font-semibold text-[#A27D3F]">
                RA
              </span>
              <p className="font-display text-[22px] font-semibold tracking-[0.02em] text-white">
                Romio &amp; Asociados
              </p>
            </div>

            <p className="mt-6 max-w-[360px] font-sans text-[15px] leading-[1.75] text-[#A9B4C2]">
              {t('footer.studioBlurbLine1')} {t('footer.studioBlurbLine2')}
            </p>

            <div className="mt-8 flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#A27D3F]">
              <span>Mar del Plata</span>
              <span>·</span>
              <span>Buenos Aires</span>
              <span>·</span>
              <span>Argentina</span>
            </div>
          </div>

          {/* Column 2: Practice Areas (4 cols) */}
          <div className="lg:col-span-4">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
              {t('footer.areasHeading')}
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="font-sans text-[15px] text-white/70 transition-colors hover:text-[#A27D3F]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Attention (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
              {t('footer.contactHeading')}
            </p>
            <div className="mt-6 flex flex-col gap-4 font-sans text-[14.5px] text-white/70">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#A27D3F]"
              >
                WhatsApp: +54 9 223 311-8656
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-[#A27D3F]"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-white/60">
                Rivadavia 3188, 1° Piso, Of. 15<br />Mar del Plata, Argentina
              </p>
              <p className="text-white/60">
                Atención: L–V de 9:00 a 17:00 hs
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-8 font-sans text-[12px] uppercase tracking-[0.08em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year })}</p>
          <div className="flex gap-8">
            <Link href="/privacidad" className="transition-colors hover:text-[#A27D3F]">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="transition-colors hover:text-[#A27D3F]">
              Aviso Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
