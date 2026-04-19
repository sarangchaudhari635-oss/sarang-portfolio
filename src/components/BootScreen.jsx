import { useEffect, useRef, useState } from 'react'
import styles from './BootScreen.module.css'

const BOOT_LINES = [
  { cls: 'dim',  text: 'BIOS v2.4.1 — loading bootloader...' },
  { cls: '',     text: 'Initializing Kali Linux kernel 6.5.0-kali3...' },
  { cls: '',     text: 'Loading security modules............... [  OK  ]' },
  { cls: '',     text: 'Mounting filesystem /home/sarang........ [  OK  ]' },
  { cls: '',     text: 'Starting network interfaces............. [  OK  ]' },
  { cls: '',     text: 'Connecting to remote host: sarang.dev.. [  OK  ]' },
  { cls: '',     text: 'Decrypting portfolio data............... [  OK  ]' },
  { cls: '',     text: 'Loading cyber command center............ [  OK  ]' },
  { cls: 'cyan', text: '' },
  { cls: 'cyan', text: 'All systems nominal. Verifying credentials...' },
  { cls: '',     text: '████████████████████████████████████  100%' },
  { cls: 'cyan', text: '' },
]

export default function BootScreen({ onDone }) {
  const [lines,   setLines]   = useState([])
  const [showAG,  setShowAG]  = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  // Stable ref so onDone change never re-fires the effect
  const onDoneRef = useRef(onDone)
  useEffect(() => { onDoneRef.current = onDone }, [onDone])

  useEffect(() => {
    let mounted = true
    const timers = []

    const schedule = (fn, ms) => {
      const id = setTimeout(() => { if (mounted) fn() }, ms)
      timers.push(id)
      return id
    }

    let i = 0
    const tick = () => {
      if (!mounted) return
      if (i >= BOOT_LINES.length) {
        schedule(() => setShowAG(true), 200)
        schedule(() => setFadeOut(true), 1200)
        schedule(() => onDoneRef.current(), 2000)
        return
      }
      const line = BOOT_LINES[i]
      setLines(prev => [...prev, line])
      i++
      schedule(tick, 110 + Math.random() * 70)
    }

    schedule(tick, 400)

    return () => {
      mounted = false
      timers.forEach(clearTimeout)
    }
  }, []) // run once on mount only

  return (
    <div className={`${styles.boot} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.lines}>
        {lines.map((l, idx) => (
          <div key={idx} className={`${styles.line} ${l.cls ? styles[l.cls] : ''}`}>
            {l.text}
          </div>
        ))}
      </div>
      {showAG && (
        <div className={styles.accessGranted}>ACCESS GRANTED</div>
      )}
    </div>
  )
}
