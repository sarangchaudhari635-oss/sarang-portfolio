import styles from './GuiModal.module.css'

const PROJECTS = [
  {
    name: 'WasteMatch',
    stack: 'React · Node.js · MongoDB · TensorFlow',
    desc: 'AI-powered platform connecting waste producers with recyclers. ML waste classification at 95% accuracy. Won ETHGlobal 2024.',
    award: 'WINNER — ETHGlobal 2024',
  },
  {
    name: 'MOLE',
    stack: 'Python · Scapy · TensorFlow · FastAPI',
    desc: 'Network monitoring & intrusion detection system using LSTM anomaly detection. Detects port scans, DDoS, malware C2 traffic.',
    award: 'RUNNER-UP — HackMIT 2023',
  },
  {
    name: 'PrivBadge',
    stack: 'Solidity · Web3.js · ZK-SNARKs · IPFS',
    desc: 'Decentralised ZK credential system. Prove identity attributes without revealing personal data. ERC-721 on-chain registry.',
    award: 'WINNER — Best Privacy Hack',
  },
  {
    name: 'SecureVault',
    stack: 'React · Node.js · Argon2 · WebCrypto',
    desc: 'End-to-end encrypted password manager. Zero-knowledge architecture — server never sees plaintext. AES-256-GCM client-side.',
    award: null,
  },
]

const SKILLS = [
  'Python', 'JavaScript', 'Solidity', 'Bash', 'SQL',
  'React', 'Node.js', 'FastAPI', 'Django', 'Web3.js',
  'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap',
  'Ethereum', 'IPFS', 'ZK-SNARKs', 'Hardhat',
  'Docker', 'AWS', 'Git', 'PostgreSQL', 'MongoDB', 'Redis',
]

export default function GuiModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>

        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>⬡ PORTFOLIO_VISUAL_MODE</div>
          <button className={styles.closeBtn} onClick={onClose}>[ ✕ CLOSE ]</button>
        </div>

        {/* About */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>IDENTITY</div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <div className={styles.avatar}>S</div>
              <div>
                <div className={styles.name}>Sarang</div>
                <div className={styles.role}>Full-Stack Developer &amp; Security Researcher</div>
                <div className={styles.location}>📍 Mumbai, India</div>
              </div>
            </div>
            <p className={styles.bio}>
              CS student passionate about building secure, innovative systems. Expertise spans
              full-stack web development, blockchain engineering, and ethical hacking. Open to
              internships, research roles, and exciting opportunities.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>PROJECTS</div>
          <div className={styles.projectGrid}>
            {PROJECTS.map(p => (
              <div key={p.name} className={styles.projectCard}>
                <div className={styles.projectName}>{p.name}</div>
                <div className={styles.projectStack}>{p.stack}</div>
                <div className={styles.projectDesc}>{p.desc}</div>
                {p.award && <div className={styles.award}>🏆 {p.award}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>SKILLS</div>
          <div className={styles.skillGrid}>
            {SKILLS.map(s => (
              <span key={s} className={styles.skillTag}>{s}</span>
            ))}
          </div>
        </section>

        {/* Hackathons */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>HACKATHONS</div>
          <div className={styles.hackGrid}>
            {[
              { name: 'ETHGlobal 2024',   result: 'WINNER',    detail: 'Best Privacy Hack (PrivBadge)' },
              { name: 'SIH 2024',         result: 'FINALIST',  detail: 'National Top 10 (WasteMatch)' },
              { name: 'HackMIT 2023',     result: 'RUNNER-UP', detail: 'Security Track (MOLE)' },
              { name: 'HTB CTF 2024',     result: 'TOP 5%',    detail: 'Web + Crypto categories' },
            ].map(h => (
              <div key={h.name} className={styles.hackCard}>
                <div className={styles.hackName}>{h.name}</div>
                <div className={styles.hackResult}>{h.result}</div>
                <div className={styles.hackDetail}>{h.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>CONTACT</div>
          <div className={styles.contactGrid}>
            <a className={styles.contactLink} href="mailto:sarang@protonmail.com">✉ sarang@protonmail.com</a>
            <a className={styles.contactLink} href="https://github.com/sarang" target="_blank" rel="noreferrer">⌥ github.com/sarang</a>
            <a className={styles.contactLink} href="https://linkedin.com/in/sarang" target="_blank" rel="noreferrer">⬡ linkedin.com/in/sarang</a>
            <a className={styles.contactLink} href="/resume.pdf" target="_blank" rel="noreferrer">↓ Download Resume</a>
          </div>
        </section>

      </div>
    </div>
  )
}
