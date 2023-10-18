import React from 'react'

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-12 place-self-center text-center '>
            <h1 className='text-white  mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Alex Jack</h1>
            <p className='border-b border-yellow-500'></p>
            <p className='text-[#ABB7BE] mt-2 text-base sm:text-lg mb-2 lg:text-xl'>
            Full Stack Software Developer
            </p>
            <p className='text-[#ABB7BE] text-base sm:text-lg lg:text-xl'>
            Glasgow, UK
            </p>
        </div>
    </div>
    </section>
  )
}

export default HeroSection