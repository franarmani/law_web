// components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { areas, CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/areas'
import { t } from '@/i18n'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#101D32] pt-10 sm:pt-12 lg:pt-16 pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-12 lg:pb-14 text-white border-t border-[#9A7538]/40" aria-label="Pie de página">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/15 lg:grid-cols-12 lg:gap-12">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            {/* Official Footer Logo in white with transparent background */}
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-85 focus-visible:outline-none"
              aria-label="Romio & Asociados — Inicio"
            >
              <div className="relative h-[95px] w-[95px] sm:h-[110px] sm:w-[110px]">
                <Image
                  src="/logo/logofooter.png"
                  alt="Romio & Asociados — Estudio Jurídico"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 95px, 110px"
                />
              </div>
            </Link>

            <p className="mt-3.5 sm:mt-4 max-w-[360px] font-sans text-[14px] sm:text-[14.5px] leading-[1.7] text-[#D4DEEB]">
              {t('footer.studioBlurbLine1')} {t('footer.studioBlurbLine2')}
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 font-sans text-[11.5px] min-[375px]:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              <span>Mar del Plata</span>
              <span>·</span>
              <span>Buenos Aires</span>
              <span>·</span>
              <span>Argentina</span>
            </div>
          </div>

          {/* Column 2: Practice Areas (4 cols) */}
          <div className="lg:col-span-4">
            <p className="font-sans text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              {t('footer.areasHeading')}
            </p>
            <ul className="mt-3 sm:mt-4 grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="inline-block py-0.5 font-sans text-[14px] text-[#D4DEEB] transition-colors hover:text-[#9A7538]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Attention (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
              {t('footer.contactHeading')}
            </p>
            <div className="mt-3 sm:mt-4 flex flex-col gap-2.5 font-sans text-[14px] text-[#D4DEEB]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-0.5 transition-colors hover:text-[#9A7538]"
              >
                WhatsApp: +54 9 223 311-8656
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block py-0.5 break-all sm:break-normal transition-colors hover:text-[#9A7538]"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-[#D4DEEB] leading-relaxed">
                Rivadavia 3188, 1° Piso, Of. 15<br />Mar del Plata, Argentina
              </p>
              <p className="text-[#D4DEEB]">
                Atención: L–V de 9:00 a 17:00 hs
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clear high-contrast copyright text */}
        <div className="flex flex-col gap-3 pt-5 sm:pt-6 font-sans text-[13px] min-[375px]:text-[13.5px] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#F5F1E9] font-normal tracking-wide">
            {t('footer.copyright', { year })}
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-6">
            <Link href="/privacidad" className="py-1 text-[#D4DEEB] transition-colors hover:text-[#9A7538]">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="py-1 text-[#D4DEEB] transition-colors hover:text-[#9A7538]">
              Aviso Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
