export default function Contact() {
  return (
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
  )
}
