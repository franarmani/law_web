// components/areas/AreaCTA.tsx
'use client'

import { Area, buildWhatsappUrl } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreaCTA({ area }: { area: Area }) {
  const url = buildWhatsappUrl(
    t('common.whatsapp.areaConsultPrefix', { area: area.shortName }),
  )

  return (
    <section className="w-full bg-[#101D32] py-24 lg:py-32 text-white">
      <div className="mx-auto max-w-[800px] px-6 text-center sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
          <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
            {t('areas.ui.cta.eyebrow')}
          </p>
          <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
        </div>

        <h2 className="mt-6 text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.2] text-white">
          {t('areas.ui.cta.title', { area: area.shortName })}
        </h2>

        <p className="mx-auto mt-6 max-w-lg font-sans text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[#A9B4C2]">
          {t('areas.ui.cta.body')}
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#A27D3F] !border-[#A27D3F] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32]"
          >
            {t('areas.ui.cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
