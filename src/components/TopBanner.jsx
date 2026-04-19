import { useEffect, useState } from 'react'
import styles from './TopBanner.module.css'

export default function TopBanner() {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0')
  const ss = String(elapsed % 60).padStart(2, '0')

  return (
    <div className={styles.banner}>
      <div className={styles.title}>⬡ SARANG CYBER COMMAND CENTER</div>
      <div className={styles.status}>
        <span className={styles.item}>
          SYS: <em>ONLINE</em>
        </span>
        <span className={`${styles.item} ${styles.warn}`}>
          THREAT: <em>LOW</em>
        </span>
        <span className={styles.item}>
          SESSION: <em>{mm}:{ss}</em>
        </span>
        <span className={styles.item}>
          NET: <em className={styles.blink}>▶ ACTIVE</em>
        </span>
      </div>
    </div>
  )
}
