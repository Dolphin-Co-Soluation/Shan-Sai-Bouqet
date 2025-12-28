interface MapProps {
  latitude?: number
  longitude?: number
}

export default function MapLocator({ 
  latitude = 7.2906, 
  longitude = 81.8193
}: MapProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae519a8c00001a1%3A0x400bd8f8d93d340!2sKalmunai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890`

  return (
    <section id="map" className="map-section">
      <h2>Find Us</h2>
      <p>Visit our boutique or get directions to our location</p>
      
      <div className="map-container">
        <iframe
          title="Shahan Sai Floral Boutique Location"
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-iframe"
        />
      </div>

      <div className="location-info">
        <div className="location-card">
          <h3>📍 Our Address</h3>
          <p>Shahan Sai Floral Boutique<br />Kalmunai, Eastern Province<br />Sri Lanka</p>
        </div>
        <div className="location-card">
          <h3>📞 Contact</h3>
          <p>WhatsApp: +94 78 423 4866</p>
        </div>
        <div className="location-card social-card">
          <h3>Follow Us</h3>
          <p>Connect with us on social media</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/shahan_sai_bouquet?igsh=cjViMmpkZ2p4dWNh" target="_blank" rel="noreferrer" className="social-icon instagram" title="Follow on Instagram">
              <span>📸</span>
            </a>
            <a href="https://chat.whatsapp.com/KtKE5CdDlyT6JjMNQzsPyp?mode=ems_wa_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAO95UhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafcQnMT1LHPXxNligmD2To-SK4D_ysSLVLJIJPJg-ileCsXB5d3WZlvTQQFHw_aem_YuMD8dael5GbdMajaJig_w" target="_blank" rel="noreferrer" className="social-icon instagram" title="Join our Community">
              <span>💬</span>
            </a>
            <a href="https://www.facebook.com/share/1BymGgzybf/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon instagram" title="Follow on Facebook">
              <span>👍</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
