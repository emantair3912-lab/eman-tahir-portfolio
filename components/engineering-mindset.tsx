'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { engineeringSteps } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function EngineeringMindset() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>How I work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            The engineering mindset behind every project.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringSteps.map((step, i) => {
              const isActive = active === i
              return (
                <li key={step.number}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={cn(
                      'group relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300',
                      isActive
                        ? 'border-forest bg-surface shadow-[0_12px_40px_-16px_rgb(41,72,58,0.35)]'
                        : 'border-border bg-surface/60 hover:border-forest/40',
                    )}
                  >
                    <span
                      className={cn(
                        'font-mono text-sm font-semibold transition-colors',
                        isActive ? 'text-forest' : 'text-muted-foreground',
                      )}
                    >
                      {step.number}
                    </span>
                    <span className="font-display text-xl font-bold text-foreground">
                      {step.title}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="mindset-underline"
                        className="absolute inset-x-5 bottom-3 h-0.5 rounded-full bg-sage"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
