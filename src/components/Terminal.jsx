import { useEffect, useRef, useState, useCallback } from 'react'
import OutputLine from './OutputLine'
import styles from './Terminal.module.css'
import { FS, FILES } from '../data/filesystem'
import { COMMANDS, NMAP, WHOIS, DIRB, HYDRA, SQLMAP, ALL_COMMANDS } from '../data/commands'

const WELCOME = [
  ['cyan',   '╔══════════════════════════════════════════════════╗'],
  ['cyan',   '║   SARANG CYBER COMMAND CENTER  v2.4.1           ║'],
  ['cyan',   '║   Kali Linux 2024.2 — Encrypted Connection      ║'],
  ['cyan',   '╚══════════════════════════════════════════════════╝'],
  ['',       ''],
  ['green',  '  Welcome. Authentication successful.'],
  ['white',  '  This terminal exposes the full portfolio system.'],
  ['',       ''],
  ['yellow', '  Type "help" to see all available commands.'],
  ['dim',    '  Tip: Try "nmap sarang.dev" to discover sections.'],
  ['dim',    '  Tip: Use ↑↓ for history, TAB to autocomplete.'],
  ['',       ''],
]

let lineKey = 0
const mkLine = (color, text) => ({ id: lineKey++, color, text })

export default function Terminal({ onGuiOpen, onMatrixToggle }) {
  const [lines,   setLines]   = useState(() => WELCOME.map(([c, t]) => mkLine(c, t)))
  const [cwd,     setCwd]     = useState('/home/sarang')
  const [input,   setInput]   = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)

  const outputRef = useRef(null)
  const inputRef  = useRef(null)
  const cwdRef    = useRef('/home/sarang')

  // keep cwdRef in sync for async callbacks
  useEffect(() => { cwdRef.current = cwd }, [cwd])

  const scrollBottom = () => {
    setTimeout(() => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
    }, 20)
  }

  const addLines = useCallback((tuples) => {
    setLines(prev => [...prev, ...tuples.map(([c, t]) => mkLine(c, t))])
    scrollBottom()
  }, [])

  const mountedRef = useRef(true)

  const addTyped = useCallback((tuples, delay = 22) => {
    let i = 0
    let cancelled = false
    const tick = () => {
      if (cancelled || !mountedRef.current || i >= tuples.length) return
      const [c, t] = tuples[i++]
      setLines(prev => [...prev, mkLine(c, t)])
      scrollBottom()
      setTimeout(tick, delay + Math.random() * delay * 0.4)
    }
    tick()
    // return cancel fn (unused externally but available)
    return () => { cancelled = true }
  }, [])

  const promptLabel = () => {
    const display = cwd.replace('/home/sarang', '~') || '/'
    return `sarang@kali:${display}$`
  }

  const runCommand = useCallback((raw) => {
    const cmd   = raw.trim()
    if (!cmd) return

    // echo prompt + command
    const display = cwdRef.current.replace('/home/sarang', '~') || '/'
    setLines(prev => [...prev, mkLine('prompt', `${display}$ ${cmd}`)])

    setHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')

    const parts = cmd.split(/\s+/)
    const base  = parts[0]
    const arg   = parts.slice(1).join(' ')

    // ── clear ──────────────────────────────────────────────
    if (base === 'clear' || cmd === 'clear') {
      setLines([])
      return
    }

    // ── ls ────────────────────────────────────────────────
    if (base === 'ls') {
      const entries = FS[cwdRef.current] || []
      if (!entries.length) {
        addLines([['dim', '  (empty directory)']])
      } else {
        const dirs  = entries.filter(e => !e.includes('.'))
        const files = entries.filter(e => e.includes('.'))
        if (dirs.length)  addLines([['cyan',  '  ' + dirs.join('   ')]])
        if (files.length) addLines([['white', '  ' + files.join('   ')]])
      }
      return
    }

    // ── cd ────────────────────────────────────────────────
    if (base === 'cd') {
      let next
      if (!arg || arg === '~') {
        next = '/home/sarang'
      } else if (arg === '..') {
        const parts2 = cwdRef.current.split('/')
        if (parts2.length > 2) parts2.pop()
        next = parts2.join('/') || '/'
      } else {
        const abs1 = cwdRef.current.endsWith('/')
          ? cwdRef.current + arg
          : cwdRef.current + '/' + arg
        const abs2 = '/home/sarang/' + arg
        if (FS[abs1] !== undefined)      next = abs1
        else if (FS[abs2] !== undefined) next = abs2
        else {
          addLines([['red', `  bash: cd: ${arg}: No such file or directory`]])
          return
        }
      }
      setCwd(next)
      cwdRef.current = next
      return
    }

    // ── pwd ───────────────────────────────────────────────
    if (base === 'pwd') {
      addLines([['white', '  ' + cwdRef.current]])
      return
    }

    // ── cat ───────────────────────────────────────────────
    if (base === 'cat') {
      if (!arg) { addLines([['red', '  cat: missing file operand']]); return }
      const candidates = [
        `${cwdRef.current}/${arg}`,
        `/home/sarang/projects/${arg}`,
        `/home/sarang/blockchain/${arg}`,
        `/home/sarang/research/${arg}`,
        `/home/sarang/hackathons/${arg}`,
      ]
      const data = candidates.reduce((acc, p) => acc || FILES[p], null)
      if (data) addLines(data)
      else addLines([['red', `  cat: ${arg}: No such file or directory`]])
      return
    }

    // ── pentest tools ─────────────────────────────────────
    if (base === 'nmap')   { addTyped(NMAP(arg  || 'sarang.dev'), 18); return }
    if (base === 'whois')  { addTyped(WHOIS(arg || 'sarang.dev'), 28); return }
    if (base === 'dirb')   { addTyped(DIRB(arg  || 'sarang.dev'), 22); return }
    if (base === 'hydra')  { addTyped(HYDRA(), 130); return }
    if (base === 'sqlmap') { addTyped(SQLMAP(), 35); return }

    // ── sudo hire-sarang ──────────────────────────────────
    if (cmd === 'sudo hire-sarang') {
      addLines([
        ['green', '  [sudo] password for recruiter: '],
        ['green', '  Authentication successful.'],
        ['cyan',  '  Opening contact portal...'],
      ])
      setTimeout(onGuiOpen, 600)
      return
    }

    // ── matrix toggle ─────────────────────────────────────
    if (cmd === 'matrix') {
      onMatrixToggle()
      addLines([['green', '  Matrix mode toggled.'], ['dim', '  Run "matrix" again to disable.']])
      return
    }

    // ── gui ───────────────────────────────────────────────
    if (cmd === 'gui' || cmd === 'portfolio') {
      addLines([['green', '  Opening visual portfolio...'], ['dim', '  Close the modal to return.']])
      setTimeout(onGuiOpen, 300)
      return
    }

    // ── built-in commands ─────────────────────────────────
    if (COMMANDS[cmd]) {
      addLines(COMMANDS[cmd]())
      return
    }

    // ── unknown ───────────────────────────────────────────
    addLines([
      ['red', `  bash: ${base}: command not found`],
      ['dim', '  Type "help" to see available commands.'],
    ])
  }, [addLines, addTyped, onGuiOpen, onMatrixToggle])

  // ── keyboard handler ────────────────────────────────────────────────
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistory(h => {
        const newIdx = Math.min(histIdx + 1, h.length - 1)
        setHistIdx(newIdx)
        setInput(h[newIdx] ?? '')
        return h
      })
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIdx = histIdx - 1
      if (newIdx < 0) { setHistIdx(-1); setInput(''); return }
      setHistIdx(newIdx)
      setHistory(h => { setInput(h[newIdx] ?? ''); return h })
      return
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.toLowerCase()
      if (!partial) return
      const matches = ALL_COMMANDS.filter(c => c.startsWith(partial))
      if (matches.length === 1) {
        setInput(matches[0])
      } else if (matches.length > 1) {
        addLines([['dim', '  ' + matches.join('   ')]])
      }
      return
    }
    if ((e.key === 'l' || e.key === 'L') && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    }
  }

  // expose runCommand for SidePanel clicks; clean up on unmount
  useEffect(() => {
    mountedRef.current = true
    window.__termRun = runCommand
    return () => {
      mountedRef.current = false
      delete window.__termRun
    }
  }, [runCommand])

  return (
    <div
      className={styles.container}
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={outputRef} className={styles.output}>
        {lines.map(l => (
          <OutputLine key={l.id} color={l.color} text={l.text} />
        ))}
      </div>

      <div className={styles.inputRow}>
        <span className={styles.prompt}>{promptLabel()}</span>
        <input
          ref={inputRef}
          className={styles.input}
          value={input}
          autoFocus
          autoComplete="off"
          spellCheck={false}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="type a command..."
        />
      </div>
    </div>
  )
}
