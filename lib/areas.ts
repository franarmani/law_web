// lib/areas.ts

import { getAreaContent, t } from '@/i18n'
import type { AreaContent } from '@/i18n'

export type FAQ = AreaContent['faq'][number]

export type AreaSlug =
  | 'consumidor'
  | 'salud'
  | 'accidentes-transito'
  | 'laboral'
  | 'familia'
  | 'legal-tech'

export type AreaMeta = {
  slug: AreaSlug
  accent: string
  accentLight: string
}

export type Area = AreaMeta & AreaContent

export const WHATSAPP_NUMBER = '5492233118656'
export const CONTACT_EMAIL = 'romio.asociados@gmail.com'

/**
 * Los tres teléfonos de contacto directo del estudio, sin identificar a
 * qué profesional pertenece cada uno (pedido explícito del cliente).
 */
export const CONTACT_PHONES = [
  { number: '5492233118656', display: '+54 9 223 311-8656' },
  { number: '5492235895221', display: '+54 9 223 589-5221' },
  { number: '5491131686545', display: '+54 9 11 3168-6545' },
] as const

export function buildWhatsappUrl(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = buildWhatsappUrl(
  t('common.whatsapp.defaultOpeningMessage'),
)

export const areaImages: Record<AreaSlug, string> = {
  consumidor: '/images/area-consumidor.jpg',
  salud: '/images/area-salud.jpg',
  'accidentes-transito': '/images/area-divorcios.jpg',
  laboral: '/images/area-laboral.jpg',
  familia: '/images/area-civil.jpg',
  'legal-tech': '/images/area-legal-tech.jpg',
}

export const areaMetas: readonly AreaMeta[] = [
  { slug: 'consumidor', accent: '#b8954a', accentLight: '#f6efe0' },
  { slug: 'salud', accent: '#b8954a', accentLight: '#f6efe0' },
  { slug: 'accidentes-transito', accent: '#b8954a', accentLight: '#f6efe0' },
  { slug: 'laboral', accent: '#b8954a', accentLight: '#f6efe0' },
  { slug: 'familia', accent: '#b8954a', accentLight: '#f6efe0' },
  { slug: 'legal-tech', accent: '#b8954a', accentLight: '#f6efe0' },
]

function mergeArea(meta: AreaMeta): Area {
  return { ...meta, ...getAreaContent(meta.slug) }
}

export function getAreas(): Area[] {
  return areaMetas.map(mergeArea)
}

export function getArea(slug: string): Area | undefined {
  const meta = areaMetas.find((m) => m.slug === slug)
  return meta ? mergeArea(meta) : undefined
}

/** Alias for components that still iterate `areas`; prefer `getAreas()` where possible. */
export const areas: Area[] = getAreas()
