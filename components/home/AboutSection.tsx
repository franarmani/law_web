// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="w-full bg-[#FCFBF8] py-24 lg:py-28" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading, Statement & Metrics */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                {about.eyebrow}
              </p>
            </div>

            <h2 className="mt-6 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.18] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            <blockquote className="mt-8 border-l-2 border-[#9C7737] pl-6 py-2 bg-[#F5F1E9]/50">
              <p className="font-display text-[21px] sm:text-[23px] font-normal italic leading-[1.55] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
            </blockquote>

            {/* Metrics Counter Grid */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#DDD7CC] pt-8">
              {about.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-[38px] sm:text-[44px] font-semibold text-[#101D32]">
                    {m.value}
                  </p>
                  <p className="mt-1 font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#4A5260]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Body & Values */}
          <div className="flex flex-col justify-between border-t border-[#DDD7CC] pt-8 lg:border-l lg:border-t-0 lg:pl-16 xl:pl-20 lg:pt-0">
            <div>
              <p className="font-sans text-[17.5px] sm:text-[18.5px] leading-[1.8] text-[#4A5260]">
                {about.body}
              </p>

              <div className="mt-10 border-t border-[#DDD7CC] pt-8">
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#9C7737] mb-3">
                  Nuestros Principios Rectores:
                </p>
                <p className="font-display text-[18px] font-medium leading-[1.6] text-[#101D32]">
                  {about.valuesLine}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-2">
              <Link
                href="/#areas"
                className="btn-secondary min-h-[52px] px-8 text-[15px] inline-flex"
              >
                Ver áreas de práctica
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
