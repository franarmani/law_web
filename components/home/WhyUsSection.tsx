// components/home/WhyUsSection.tsx
import { getDictionary } from '@/i18n'

export default function WhyUsSection() {
  const { eyebrow, title, reasons } = getDictionary().home.whyUs

  return (
    <section id="por-que-elegirnos" className="w-full bg-[#101D32] py-20 lg:py-28 text-white" aria-label="Por qué elegirnos">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Title, Intro & Institutional Quote */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                {eyebrow} · Compromiso
              </p>
            </div>

            <h2 className="mt-5 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.15] !text-white">
              {title}
            </h2>

            <p className="mt-5 font-sans text-[16.5px] sm:text-[17.5px] leading-[1.75] text-[#D4DEEB]">
              Un estudio pensado para brindar respuestas directas, sin demoras innecesarias y con total claridad en cada paso procesal.
            </p>

            <blockquote className="mt-9 border-l-2 border-[#9A7538] pl-6 py-2">
              <p className="font-display text-[20px] sm:text-[21px] font-normal italic leading-[1.55] text-white/95">
                “Soluciones jurídicas claras, sólidas y orientadas a resultados para particulares y empresas.”
              </p>
            </blockquote>
          </div>

          {/* Right Column: 6 Attributes Grid */}
          <div className="grid grid-cols-1 gap-px border-t border-b border-white/20 bg-white/15 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex flex-col justify-between bg-[#101D32] p-7 sm:p-9 transition-colors duration-200 hover:bg-[#15233C]"
              >
                <div>
                  <span className="font-display text-[22px] font-semibold text-[#9A7538]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3.5 text-[19px] sm:text-[20px] font-semibold !text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[15px] sm:text-[15.5px] leading-[1.65] text-[#D4DEEB]">
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
