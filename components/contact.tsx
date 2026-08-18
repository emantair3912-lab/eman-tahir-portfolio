'use client'

import { useState } from 'react'
import { MapPin, Mail, Send } from 'lucide-react'
import { personal } from '@/lib/data'
import { Reveal, SectionLabel } from '@/components/reveal'
import { CopyEmailButton, SocialLinks } from '@/components/social-links'
import { cn } from '@/lib/utils'

type Errors = { name?: string; email?: string; message?: string }

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})

  const validate = () => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!emailRe.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage'

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Let&apos;s build
            <br />
            something.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Open to collaboration, learning opportunities, and interesting problems. Reach out and
            let&apos;s talk.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface">
                <MapPin size={17} />
              </span>
              {personal.location}
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-foreground transition-colors hover:text-forest"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface">
                <Mail size={17} />
              </span>
              {personal.email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SocialLinks />
            <CopyEmailButton />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={cn(field, errors.name ? 'border-red-400' : 'border-border')}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  className={cn(field, errors.email ? 'border-red-400' : 'border-border')}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to build together?"
                  aria-invalid={!!errors.message}
                  className={cn(field, 'resize-none', errors.message ? 'border-red-400' : 'border-border')}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send size={16} />
                Send message
              </button>
              <p className="text-center text-xs text-muted-foreground">
                This opens your email client — no data is stored.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
