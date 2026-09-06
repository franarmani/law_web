// components/home/TeamSection.tsx
'use client'

import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'

export default function TeamSection() {
  const { eyebrow, title, intro, members } = getDictionary().home.team

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
    <section id="profesionales" className="w-full bg-[#FCFBF8] py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Profesionales del estudio">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                {eyebrow} · Dirección Jurídica
              </p>
            </div>
            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.15] text-[#101D32]">
              {title}
            </h2>
          </div>
          <p className="max-w-[480px] font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#59616C]">
            {intro}
          </p>
        </div>

        {/* Two-Column Professional Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="flex min-h-[460px] flex-col justify-between border border-[#DDD7CC] bg-[#F5F1E9] p-8 sm:p-10 transition-colors duration-200"
            >
              <div>
                {/* Header: Discrete Initial Square + Role */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-6">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[16px] font-semibold text-[#9A7538] shadow-sm">
                    {member.initials}
                  </span>
                  <div className="text-right">
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#9A7538] block">
                      {member.role}
                    </span>
                    <span className="font-sans text-[13px] text-[#59616C] mt-0.5 block">
                      {member.matricula}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-7 text-[26px] sm:text-[28px] font-semibold text-[#101D32]">
                  {member.name}
                </h3>

                {/* University / Specialty */}
                <p className="mt-1.5 font-display text-[16.5px] font-normal italic text-[#9A7538]">
                  {member.specialty}
                </p>

                {/* Bio */}
                <p className="mt-4 font-sans text-[16px] leading-[1.75] text-[#59616C]">
                  {member.bio}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-10 border-t border-[#DDD7CC] pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-sans text-[14px] font-bold uppercase tracking-[0.1em] text-[#101D32] hover:text-[#9A7538] transition-colors"
                >
                  <span>Consultar con la profesional</span>
                  <span className="text-[17px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
