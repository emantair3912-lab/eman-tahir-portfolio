'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, X } from 'lucide-react'
import type { Project } from '@/lib/data'

type Props = {
  project: Project | null
  onClose: () => void
}

const accentVar: Record<string, string> = {
  sage: 'var(--sage)',
  powder: 'var(--powder)',
  peach: 'var(--peach)',
  cream: 'var(--cream)',
  mint: 'var(--mint)',
  forest: 'var(--forest)',
  slate: 'var(--slate)',
}

export function ProjectCaseStudy({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-surface sm:rounded-3xl"
          >
            <div
              className="flex items-start justify-between gap-4 px-6 pt-6 pb-5"
              style={{
                background: `linear-gradient(120deg, ${accentVar[project.palette.primary]}, ${accentVar[project.palette.secondary]})`,
              }}
            >
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-forest/80">
                  Case study {project.number}
                </span>
                <h2
                  id="case-study-title"
                  className="mt-1 font-display text-2xl font-bold text-forest sm:text-3xl"
                >
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="mt-1 text-sm font-medium text-forest/80">{project.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface/80 text-forest transition-colors hover:bg-surface"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <p className="text-base leading-relaxed text-foreground text-pretty">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <dl className="mt-8 space-y-6">
                {project.caseStudy.map((section) => (
                  <div key={section.heading} className="grid gap-1.5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="font-display text-sm font-bold uppercase tracking-wider text-forest">
                      {section.heading}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {section.body}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
