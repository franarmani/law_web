// components/areas/AreaCTA.tsx
'use client'

import { Area, buildWhatsappUrl } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreaCTA({ area }: { area: Area }) {
  const url = buildWhatsappUrl(
    t('common.whatsapp.areaConsultPrefix', { area: area.shortName }),
  )

  return (
    <section className="w-full bg-[#101D32] py-14 sm:py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-[800px] px-4 min-[375px]:px-5 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
          <p className="font-sans text-[11.5px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
            {t('areas.ui.cta.eyebrow')}
          </p>
          <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
        </div>

        <h2 className="mt-4 sm:mt-6 text-[26px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.2] text-white">
          {t('areas.ui.cta.title', { area: area.shortName })}
        </h2>

        <p className="mx-auto mt-4 sm:mt-6 max-w-lg font-sans text-[15.5px] sm:text-[17px] leading-[1.7] text-[#D4DEEB]">
          {t('areas.ui.cta.body')}
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center min-h-[48px] h-[48px] !bg-[#9A7538] !border-[#9A7538] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32]"
          >
            {t('areas.ui.cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}

