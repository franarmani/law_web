// components/home/WhyUsSection.tsx
import { getDictionary } from '@/i18n'

export default function WhyUsSection() {
  const { eyebrow, title, reasons } = getDictionary().home.whyUs

  return (
    <section className="w-full bg-[#101D32] py-24 lg:py-32 text-white" aria-label="Por qué elegirnos">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Left Column: Title, Intro & Institutional Quote */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-6 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-white">
              {title}
            </h2>

            <p className="mt-6 font-sans text-[17px] sm:text-[18px] leading-[1.7] text-[#A9B4C2]">
              Un estudio pensado para dar respuestas directas, sin demoras innecesarias y con total claridad en cada paso procesal.
            </p>

            <blockquote className="mt-10 border-l-2 border-[#A27D3F] pl-6 py-2">
              <p className="font-display text-[21px] font-normal italic leading-[1.5] text-white/90">
                “Soluciones jurídicas claras, sólidas y orientadas a resultados para particulares y empresas.”
              </p>
            </blockquote>
          </div>

          {/* Right Column: 6 Attributes Grid with Fine Lines */}
          <div className="grid grid-cols-1 gap-px border-t border-b border-white/15 bg-white/10 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex flex-col justify-between bg-[#101D32] p-8 sm:p-10 transition-colors duration-200 hover:bg-[#1D304D]"
              >
                <div>
                  <span className="font-display text-[24px] font-semibold text-[#A27D3F]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-[19px] sm:text-[20px] font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[15px] sm:text-[15.5px] leading-[1.65] text-[#A9B4C2]">
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
