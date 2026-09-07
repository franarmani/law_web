// components/home/WhyUsSection.tsx
import { getDictionary } from '@/i18n'

export default function WhyUsSection() {
  const { title, reasons } = getDictionary().home.whyUs

  return (
    <section id="por-que-elegirnos" className="w-full bg-[#101D32] py-14 sm:py-20 lg:py-28 text-white" aria-label="Por qué elegirnos">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Title, Intro & Institutional Quote */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Diferenciales</span>
                <span className="hidden sm:inline">Diferenciales · Compromiso</span>
              </p>
            </div>

            <h2 className="mt-3 sm:mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.16] !text-white">
              {title}
            </h2>

            <p className="mt-3 sm:mt-4 font-sans text-[15px] sm:text-[16.5px] leading-[1.7] text-[#D4DEEB]">
              Un estudio pensado para brindar respuestas directas, sin demoras innecesarias y con total claridad en cada paso procesal.
            </p>

            <blockquote className="mt-5 sm:mt-7 border-l-2 border-[#9A7538] pl-4 sm:pl-5 py-1">
              <p className="font-display text-[16.5px] sm:text-[18.5px] font-normal italic leading-[1.5] text-white/95">
                “Soluciones jurídicas claras, sólidas y orientadas a resultados para particulares y empresas.”
              </p>
            </blockquote>
          </div>

          {/* Right Column: 6 Attributes Grid (1 col on mobile, 2 cols on tablet/desktop) */}
          <div className="grid grid-cols-1 gap-px border-t border-b border-white/20 bg-white/15 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex flex-col justify-between bg-[#101D32] p-4 min-[375px]:p-5 sm:p-6 lg:p-7 transition-colors duration-200 hover:bg-[#15233C]"
              >
                <div>
                  <span className="font-display text-[19px] sm:text-[21px] font-semibold text-[#9A7538]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-[17px] sm:text-[19px] font-semibold !text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[14px] sm:text-[14.5px] leading-[1.6] text-[#D4DEEB]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

