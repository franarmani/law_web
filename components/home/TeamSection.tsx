// components/home/TeamSection.tsx
'use client'

import { buildWhatsappUrl } from '@/lib/areas'
import { getDictionary } from '@/i18n'

export default function TeamSection() {
  const { title, intro, members } = getDictionary().home.team

  const teamData = [
    {
      ...members[0],
      initials: 'MJR',
      matricula: 'Colegiada en CAMDP · PBA',
      ctaLabel: 'Consultar con María José',
      whatsappUrl: buildWhatsappUrl('Hola Dra. María José Romio, me contacto desde la web para realizar una consulta legal.'),
    },
    {
      ...members[1],
      initials: 'ND',
      matricula: 'Colegiada en CAMDP · PBA',
      ctaLabel: 'Consultar con Nicole',
      whatsappUrl: buildWhatsappUrl("Hola Dra. Nicole D'Angelo, me contacto desde la web para realizar una consulta legal."),
    },
  ]

  return (
    <section id="profesionales" className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-24 border-t border-[#DDD7CC]" aria-label="Profesionales del estudio">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-8 pb-5 sm:pb-8 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                <span className="sm:hidden">Profesionales</span>
                <span className="hidden sm:inline">Equipo · Dirección Jurídica</span>
              </p>
            </div>
            <h2 className="mt-2.5 sm:mt-3 text-[21px] min-[375px]:text-[23px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              {title}
            </h2>
          </div>
          <p className="max-w-[460px] font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
            {intro}
          </p>
        </div>

        {/* Professional Cards: Natural height & clean hierarchy */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between border border-[#DDD7CC] bg-[#F5F1E9] p-4 min-[375px]:p-5 sm:p-7"
            >
              <div>
                {/* Header: Discreet Initials + Role / Registration */}
                <div className="flex items-center justify-between gap-3 border-b border-[#DDD7CC] pb-3">
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[12px] sm:text-[13px] font-semibold text-[#9A7538] shadow-xs">
                    {member.initials}
                  </span>
                  <div className="text-right min-w-0">
                    <span className="font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A7538] block truncate">
                      {member.role}
                    </span>
                    <span className="font-sans text-[11px] sm:text-[11.5px] text-[#59616C] mt-0.5 block truncate">
                      {member.matricula}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-3.5 text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32]">
                  {member.name}
                </h3>

                {/* University / Specialty */}
                <p className="mt-0.5 font-display text-[13px] min-[375px]:text-[13.5px] sm:text-[14px] font-normal italic text-[#9A7538]">
                  {member.specialty}
                </p>

                {/* Bio presentation */}
                <p className="mt-2.5 font-sans text-[13px] min-[375px]:text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#59616C]">
                  {member.bio}
                </p>
              </div>

              {/* Action Link: Specific professional consultation CTA */}
              <div className="mt-4 sm:mt-5 border-t border-[#DDD7CC] pt-3">
                <a
                  href={member.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[40px] items-center gap-1.5 font-sans text-[12.5px] min-[375px]:text-[13px] font-bold uppercase tracking-[0.06em] text-[#101D32] hover:text-[#9A7538] transition-colors"
                >
                  <span>{member.ctaLabel}</span>
                  <span className="text-[14px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

