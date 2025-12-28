import { useEffect, useRef } from 'react'
import './App.css'
import img1 from './image/Mainbackground.jpeg'
import img2 from './image/Mainbackground2.jpeg'
import img3 from './image/Mainbackground3.jpeg'

const items = [
  { src: img1, title: 'Elegant Blue Bouquet', desc: 'Hand-tied arrangement with soft blues and whites.' },
  { src: img2, title: 'Classic Wrap Bouquet', desc: 'Neat wrapping with premium ribbon and card.' },
  { src: img3, title: 'Festive Surprise', desc: 'A cheerful, decorative bouquet to brighten the day.' }
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

  // Cherry blossom petals effect
  useEffect(() => {
    const container = document.querySelector('.petal-container') as HTMLElement | null
    if (!container) return

    const petals: HTMLElement[] = []
    const count = 36
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span')
      petal.className = 'petal'
      const left = Math.random() * 100
      const size = 12 + Math.random() * 36 // px
      const duration = 8 + Math.random() * 12 // s
      const delay = -Math.random() * 10 // negative so some appear immediately
      const xOffset = -30 + Math.random() * 60 // end horizontal offset vw

      petal.style.left = `${left}%`
      petal.style.setProperty('--size', `${size}px`)
      petal.style.setProperty('--duration', `${duration}s`)
      petal.style.setProperty('--delay', `${delay}s`)
      petal.style.setProperty('--x', `${xOffset}vw`)

      container.appendChild(petal)
      // force reflow so animation picks up vars in some browsers
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      petal.offsetHeight
      petals.push(petal)
    }

    return () => {
      petals.forEach((p) => p.remove())
    }
  }, [])

  return (
    <div className="app">
      <div className="petal-container" aria-hidden="true"></div>

      <header className="site-header">
        <div className="container">
          <div className="brand">Shan Sai <span aria-hidden>🌸</span></div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#flow" className="nav-link">Works</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" style={{ backgroundImage: `url(${img1})` }}>
          <div className="hero-inner container">
            <h1>Shan Sai Floral Boutique</h1>
            <p className="lead">Discover exquisite bouquets crafted with passion. Explore our collection and find the perfect floral arrangement for every occasion.</p>
            <a className="cta" href="#flow">Browse Works</a>
          </div>
        </section>

        <section id="flow" className="flow-wrap">
          <div className="flow container" ref={flowRef} role="list" aria-label="Showcase of bouquets">
            {items.map((it, i) => (
              <article key={i} className="flow-card" role="listitem" tabIndex={0} aria-labelledby={`title-${i}`}>
                <div className="flow-media" style={{ backgroundImage: `url(${it.src})` }} aria-hidden />
                <div className="flow-body">
                  <h3 id={`title-${i}`}>{it.title}</h3>
                  <p>{it.desc}</p>
                  <div className="flow-actions">
                    <a className="card-cta" href="#contact">Enquire</a>
                    <a className="card-cta ghost" href="https://instagram.com/" target="_blank" rel="noreferrer">Share</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact container">
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

      <footer className="site-footer">© {new Date().getFullYear()} Shan Sai Floral Boutique — Where Flowers Speak</footer>
    </div>
  )
}
