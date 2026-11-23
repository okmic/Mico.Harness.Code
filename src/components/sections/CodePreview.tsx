import { ArrowRight, CheckCircle2, Clock, Code2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Brand } from '@/components/ui/Brand'
import { Button } from '@/components/ui/Button'
import { actions, author, codePreview, footer } from '@/pkg/content'

export function CodePreview() {
  return (
    <section
      className="relative flex min-h-dvh w-full flex-col overflow-hidden"
      aria-labelledby="code-preview-title"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-36">
        <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3">
          <Brand size="lg" suffix={codePreview.brand.suffix} className="text-sm sm:text-base" />
          <Badge tone="accent">
            <Clock className="mr-1 size-3" aria-hidden="true" />
            {codePreview.status}
          </Badge>
        </div>

        <h1
          id="code-preview-title"
          className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {codePreview.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
          {codePreview.lead}
        </p>

        <ul className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
          {codePreview.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <Button size="lg" className="w-full sm:w-auto" disabled>
            <Code2 className="size-4" aria-hidden="true" />
            {actions.primary.label}
          </Button>
          <a
            href={actions.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto"
          >
            <Button size="lg" variant="secondary" className="w-full">
              {actions.secondary.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-text-muted sm:mt-8 sm:gap-3">
          <span>
            Автор{' '}
            <a
              href="https://okmic.github.io/MicoEngineer/"
              className="text-accent hover:text-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {author.name}
            </a>
          </span>
          <span className="text-border">·</span>
          <span>{codePreview.note}</span>
        </div>
      </div>

      <div className="relative border-t border-border pb-[var(--safe-bottom)]">
        <div className="mx-auto flex w-full max-w-content flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-6 sm:py-6 lg:px-8">
          <p className="text-sm text-text-muted">{footer.copyright}</p>
          <p className="text-sm text-text-muted">
            Часть серии{' '}
            <a
              href="https://okmic.github.io/Mico.Harness/"
              className="text-accent hover:text-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mico.Harness
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
