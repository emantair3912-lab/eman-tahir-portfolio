'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'
import { cn } from '@/lib/utils'

const accentVar: Record<string, string> = {
  sage: 'var(--sage)',
  powder: 'var(--powder)',
  peach: 'var(--peach)',
  cream: 'var(--cream)',
  mint: 'var(--mint)',
}

export function Skills() {
  const [active, setActive] = useState<string>(skillCategories[0].id)
  const current = skillCategories.find((c) => c.id === active) ?? skillCategories[0]

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <Reveal>
        <SectionLabel>What I work with</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Tools, languages, and concepts I build with.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => {
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'border-transparent text-foreground'
                    : 'border-border bg-surface text-muted-foreground hover:text-foreground',
                )}
                style={isActive ? { background: accentVar[cat.accent] } : undefined}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 min-h-40 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: accentVar[current.accent] }}
                />
                <span className="font-display text-lg font-semibold text-foreground">
                  {current.label}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {current.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
