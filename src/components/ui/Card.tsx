import type { ReactNode } from 'react'
import { cn } from '@/pkg/cn'

type CardProps = {
  tone?: 'surface' | 'raised' | 'base'
  className?: string
  children: ReactNode
}

const toneMap = {
  surface: 'bg-surface border-border',
  raised: 'bg-bg-raised border-border',
  base: 'bg-bg-base border-border',
} as const

export function Card({ tone = 'surface', className, children }: CardProps) {
  return (
    <div className={cn('rounded-card border p-5 sm:p-6', toneMap[tone], className)}>{children}</div>
  )
}