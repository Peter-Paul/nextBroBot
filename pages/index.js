import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '../LandingPage/Hero'
import Card from '../LandingPage/Card'
import Hero1 from '../LandingPage/Hero1'
import Hero2 from '../LandingPage/Hero2'
import Hero4 from '../LandingPage/Hero4'
import Hero5 from '../LandingPage/Hero5'
import Steps from '../LandingPage/Steps'
import Hero3 from '../LandingPage/Hero3'
import Hero6 from '../LandingPage/Hero6'
import Hero8 from '../LandingPage/Hero8'
import Hero9 from '../LandingPage/Hero9'
import Hero7 from '../LandingPage/Hero7'
import PreLoader from '@/components/PreLoader'
import Footer from '@/components/Footer'
import Hero10 from '../LandingPage/Hero10'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Navbar />
  <div className="video-container">
    <video autoPlay muted loop>
    <source src="https://i.imgur.com/pjL1BDp.mp4" type="video/mp4" />
    </video>
  </div>

  
  <Hero />
  <Card />
  <Hero10 />
  <Hero8 />
  <Hero9 />
  <Footer />


 
    


  </>
  )
}
