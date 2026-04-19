import { useEffect, useRef, useState } from 'react'
import styles from './LogPanel.module.css'

const LOG_EVENTS = [
  ['AUTH', 'User session initialized'],
  ['NET',  'Secure tunnel established'],
  ['SYS',  'Filesystem mounted read/write'],
  ['SCAN', 'Port 443 — TLS handshake OK'],
  ['MEM',  'Cache cleared successfully'],
  ['AUTH', 'Session token refreshed'],
  ['NET',  'Packet capture on standby'],
  ['SYS',  'Watchdog process running'],
  ['DB',   'Portfolio DB connection healthy'],
  ['SEC',  'Firewall rules loaded (42 rules)'],
  ['NET',  'DNS resolved: sarang.dev → OK'],
  ['SYS',  'Log rotation complete'],
  ['SCAN', 'No intrusion attempts detected'],
  ['AUTH', 'SSH key fingerprint verified'],
]

function ts() {
  const n = new Date()
  return [n.getHours(), n.getMinutes(), n.getSeconds()]
    .map(v => String(v).padStart(2, '0'))
    .join(':')
}

export default function LogPanel() {
  const [entries, setEntries] = useState([{ time: ts(), ...parseEvent(0) }])
  const idxRef = useRef(1)

  function parseEvent(i) {
    const [tag, msg] = LOG_EVENTS[i % LOG_EVENTS.length]
    return { tag, msg }
  }

  useEffect(() => {
    const id = setInterval(() => {
      const ev = parseEvent(idxRef.current++)
      setEntries(prev => [...prev.slice(-4), { time: ts(), ...ev }])
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.panel}>
      <div className={styles.header}>// LIVE SYSTEM LOGS</div>
      <div className={styles.feed}>
        {entries.map((e, i) => (
          <div key={i} className={styles.entry}>
            <span className={styles.ts}>[{e.time}]</span>
            {' '}
            <span className={styles.tag}>[{e.tag}]</span>
            {' '}
            <span className={styles.msg}>{e.msg}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
