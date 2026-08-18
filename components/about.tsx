'use client'

import { Reveal, SectionLabel } from '@/components/reveal'

const focusAreas = [
  'Software Engineering',
  'Java',
  'C++',
  'Object-Oriented Programming',
  'Data Structures',
  'DBMS',
]

const ways = [
  { title: 'Software development projects', desc: 'Turning ideas into working, practical software.' },
  { title: 'Team collaboration', desc: 'Planning, implementing, testing, and documenting together.' },
  { title: 'Continuous learning', desc: 'Improving technical skills with every project.' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>Who I am</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            I learn by building things.
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground text-pretty">
              I&apos;m a Software Engineering student with hands-on experience in Java,
              Object-Oriented Programming, and Data Structures. I care about writing clean, practical
              solutions and understanding the systems I build from the inside out.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              My work so far spans academic and personal projects — from concurrent AI systems to
              algorithm visualisers and full-stack portals — always grounded in solid engineering
              fundamentals and collaboration.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid gap-4 sm:grid-cols-3">
              {ways.map((way) => (
                <div
                  key={way.title}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <h3 className="font-display text-base font-semibold text-forest">{way.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{way.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
