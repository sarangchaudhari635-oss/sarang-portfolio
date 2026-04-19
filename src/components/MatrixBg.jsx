import { useEffect, useRef } from 'react'

export default function MatrixBg({ active }) {
  const canvasRef  = useRef(null)
  const rafRef     = useRef(null)
  const dropsRef   = useRef([])
  // Use a ref so the RAF loop always reads the latest value without restart
  const activeRef  = useRef(active)
  useEffect(() => { activeRef.current = active }, [active])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / 14)
      dropsRef.current = Array(cols).fill(1)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      if (!activeRef.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        rafRef.current = requestAnimationFrame(draw)
        return
      }

      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff88'
      ctx.font = '12px JetBrains Mono, monospace'

      dropsRef.current.forEach((y, i) => {
        const ch = String.fromCharCode(0x30a0 + Math.random() * 96)
        ctx.fillText(ch, i * 14, y * 14)
        if (y * 14 > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0
        }
        dropsRef.current[i]++
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, []) // single RAF loop — active toggled via ref

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        opacity: 0.045,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
