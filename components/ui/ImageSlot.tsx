// components/ui/ImageSlot.tsx
import { cn } from '@/lib/cn'

type ImageSlotProps = {
  label: string
  aspect?: string
  onNavy?: boolean
  hideLabel?: boolean
  className?: string
}

export default function ImageSlot({
  label,
  aspect = '4/5',
  onNavy = false,
  hideLabel = false,
  className,
}: ImageSlotProps) {
  return (
    <div
      className={cn('img-slot', onNavy && 'on-navy', className)}
      style={{ aspectRatio: aspect }}
      title={label}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      {!hideLabel && <span className="img-slot-label">{label}</span>}
    </div>
  )
}
