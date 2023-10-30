import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from './Hero'
import Card from './Card'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero4 from './Hero4'
import Hero5 from './Hero5'
import Steps from './Steps'
import Hero3 from './Hero3'
import Hero6 from './Hero6'
import Hero8 from './Hero8'
import Hero9 from './Hero9'
import Hero7 from './Hero7'
import PreLoader from '@/components/PreLoader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Navbar />

  
  <Hero />
  <Card />
  <Hero1 />
  <Hero6 />

  <Hero4 />
  <Hero5 />
  <Steps />
  <Hero7 />
  <Hero8 />
  <Hero9 />

 
    


  </>
  )
}
