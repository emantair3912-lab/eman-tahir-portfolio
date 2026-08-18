'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'

const flow = ['User', 'Query', 'Multi-Agent System', 'University Info', 'Response']
const agents = ['Agent 01', 'Agent 02', 'Agent 03']

export function UniPathVisualizer() {
  const [step, setStep] = useState(-1)
  const [running, setRunning] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => () => clear(), [])

  const run = () => {
    clear()
    setRunning(true)
    setStep(-1)
    flow.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => {
          setStep(i)
          if (i === flow.length - 1) setRunning(false)
        }, 500 + i * 650),
      )
    })
  }

  const reset = () => {
    clear()
    setRunning(false)
    setStep(-1)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 rounded-2xl bg-[color:var(--powder)]/25 p-4">
        <div className="flex flex-col items-stretch gap-2">
          {flow.map((node, i) => {
            const done = step >= i
            const isAgents = i === 2
            return (
              <div key={node} className="flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: step === i ? 1.03 : 1,
                    opacity: done ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-center"
                  style={done ? { borderColor: 'var(--forest)' } : undefined}
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-forest">
                    {node}
                  </span>
                  {isAgents && (
                    <div className="mt-2 flex justify-center gap-1.5">
                      {agents.map((a, ai) => (
                        <motion.span
                          key={a}
                          animate={{
                            backgroundColor:
                              done && step >= 2 ? 'var(--mint)' : 'var(--muted)',
                          }}
                          transition={{ delay: ai * 0.1 }}
                          className="rounded-md px-2 py-1 text-[10px] font-medium text-forest"
                        >
                          {a}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
                {i < flow.length - 1 && (
                  <motion.span
                    animate={{ opacity: step > i ? 1 : 0.3 }}
                    className="my-1 h-4 w-px"
                    style={{ background: step > i ? 'var(--forest)' : 'var(--border)' }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={run}
          disabled={running}
          className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          <Play size={13} />
          {running ? 'Running…' : 'Run simulation'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <RotateCcw size={13} />
          Reset
        </button>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Frontend viz
        </span>
      </div>
    </div>
  )
}
