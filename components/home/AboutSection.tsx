// components/home/AboutSection.tsx
'use client'

import Link from 'next/link'
import { getDictionary } from '@/i18n'

export default function AboutSection() {
  const { about } = getDictionary().home

  return (
    <section id="nosotros" className="w-full bg-[#FCFBF8] py-24 lg:py-32" aria-label="Sobre el estudio">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          
          {/* Left: Statement & Metrics */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {about.eyebrow}
              </p>
            </div>

            <h2 className="mt-6 text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.2] text-[#101D32]">
              Compromiso ético y rigor técnico en cada expediente.
            </h2>

            <blockquote className="mt-8 border-l-2 border-[#A27D3F] pl-6 py-1">
              <p className="font-display text-[20px] sm:text-[23px] font-normal italic leading-[1.5] text-[#101D32]">
                &ldquo;{about.quote}&rdquo;
              </p>
            </blockquote>

            {/* Metrics Counter Grid */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#DDD7CC] pt-8">
              {about.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-[36px] sm:text-[42px] font-semibold text-[#101D32]">
                    {m.value}
                  </p>
                  <p className="mt-1 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-[#5F6670]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Institutional Body & Values */}
          <div className="flex flex-col justify-between border-t border-[#DDD7CC] pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div>
              <p className="font-sans text-[17px] sm:text-[18px] leading-[1.8] text-[#5F6670]">
                {about.body}
              </p>

              <div className="mt-10 border-t border-[#DDD7CC] pt-8">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#A27D3F] mb-3">
                  Nuestros Principios Rectores:
                </p>
                <p className="font-display text-[16.5px] font-medium leading-[1.6] text-[#101D32]">
                  {about.valuesLine}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-4">
              <Link
                href="/#areas"
                className="btn-secondary inline-flex"
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
