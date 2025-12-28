export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        © {new Date().getFullYear()} Shahan Sai Floral Boutique — Where Flowers Speak
      </div>
      <div className="footer-credit">
        Website created by{' '}
        <a 
          href="https://dolphincv.netlify.app/" 
          target="_blank" 
          rel="noreferrer"
          className="portfolio-link"
        >
          Danussuthan
        </a>
      </div>
    </footer>
  )
}
