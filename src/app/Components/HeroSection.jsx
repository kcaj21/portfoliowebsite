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
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:text-slate-700 text-black'>Github</button>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:text-slate-700 text-black mt-3'>LinkedIn</button>
            </div>
        </div>

    </div>
    </section>
  )
}

export default HeroSection