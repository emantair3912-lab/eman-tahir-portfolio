'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, CalendarClock, FileText, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'jobs', label: 'Jobs', icon: Briefcase },
  { id: 'applications', label: 'Applications', icon: FileText },
  { id: 'interviews', label: 'Interviews', icon: CalendarClock },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
] as const

const data: Record<string, { title: string; meta: string; tag: string }[]> = {
  jobs: [
    { title: 'Backend Engineer', meta: 'Full-time · Remote', tag: 'Open' },
    { title: 'Frontend Developer', meta: 'Full-time · Lahore', tag: 'Open' },
    { title: 'QA Analyst', meta: 'Contract · Hybrid', tag: 'Filtered' },
  ],
  applications: [
    { title: 'Application #1042', meta: 'Backend Engineer', tag: 'Review' },
    { title: 'Application #1043', meta: 'Frontend Developer', tag: 'Shortlisted' },
    { title: 'Application #1044', meta: 'QA Analyst', tag: 'Submitted' },
  ],
  interviews: [
    { title: 'Technical Round', meta: 'Mon · 10:00', tag: 'Scheduled' },
    { title: 'HR Round', meta: 'Wed · 14:30', tag: 'Scheduled' },
    { title: 'System Design', meta: 'Fri · 11:00', tag: 'Pending' },
  ],
  admin: [
    { title: 'Total applications', meta: 'This week', tag: '128' },
    { title: 'Active listings', meta: 'Across portal', tag: '17' },
    { title: 'Interviews booked', meta: 'Upcoming', tag: '9' },
  ],
}

const tagColor: Record<string, string> = {
  Open: 'var(--mint)',
  Filtered: 'var(--cream)',
  Review: 'var(--cream)',
  Shortlisted: 'var(--mint)',
  Submitted: 'var(--powder)',
  Scheduled: 'var(--powder)',
  Pending: 'var(--peach)',
}

export function NexusPreview() {
  const [active, setActive] = useState<string>('jobs')

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 rounded-2xl bg-[color:var(--peach)]/20 p-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold text-slate">Nexus Jobs</span>
          <span className="rounded-md bg-surface px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            Demo data
          </span>
        </div>

        <div className="mt-3 flex gap-1.5 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = active === tab.id
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-slate text-white'
                    : 'bg-surface text-muted-foreground hover:text-foreground',
                )}
              >
                <Icon size={13} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-3 space-y-2"
          >
            {data[active].map((row) => (
              <li
                key={row.title}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-foreground">{row.title}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{row.meta}</p>
                </div>
                <span
                  className="ml-2 shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold text-slate"
                  style={{ background: tagColor[row.tag] ?? 'var(--powder)' }}
                >
                  {row.tag}
                </span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Illustrative preview — not a live portal
      </p>
    </div>
  )
}
