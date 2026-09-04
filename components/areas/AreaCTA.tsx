// components/areas/AreaCTA.tsx
'use client'

import { Area, buildWhatsappUrl } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreaCTA({ area }: { area: Area }) {
  const url = buildWhatsappUrl(
    t('common.whatsapp.areaConsultPrefix', { area: area.shortName }),
  )

  return (
    <section className="bg-navy py-24 lg:py-36">
      <div className="mx-auto max-w-[720px] px-6 text-center sm:px-8 lg:px-12">
        <p className="eyebrow">{t('areas.ui.cta.eyebrow')}</p>
        <p className="font-display mt-6 text-[30px] font-light leading-[1.15] text-white sm:text-[40px]">
          {t('areas.ui.cta.title', { area: area.shortName })}
        </p>
        <p className="mx-auto mt-5 max-w-md !text-white/60">{t('areas.ui.cta.body')}</p>

        <div className="mt-10 flex justify-center">
          <a href={url} target="_blank" rel="noopener noreferrer" className="link-primary on-navy">
            {t('areas.ui.cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
