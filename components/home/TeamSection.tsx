// components/home/TeamSection.tsx
import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'

export default function TeamSection() {
  const { eyebrow, title, intro, members } = getDictionary().home.team

  const initials = [
    { monogram: 'MJR', label: 'Dra. María José Romio' },
    { monogram: 'ND', label: 'Dra. Noelia Dulewicz' },
  ]

  return (
    <section className="w-full bg-[#FCFBF8] py-24 lg:py-28 border-t border-[#DDD7CC]" aria-label="Profesionales del estudio">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              {title}
            </h2>
          </div>
          <p className="max-w-[480px] font-sans text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[#424956]">
            {intro}
          </p>
        </div>

        {/* Typographic Professional Profiles Grid (+20% height & generous padding) */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {members.map((member, idx) => (
            <div
              key={member.name}
              className="group relative flex min-h-[460px] flex-col justify-between border-t-2 border-[#9C7737] bg-[#F5F1E9] p-10 sm:p-14 transition-all duration-200 hover:shadow-[0_8px_30px_rgba(16,29,50,0.06)]"
            >
              <div>
                {/* Monogram Stamp & Role */}
                <div className="flex items-center justify-between border-b border-[#DDD7CC] pb-7">
                  <span className="flex h-18 w-18 items-center justify-center border border-[#9C7737] bg-[#FCFBF8] font-display text-[22px] font-semibold text-[#9C7737] shadow-sm">
                    {initials[idx]?.monogram ?? 'RA'}
                  </span>
                  <div className="text-right">
                    <span className="font-sans text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                      {member.role}
                    </span>
                    <p className="font-sans text-[13.5px] text-[#4E5664] mt-1 font-medium">
                      Colegiada en PBA
                    </p>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-9 text-[28px] sm:text-[32px] font-semibold text-[#101D32]">
                  {member.name}
                </h3>

                {/* University / Specialty */}
                <p className="mt-3 font-display text-[17px] font-medium text-[#9C7737]">
                  {member.specialty}
                </p>

                {/* Bio */}
                <p className="mt-5 font-sans text-[16.5px] sm:text-[17px] leading-[1.75] text-[#424956]">
                  {member.bio}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-12 border-t border-[#DDD7CC] pt-7">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary inline-flex items-center text-[15px] font-bold"
                >
                  Consultar con la profesional
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
