import { useEffect, useRef } from 'react'
import img1 from '../image/Mainbackground.jpeg'
import img2 from '../image/Mainbackground2.jpeg'
import img3 from '../image/Mainbackground3.jpeg'

const items = [
  { src: img1, title: 'Elegant Blue Bouquet', desc: 'Hand-tied arrangement with soft blues and whites.' },
  { src: img2, title: 'Classic Wrap Bouquet', desc: 'Neat wrapping with premium ribbon and card.' },
  { src: img3, title: 'Festive Surprise', desc: 'A cheerful, decorative bouquet to brighten the day.' }
]

export default function FlowCarousel() {
  const flowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = flowRef.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown = true
      el.classList.add('dragging')
      startX = 'touches' in e ? e.touches[0].pageX : (e as MouseEvent).pageX
      scrollLeft = el.scrollLeft
    }
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return
      const x = 'touches' in e ? e.touches[0].pageX : (e as MouseEvent).pageX
      const walk = (startX - x)
      el.scrollLeft = scrollLeft + walk
    }
    const onUp = () => { isDown = false; el.classList.remove('dragging') }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('touchstart', onDown, { passive: true })
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)

    const cards = Array.from(el.querySelectorAll('.flow-card'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        if (entry.isIntersecting) target.classList.add('in-view')
      })
    }, { root: el, threshold: 0.45 })

    cards.forEach((c) => io.observe(c))

    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('touchstart', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
      io.disconnect()
    }
  }, [])

  return (
    <section id="flow" className="flow-wrap">
      <div className="flow container" ref={flowRef} role="list" aria-label="Showcase of bouquets">
        {items.map((it, i) => (
          <article key={i} className="flow-card" role="listitem" tabIndex={0} aria-labelledby={`title-${i}`}>
            <div className="flow-media" style={{ backgroundImage: `url(${it.src})` }} aria-hidden />
            <div className="flow-body">
              <h3 id={`title-${i}`}>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
