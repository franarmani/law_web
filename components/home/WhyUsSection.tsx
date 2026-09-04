// components/home/WhyUsSection.tsx
import { getDictionary } from '@/i18n'

export default function WhyUsSection() {
  const { eyebrow, title, reasons } = getDictionary().home.whyUs

  return (
    <section className="bg-ivory py-24 lg:py-36" aria-label="Por qué elegirnos">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="border-t border-champagne pt-6">
              <span className="font-sans text-[11px] font-light tracking-[0.15em] text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-display mt-3.5 text-[18px] font-light text-navy">
                {reason.title}
              </p>
              <p className="mt-2.5 text-[13px]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
