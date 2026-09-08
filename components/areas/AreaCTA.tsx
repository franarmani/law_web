'use client'

import { Area, buildWhatsappUrl } from '@/lib/areas'
import { t } from '@/i18n'

export default function AreaCTA({ area }: { area: Area }) {
  const url = buildWhatsappUrl(
    t('common.whatsapp.areaConsultPrefix', { area: area.shortName }),
  )

  return (
    <section className="w-full bg-[#101D32] py-9 min-[375px]:py-11 sm:py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[800px] px-4 min-[375px]:px-5 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-5 sm:w-7 bg-[#9A7538]" aria-hidden="true" />
          <p className="font-sans text-[10.5px] min-[375px]:text-[11px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
            {t('areas.ui.cta.eyebrow')}
          </p>
          <span className="h-px w-5 sm:w-7 bg-[#9A7538]" aria-hidden="true" />
        </div>

        <h2 className="mt-3 sm:mt-5 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[38px] font-semibold leading-[1.2] text-white">
          {t('areas.ui.cta.title', { area: area.shortName })}
        </h2>

        <p className="mx-auto mt-2.5 sm:mt-4 max-w-lg font-sans text-[13px] min-[375px]:text-[13.5px] sm:text-[15.5px] leading-[1.6] text-[#D4DEEB]">
          {t('areas.ui.cta.body')}
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center min-h-[44px] h-[44px] px-6 text-[13px] !bg-[#9A7538] !border-[#9A7538] !text-[#FCFBF8] hover:!bg-[#FCFBF8] hover:!text-[#101D32]"
          >
            {t('areas.ui.cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}

