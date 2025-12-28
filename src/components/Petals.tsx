import { useEffect } from 'react'

export default function Petals({ enabled = true }: { enabled?: boolean }) {
  useEffect(() => {
    if (!enabled) return
    // Respect user motion preferences
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const container = document.querySelector('.petal-container') as HTMLElement
    if (!container) return

    const petals: HTMLElement[] = []
    const count = 35 // More visible petals
    
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span')
      petal.className = 'petal'
      
      const left = Math.random() * 100
      const size = 8 + Math.random() * 28 // 8px - 36px
      const duration = 10 + Math.random() * 12 // 10s - 22s for slower, graceful fall
      const delay = Math.random() * -15 // Start at various points in animation cycle
      const xOffset = -30 + Math.random() * 60

      petal.style.left = `${left}%`
      petal.style.setProperty('--size', `${size}px`)
      petal.style.setProperty('--duration', `${duration}s`)
      petal.style.setProperty('--delay', `${delay}s`)
      petal.style.setProperty('--x', `${xOffset}vw`)

      container.appendChild(petal)
      // Force reflow to trigger animation
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      petal.offsetHeight
      petals.push(petal)
    }

    return () => {
      petals.forEach((p) => {
        p.style.animation = 'none'
        p.remove()
      })
    }
  }, [enabled])

  return null
}
