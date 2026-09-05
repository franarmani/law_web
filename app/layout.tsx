import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/motion/FloatingWhatsApp'
import { getDictionary } from '@/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const { site } = getDictionary().metadata

export const metadata: Metadata = {
  metadataBase: new URL(site.openGraph.url),
  title: {
    default: site.title,
    template: '%s | Romio & Asociados',
  },
  description: site.description,
  keywords: [
    'Estudio Jurídico Mar del Plata',
    'Abogados Mar del Plata',
    'Derecho del consumidor',
    'Amparos de salud',
    'Accidentes de tránsito',
    'Derecho laboral',
    'Derecho de familia',
    'Usucapión',
    'Legal Tech Argentina',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: site.openGraph.title,
    description: site.openGraph.description,
    url: site.openGraph.url,
    siteName: site.openGraph.siteName,
    locale: site.openGraph.locale,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Romio & Asociados — Estudio Jurídico Mar del Plata',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Romio & Asociados — Estudio Jurídico',
    image: `${site.openGraph.url}/logo/romio-color.jpg`,
    url: site.openGraph.url,
    telephone: '+5492233118656',
    email: 'romio.asociados@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rivadavia 3188, 1° Piso, Oficina 15',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$',
  }

  return (
    <html
      lang={site.htmlLang}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-graphite bg-warm-white antialiased selection:bg-gold-dark selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
