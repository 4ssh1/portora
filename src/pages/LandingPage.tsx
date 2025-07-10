import Hero from '@/components/Landing/Hero'
import Header from '../components/Landing/Header'
import Marquee from '@/components/Landing/Marquee'
import Features from '@/components/Landing/Features'
import HowItWorks from '@/components/Landing/HowItWorks'
import Footer  from '@/components/Footer'

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default LandingPage
