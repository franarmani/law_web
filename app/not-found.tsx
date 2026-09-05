import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center bg-[#FCFBF8] px-6 py-28 text-center">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
        <p className="font-sans text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#A27D3F]">
          Error 404
        </p>
        <span className="h-px w-8 bg-[#A27D3F]" aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-[36px] sm:text-[46px] font-semibold text-[#101D32]">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md font-sans text-[16.5px] text-[#5F6670]">
        La sección jurídica o el recurso que estás buscando no existe o ha sido movido.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn-primary">
          Volver a la página principal
        </Link>
      </div>
    </section>
  )
}
