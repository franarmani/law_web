// components/home/AboutTeamSection.tsx
'use client'

import { useState } from 'react'
import SectionReveal from '@/components/motion/SectionReveal'

interface Professional {
  name: string
  role: string
  specialty: string
  matricula: string
  initials: string
  bio: string
}

const professionals: Professional[] = [
  {
    name: 'Dra. María José Romio',
    role: 'Abogada',
    specialty: 'Universidad Nacional de Mar del Plata',
    matricula: 'Colegiada en CAMDP · PBA',
    initials: 'MJR',
    bio: 'Prioriza la atención personalizada y el seguimiento riguroso de cada expediente, garantizando la máxima dedicación en cada caso que asume.',
  },
  {
    name: 'Dra. Noelia Dulewicz',
    role: 'Abogada',
    specialty: 'Universidad Kennedy',
    matricula: 'Colegiada en CAMDP · PBA',
    initials: 'ND',
    bio: 'Combina experiencia en litigio tradicional con una mirada moderna y eficiente sobre cada caso.',
  },
]

export default function AboutTeamSection() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  const toggleTrajectory = (index: number) => {
    setExpandedMember((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="nosotros"
      className="snap-section relative w-full bg-[#F5F1E9] py-9 min-[375px]:py-11 sm:py-16 lg:py-20 border-b border-[#DDD7CC]"
      aria-label="El estudio y sus profesionales"
    >
      {/* Anchor for #profesionales */}
      <div id="profesionales" className="absolute -top-16 left-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        
        {/* Section Header & 2-sentence presentation */}
        <SectionReveal delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8 pb-5 sm:pb-7 border-b border-[#DDD7CC]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
                <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                  El estudio
                </p>
              </div>
              <h2 className="mt-2 sm:mt-3 font-display text-[22px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
                El estudio y sus profesionales
              </h2>
            </div>
            <p className="max-w-[500px] font-sans text-[14px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
              Romio &amp; Asociados fue fundado en 2020 con el propósito de brindar una solución jurídica moderna, transparente y eficiente. Combinamos la experiencia en el litigio tradicional con la agilidad y atención directa de las abogadas a cargo.
            </p>
          </div>
        </SectionReveal>

        {/* Professionals Cards: Clean, natural height */}
        <SectionReveal delay={0.08}>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">

          {professionals.map((member, idx) => {
            const isExpanded = expandedMember === idx
            const panelId = `trayectoria-panel-${idx}`
            const btnId = `trayectoria-btn-${idx}`

            return (
              <div
                key={member.name}
                className="flex flex-col justify-between border border-[#DDD7CC] bg-[#FCFBF8] p-4 min-[375px]:p-5 sm:p-7 shadow-2xs"
              >
                <div>
                  {/* Top bar with initials & bar registration */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#DDD7CC] pb-3">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#DDD7CC] bg-[#F5F1E9] font-display text-[12px] sm:text-[13px] font-semibold text-[#9A7538]">
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

                  {/* Name & University */}
                  <h3 className="mt-3.5 font-display text-[18px] min-[375px]:text-[19px] sm:text-[21px] font-semibold text-[#101D32]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-sans text-[13px] sm:text-[13.5px] text-[#9A7538] font-medium">
                    {member.specialty}
                  </p>
                </div>

                {/* Trajectory Disclosure */}
                <div className="mt-4 pt-3 border-t border-[#DDD7CC]">
                  <button
                    type="button"
                    id={btnId}
                    onClick={() => toggleTrajectory(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    className="inline-flex items-center gap-1.5 font-sans text-[12.5px] min-[375px]:text-[13px] font-bold uppercase tracking-[0.06em] text-[#101D32] hover:text-[#9A7538] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
                  >
                    <span>Ver trayectoria</span>
                    <span
                      className={`text-[14px] text-[#9A7538] transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>

                  {isExpanded && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="mt-2.5 pt-2.5 border-t border-[#DDD7CC]/60 font-sans text-[13.5px] leading-[1.6] text-[#59616C] animate-fadeIn"
                    >
                      <p>{member.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
