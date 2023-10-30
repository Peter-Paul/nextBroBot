import React from 'react'
import Image from 'next/image'
import GIF from '../public/GIF.gif'
const Hero = () => {
  return (
    <div>
   <section className="">
       <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">BRO Bot: Your Ultimate Trading Ally</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Harness the unmatched power of the BRO Bot to dominate the trading landscape:</p>
           
          </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
           <Image src={GIF} 
           classNameName='w-90'
           
           alt="Logo" />
           </div>                
         </div>
     </section>
    </div>
  )
}

export default Hero
