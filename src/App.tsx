import { useEffect, useRef } from 'react'
import './App.css'
import d1 from './image/display/1.jpeg'
import d2 from './image/display/2.jpeg'
import d3 from './image/display/3.jpeg'
import Petals from './components/Petals'
import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'

const bouquetItems = [
  { src: d1, title: 'Elegant Blue Bouquet', desc: 'Hand-tied arrangement with soft blues and whites.' },
  { src: d2, title: 'Classic Wrap Bouquet', desc: 'Neat wrapping with premium ribbon and card.' },
  { src: d3, title: 'Festive Surprise', desc: 'A cheerful, decorative bouquet to brighten the day.' }
]

export default function App() {
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
        if (entry.isIntersecting) {
          target.classList.add('in-view')
        }
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
    <div className="app">
      <div className="petal-container" aria-hidden="true"></div>
      <Petals enabled />

      <Header />

      <main>
        <Hero backgroundImage={d1} />
        <Carousel items={bouquetItems} flowRef={flowRef} />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
