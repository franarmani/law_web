// components/home/WhyUsSection.tsx
import { getDictionary } from '@/i18n'

export default function WhyUsSection() {
  const { eyebrow, title, reasons } = getDictionary().home.whyUs

  return (
    <section className="w-full bg-[#101D32] py-24 lg:py-28 text-white" aria-label="Por qué elegirnos">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Title, Intro & Institutional Quote */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8934C]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-[#B8934C]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-6 text-[36px] sm:text-[44px] lg:text-[50px] font-semibold leading-[1.16] text-white">
              {title}
            </h2>

            <p className="mt-6 font-sans text-[17.5px] sm:text-[18.5px] leading-[1.75] text-[#D4DEEB]">
              Un estudio pensado para brindar respuestas directas, sin demoras innecesarias y con total claridad en cada paso procesal.
            </p>

            <blockquote className="mt-10 border-l-2 border-[#B8934C] pl-6 py-2">
              <p className="font-display text-[22px] font-normal italic leading-[1.55] text-white/95">
                “Soluciones jurídicas claras, sólidas y orientadas a resultados para particulares y empresas.”
              </p>
            </blockquote>
          </div>

          {/* Right Column: 6 Attributes Grid */}
          <div className="grid grid-cols-1 gap-px border-t border-b border-white/20 bg-white/15 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex flex-col justify-between bg-[#101D32] p-8 sm:p-10 transition-colors duration-200 hover:bg-[#1D304D]"
              >
                <div>
                  <span className="font-display text-[28px] font-semibold text-[#B8934C]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-[20px] sm:text-[21px] font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 font-sans text-[16px] leading-[1.7] text-[#D4DEEB]">
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
