// components/home/TeamSection.tsx
import { WHATSAPP_URL } from '@/lib/areas'
import { getDictionary } from '@/i18n'
import ImageSlot from '@/components/ui/ImageSlot'

export default function TeamSection() {
  const { eyebrow, title, intro, members } = getDictionary().home.team

  return (
    <section className="bg-ivory py-24 lg:py-36" aria-label="Profesionales del estudio">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-24 max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
          <p className="mt-5">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {members.map((member) => (
            <div key={member.name} className="flex gap-6 bg-ivory p-10">
              <ImageSlot
                label="Foto"
                aspect="1/1"
                hideLabel
                className="img-slot-sm h-[84px] w-[84px] shrink-0 rounded-full"
              />
              <div>
                <p className="font-display text-[19px] font-light leading-[1.3] text-navy">
                  {member.name}
                </p>
                <p className="mt-1.5 font-sans text-[10px] font-normal uppercase tracking-[0.15em] text-champagne">
                  {member.role}
                </p>
                <p className="mt-3 max-w-[340px] text-[13px]">
                  {member.specialty}. {member.bio}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary mt-5 inline-block"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
