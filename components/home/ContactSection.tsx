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
    <section id="contacto" className="w-full bg-[#FCFBF8] py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Contacto">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Contact Information */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A7538]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#9A7538]">
                {t('home.contact.eyebrow')} · Atención Directa
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.15] text-[#101D32]">
              Hablemos de tu caso.
            </h2>

            <p className="mt-4 max-w-[520px] font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#59616C]">
              {t('home.contact.intro')}
            </p>

            {/* Structured Contact Block on Ivory */}
            <div className="mt-9 border border-[#DDD7CC] bg-[#F5F1E9]">
              
              {/* WhatsApp Numbers */}
              <div className="border-b border-[#DDD7CC] p-7 sm:p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
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
                      <span className="font-display text-[18px] font-semibold text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                        {phone.display}
                      </span>
                      <span className="font-sans text-[13.5px] font-medium text-[#59616C]">
                        {phoneLabels[pIdx] ?? 'Atención directa'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="border-b border-[#DDD7CC] p-7 sm:p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                  Correo Institucional
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-display mt-2 block text-[18px] font-semibold text-[#101D32] transition-colors hover:text-[#9A7538]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Location & Hours */}
              <div className="p-7 sm:p-8">
                <p className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
                  Sede y Horarios de Atención
                </p>
                <p className="font-display mt-2 text-[18px] font-semibold text-[#101D32]">
                  {t('home.contact.locationLine')}
                </p>
                <p className="mt-1.5 font-sans text-[14.5px] text-[#59616C]">
                  Lunes a Viernes de 9:00 a 17:00 hs · Modalidad presencial y virtual
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border border-[#DDD7CC] bg-[#FCFBF8] p-8 sm:p-10 shadow-xs">
            <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#101D32]">
              Envianos tu consulta
            </h3>
            <p className="mt-2 font-sans text-[15.5px] text-[#59616C]">
              Completá el formulario para orientarte y responderte a la brevedad por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
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
                  className={`mt-2 h-[50px] w-full border bg-white px-4 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
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
                  className="mt-2 h-[50px] w-full cursor-pointer border border-[#DDD7CC] bg-white px-4 font-sans text-[16px] text-[#20242A] outline-none transition-colors focus:border-[#9A7538]"
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
                  rows={4}
                  className={`mt-2 min-h-[120px] w-full resize-y border bg-white p-4 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
                  }`}
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1.5 font-sans text-xs text-red-500">
                    Por favor, describí brevemente tu consulta legal.
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary mt-2 w-full h-[50px] min-h-[50px] text-[15px]">
                {t('home.contact.form.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
