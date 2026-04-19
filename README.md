# ⬡ Sarang Cyber Command Center

A cybersecurity-themed interactive developer portfolio built with React + Vite.
Simulates a Kali Linux terminal environment where recruiters and visitors explore
your work using real shell and penetration-testing commands.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output → dist/
```

Deploy the `dist/` folder to:
- **Vercel** — drag & drop or `vercel --prod`
- **Netlify** — drag & drop `dist/`
- **GitHub Pages** — push `dist/` to `gh-pages` branch
- **Any static host** — serve `dist/` as a static site

---

## 📁 Project Structure

```
src/
├── components/
│   ├── BootScreen.jsx      Boot animation sequence
│   ├── Terminal.jsx        Core terminal + command parser
│   ├── SidePanel.jsx       Right command reference panel
│   ├── TopBanner.jsx       Header with system status
│   ├── LogPanel.jsx        Live log feed (bottom)
│   ├── GuiModal.jsx        Visual portfolio overlay
│   ├── MatrixBg.jsx        Matrix rain canvas background
│   └── OutputLine.jsx      Single terminal output line
├── data/
│   ├── commands.js         All command outputs + pentest tool simulations
│   └── filesystem.js       Virtual Linux filesystem + file contents
├── App.jsx                 Root component
├── App.module.css
├── index.css               Global variables + reset
└── main.jsx                React entry point
```

---

## ✏️ Customisation

### Personal Info
Edit `src/data/commands.js`:
- `COMMANDS.whoami` — your name, role, location
- `COMMANDS.skills` — skill bars and lists
- `COMMANDS.projects` — project index
- `COMMANDS.hackathons` — hackathon wins
- `COMMANDS.contact` — your real email/GitHub/LinkedIn

### Project Files
Edit `src/data/filesystem.js`:
- `FILES['/home/sarang/projects/wastematch.txt']` etc. — detailed project pages shown with `cat`

### Visual GUI Modal
Edit `src/components/GuiModal.jsx`:
- `PROJECTS` array — cards with name, stack, desc, award
- `SKILLS` array — skill tags
- Contact links

### Resume
Place your PDF at `public/resume.pdf` — the `resume` command will link to it.

### Pentest Tool Outputs
Edit the `NMAP`, `WHOIS`, `DIRB`, `HYDRA`, `SQLMAP` functions in `src/data/commands.js`.

---

## 🖥️ Available Commands

| Command | Description |
|---|---|
| `help` | Show all commands |
| `ls` | List directory |
| `cd <dir>` | Change directory |
| `cat <file>` | Read file |
| `pwd` | Print working dir |
| `clear` / `Ctrl+L` | Clear terminal |
| `whoami` | Identity record |
| `skills` | Skill matrix |
| `projects` | Projects list |
| `hackathons` | Hackathon history |
| `contact` | Links & email |
| `resume` | Resume download link |
| `gui` | Visual portfolio mode |
| `nmap sarang.dev` | Network scan simulation |
| `whois sarang.dev` | WHOIS lookup |
| `dirb sarang.dev` | Directory scan |
| `sqlmap sarang.dev` | DB enumeration |
| `hydra sarang.dev` | Brute-force (always denied) |
| `netstat` | Active connections |
| `sudo hire-sarang` | Easter egg → GUI |
| `coffee` | ☕ |
| `hack` | Access denied |
| `matrix` | Toggle matrix rain |

---

## 🎨 Tech Stack

- **React 18** + **Vite 5**
- **CSS Modules** (zero runtime CSS-in-JS)
- **JetBrains Mono** + **Share Tech Mono** fonts
- No external UI libraries — pure CSS

---

## 📄 License

MIT — free to use, modify, and deploy.
