import React from 'react'
import Image from 'next/image'
import LOGO from '../public/Logo.PNG'
const Hero1 = () => {
  return (
    <>
    <section id='hero1'>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
       <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">BRO Academy: Elevate Your Trading Game</h1>
          <p className="max-w-2xl mb-6 mt-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The BRO Academy is not just a learning platform; it&apos;s a rite of passage for every trader who aspires to excel. Here, we demystify trading strategies, dissect market trends, and provide exclusive insights, ensuring you&apis;re not just trading but mastering the art. And with the power of BRO Bot by your side, the Academy ensures you implement what you learn in real-time, making profits while gaining knowledge.
             Step into a realm where trading is not just about transactions but a holistic experience, combining strategy, learning, and top-tier technology. Welcome to the world of BRO. 🌌🚀📚
           </p>
       </div>
     <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
       <Image src={LOGO} 
       classNameName='w-70'
       
       alt="Logo" />
    </div>                
</div>
</section>
    </>
  )
}

export default Hero1
