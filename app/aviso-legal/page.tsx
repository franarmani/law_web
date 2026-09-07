import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal y Términos de Uso',
  description: 'Aviso legal, términos de uso y condiciones institucionales de Romio & Asociados — Estudio Jurídico.',
}

export default function LegalNoticePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-24">
      <div className="border-b border-[#DDD7CC] pb-6 sm:pb-8">
        <p className="font-sans text-[12px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
          Términos de uso &amp; condiciones institucionales
        </p>
        <h1 className="mt-4 text-[30px] sm:text-[40px] md:text-[46px] font-semibold leading-[1.2] text-[#101D32]">
          Aviso Legal
        </h1>
        <p className="mt-2 font-sans text-[14px] font-medium text-[#59616C]">
          Mar del Plata, Provincia de Buenos Aires · Romio &amp; Asociados
        </p>
      </div>

      <div className="mt-8 sm:mt-10 space-y-6 font-sans text-[15.5px] sm:text-[16px] leading-[1.75] text-[#59616C]">
        <p>
          El presente sitio web es propiedad y está administrado por <strong className="text-[#101D32]">Romio &amp; Asociados — Estudio Jurídico</strong>, con sede profesional en la ciudad de Mar del Plata, República Argentina.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          1. Contenido del Sitio Web
        </h2>
        <p>
          La información contenida en esta plataforma tiene carácter de divulgación general e institucional y no constituye ni reemplaza de modo alguno el asesoramiento o patrocinio jurídico formal aplicable a un caso concreto. Para la obtención de dictámenes específicos, el usuario deberá celebrar una consulta formal previa con los profesionales del estudio.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          2. Propiedad Intelectual
        </h2>
        <p>
          Todos los derechos de propiedad intelectual referentes a los contenidos visuales, logotipos, marcas, textos y código fuente de este sitio pertenecen de forma exclusiva a Romio &amp; Asociados o cuentan con las licencias y autorizaciones correspondientes para su explotación. Queda prohibida la reproducción parcial o total sin autorización expresa y escrita.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          3. Jurisdicción y Legislación Aplicable
        </h2>
        <p>
          Cualquier controversia derivada de la interpretación o uso del presente sitio web se regirá por la legislación vigente de la República Argentina, sometiéndose a los Tribunales Ordinarios del Departamento Judicial de Mar del Plata.
        </p>
      </div>

      <div className="mt-10 sm:mt-12 border-t border-[#DDD7CC] pt-8">
        <Link href="/" className="inline-flex min-h-[44px] items-center font-sans text-[14px] font-semibold text-[#101D32] transition-colors hover:text-[#9A7538]">
          ← Volver al Inicio
        </Link>
      </div>
    </article>
  )
}


