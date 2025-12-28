interface HeroProps {
  backgroundImage: string
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-inner container">
        <h1>Shahan Sai Floral Boutique</h1>
        <p className="lead">Discover exquisite bouquets crafted with passion. Explore our collection and find the perfect floral arrangement for every occasion.</p>
      </div>
    </section>
  )
}
