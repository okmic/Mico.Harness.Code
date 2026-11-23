import { cn } from '@/pkg/cn'

type BrandProps = {
  size?: 'sm' | 'md' | 'lg'
  suffix?: string
  className?: string
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-base',
} as const

export function Brand({ size = 'md', suffix = '.Harness', className }: BrandProps) {
  return (
    <span className={cn('font-display font-semibold tracking-tight', sizeMap[size], className)}>
      <span className="text-text-primary">Mico</span>
      <span className="text-accent">{suffix}</span>
    </span>
  )
}