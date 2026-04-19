import styles from './SidePanel.module.css'

const LINUX = ['help', 'ls', 'cd', 'pwd', 'cat', 'clear']
const PORTFOLIO = ['whoami', 'skills', 'projects', 'hackathons', 'contact', 'resume', 'gui']
const PENTEST = ['nmap sarang.dev', 'whois sarang.dev', 'dirb sarang.dev', 'sqlmap sarang.dev', 'netstat', 'hydra sarang.dev']
const EXTRAS = ['sudo hire-sarang', 'coffee', 'hack', 'matrix']

function CmdGroup({ title, items, onRun }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>{title}</div>
      <ul className={styles.list}>
        {items.map(cmd => (
          <li key={cmd} onClick={() => onRun(cmd)}>
            {cmd}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SidePanel({ onRun }) {
  return (
    <div className={styles.panel}>
      <CmdGroup title="// LINUX"     items={LINUX}     onRun={onRun} />
      <CmdGroup title="// PORTFOLIO" items={PORTFOLIO} onRun={onRun} />
      <CmdGroup title="// PENTEST"   items={PENTEST}   onRun={onRun} />
      <CmdGroup title="// EXTRAS"    items={EXTRAS}    onRun={onRun} />

      <div className={`${styles.section} ${styles.sysinfo}`}>
        <div className={styles.header}>// SYSTEM</div>
        <div className={styles.sysrow}>CPU <span className={styles.bar}>████░</span> 42%</div>
        <div className={styles.sysrow}>MEM <span className={styles.bar}>██░░░</span> 28%</div>
        <div className={styles.sysrow}>NET <span className={styles.ok}>SECURED</span></div>
        <div className={styles.sysrow}>FW  <span className={styles.ok}>ACTIVE</span></div>
      </div>
    </div>
  )
}
