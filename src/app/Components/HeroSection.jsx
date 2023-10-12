import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Hello</h1>
            <p className='text-[#ABB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:bg-slate-200 text-black'>btn1</button>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:bg-slate-800 text-black mt-3'>btn2</button>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
            src="/images/profile-image.png"
            alt="profile image"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={150}
            height={150}
            />
            </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection