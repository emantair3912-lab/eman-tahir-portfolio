'use client'

import { useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects, type Project } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'
import { ProjectCaseStudy } from '@/components/project-case-study'
import { UniPathVisualizer } from '@/components/visualizers/unipath-visualizer'
import { MazeVisualizer } from '@/components/visualizers/maze-visualizer'
import { NexusPreview } from '@/components/visualizers/nexus-preview'
import { cn } from '@/lib/utils'

const accentVar: Record<string, string> = {
  sage: 'var(--sage)',
  powder: 'var(--powder)',
  peach: 'var(--peach)',
  cream: 'var(--cream)',
  mint: 'var(--mint)',
  forest: 'var(--forest)',
  slate: 'var(--slate)',
}

function Visual({ id }: { id: string }) {
  if (id === 'unipath') return <UniPathVisualizer />
  if (id === 'maze') return <MazeVisualizer />
  return <NexusPreview />
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Three projects, three ways of thinking.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Intelligent systems, algorithms, and full-stack products — each one a chance to learn by
            building something real.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal key={project.id} delay={0.05}>
                <article className="overflow-hidden rounded-3xl border border-border bg-surface">
                  <div
                    className={cn(
                      'grid grid-cols-1 lg:grid-cols-2',
                      reversed && 'lg:[&>*:first-child]:order-2',
                    )}
                  >
                    {/* content */}
                    <div className="flex flex-col justify-between p-6 sm:p-8">
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="grid h-11 w-11 place-items-center rounded-xl font-display text-sm font-bold text-forest"
                            style={{ background: accentVar[project.palette.primary] }}
                          >
                            {project.number}
                          </span>
                          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                        </div>

                        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="mt-1 text-sm font-medium text-muted-foreground">
                            {project.subtitle}
                          </p>
                        )}
                        <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                              +{project.technologies.length - 6}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setSelected(project)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          View case study
                          <ArrowUpRight size={16} />
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      </div>
                    </div>

                    {/* visual */}
                    <div className="border-t border-border p-6 sm:p-8 lg:border-l lg:border-t-0">
                      <Visual id={project.id} />
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
