import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-12 place-self-center text-center '>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Alex Jack</h1>
            <p className='text-[#ABB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Full Stack Software Developer
            </p>
        </div>

    </div>
    </section>
  )
}

export default HeroSection