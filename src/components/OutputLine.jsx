import styles from './OutputLine.module.css'

export default function OutputLine({ color, text }) {
  return (
    <div className={`${styles.line} ${color ? styles[color] : ''}`}>
      {text}
    </div>
  )
}
