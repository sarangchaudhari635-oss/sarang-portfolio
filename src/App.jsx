import { useState, useCallback } from 'react'
import MatrixBg    from './components/MatrixBg'
import BootScreen  from './components/BootScreen'
import TopBanner   from './components/TopBanner'
import Terminal    from './components/Terminal'
import SidePanel   from './components/SidePanel'
import LogPanel    from './components/LogPanel'
import GuiModal    from './components/GuiModal'
import styles      from './App.module.css'

export default function App() {
  const [booted,       setBooted]       = useState(false)
  const [matrixActive, setMatrixActive] = useState(true)
  const [guiOpen,      setGuiOpen]      = useState(false)

  const handleDone    = useCallback(() => setBooted(true), [])
  const openGui       = useCallback(() => setGuiOpen(true), [])
  const closeGui      = useCallback(() => setGuiOpen(false), [])
  const toggleMatrix  = useCallback(() => setMatrixActive(v => !v), [])

  // SidePanel calls window.__termRun which Terminal sets up
  const handleSideRun = useCallback((cmd) => {
    if (window.__termRun) window.__termRun(cmd)
  }, [])

  return (
    <>
      <MatrixBg active={matrixActive} />

      {/* Scanlines */}
      <div className={styles.scanlines} aria-hidden="true" />

      {!booted && <BootScreen onDone={handleDone} />}

      {booted && (
        <div className={styles.app}>
          <TopBanner />

          <div className={styles.main}>
            <Terminal
              onGuiOpen={openGui}
              onMatrixToggle={toggleMatrix}
            />
            <SidePanel onRun={handleSideRun} />
          </div>

          <LogPanel />
        </div>
      )}

      <GuiModal open={guiOpen} onClose={closeGui} />
    </>
  )
}
