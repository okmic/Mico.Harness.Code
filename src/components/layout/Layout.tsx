import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative isolate min-h-dvh w-full bg-bg-base font-sans text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-bg-base"
      >
        К содержанию
      </a>
      <main id="main" className="relative w-full">
        {children}
      </main>
    </div>
  )
}