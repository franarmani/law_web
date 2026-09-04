import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-6">Página no encontrada</h1>
      <p className="mt-4 max-w-md">
        La página o sección jurídica que estás buscando no existe o ha sido movida.
      </p>
      <div className="mt-10">
        <Link href="/" className="link-primary">
          Volver a la página principal
        </Link>
      </div>
    </section>
  )
}
