interface BouquetItem {
  src: string
  title: string
  desc: string
}

interface CarouselProps {
  items: BouquetItem[]
  flowRef: React.RefObject<HTMLDivElement | null>
}

export default function Carousel({ items, flowRef }: CarouselProps) {
  return (
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
  )
}
