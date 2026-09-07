// components/home/HowWeWork.tsx
'use client'

const steps = [
  {
    number: '01',
    title: 'Consulta inicial',
    description: 'Nos contactás para contarnos tu situación y coordinar la primera evaluación orientativa.',
  },
  {
    number: '02',
    title: 'Análisis del caso',
    description: 'Estudiamos la documentación y evaluamos la viabilidad y posibilidades reales de tu reclamo.',
  },
  {
    number: '03',
    title: 'Estrategia jurídica',
    description: 'Definimos el camino más conveniente para tu caso: negociación, mediación o vía judicial.',
  },
  {
    number: '04',
    title: 'Seguimiento',
    description: 'Llevamos adelante cada etapa del expediente manteniéndote informado con total claridad.',
  },
]

export default function HowWeWork() {
  return (
    <section
      id="metodo"
      className="w-full bg-[#FCFBF8] py-9 min-[375px]:py-11 sm:py-16 lg:py-20 border-b border-[#DDD7CC]"
      aria-label="Proceso de trabajo"
    >
      <div className="mx-auto max-w-[1200px] px-5 min-[375px]:px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-5 sm:pb-7 border-b border-[#DDD7CC]">
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-7 bg-[#9A7538] shrink-0" aria-hidden="true" />
            <p className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#9A7538]">
              Método
            </p>
          </div>
          <h2 className="mt-2 sm:mt-3 font-display text-[22px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-[#101D32]">
            Cómo trabajamos
          </h2>
          <p className="mt-1.5 font-sans text-[14px] sm:text-[15.5px] leading-[1.6] text-[#59616C]">
            Un método estructurado para dar respuestas claras y eficientes en cada etapa procesal.
          </p>
        </div>

        {/* Desktop 4-column layout */}
        <div className="relative mt-8 sm:mt-10 hidden lg:block">
          <div
            className="absolute left-4 right-4 top-4.5 h-[1px] bg-[#DDD7CC]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex flex-col justify-between ${
                  idx !== 0 ? 'border-l border-[#DDD7CC] pl-6 xl:pl-7' : ''
                } ${idx !== 3 ? 'pr-6 xl:pr-7' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-[#DDD7CC] bg-[#FCFBF8] font-display text-[13px] font-semibold text-[#9A7538]">
                      {step.number}
                    </span>
                    <span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#59616C]">
                      Paso {idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[17px] xl:text-[18px] font-semibold text-[#101D32] leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 font-sans text-[13.5px] leading-[1.6] text-[#59616C]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="mt-6 sm:mt-8 lg:hidden flex flex-col">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-3.5 pb-5 last:pb-0 relative">
              {idx !== steps.length - 1 && (
                <div 
                  className="absolute left-[15px] top-8 bottom-0 w-px bg-[#DDD7CC]" 
                  aria-hidden="true" 
                />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDD7CC] bg-[#F5F1E9] font-display text-[12px] font-semibold text-[#9A7538]">
                {step.number}
              </span>
              <div className="pt-0.5">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#9A7538] block">
                  Paso {idx + 1}
                </span>
                <h3 className="mt-0.5 font-display text-[15.5px] min-[375px]:text-[16px] sm:text-[17px] font-semibold text-[#101D32] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 font-sans text-[13px] min-[375px]:text-[13.5px] leading-[1.5] text-[#59616C]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


