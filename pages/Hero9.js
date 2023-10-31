import React from 'react'
import Image from 'next/image'
import LOGO from '../public/Logo.PNG'
const Hero9 = () => {
  return (
   <>
    <div>
    <section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">Trade Like Never Before</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Dive into the world of BRO Bot, your ultimate Telegram companion. Experience the adrenaline of sniping the hottest launches or effortlessly acquiring live tokens. Crafted for the Ethereum Network, BRO Bot is not just a tool, it&apos;s your gateway to seamless trading. As we evolve, more chains await. Join us, and redefine how you trade. Unleash the power. Don&apos;t just trade, BRO-trade! 🔥</p>
           
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
           <Image src={LOGO} 
           classNameName='w-70'
           
           alt="Logo" />
        </div>                
    </div>
    <div class="border-b-4 border-indigo-100 ">
   
    
    
    </div>
</section>

    </div>
   </>
  )
}

export default Hero9