'use client'

import { GraduationCap } from 'lucide-react'
import { personal } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'

export function Education() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-5">
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-forest"
                style={{ background: 'var(--sage)' }}
              >
                <GraduationCap size={26} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  COMSATS University Islamabad
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">Lahore Campus</p>
                <p className="mt-3 text-base text-foreground">{personal.degree}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background px-5 py-4 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Expected graduation
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-forest">
                {personal.graduation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
