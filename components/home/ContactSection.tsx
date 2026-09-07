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
    <section id="contacto" className="w-full bg-[#FCFBF8] py-14 sm:py-20 lg:py-28 border-t border-[#DDD7CC]" aria-label="Contacto">
      <div className="mx-auto max-w-[1200px] px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#DDD7CC]">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-7 sm:w-9 bg-[#9A7538]" aria-hidden="true" />
            <p className="font-sans text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              <span className="sm:hidden">Contacto</span>
              <span className="hidden sm:inline">Contacto · Atención Directa</span>
            </p>
          </div>
          <h2 className="mt-3 sm:mt-4 text-[26px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.16] text-[#101D32]">
            Hablemos de tu caso.
          </h2>
          <p className="mt-2 max-w-[540px] font-sans text-[15px] sm:text-[16.5px] leading-[1.65] text-[#59616C]">
            {t('home.contact.intro')}
          </p>

          {/* Quick WhatsApp access button on mobile */}
          <div className="mt-4 block sm:hidden">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full h-[48px] min-h-[48px] text-[14px] font-bold flex items-center justify-center text-center"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Two Balanced Columns (Form first on mobile, side-by-side on desktop) */}
        <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-start">
          
          {/* Form Column (First on mobile, right on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-6 border border-[#DDD7CC] bg-[#FCFBF8] p-5 min-[375px]:p-6 sm:p-8 shadow-xs">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32]">
              Envianos tu consulta
            </h3>
            <p className="mt-1 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#59616C]">
              Completá los datos y, al hacer clic, se abrirá WhatsApp con tu mensaje preparado para enviarlo directamente a las profesionales.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-5 sm:mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className="block font-sans text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
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
                  className={`mt-1.5 h-[48px] w-full border bg-white px-3.5 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
                  }`}
                  placeholder={t('home.contact.form.namePlaceholder')}
                />
                {errors.name && (
                  <p className="mt-1 font-sans text-xs text-red-500">
                    Por favor, ingresá tu nombre completo.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-area" className="block font-sans text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
                  {t('home.contact.form.areaLabel')}
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={areaSlug}
                  onChange={(e) => setAreaSlug(e.target.value)}
                  className="mt-1.5 h-[48px] w-full cursor-pointer border border-[#DDD7CC] bg-white px-3.5 font-sans text-[16px] text-[#20242A] outline-none transition-colors focus:border-[#9A7538]"
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
                <label htmlFor="contact-message" className="block font-sans text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#101D32]">
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
                  className={`mt-1.5 min-h-[110px] w-full resize-y border bg-white p-3.5 font-sans text-[16px] text-[#20242A] placeholder-[#59616C]/60 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#DDD7CC] focus:border-[#9A7538]'
                  }`}
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1 font-sans text-xs text-red-500">
                    Por favor, describí brevemente tu consulta legal.
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary mt-1 w-full h-[48px] min-h-[48px] text-[14.5px]">
                Consultar por WhatsApp
              </button>
            </form>
          </div>

          {/* Structured Contact Block (Second on mobile, left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 border border-[#DDD7CC] bg-[#F5F1E9]">
            
            {/* WhatsApp Numbers */}
            <div className="border-b border-[#DDD7CC] p-4 min-[375px]:p-5 sm:p-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Canales de WhatsApp Directo
              </p>
              <div className="mt-3 flex flex-col divide-y divide-[#DDD7CC]/60">
                {CONTACT_PHONES.map((phone, pIdx) => (
                  <a
                    key={phone.number}
                    href={buildWhatsappUrl(t('common.whatsapp.defaultOpeningMessage'), phone.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-wrap items-center justify-between gap-1 py-2.5 first:pt-0 last:pb-0 transition-colors"
                  >
                    <span className="font-display text-[16px] sm:text-[17px] font-semibold text-[#101D32] group-hover:text-[#9A7538] transition-colors">
                      {phone.display}
                    </span>
                    <span className="font-sans text-[12px] sm:text-[13px] text-[#59616C]">
                      {phoneLabels[pIdx] ?? 'Atención directa'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="border-b border-[#DDD7CC] p-4 min-[375px]:p-5 sm:p-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Correo Institucional
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display mt-1.5 block break-all sm:break-normal text-[16px] sm:text-[17px] font-semibold text-[#101D32] transition-colors hover:text-[#9A7538]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Location & Hours */}
            <div className="p-4 min-[375px]:p-5 sm:p-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
                Sede y Horarios de Atención
              </p>
              <p className="font-display mt-1.5 text-[16px] sm:text-[17px] font-semibold text-[#101D32]">
                {t('home.contact.locationLine')}
              </p>
              <p className="mt-1 font-sans text-[13.5px] sm:text-[14px] text-[#59616C] leading-relaxed">
                Lunes a Viernes de 9:00 a 17:00 hs · Modalidad presencial y virtual
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


