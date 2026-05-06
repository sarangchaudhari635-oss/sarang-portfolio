import styles from './GuiModal.module.css'

const PROJECTS = [
  {
    name: 'FACTLINE',
    stack: 'Node.js · Express · PostgreSQL · React · NLP · Perplexity API',
    desc: 'Real-time misinformation detection system that analyzes user-submitted claims, validates them using AI and external sources, and identifies trending false narratives through semantic clustering.',
    award: null,
  },
  {
    name: 'NodeSphere',
    stack: 'React · TypeScript · Vite · React Flow · LocalStorage · AI',
    desc: 'AI-powered visual thinking and mind-mapping platform that transforms a single idea into a structured network of insights. Features interactive node-based canvas and local-first knowledge organization.',
    award: null,
  },
  {
    name: 'ShadowHunter',
    stack: 'React · GSAP · Node.js · Express · Google Cloud · Opal AI',
    desc: 'AI-powered email security tool that maps a user’s digital footprint by discovering websites linked to their email, detects breached platforms, and classifies them as safe or unsafe.',
    award: null,
  },
  {
    name: 'MOLE',
    stack: 'React · Next.js · Supabase · PostgreSQL · Tailwind CSS',
    desc: 'B2B circular economy platform that enables industries to exchange industrial waste as reusable resources. Features structured material matching, deal-flow tracking, and waste forecasting.',
    award: 'Techvision 1st Runner Up',
  },
  {
    name: 'FundingScout',
    stack: 'Python · FastAPI · Lyzr · Qdrant · SerpAPI · BeautifulSoup',
    desc: 'AI-powered funding intelligence agent that autonomously scans the web for startup funding data, extracts structured insights from unstructured articles, and maintains a semantic memory.',
    award: null,
  },
  {
    name: 'PrivBadge',
    stack: 'StarkNet · Cairo · Pedersen Hash · ArgentX',
    desc: 'On-chain credential system on StarkNet L2. Uses Pedersen Hash commitments for privacy-preserving credential issuance. NFT badges for verifiable on-chain achievements.',
    award: 'Testnet Live — StarkNet Sepolia',
  },
  {
    name: 'SYGNIX',
    stack: 'ESP32 · KiCad PCB · FlutterFlow · Dart',
    desc: 'Custom-designed PCB (KiCad) with multi-sensor integration on ESP32. Real-time cloud sync visualised via a FlutterFlow mobile app. Team lead at Hardware Hackathon Unplugged 3.0.',
    award: 'Round 2 Qualified — Unplugged 3.0',
  },
  {
    name: 'REFORMX',
    stack: 'Python · IoT Sensors · ML',
    desc: 'Smart waste management combining IoT smart bins with anomaly detection. AI-optimised waste collection routing with real-time monitoring. Presented at SUSTAINX 2026.',
    award: '1st Runner-Up — SUSTAINX 2026 🥈',
  },
]

const SKILLS = [
  // Domains
  'IoT', 'Blockchain', 'Cybersecurity', 'PCB Design',
  // Hardware
  'ESP32', 'KiCad', 'Multi-Sensor Integration',
  // Blockchain / Web3
  'StarkNet', 'Cairo', 'Pedersen Hash', 'ZK Commitments', 'NFTs (ERC-721)', 'ArgentX', 'Braavos',
  // Development
  'FlutterFlow', 'Dart', 'Python', 'JavaScript', 'React', 'Node.js', 'Web3.js',
  // Security & Tools
  'CTF Competitions', 'Network Analysis', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap',
  // Other
  'Git', 'GitHub', 'Docker', 'Linux', 'PostgreSQL', 'MongoDB',
]

const CERTS = [
  { name: 'FlutterFlow Student Ambassador', issuer: 'FlutterFlow — SIGCE College', date: '2026' },
  { name: 'Introduction to IoT & Digital Transformation', issuer: 'Cisco Networking Academy', date: 'Sep 2025' },
  { name: 'Cyber Security Job Simulation', issuer: 'Deloitte Australia (Forage)', date: 'Dec 2025' },
  { name: 'Quantitative Research Job Simulation', issuer: 'J.P. Morgan (Forage)', date: 'Dec 2025' },
  { name: 'Echelon 2k26 — ISEA Stay Safe Online', issuer: 'NIT Surat', date: 'Jan 2026' },
  { name: 'Open Source Connect', issuer: 'OSCG CO LTD', date: 'Feb 2026' },
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
              <div className={styles.avatar}>SC</div>
              <div>
                <div className={styles.name}>Sarang Chaudhari</div>
                <div className={styles.role}>B.Tech — IoT, Blockchain &amp; Cybersecurity</div>
                <div className={styles.location}>📍 Mumbai, Maharashtra, India</div>
                <div className={styles.location}>🎓 Smt Indira Gandhi College Of Engineering</div>
                <div className={styles.location}>🚀 FlutterFlow Student Ambassador — SIGCE</div>
              </div>
            </div>
            <p className={styles.bio}>
              Passionate B.Tech student specialising in IoT, Blockchain, and Cybersecurity.
              I build end-to-end systems — from custom PCB hardware (KiCad + ESP32) to
              on-chain ZK credential protocols on StarkNet. FlutterFlow Student Ambassador
              at SIGCE, active CTF participant, hackathon veteran, and open-source
              contributor. Open to internships, research roles, and exciting collaborations.
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
          <div className={styles.sectionTitle}>HACKATHONS &amp; EVENTS</div>
          <div className={styles.hackGrid}>
            {[
              { name: 'SUSTAINX 2026', result: '1ST RUNNER-UP', detail: 'Poster Presentation — REFORMX (S.I.E.S GST)' },
              { name: 'Unplugged 3.0', result: 'ROUND 2', detail: 'Hardware Hackathon — SYGNIX (DJ Sanghvi)' },
              { name: 'AIKTC Hackatoon', result: 'PARTICIPATED', detail: 'National-level hackathon — AI & Innovation (Kalsekar)' },
              { name: 'CodeLites 2.0', result: 'PARTICIPATED', detail: '24hr hackathon — Agentic AI, Web3 (PDEA Pune)' },
              { name: 'GDG Build & Grow', result: 'PARTICIPATED', detail: 'Agentic AI w/ Gemini — GDG Cloud × NMIMS MPSTME' },
              { name: 'Mumbai Hacks 2025', result: 'PARTICIPATED', detail: 'India\'s largest Agentic AI hackathon (NESCO, 3500+)' },
              { name: 'PAN-IIT CTF 2025', result: 'COMPETED', detail: 'Redfox Cybersecurity CTF' },
              { name: 'Anjuman Islamia Hackathon', result: 'PARTICIPATED', detail: 'Offline hardware hackathon' },
              { name: 'FlutterFlow Workshop', result: 'ATTENDED', detail: 'Mobile dev — FFDG Mumbai' },
              { name: 'Cyber+Blockchain Workshop', result: 'ATTENDED', detail: 'Sanjivani University' },
            ].map(h => (
              <div key={h.name} className={styles.hackCard}>
                <div className={styles.hackName}>{h.name}</div>
                <div className={styles.hackResult}>{h.result}</div>
                <div className={styles.hackDetail}>{h.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>CERTIFICATIONS</div>
          <div className={styles.hackGrid}>
            {CERTS.map(c => (
              <div key={c.name} className={styles.hackCard}>
                <div className={styles.hackName}>{c.name}</div>
                <div className={styles.hackResult}>{c.date}</div>
                <div className={styles.hackDetail}>{c.issuer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>CONTACT</div>
          <div className={styles.contactGrid}>
            <a className={styles.contactLink} href="https://github.com/sarangchaudhari635-oss" target="_blank" rel="noreferrer">⌥ github.com/sarangchaudhari635-oss</a>
            <a className={styles.contactLink} href="https://linkedin.com/in/sarang-chaudhari-b10942381" target="_blank" rel="noreferrer">⬡ linkedin.com/in/sarang-chaudhari-b10942381</a>
            <a className={styles.contactLink} href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">↓ Download Resume</a>
          </div>
        </section>

      </div>
    </div>
  )
}
