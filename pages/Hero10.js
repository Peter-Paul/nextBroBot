import React from 'react'
import Image from 'next/image'
import LOGO from '../public/Logo.PNG'
const Hero10 = () => {
  return (
   <>
   <section id="broAcademy" >
           
   <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
   <div className=" lg:mt-0 lg:col-span-5 lg:flex">
   <Image src={LOGO} 
   classNameName='w-70'
   
   alt="Logo" />
</div> 
  
      <div className=" place-self-center lg:col-span-7">
          
         <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">Bro Signals</h1>
         <p className="max-w-2xl mb-6 mt-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Navigate the dynamic world of cryptocurrency with Bro Signals – the ultimate signal bot that transforms volatility into opportunity. Designed for both novice traders and seasoned investors, Bro Signals harnesses the power of advanced analytics to provide real-time trading alerts, empowering you to make informed decisions with confidence.
          </p>
      </div>
           
</div>
</section>
   </>
  )
}

export default Hero10
