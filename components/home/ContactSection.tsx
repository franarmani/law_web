'use client'

import { useState, type FormEvent } from 'react'
import {
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  buildWhatsappUrl,
  areas,
} from '@/lib/areas'
import { interpolate, t } from '@/i18n'
import SectionReveal from '@/components/motion/SectionReveal'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [areaSlug, setAreaSlug] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: boolean; message?: boolean }>({})
  const [showOtherPhones, setShowOtherPhones] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const nameTrimmed = name.trim()
    const messageTrimmed = message.trim()

    const hasNameError = !nameTrimmed
    const hasMessageError = !messageTrimmed

    if (hasNameError || hasMessageError) {
      setErrors({
        name: hasNameError,
        message: hasMessageError,
      })
      return
    }

    setErrors({})

    const area =
      areas.find((a) => a.slug === areaSlug)?.shortName ??
      t('common.contactForm.generalAreaFallback')
    const body = interpolate(t('common.contactForm.whatsappBody'), {
      name: nameTrimmed,
      area,
      message: messageTrimmed,
    })
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const primaryPhone = CONTACT_PHONES[0]
  const secondaryPhones = CONTACT_PHONES.slice(1)
  const secondaryPhoneLabels = ['Dra. Noelia Dulewicz', 'Geraldine Romio Llessi']

  return (
    <section
      id="contacto"
      className="snap-section w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-20 border-b border-[#DDD7CC]"
      aria-label="Contacto"
    >
      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        
        <SectionReveal delay={0}>
          <div className="pb-5 sm:pb-7 border-b border-[#DDD7CC]">
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
              <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Contacto
              </p>
            </div>
            <h2 className="mt-2 sm:mt-3 font-display text-[22px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
              Hablemos de tu caso.
            </h2>
            <p className="mt-1.5 max-w-[560px] font-sans text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
              Comunicate con nosotras para coordinar una primera consulta orientativa sobre tu situación legal.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

          <div className="order-1 lg:order-2 lg:col-span-6 border border-[#DDD7CC] bg-[#FCFBF8] p-4 min-[375px]:p-5 sm:p-7 shadow-2xs">
            <h3 className="font-display text-[17px] min-[375px]:text-[18px] sm:text-[20px] font-semibold text-[#101D32]">
              Envianos tu consulta
            </h3>
            <p className="mt-1 font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#59616C]">
              Completá los campos y, al pulsar el botón, se abrirá WhatsApp con el texto preparado para enviar tu mensaje directamente.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-4 sm:mt-5 flex flex-col gap-3.5">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
                  {t('home.contact.form.nameLabel')} <span className="text-[#9A7538]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors((prev) => ({ ...prev, name: false }))
                  }}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`mt-1 h-[46px] w-full border bg-white px-3 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
                  }`}
                  placeholder={t('home.contact.form.namePlaceholder')}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
                    Por favor, ingresá tu nombre completo.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-area" className="block font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
                  {t('home.contact.form.areaLabel')}
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={areaSlug}
                  onChange={(e) => setAreaSlug(e.target.value)}
                  className="mt-1 h-[46px] w-full cursor-pointer border border-[#DDD7CC] bg-white px-3 font-sans text-[16px] text-[#20242A] outline-none transition-colors focus:border-[#9A7538]"
                >
                  <option value="">{t('home.contact.form.areaPlaceholder')}</option>
                  {areas.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.shortName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
                  {t('home.contact.form.messageLabel')} <span className="text-[#9A7538]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (errors.message) setErrors((prev) => ({ ...prev, message: false }))
                  }}
                  rows={3}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`mt-1 min-h-[90px] w-full resize-y border bg-white p-3 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
                  }`}
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-1 font-sans text-xs text-red-500">
                    Por favor, describí brevemente tu consulta legal.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary mt-1.5 w-full"
              >
                Consultar por WhatsApp
              </button>
            </form>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-6 border border-[#DDD7CC] bg-[#F5F1E9]">
            
            <div className="border-b border-[#DDD7CC] p-4 sm:p-6">
              <p className="font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Teléfono y WhatsApp Principal
              </p>
              <a
                href={buildWhatsappUrl(t('common.whatsapp.defaultOpeningMessage'), primaryPhone.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 flex items-center justify-between gap-2"
              >
                <div>
                  <span className="font-display text-[17px] sm:text-[19px] font-semibold text-[#101D32] group-hover:text-[#9A7538] transition-colors block">
                    {primaryPhone.display}
                  </span>
                  <span className="font-sans text-[12px] sm:text-[12.5px] text-[#59616C] block mt-0.5">
                    Atención general y consultas del estudio
                  </span>
                </div>
                <span className="font-display text-[18px] text-[#9A7538] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>

              <div className="mt-4 pt-3 border-t border-[#DDD7CC]/60">
                <button
                  type="button"
                  onClick={() => setShowOtherPhones(!showOtherPhones)}
                  aria-expanded={showOtherPhones}
                  className="font-sans text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.06em] text-[#101D32] hover:text-[#9A7538] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9A7538]"
                >
                  <span>Otros contactos del estudio</span>
                  <span className={`text-[13px] text-[#9A7538] transition-transform duration-200 ${showOtherPhones ? 'rotate-90' : ''}`} aria-hidden="true">
                    →
                  </span>
                </button>

                {showOtherPhones && (
                  <div className="mt-3 flex flex-col divide-y divide-[#DDD7CC]/50 pl-1">
                    {secondaryPhones.map((phone, pIdx) => (
                      <a
                        key={phone.number}
                        href={buildWhatsappUrl(t('common.whatsapp.defaultOpeningMessage'), phone.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-2 text-[13.5px] transition-colors"
                      >
                        <span className="font-sans font-semibold text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                          {phone.display}
                        </span>
                        <span className="font-sans text-[12px] text-[#59616C]">
                          {secondaryPhoneLabels[pIdx]}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="border-b border-[#DDD7CC] p-4 sm:p-6">
              <p className="font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Correo Institucional
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-sans mt-1.5 block break-all sm:break-normal text-[14px] sm:text-[15px] font-semibold text-[#101D32] transition-colors hover:text-[#9A7538]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="p-4 sm:p-6">
              <p className="font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Sede y Horarios de Atención
              </p>
              <p className="font-sans mt-1.5 text-[14px] sm:text-[15px] font-semibold text-[#101D32]">
                {t('home.contact.locationLine')}
              </p>
              <p className="mt-1 font-sans text-[13px] sm:text-[13.5px] text-[#59616C] leading-relaxed">
                Lunes a Viernes de 9:00 a 17:00 hs · Modalidad presencial y virtual
              </p>
              <p className="mt-1.5 font-sans text-[12px] sm:text-[12.5px] text-[#9A7538] font-medium leading-relaxed">
                Zonas de atención: Mar del Plata · Partido de la Costa · Zona Norte Gran Buenos Aires
              </p>
            </div>

          </div>
        </div>
      </SectionReveal>

      </div>
    </section>
  )
}



