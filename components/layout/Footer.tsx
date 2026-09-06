// components/layout/Footer.tsx
import Link from 'next/link'
import { areas, CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#101D32] py-16 lg:py-20 text-white border-t border-[#9A7538]/40" aria-label="Pie de página">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main Footer Grid: 3 Orderly Columns */}
        <div className="grid grid-cols-1 gap-12 pb-14 border-b border-white/15 lg:grid-cols-12 lg:gap-14">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center border border-[#9A7538] bg-[#15233C] font-display text-[16px] font-semibold text-[#9A7538]">
                RA
              </span>
              <p className="font-display text-[23px] font-semibold tracking-[0.02em] text-white">
                Romio &amp; Asociados
              </p>
            </div>

            <p className="mt-5 max-w-[380px] font-sans text-[15.5px] leading-[1.75] text-[#D4DEEB]">
              {t('footer.studioBlurbLine1')} {t('footer.studioBlurbLine2')}
            </p>

            <div className="mt-7 flex items-center gap-2 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              <span>Mar del Plata</span>
              <span>·</span>
              <span>Buenos Aires</span>
              <span>·</span>
              <span>Argentina</span>
            </div>
          </div>

          {/* Column 2: Practice Areas (4 cols) */}
          <div className="lg:col-span-4">
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#9A7538]">
              {t('footer.areasHeading')}
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="font-sans text-[15px] text-[#D4DEEB] transition-colors hover:text-[#9A7538]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Attention (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#9A7538]">
              {t('footer.contactHeading')}
            </p>
            <div className="mt-5 flex flex-col gap-3.5 font-sans text-[15px] text-[#D4DEEB]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#9A7538]"
              >
                WhatsApp: +54 9 223 311-8656
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-[#9A7538]"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-[#D4DEEB] leading-snug">
                Rivadavia 3188, 1° Piso, Of. 15<br />Mar del Plata, Argentina
              </p>
              <p className="text-[#D4DEEB]">
                Atención: L–V de 9:00 a 17:00 hs
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Min 14px text */}
        <div className="flex flex-col gap-4 pt-7 font-sans text-[14px] text-[#D4DEEB]/75 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year })}</p>
          <div className="flex gap-7">
            <Link href="/privacidad" className="transition-colors hover:text-[#9A7538]">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="transition-colors hover:text-[#9A7538]">
              Aviso Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
