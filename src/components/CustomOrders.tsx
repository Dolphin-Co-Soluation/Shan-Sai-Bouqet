export default function CustomOrders() {
  const customServices = [
    {
      icon: '✨',
      title: 'Personalized Design',
      desc: 'Create your unique floral arrangement tailored to your preferences, colors, and occasion.'
    },
    {
      icon: '🎨',
      title: 'Custom Color Palette',
      desc: 'Choose from vibrant, pastel, or monochrome themes to match your event perfectly.'
    },
    {
      icon: '💐',
      title: 'Premium Selection',
      desc: 'Hand-pick from our exclusive collection of rare and exotic flowers.'
    },
    {
      icon: '🎁',
      title: 'Special Packaging',
      desc: 'Luxurious gift wrapping and personalized message cards for every occasion.'
    },
    {
      icon: '📦',
      title: 'Express Delivery',
      desc: 'Same-day or next-day delivery available for all custom orders.'
    },
    {
      icon: '💝',
      title: 'Seasonal Specials',
      desc: 'Exclusive arrangements using seasonal blooms for the freshest bouquets.'
    }
  ]

  return (
    <section className="custom-orders">
      <div className="custom-header">
        <h2>Customized Orders</h2>
        <p>Design Your Perfect Bouquet</p>
      </div>

      <div className="custom-description">
        <p>
          We believe every occasion is unique, which is why we offer fully customized floral arrangements. 
          Work with our expert florists to bring your vision to life. From intimate gatherings to grand celebrations, 
          we create stunning arrangements that reflect your personal style.
        </p>
      </div>

      <div className="custom-grid">
        {customServices.map((service, idx) => (
          <div key={idx} className="custom-card">
            <div className="custom-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="custom-cta">
        <h3>Ready to Create Something Special?</h3>
        <p>Contact us to discuss your custom order and get a personalized quote</p>
        <a href="https://chat.whatsapp.com/KtKE5CdDlyT6JjMNQzsPyp?mode=ems_wa_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAO95UhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafcQnMT1LHPXxNligmD2To-SK4D_ysSLVLJIJPJg-ileCsXB5d3WZlvTQQFHw_aem_YuMD8dael5GbdMajaJig_w" target="_blank" rel="noreferrer" className="cta-button">
          Message on WhatsApp 💬
        </a>
      </div>
    </section>
  )
}
