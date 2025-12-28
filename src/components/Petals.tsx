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
    const count = 40 // Visible petals
    
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span')
      petal.className = 'petal'
      
      const left = Math.random() * 100
      const size = 10 + Math.random() * 25 // 10px - 35px
      const duration = 12 + Math.random() * 10 // 12s - 22s
      const delay = Math.random() * -20 // Start at various points
      const xOffset = -40 + Math.random() * 80

      petal.style.left = `${left}%`
      petal.style.top = '-50px'
      petal.style.setProperty('--size', `${size}px`)
      petal.style.setProperty('--duration', `${duration}s`)
      petal.style.setProperty('--delay', `${delay}s`)
      petal.style.setProperty('--x', `${xOffset}px`)

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

