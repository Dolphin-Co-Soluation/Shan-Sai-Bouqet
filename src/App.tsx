import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FlowCarousel from './components/FlowCarousel'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="petal-container" aria-hidden="true"></div>
      <Header />
      <main>
        <Hero />
        <FlowCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
