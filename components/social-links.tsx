'use client'

import { useState } from 'react'
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-muted"
      >
        <Github size={18} />
      </a>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-muted"
      >
        <Linkedin size={18} />
      </a>
      <a
        href={`mailto:${personal.email}`}
        aria-label="Send an email"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-muted"
      >
        <Mail size={18} />
      </a>
    </div>
  )
}

export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted',
        className,
      )}
    >
      {copied ? <Check size={16} className="text-forest" /> : <Copy size={16} />}
      {copied ? 'Email copied ✓' : 'Copy email'}
    </button>
  )
}
