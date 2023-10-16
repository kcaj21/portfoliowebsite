import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

  return (

    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
        <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5></div>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        I'm currently looking for my first junior developer role. Please feel free to reach out
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href='https://github.com/kcaj21'>
                <Image src={GithubIcon} alt='Github Icon' />
            </Link>
            <Link href='https://www.linkedin.com/in/ajcdc627/'>
                <Image src={LinkedinIcon} alt='Linkedin Icon' />
            </Link>
        </div>
        <div>
            <form className='flex flex-col'>
            <div className='mb-6'>
            <label 
            className='text-white block mb-2 text-sm font-medium'
            htmlFor='email' >Your email</label>
            <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            type='email' 
            id='email' 
            required 
            placeholder='your_email@address.com'/>
            </div>
            <div className='mb-6'>
            <label 
            className='text-white block mb-2 text-sm font-medium'
            htmlFor='subject' >Subject</label>
            <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            type='text' 
            id='subject' 
            required 
            placeholder='Subject'/>
            </div>
            </form>
            <div className='mb-6'>
                <label
                    htmlFor='message'
                    className='text-white block mb-2 text-sm font-medium'>Message
                </label>
                <textarea name='message'
                id='message'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Leave a message...'
                />
            </div>
            <button
                type='submit'
                className='bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:text-yellow-900 hover:duration-200 text-[#121212]   font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
        </div>
    </section>
  )
}

export default EmailSection