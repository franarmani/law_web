import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal y Términos de Uso',
  description: 'Aviso legal, términos de uso y condiciones institucionales de Romio & Asociados — Estudio Jurídico.',
}

export default function LegalNoticePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-14 md:py-20">
      <div className="border-b border-[#DDD7CC] pb-5 sm:pb-7">
        <p className="font-sans text-[11px] min-[375px]:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
          Términos de uso y condiciones institucionales
        </p>
        <h1 className="mt-3 text-[24px] min-[375px]:text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] text-[#101D32]">
          Aviso Legal
        </h1>
        <p className="mt-1.5 font-sans text-[13px] min-[375px]:text-[13.5px] font-medium text-[#59616C]">
          Mar del Plata, Provincia de Buenos Aires · <span className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</span>
        </p>
      </div>

      <div className="mt-6 sm:mt-8 space-y-5 font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
        <p>
          El presente sitio web es propiedad y está administrado por <strong className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados — Estudio Jurídico</strong>, con sede profesional en la ciudad de Mar del Plata, República Argentina.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          1. Contenido del Sitio Web
        </h2>
        <p>
          La información contenida en esta plataforma tiene carácter de divulgación general e institucional y no constituye ni reemplaza de modo alguno el asesoramiento o patrocinio jurídico formal aplicable a un caso concreto. Para la obtención de dictámenes específicos, el usuario deberá celebrar una consulta formal previa con los profesionales del estudio.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          2. Propiedad Intelectual
        </h2>
        <p>
          Todos los derechos de propiedad intelectual referentes a los contenidos visuales, logotipos, marcas, textos y código fuente de este sitio pertenecen de forma exclusiva a <span className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</span> o cuentan con las licencias y autorizaciones correspondientes para su explotación. Queda prohibida la reproducción parcial o total sin autorización expresa y escrita.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          3. Jurisdicción y Legislación Aplicable
        </h2>
        <p>
          Cualquier controversia derivada de la interpretación o uso del presente sitio web se regirá por la legislación vigente de la República Argentina, sometiéndose a los Tribunales Ordinarios del Departamento Judicial de Mar del Plata.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 border-t border-[#DDD7CC] pt-6">
        <Link href="/" className="inline-flex min-h-[40px] items-center font-sans text-[13px] font-semibold text-[#101D32] transition-colors hover:text-[#9A7538]">
          ← Volver al Inicio
        </Link>
      </div>
    </article>
  )
}


