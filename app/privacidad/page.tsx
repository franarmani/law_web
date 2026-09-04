import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad y protección de datos personales de Romio & Asociados — Estudio Jurídico.',
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="border-b border-border pb-8">
        <p className="eyebrow">Aspectos legales &amp; protección de datos</p>
        <h1 className="mt-5">Política de Privacidad</h1>
        <p className="mt-2 font-sans text-sm font-medium text-muted">
          Última actualización: Septiembre 2026 · Romio & Asociados
        </p>
      </div>

      <div className="mt-10 space-y-6 font-sans text-base leading-[1.75] text-muted">
        <p>
          En <strong className="text-navy">Romio & Asociados</strong> asumimos un compromiso absoluto con la privacidad, confidencialidad y protección de los datos personales de nuestros clientes y visitantes, en estricto cumplimiento de la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina.
        </p>

        <h2>1. Recolección de Datos Personales</h2>
        <p>
          Los datos personales facilitados voluntariamente por los usuarios a través de nuestros formularios de contacto o canales directos de consulta (como WhatsApp o correo electrónico) son utilizados exclusivamente para responder a las inquietudes jurídicas planteadas y gestionar la relación profesional o consulta orientativa.
        </p>

        <h2>2. Confidencialidad y Secreto Profesional</h2>
        <p>
          Toda la información remitida a nuestro estudio está amparada por las normas relativas al Secreto Profesional Abogado-Cliente. Romio & Asociados no vende, alquila ni cede bajo ninguna circunstancia datos personales a terceros.
        </p>

        <h2>3. Derechos del Titular de los Datos</h2>
        <p>
          Los titulares de los datos personales tienen la facultad de ejercer el derecho de acceso a los mismos de forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto. Asimismo, podrán solicitar la rectificación, actualización o supresión de sus datos personales comunicándose vía email a <strong className="text-navy">romio.asociados@gmail.com</strong>.
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

