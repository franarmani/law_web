import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/areas'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad y protección de datos personales de Romio & Asociados — Estudio Jurídico.',
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-24">
      <div className="border-b border-[#DDD7CC] pb-6 sm:pb-8">
        <p className="font-sans text-[12px] min-[375px]:text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#9A7538]">
          Aspectos legales &amp; protección de datos
        </p>
        <h1 className="mt-4 text-[30px] sm:text-[40px] md:text-[46px] font-semibold leading-[1.2] text-[#101D32]">
          Política de Privacidad
        </h1>
        <p className="mt-2 font-sans text-[14px] font-medium text-[#59616C]">
          Última actualización: Septiembre 2026 · Romio &amp; Asociados
        </p>
      </div>

      <div className="mt-8 sm:mt-10 space-y-6 font-sans text-[15.5px] sm:text-[16px] leading-[1.75] text-[#59616C]">
        <p>
          En <strong className="text-[#101D32]">Romio &amp; Asociados</strong> asumimos un compromiso absoluto con la privacidad, confidencialidad y protección de los datos personales de nuestros clientes y visitantes, en estricto cumplimiento de la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          1. Recolección de Datos Personales
        </h2>
        <p>
          Los datos personales facilitados voluntariamente por los usuarios a través de nuestros formularios de contacto o canales directos de consulta (como WhatsApp o correo electrónico) son utilizados exclusivamente para responder a las inquietudes jurídicas planteadas y gestionar la relación profesional o consulta orientativa.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          2. Confidencialidad y Secreto Profesional
        </h2>
        <p>
          Toda la información remitida a nuestro estudio está amparada por las normas relativas al Secreto Profesional Abogado-Cliente. Romio &amp; Asociados no vende, alquila ni cede bajo ninguna circunstancia datos personales a terceros.
        </p>

        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#101D32] pt-2">
          3. Derechos del Titular de los Datos
        </h2>
        <p>
          Los titulares de los datos personales tienen la facultad de ejercer el derecho de acceso a los mismos de forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto. Asimismo, podrán solicitar la rectificación, actualización o supresión de sus datos personales comunicándose vía email a <strong className="text-[#101D32]">{CONTACT_EMAIL}</strong>.
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


