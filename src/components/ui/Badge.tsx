import type { ReactNode } from 'react'
import { cn } from '@/pkg/cn'

type BadgeProps = {
  tone?: 'default' | 'accent' | 'danger' | 'success' | 'cool'
  className?: string
  children: ReactNode
}

const toneMap = {
  default: 'border-border bg-surface text-text-muted',
  accent: 'border-accent/30 bg-accent-soft text-accent',
  danger: 'border-danger/30 bg-danger-soft text-danger',
  success: 'border-success/30 bg-success-soft text-success',
  cool: 'border-cool/30 bg-cool-soft text-cool',
} as const

export function Badge({ tone = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-badge border px-3 py-1 font-mono text-xs',
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}