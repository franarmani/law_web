// components/motion/SectionReveal.tsx
'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Aparición suave y profesional para secciones.
 * - translateY de 18px a 0.
 * - Opacidad de 0 a 1.
 * - Duración de 500 ms con curva de desaceleración sin rebote.
 * - Ejecución única (once: true).
 * - Respeta prefers-reduced-motion.
 */
export default function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
