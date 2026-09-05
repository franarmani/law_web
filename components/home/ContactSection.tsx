// components/home/ContactSection.tsx
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

export default function ContactSection() {
  const [name, setName] = useState('')
  const [areaSlug, setAreaSlug] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: boolean; message?: boolean }>({})

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

  const phoneLabels = [
    'Atención General / Estudio',
    'Consultas & Seguimiento',
    'Consultas & Legal Tech',
  ]

  return (
    <section id="contacto" className="w-full bg-[#FCFBF8] py-24 lg:py-30 border-t border-[#DDD7CC]" aria-label="Contacto">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Contact Information */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9C7737]" aria-hidden="true" />
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#9C7737]">
                {t('home.contact.eyebrow')}
              </p>
            </div>

            <h2 className="mt-4 text-[36px] sm:text-[44px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              Hablemos de tu caso.
            </h2>

            <p className="mt-5 max-w-[520px] font-sans text-[17px] sm:text-[18px] leading-[1.75] text-[#4A5260]">
              {t('home.contact.intro')}
            </p>

            {/* Structured Contact Block */}
            <div className="mt-10 border border-[#DDD7CC] bg-[#F5F1E9]">
              
              {/* WhatsApp Numbers */}
              <div className="border-b border-[#DDD7CC] p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9C7737]">
                  Canales de WhatsApp Directo
                </p>
                <div className="mt-4 flex flex-col gap-3.5">
                  {CONTACT_PHONES.map((phone, pIdx) => (
                    <a
                      key={phone.number}
                      href={buildWhatsappUrl(t('common.whatsapp.defaultOpeningMessage'), phone.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#DDD7CC]/60 pb-3 last:border-b-0 last:pb-0 transition-colors"
                    >
                      <span className="font-display text-[18.5px] font-semibold text-[#101D32] group-hover:text-[#9C7737]">
                        {phone.display}
                      </span>
                      <span className="font-sans text-[13.5px] font-medium text-[#555E6D]">
                        {phoneLabels[pIdx] ?? 'Atención directa'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="border-b border-[#DDD7CC] p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9C7737]">
                  Correo Institucional
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-display mt-2.5 block text-[18.5px] font-semibold text-[#101D32] transition-colors hover:text-[#9C7737]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Location & Hours */}
              <div className="p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9C7737]">
                  Sede y Horarios de Atención
                </p>
                <p className="font-display mt-2.5 text-[18.5px] font-semibold text-[#101D32]">
                  {t('home.contact.locationLine')}
                </p>
                <p className="mt-1.5 font-sans text-[14.5px] text-[#4A5260]">
                  Lunes a Viernes de 9:00 a 17:00 hs · Modalidad presencial y virtual
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border border-[#DDD7CC] bg-[#FCFBF8] p-8 sm:p-12 shadow-[0_4px_24px_rgba(16,29,50,0.04)]">
            <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#101D32]">
              Envianos tu consulta
            </h3>
            <p className="mt-2 font-sans text-[15.5px] text-[#4A5260]">
              Completá el formulario para orientarte y responderte a la brevedad por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-9 flex flex-col gap-6">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.nameLabel')} <span className="text-[#9C7737]">*</span>
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
                  className={`mt-2.5 h-[54px] w-full border bg-white px-4 font-sans text-[16.5px] text-[#1A1F28] placeholder-[#555E6D]/60 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9C7737]'
                  }`}
                  placeholder={t('home.contact.form.namePlaceholder')}
                />
                {errors.name && (
                  <p className="mt-1.5 font-sans text-xs text-red-500">
                    Por favor, ingresá tu nombre completo.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-area" className="block font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.areaLabel')}
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={areaSlug}
                  onChange={(e) => setAreaSlug(e.target.value)}
                  className="mt-2.5 h-[54px] w-full cursor-pointer border border-[#DDD7CC] bg-white px-4 font-sans text-[16.5px] text-[#1A1F28] outline-none transition-colors focus:border-[#9C7737]"
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
                <label htmlFor="contact-message" className="block font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.messageLabel')} <span className="text-[#9C7737]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (errors.message) setErrors((prev) => ({ ...prev, message: false }))
                  }}
                  rows={4}
                  className={`mt-2.5 min-h-[130px] w-full resize-y border bg-white p-4 font-sans text-[16.5px] text-[#1A1F28] placeholder-[#555E6D]/60 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9C7737]'
                  }`}
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1.5 font-sans text-xs text-red-500">
                    Por favor, describí brevemente tu consulta legal.
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary mt-2 w-full min-h-[54px] text-[15.5px]">
                {t('home.contact.form.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
