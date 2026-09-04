// components/home/ContactSection.tsx
'use client'

import { useState, type FormEvent } from 'react'
import {
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  CONTACT_EMAIL,
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

  return (
    <section id="contacto" className="bg-ivory py-24 lg:py-36" aria-label="Contacto">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Copy + Info */}
          <div>
            <p className="eyebrow">{t('home.contact.eyebrow')}</p>
            <h2 className="mt-6">{t('home.contact.title')}</h2>
            <p className="mt-5 max-w-[420px]">{t('home.contact.intro')}</p>

            <div className="mt-14 flex flex-col">
              <div className="border-t border-border py-7">
                <p className="eyebrow">{t('home.contact.labels.whatsapp')}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-2 block text-[19px] font-light text-navy transition-colors hover:text-gold-text"
                >
                  {t('home.contact.labels.linkWhatsApp')}
                </a>
              </div>
              <div className="border-t border-border py-7">
                <p className="eyebrow">{t('home.contact.labels.email')}</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-display mt-2 block text-[19px] font-light text-navy transition-colors hover:text-gold-text"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="border-y border-border py-7">
                <p className="eyebrow">{t('home.contact.labels.location')}</p>
                <p className="font-display mt-2 text-[19px] font-light text-navy">
                  {t('home.contact.locationLine')}
                </p>
                <p className="mt-1 font-sans text-xs text-muted">
                  {t('home.contact.labels.hoursPlaceholder')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            <div>
              <label htmlFor="contact-name" className="eyebrow">
                {t('home.contact.form.nameLabel')} <span className="text-champagne">*</span>
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
                className={`mt-3 w-full border-b bg-transparent py-2.5 font-sans text-[16px] font-light text-ink placeholder-muted/60 outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-border focus:border-champagne'
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
              <label htmlFor="contact-area" className="eyebrow">
                {t('home.contact.form.areaLabel')}
              </label>
              <select
                id="contact-area"
                name="area"
                value={areaSlug}
                onChange={(e) => setAreaSlug(e.target.value)}
                className="mt-3 w-full cursor-pointer border-b border-border bg-transparent py-2.5 font-sans text-[16px] font-light text-ink outline-none transition-colors focus:border-champagne"
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
              <label htmlFor="contact-message" className="eyebrow">
                {t('home.contact.form.messageLabel')} <span className="text-champagne">*</span>
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
                className={`mt-3 w-full resize-y border-b bg-transparent py-2.5 font-sans text-[16px] font-light text-ink placeholder-muted/60 outline-none transition-colors ${
                  errors.message ? 'border-red-500' : 'border-border focus:border-champagne'
                }`}
                placeholder={t('home.contact.form.messagePlaceholder')}
              />
              {errors.message && (
                <p className="mt-1 font-sans text-xs text-red-500">
                  Por favor, escribí un breve mensaje o detalle de tu consulta.
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary mt-2 w-fit">
              {t('home.contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
