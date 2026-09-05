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
    <section id="contacto" className="w-full bg-[#FCFBF8] py-24 lg:py-32 border-t border-[#DDD7CC]" aria-label="Contacto">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Contact Information */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
              <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                {t('home.contact.eyebrow')}
              </p>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.18] text-[#101D32]">
              Hablemos de tu caso.
            </h2>

            <p className="mt-5 max-w-[500px] font-sans text-[16.5px] sm:text-[17.5px] leading-[1.7] text-[#5F6670]">
              {t('home.contact.intro')}
            </p>

            {/* Structured Contact Block */}
            <div className="mt-10 border border-[#DDD7CC] bg-[#F5F1E9]">
              
              {/* WhatsApp Numbers */}
              <div className="border-b border-[#DDD7CC] p-7">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                  Canales de WhatsApp Directo
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {CONTACT_PHONES.map((phone, pIdx) => (
                    <a
                      key={phone.number}
                      href={buildWhatsappUrl(t('common.whatsapp.defaultOpeningMessage'), phone.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#DDD7CC]/50 pb-2.5 last:border-b-0 last:pb-0 transition-colors"
                    >
                      <span className="font-display text-[17px] font-semibold text-[#101D32] group-hover:text-[#A27D3F]">
                        {phone.display}
                      </span>
                      <span className="font-sans text-[12.5px] text-[#5F6670]">
                        {phoneLabels[pIdx] ?? 'Atención directa'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="border-b border-[#DDD7CC] p-7">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                  Correo Institucional
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-display mt-2 block text-[17.5px] font-semibold text-[#101D32] transition-colors hover:text-[#A27D3F]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Location & Hours */}
              <div className="p-7">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
                  Sede y Horarios de Atención
                </p>
                <p className="font-display mt-2 text-[17.5px] font-semibold text-[#101D32]">
                  {t('home.contact.locationLine')}
                </p>
                <p className="mt-1 font-sans text-[13.5px] text-[#5F6670]">
                  Lunes a Viernes de 9:00 a 17:00 hs · Modalidad presencial y virtual
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border border-[#DDD7CC] bg-[#FCFBF8] p-8 sm:p-12 shadow-[0_4px_24px_rgba(16,29,50,0.03)]">
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#101D32]">
              Envianos tu consulta
            </h3>
            <p className="mt-2 font-sans text-[14.5px] text-[#5F6670]">
              Completá el formulario para orientarte y responderte a la brevedad por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-6">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.nameLabel')} <span className="text-[#A27D3F]">*</span>
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
                  className={`mt-2.5 h-[52px] w-full border bg-white px-4 font-sans text-[16px] text-[#20242A] placeholder-[#5F6670]/60 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#A27D3F]'
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
                <label htmlFor="contact-area" className="block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.areaLabel')}
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={areaSlug}
                  onChange={(e) => setAreaSlug(e.target.value)}
                  className="mt-2.5 h-[52px] w-full cursor-pointer border border-[#DDD7CC] bg-white px-4 font-sans text-[16px] text-[#20242A] outline-none transition-colors focus:border-[#A27D3F]"
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
                <label htmlFor="contact-message" className="block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#101D32]">
                  {t('home.contact.form.messageLabel')} <span className="text-[#A27D3F]">*</span>
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
                  className={`mt-2.5 w-full resize-y border bg-white p-4 font-sans text-[16px] text-[#20242A] placeholder-[#5F6670]/60 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#A27D3F]'
                  }`}
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1.5 font-sans text-xs text-red-500">
                    Por favor, describí brevemente tu consulta legal.
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary mt-2 w-full py-4 text-center">
                {t('home.contact.form.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
