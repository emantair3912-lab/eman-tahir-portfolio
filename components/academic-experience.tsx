'use client'

import { CheckCircle2 } from 'lucide-react'
import { academic } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'

export function AcademicExperience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <Reveal>
        <SectionLabel>Academic experience</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Grown through academic projects.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="flex flex-col gap-2 border-b border-border bg-mint/40 px-6 py-6 sm:px-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-forest">
              {academic.label}
            </span>
            <p className="max-w-xl text-sm leading-relaxed text-forest/80">
              Collaborated with teammates across the full lifecycle of software development projects,
              applying core computer science concepts throughout.
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                What I did
              </h3>
              <ul className="mt-4 space-y-3">
                {academic.activities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 size={16} className="shrink-0 text-forest" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Applied concepts
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {academic.concepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
