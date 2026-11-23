import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/pkg/cn'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  primary: 'bg-accent text-bg-base hover:brightness-105',
  secondary: 'bg-surface text-text-primary border border-border hover:bg-surface-hover',
  ghost: 'text-text-secondary hover:text-text-primary',
} as const

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
} as const

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-btn font-medium transition',
        'focus-visible:shadow-focus focus-visible:outline-none',
        'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}