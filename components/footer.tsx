'use client'

import { personal } from '@/lib/data'
import { SocialLinks } from '@/components/social-links'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-forest font-display text-sm font-bold text-primary-foreground">
            ET
          </span>
          <div>
            <p className="font-display text-lg font-bold text-foreground">{personal.name}</p>
            <p className="text-sm text-muted-foreground">{personal.role}</p>
          </div>
        </div>

        <SocialLinks />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest">Built with care in Lahore.</p>
        </div>
      </div>
    </footer>
  )
}
