import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/areas'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad y protección de datos personales de Romio & Asociados — Estudio Jurídico.',
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-14 md:py-20">
      <div className="border-b border-[#DDD7CC] pb-5 sm:pb-7">
        <p className="font-sans text-[11px] min-[375px]:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
          Aspectos legales y protección de datos
        </p>
        <h1 className="mt-3 text-[24px] min-[375px]:text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] text-[#101D32]">
          Política de Privacidad
        </h1>
        <p className="mt-1.5 font-sans text-[13px] min-[375px]:text-[13.5px] font-medium text-[#59616C]">
          Última actualización: Septiembre 2026 · <span className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</span>
        </p>
      </div>

      <div className="mt-6 sm:mt-8 space-y-5 font-sans text-[13.5px] min-[375px]:text-[14px] sm:text-[15.5px] leading-[1.65] text-[#59616C]">
        <p>
          En <strong className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</strong> asumimos un compromiso absoluto con la privacidad, confidencialidad y protección de los datos personales de nuestros clientes y visitantes, en estricto cumplimiento de la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          1. Recolección de Datos Personales
        </h2>
        <p>
          Los datos personales facilitados voluntariamente por los usuarios a través de nuestros formularios de contacto o canales directos de consulta (como WhatsApp o correo electrónico) son utilizados exclusivamente para responder a las inquietudes jurídicas planteadas y gestionar la relación profesional o consulta orientativa.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          2. Confidencialidad y Secreto Profesional
        </h2>
        <p>
          Toda la información remitida a nuestro estudio está amparada por las normas relativas al Secreto Profesional Abogado-Cliente. <span className="font-sans font-medium text-[#101D32]">Romio &amp; Asociados</span> no vende, alquila ni cede bajo ninguna circunstancia datos personales a terceros.
        </p>

        <h2 className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-semibold text-[#101D32] pt-1">
          3. Derechos del Titular de los Datos
        </h2>
        <p>
          Los titulares de los datos personales tienen la facultad de ejercer el derecho de acceso a los mismos de forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto. Asimismo, podrán solicitar la rectificación, actualización o supresión de sus datos personales comunicándose vía email a <strong className="text-[#101D32]">{CONTACT_EMAIL}</strong>.
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


