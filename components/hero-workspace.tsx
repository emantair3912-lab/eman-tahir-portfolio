'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const chips = [
  { label: 'Java', color: 'var(--sage)' },
  { label: 'C++', color: 'var(--powder)' },
  { label: 'Python', color: 'var(--peach)' },
  { label: 'SQL', color: 'var(--cream)' },
  { label: 'Algorithms', color: 'var(--mint)' },
  { label: 'AI', color: 'var(--powder)' },
]

const codeLines = [
  { t: 'class', k: 'Engineer {', pad: 0 },
  { t: 'build', k: '() => solve(problem);', pad: 1 },
  { t: 'learn', k: '() => repeat();', pad: 1 },
  { t: '}', k: '', pad: 0 },
]

export function HeroWorkspace() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* soft glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 20%, var(--mint), transparent), radial-gradient(50% 50% at 80% 80%, var(--powder), transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl border border-border bg-surface p-5 shadow-[0_20px_60px_-20px_rgb(41,72,58,0.25)]"
      >
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--peach)' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--cream)' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--sage)' }} />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Terminal size={13} />
            workspace.dev
          </div>
        </div>

        {/* code block */}
        <div className="mt-4 rounded-xl bg-muted/60 p-4 font-mono text-sm">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex gap-2 leading-relaxed"
              style={{ paddingLeft: line.pad * 16 }}
            >
              <span className="select-none text-muted-foreground/50">{i + 1}</span>
              <span>
                <span className="text-forest">{line.t}</span>{' '}
                <span className="text-slate">{line.k}</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* skill chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
              style={{ background: chip.color }}
            >
              {chip.label}
            </motion.span>
          ))}
        </div>

        {/* status */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-forest"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            Currently building
          </div>
          <span className="font-mono text-xs text-muted-foreground">04 / 06</span>
        </div>
      </motion.div>

      {/* floating status card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Learning by
        </p>
        <p className="font-display text-lg font-bold text-forest">building.</p>
      </motion.div>
    </div>
  )
}
