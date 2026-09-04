// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { areas } from '@/lib/areas'

const BASE_URL = 'https://romioasociados.com.ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const areaRoutes = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticRoutes = [
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...areaRoutes,
    ...staticRoutes,
  ]
}

