export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Shan Sai <span aria-hidden>🌸</span></div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#flow" className="nav-link">Our Bouquets</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}
