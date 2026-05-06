# ⬡ Sarang Cyber Command Center

> A cybersecurity-themed, interactive developer portfolio that simulates a **Kali Linux terminal** environment.
> Recruiters and visitors explore your work through real shell commands and simulated penetration-testing tools — all running in the browser.

<div align="center">

**React 18** · **Vite 7** · **CSS Modules** · **Zero UI Libraries**

[![Deploy to Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](#-deployment)
[![Deploy to Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](#-deployment)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)](#-deployment)

</div>

---

## ✨ Highlights

| Feature | Description |
|---|---|
| 🖥️ **Boot Sequence** | Animated boot screen mimicking a Kali Linux startup |
| ⌨️ **Interactive Terminal** | Command parser with history (↑↓), tab-completion, and filesystem navigation |
| 🛡️ **Pentest Simulations** | Fake `nmap`, `whois`, `dirb`, `sqlmap`, `hydra` outputs tailored to your profile |
| 🎨 **Visual GUI Mode** | Full graphical portfolio overlay (`gui` command) with projects, skills, certs & contact |
| 🌧️ **Matrix Rain** | Toggleable Matrix-style background canvas animation |
| 📄 **Resume Download** | One-command resume delivery (`resume`) |
| 🥚 **Easter Eggs** | `sudo hire-sarang`, `coffee`, `hack`, `matrix` — hidden surprises |
| 📂 **Virtual Filesystem** | `ls`, `cd`, `cat`, `pwd` — browse a simulated Linux directory tree |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/sarangchaudhari635-oss/sarang-portfolio.git
cd sarang-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
# → http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build        # Output → dist/
npm run preview      # Preview the production build locally
```

---

## 📁 Project Structure

```
sarang-portfolio/
├── public/
│   ├── favicon.svg              Hex-logo favicon
│   └── resume.pdf               Downloadable resume
├── src/
│   ├── components/
│   │   ├── BootScreen.jsx       Animated boot sequence
│   │   ├── BootScreen.module.css
│   │   ├── Terminal.jsx         Core terminal emulator + command router
│   │   ├── Terminal.module.css
│   │   ├── GuiModal.jsx         Visual portfolio overlay (projects, skills, certs)
│   │   ├── GuiModal.module.css
│   │   ├── SidePanel.jsx        Right-side command reference panel
│   │   ├── SidePanel.module.css
│   │   ├── TopBanner.jsx        Header bar with system status indicators
│   │   ├── TopBanner.module.css
│   │   ├── LogPanel.jsx         Live scrolling log feed (bottom)
│   │   ├── LogPanel.module.css
│   │   ├── MatrixBg.jsx         Matrix rain canvas background
│   │   ├── OutputLine.jsx       Single styled terminal output line
│   │   └── OutputLine.module.css
│   ├── data/
│   │   ├── commands.js          All command outputs + pentest tool simulations
│   │   └── filesystem.js        Virtual Linux filesystem tree + file contents
│   ├── App.jsx                  Root component (state orchestration)
│   ├── App.module.css
│   ├── index.css                Global CSS variables, reset, fonts
│   └── main.jsx                 React DOM entry point
├── index.html                   HTML shell + Google Fonts (JetBrains Mono, Share Tech Mono)
├── vite.config.js               Vite config (React plugin, base path)
├── netlify.toml                 Netlify build + SPA redirect rules
├── vercel.json                  Vercel build configuration
└── package.json                 Scripts, dependencies, metadata
```

---

## 🖥️ Available Commands

### Filesystem

| Command | Description |
|---|---|
| `ls` | List current directory contents |
| `cd <dir>` | Change directory |
| `pwd` | Print working directory |
| `cat <file>` | Read file contents |
| `clear` / `Ctrl+L` | Clear the terminal |

### Portfolio

| Command | Description |
|---|---|
| `whoami` | Identity record — name, role, college, ambassador, status |
| `skills` | Technical skills matrix with progress bars |
| `projects` | Projects index (8 projects) |
| `hackathons` | Hackathon history (10 events) and achievements |
| `certs` | Licenses & certifications |
| `contact` | GitHub, LinkedIn & social links |
| `resume` | Initiate secure resume download |
| `gui` | Open visual portfolio overlay |

### Pentest Simulations

| Command | Description |
|---|---|
| `nmap sarang.dev` | Network reconnaissance — open ports & services |
| `whois sarang.dev` | WHOIS domain lookup |
| `dirb sarang.dev` | Directory brute-force scan |
| `sqlmap sarang.dev` | Database enumeration |
| `hydra sarang.dev` | Brute-force login attempt (always denied) |
| `netstat` | Show active portfolio connections |

### Easter Eggs

| Command | Description |
|---|---|
| `sudo hire-sarang` | 😉 Opens the GUI modal |
| `coffee` | ☕ Brew a virtual coffee |
| `hack` | 🚨 ACCESS DENIED — IP logged |
| `matrix` | Toggle Matrix rain background |

### Shortcuts

| Shortcut | Action |
|---|---|
| `↑` / `↓` | Navigate command history |
| `Tab` | Autocomplete commands |
| `Ctrl+L` | Clear terminal |

---

## 🏆 Hackathon Track Record

| # | Event | Venue | Date | Result |
|---|---|---|---|---|
| 1 | **Mumbai Hacks 2025** | NESCO, Mumbai | Dec 2025 | Participated |
| 2 | **GDG Build & Grow AI Hackathon** | NMIMS MPSTME, Mumbai | Sep 2025 | Participated |
| 3 | **CodeLites 2.0** | PDEA College of Engineering, Pune | Feb 2026 | Participated |
| 4 | **AIKTC Hackatoon** | Kalsekar Technical Campus, New Panvel | — | Participated |
| 5 | **Hardware Hackathon Unplugged 3.0** | DJ Sanghvi College of Engg. | — | Round 2 Qualified |
| 6 | **SUSTAINX 2026** | S.I.E.S GST, Nerul | 2026 | 🥈 1st Runner-Up |
| 7 | **PAN-IIT CTF 2025** | Online (Redfox Cybersecurity) | 2025 | Competed |
| 8 | **Anjuman Islamia Hackathon** | AIKTC, Kalsekar | — | Participated |
| 9 | **FlutterFlow Workshop** | FFDG Mumbai | — | Attended |
| 10 | **Cyber Security & Blockchain Workshop** | Sanjivani University | — | Attended |

## 🚀 Roles & Ambassadorships

| Role | Organisation | Details |
|---|---|---|
| **FlutterFlow Student Ambassador** | FlutterFlow × SIGCE | Official campus representative — hosting events, speaking at clubs, and promoting FlutterFlow within the college community |

---

## ✏️ Customisation Guide

### 1. Personal Info & Commands

Edit **`src/data/commands.js`**:

| Export | What to change |
|---|---|
| `COMMANDS.whoami` | Name, role, college, location, status |
| `COMMANDS.skills` | Skill categories and progress bars |
| `COMMANDS.projects` | Project index listing |
| `COMMANDS.hackathons` | Hackathon entries and results |
| `COMMANDS.certs` | Certifications list |
| `COMMANDS.contact` | GitHub, LinkedIn, email links |
| `NMAP`, `WHOIS`, `DIRB`, `SQLMAP`, `HYDRA` | Simulated pentest tool outputs |

### 2. Virtual Filesystem

Edit **`src/data/filesystem.js`**:
- Directory structure (`DIRS`) — folders accessible via `ls` and `cd`
- File contents (`FILES`) — detailed project write-ups readable via `cat`

```
Example: FILES['/home/sarang/projects/factline.txt']
```

### 3. Visual GUI Modal

Edit **`src/components/GuiModal.jsx`**:
- `PROJECTS` array — project cards with name, tech stack, description, and awards
- `SKILLS` array — skill tag chips
- `CERTS` array — certification entries
- Contact links section at the bottom

### 4. Resume

Replace **`public/resume.pdf`** with your own PDF. The `resume` command links to this file automatically.

### 5. Fonts

The app uses [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) and [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) loaded via Google Fonts in `index.html`.

### 6. Base Path

If deploying to a subpath (e.g. GitHub Pages), update `base` in **`vite.config.js`**:

```js
export default defineConfig({
  base: '/your-repo-name/',
})
```

For root-level deployment (Vercel/Netlify), set `base: '/'`.

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 |
| **Bundler** | Vite 7 |
| **Styling** | CSS Modules (zero runtime CSS-in-JS) |
| **Fonts** | JetBrains Mono · Share Tech Mono (Google Fonts) |
| **UI Libraries** | None — pure HTML + CSS |
| **Deployment** | Netlify / Vercel / GitHub Pages |

---

## 🌐 Deployment

### Netlify

The repo includes a `netlify.toml` with SPA redirect rules:

```bash
# Push to a connected Git repo — auto-deploys
# Or drag & drop the dist/ folder at netlify.com
```

### Vercel

The repo includes a `vercel.json`:

```bash
# Link the repo on vercel.com — auto-deploys
# Or use the CLI:
npx vercel --prod
```

### GitHub Pages

```bash
# Build & deploy to the gh-pages branch:
npm run deploy
```

> **Note:** Ensure `base` in `vite.config.js` matches your repo name (e.g. `/sarang-portfolio/`).

### Any Static Host

Serve the `dist/` folder as a static site. Ensure all routes fall back to `index.html` for SPA routing.

---

## 🧩 Architecture Overview

```
┌──────────────────────────────────────────────────────────┐
│                     App.jsx (Root)                        │
│  State: booted, matrixActive, guiOpen                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────┐   BootScreen.jsx                        │
│  │  BOOT SEQ   │   Renders boot animation, then unmounts │
│  └──────┬──────┘                                         │
│         │ onDone                                         │
│         ▼                                                │
│  ┌──────────────────────────────────────────────┐        │
│  │  TopBanner    │ System status header          │        │
│  ├───────────────┼──────────────────────────────┤        │
│  │  Terminal     │ SidePanel                     │        │
│  │  (commands.js │ (clickable command shortcuts) │        │
│  │  filesystem.js│                               │        │
│  ├───────────────┴──────────────────────────────┤        │
│  │  LogPanel     │ Live scrolling log feed       │        │
│  └──────────────────────────────────────────────┘        │
│                                                          │
│  ┌──────────────┐                                        │
│  │  GuiModal    │  Fullscreen visual portfolio overlay    │
│  └──────────────┘  (projects, skills, certs, contact)    │
│                                                          │
│  ┌──────────────┐                                        │
│  │  MatrixBg    │  Canvas-based Matrix rain background    │
│  └──────────────┘                                        │
└──────────────────────────────────────────────────────────┘
```

---

## 📦 Scripts

| Script | Command | Description |
|---|---|---|
| Dev | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Production build → `dist/` |
| Preview | `npm run preview` | Preview the production build |
| Deploy | `npm run deploy` | Build + deploy to GitHub Pages (`gh-pages`) |

---

## 📄 License

**MIT** — free to use, modify, and deploy.

---

<div align="center">

**Built with ☕ and curiosity by [Sarang Chaudhari](https://github.com/sarangchaudhari635-oss)**

</div>
