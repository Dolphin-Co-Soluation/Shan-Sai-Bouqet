import { useEffect, useRef } from 'react'
import './App.css'
import d1 from './image/display/1.jpeg'
import d2 from './image/display/2.jpeg'
import d3 from './image/display/3.jpeg'
import Petals from './components/Petals'

const items = [
  { src: d1, title: 'Elegant Blue Bouquet', desc: 'Hand-tied arrangement with soft blues and whites.' },
  { src: d2, title: 'Classic Wrap Bouquet', desc: 'Neat wrapping with premium ribbon and card.' },
  { src: d3, title: 'Festive Surprise', desc: 'A cheerful, decorative bouquet to brighten the day.' }
]

export default function App() {
  const flowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = flowRef.current
    if (!el) return

    // Drag to scroll
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

    // Intersection observer for reveal
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

      <header className="site-header">
        <div className="container">
          <div className="brand">Shahan Sai <span aria-hidden>🌸</span></div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#flow" className="nav-link">Works</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" style={{ backgroundImage: `url(${d1})` }}>
          <div className="hero-inner container">
            <h1>Shahan Sai Floral Boutique</h1>
            <p className="lead">Discover exquisite bouquets crafted with passion. Explore our collection and find the perfect floral arrangement for every occasion.</p>
            <a className="cta" href="#flow">Browse Works</a>
          </div>
        </section>

        <section id="flow" className="flow-wrap">
          <div className="flow" ref={flowRef} role="list" aria-label="Showcase of bouquets">
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

        <section id="contact" className="contact">
          <h2>Contact & Social</h2>
          <p>Phone: (555) 123-4567 • Email: hello@shansai.example</p>

          <div className="socials-inline">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <input type="text" placeholder="Your name" aria-label="Your name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <textarea placeholder="Message" aria-label="Message" rows={4} />
            <button type="submit" className="cta">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Shahan Sai Floral Boutique — Where Flowers Speak</footer>
    </div>
  )
}
