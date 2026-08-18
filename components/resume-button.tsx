'use client'

import { Download, FileText } from 'lucide-react'
import { personal } from '@/lib/data'
import { cn } from '@/lib/utils'

type ResumeButtonProps = {
  variant?: 'view' | 'download'
  className?: string
  compact?: boolean
}

export function ResumeButton({ variant = 'view', className, compact }: ResumeButtonProps) {
  const isView = variant === 'view'

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage'
  const size = compact ? 'px-4 py-2' : 'px-5 py-2.5'

  if (isView) {
    return (
      <a
        href={personal.resume}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          base,
          size,
          'bg-primary text-primary-foreground hover:opacity-90',
          className,
        )}
      >
        <FileText size={16} />
        View Resume
      </a>
    )
  }

  return (
    <a
      href={personal.resume}
      download
      className={cn(
        base,
        size,
        'border border-border bg-surface text-foreground hover:bg-muted',
        className,
      )}
    >
      <Download size={16} />
      Download Resume
    </a>
  )
}
