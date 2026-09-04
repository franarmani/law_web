// components/layout/Footer.tsx
import Link from 'next/link'
import { areas, CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-12">
          {/* Column 1: Wordmark & Bio */}
          <div className="lg:col-span-5">
            <p className="font-display text-[18px] font-light uppercase tracking-[0.08em] text-white">
              Romio &amp; Asociados
            </p>
            <p className="mt-6 max-w-[300px] font-sans text-sm font-light leading-[1.8] text-white/50">
              {t('footer.studioBlurbLine1')} {t('footer.studioBlurbLine2')}
            </p>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="lg:col-span-4">
            <p className="eyebrow">{t('footer.areasHeading')}</p>
            <ul className="mt-7 flex flex-col gap-4">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="font-sans text-sm font-light text-white/55 transition-colors hover:text-champagne"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow">{t('footer.contactHeading')}</p>
            <div className="mt-7 flex flex-col gap-3.5 font-sans text-sm font-light text-white/55">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-champagne"
              >
                {t('common.contact.whatsappLabelShort')}: +54 9 223 311-8656
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-champagne"
              >
                {CONTACT_EMAIL}
              </a>
              <p>Rivadavia 3188, 1° Piso, Oficina 15, Mar del Plata</p>
              <p>Atención: L–V 9:00 a 17:00 hs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-8 font-sans text-[10px] uppercase tracking-[0.1em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year })}</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="transition-colors hover:text-champagne">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="transition-colors hover:text-champagne">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
