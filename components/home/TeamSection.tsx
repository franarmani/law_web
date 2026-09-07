// components/home/TeamSection.tsx
'use client'

import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'

export default function TeamSection() {
  const { title, intro, members } = getDictionary().home.team

  const teamData = [
    {
      ...members[0],
      initials: 'MJR',
      matricula: 'Colegiada en CAMDP · PBA',
    },
    {
      ...members[1],
      initials: 'ND',
      matricula: 'Colegiada en CAMDP · PBA',
    },
  ]

  return (
    <section id="profesionales" className="w-full bg-[#FCFBF8] py-14 sm:py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Profesionales del estudio">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8 pb-7 sm:pb-10 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Profesionales</span>
                <span className="hidden sm:inline">Equipo · Dirección Jurídica</span>
              </p>
            </div>
            <h2 className="mt-3 sm:mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.16] text-[#101D32]">
              {title}
            </h2>
          </div>
          <p className="max-w-[460px] font-sans text-[15px] sm:text-[16.5px] leading-[1.65] text-[#59616C]">
            {intro}
          </p>
        </div>

        {/* Professional Cards: Natural height */}
        <div className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between border border-[#DDD7CC] bg-[#F5F1E9] p-5 min-[375px]:p-6 sm:p-7 lg:p-8"
            >
              <div>
                {/* Header: Initial Square + Role / Registration */}
                <div className="flex items-center justify-between gap-4 border-b border-[#DDD7CC] pb-3.5 sm:pb-4">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[14px] sm:text-[15px] font-semibold text-[#9A7538] shadow-xs">
                    {member.initials}
                  </span>
                  <div className="text-right min-w-0">
                    <span className="font-sans text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#9A7538] block truncate">
                      {member.role}
                    </span>
                    <span className="font-sans text-[12px] sm:text-[12.5px] text-[#59616C] mt-0.5 block truncate">
                      {member.matricula}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-4 sm:mt-5 text-[20px] sm:text-[23px] lg:text-[24px] font-semibold text-[#101D32]">
                  {member.name}
                </h3>

                {/* University / Specialty */}
                <p className="mt-0.5 font-display text-[14.5px] sm:text-[15px] font-normal italic text-[#9A7538]">
                  {member.specialty}
                </p>

                {/* Bio */}
                <p className="mt-3 font-sans text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
                  {member.bio}
                </p>
              </div>

              {/* Action Link: Brief "Consultar" CTA */}
              <div className="mt-5 sm:mt-7 border-t border-[#DDD7CC] pt-3.5 sm:pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-2 font-sans text-[13px] sm:text-[13.5px] font-bold uppercase tracking-[0.08em] text-[#101D32] hover:text-[#9A7538] transition-colors"
                >
                  <span>Consultar</span>
                  <span className="text-[16px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

