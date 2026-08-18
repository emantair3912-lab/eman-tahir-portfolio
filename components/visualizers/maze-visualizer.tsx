'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { RotateCcw, Shuffle } from 'lucide-react'
import { cn } from '@/lib/utils'

const COLS = 15
const ROWS = 15

type Cell = 0 | 1 // 0 open, 1 wall

function generateMaze(): Cell[][] {
  const grid: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => 1 as Cell),
  )
  const stack: [number, number][] = [[1, 1]]
  grid[1][1] = 0
  const dirs = [
    [-2, 0],
    [2, 0],
    [0, -2],
    [0, 2],
  ]
  while (stack.length) {
    const [r, c] = stack[stack.length - 1]
    const options = dirs
      .map(([dr, dc]) => [r + dr, c + dc, dr, dc])
      .filter(([nr, nc]) => nr > 0 && nr < ROWS - 1 && nc > 0 && nc < COLS - 1 && grid[nr][nc] === 1)
    if (options.length === 0) {
      stack.pop()
      continue
    }
    const [nr, nc, dr, dc] = options[Math.floor(Math.random() * options.length)]
    grid[r + dr / 2][c + dc / 2] = 0
    grid[nr][nc] = 0
    stack.push([nr, nc])
  }
  grid[1][1] = 0
  grid[ROWS - 2][COLS - 2] = 0
  return grid
}

const START: [number, number] = [1, 1]
const END: [number, number] = [ROWS - 2, COLS - 2]
const key = (r: number, c: number) => `${r},${c}`

function search(grid: Cell[][], mode: 'bfs' | 'dfs') {
  const visited: string[] = []
  const seen = new Set<string>()
  const parent = new Map<string, string>()
  const frontier: [number, number][] = [START]
  seen.add(key(...START))
  const neighbors = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let found = false
  while (frontier.length) {
    const [r, c] = mode === 'bfs' ? frontier.shift()! : frontier.pop()!
    visited.push(key(r, c))
    if (r === END[0] && c === END[1]) {
      found = true
      break
    }
    for (const [dr, dc] of neighbors) {
      const nr = r + dr
      const nc = c + dc
      if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS) continue
      if (grid[nr][nc] === 1 || seen.has(key(nr, nc))) continue
      seen.add(key(nr, nc))
      parent.set(key(nr, nc), key(r, c))
      frontier.push([nr, nc])
    }
  }
  const path: string[] = []
  if (found) {
    let cur: string | undefined = key(...END)
    while (cur) {
      path.unshift(cur)
      cur = parent.get(cur)
    }
  }
  return { visited, path }
}

const EMPTY_GRID: Cell[][] = Array.from({ length: ROWS }, () =>
  Array.from({ length: COLS }, () => 1 as Cell),
)

export function MazeVisualizer() {
  // Start with a deterministic grid so SSR and first client render match,
  // then generate the random maze after mount to avoid hydration mismatch.
  const [grid, setGrid] = useState<Cell[][]>(EMPTY_GRID)
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const [path, setPath] = useState<Set<string>>(new Set())
  const [running, setRunning] = useState(false)
  const [mode, setMode] = useState<'bfs' | 'dfs' | null>(null)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }, [])

  useEffect(() => {
    setGrid(generateMaze())
  }, [])

  useEffect(() => () => stop(), [stop])

  const runSearch = (m: 'bfs' | 'dfs') => {
    stop()
    setMode(m)
    setVisited(new Set())
    setPath(new Set())
    setRunning(true)
    const { visited: order, path: finalPath } = search(grid, m)
    let i = 0
    timer.current = setInterval(() => {
      if (i >= order.length) {
        stop()
        setPath(new Set(finalPath))
        setRunning(false)
        return
      }
      setVisited((prev) => {
        const next = new Set(prev)
        next.add(order[i])
        return next
      })
      i += 1
    }, 22)
  }

  const regenerate = () => {
    stop()
    setRunning(false)
    setMode(null)
    setVisited(new Set())
    setPath(new Set())
    setGrid(generateMaze())
  }

  const reset = () => {
    stop()
    setRunning(false)
    setMode(null)
    setVisited(new Set())
    setPath(new Set())
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 rounded-2xl bg-[color:var(--sage)]/25 p-3">
        <div
          className="mx-auto grid aspect-square w-full max-w-xs gap-[2px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        >
          {grid.map((row, r) =>
            row.map((cell, c) => {
              const k = key(r, c)
              const isStart = r === START[0] && c === START[1]
              const isEnd = r === END[0] && c === END[1]
              const inPath = path.has(k)
              const isVisited = visited.has(k)
              let bg = 'var(--surface)'
              if (cell === 1) bg = 'var(--forest)'
              else if (inPath) bg = 'var(--sage)'
              else if (isVisited) bg = 'var(--cream)'
              if (isStart) bg = 'var(--forest)'
              if (isEnd) bg = 'var(--peach)'
              return (
                <div
                  key={k}
                  className={cn('rounded-[2px] transition-colors', isVisited && !inPath && cell === 0 && 'duration-150')}
                  style={{ background: bg }}
                  aria-hidden="true"
                />
              )
            }),
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={regenerate}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <Shuffle size={13} />
          Generate
        </button>
        <button
          type="button"
          onClick={() => runSearch('bfs')}
          disabled={running}
          className={cn(
            'rounded-full px-3.5 py-2 text-xs font-semibold transition-all disabled:opacity-50',
            mode === 'bfs' ? 'bg-forest text-primary-foreground' : 'border border-border bg-surface text-foreground hover:bg-muted',
          )}
        >
          BFS
        </button>
        <button
          type="button"
          onClick={() => runSearch('dfs')}
          disabled={running}
          className={cn(
            'rounded-full px-3.5 py-2 text-xs font-semibold transition-all disabled:opacity-50',
            mode === 'dfs' ? 'bg-forest text-primary-foreground' : 'border border-border bg-surface text-foreground hover:bg-muted',
          )}
        >
          DFS
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>
    </div>
  )
}
