'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vfin987', 'template_bg8fb5t', form.current, '5hXMubyrxJ5cE9qjO')
        .then((result) => {
            console.log(result.text);
            setEmailSubmitted(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (

    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
        <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        I'm currently looking for my first junior developer role. Please feel free to reach out!
        </p>
        <div className='socials flex flex-row gap-2 my-2'>
            <Link target="blank" rel="noopener noreferrer" href='https://github.com/kcaj21'>
                <Image src={GithubIcon} alt='Github Icon' />
            </Link>
            <Link target="blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ajcdc627/'>
                <Image src={LinkedinIcon} alt='Linkedin Icon' />
            </Link>
        </div>
        </div>
        <div>
            <form ref={form} className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
            <label 
            className='text-white block mb-2 text-sm font-medium'
            >Your email address
            </label>
            <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            name='user_email'
            type='email' 
            id='email' 
            required 
            placeholder='your_email@address.com'/>
            </div>
            <div className='mb-6'>
            <label 
            className='text-white block mb-2 text-sm font-medium'
            >Your Name
            </label>
            <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            name='user_name'
            type='text' 
            id='user_name' 
            required 
            placeholder='Name'/>
            </div>
            <div className='mb-6'>
                <label
                    className='text-white block mb-2 text-sm font-medium'>Message
                </label>
                <textarea 
                name='message'
                id='message'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Leave a message...'
                />
            </div>
            <button
                type='submit'
                value='send'
                className='bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-700 hover:text-yellow-900 hover:duration-200 text-[#121212]   font-medium py-2.5 px-5 rounded-lg w-full'>Send Message
                </button>
            </form>
                {
                    emailSubmitted && (
                        <p className='text-yellow-500 text-sm mt-2'>
                            Email sent! I'll be in touch soon!
                        </p>
                    )
                }
        </div>
    </section>
  )
}

export default EmailSection