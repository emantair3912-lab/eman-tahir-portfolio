'use client'

import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { personal } from '@/lib/data'
import { HeroWorkspace } from '@/components/hero-workspace'
import { SocialLinks } from '@/components/social-links'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-[0.4] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-sage" />
            Software Engineering Student
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Building
            <br />
            ideas into
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">software.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded-sm sm:h-5"
                style={{ background: 'var(--sage)' }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty"
          >
            Software Engineering student passionate about building practical solutions, solving
            problems, and continuously improving technical skills.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore my work
              <ArrowDown size={16} />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <HeroWorkspace />
      </div>
    </section>
  )
}
