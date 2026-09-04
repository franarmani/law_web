import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal y Términos de Uso',
  description: 'Aviso legal, términos de uso y condiciones institucionales de Romio & Asociados — Estudio Jurídico.',
}

export default function LegalNoticePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="border-b border-border pb-8">
        <p className="eyebrow">Términos de uso &amp; condiciones institucionales</p>
        <h1 className="mt-5">Aviso Legal</h1>
        <p className="mt-2 font-sans text-sm font-medium text-muted">
          Mar del Plata, Provincia de Buenos Aires · Romio & Asociados
        </p>
      </div>

      <div className="mt-10 space-y-6 font-sans text-base leading-[1.75] text-muted">
        <p>
          El presente sitio web es propiedad y está administrado por <strong className="text-navy">Romio & Asociados — Estudio Jurídico</strong>, con sede profesional en la ciudad de Mar del Plata, República Argentina.
        </p>

        <h2>1. Contenido del Sitio Web</h2>
        <p>
          La información contenida en esta plataforma tiene carácter de divulgación general e institucional y no constituye ni reemplaza de modo alguno el asesoramiento o patrocinio jurídico formal aplicable a un caso concreto. Para la obtención de dictámenes específicos, el usuario deberá celebrar una consulta formal previa con los profesionales del estudio.
        </p>

        <h2>2. Propiedad Intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual referentes a los contenidos visuales, logotipos, marcas, textos y código fuente de este sitio pertenecen de forma exclusiva a Romio & Asociados o cuentan con las licencias y autorizaciones correspondientes para su explotación. Queda prohibida la reproducción parcial o total sin autorización expresa y escrita.
        </p>

        <h2>3. Jurisdicción y Legislación Aplicable</h2>
        <p>
          Cualquier controversia derivada de la interpretación o uso del presente sitio web se regirá por la legislación vigente de la República Argentina, sometiéndose a los Tribunales Ordinarios del Departamento Judicial de Mar del Plata.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <Link href="/" className="link-secondary">
          ← Volver al Inicio
        </Link>
      </div>
    </article>
  )
}

