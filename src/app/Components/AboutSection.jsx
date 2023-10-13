"use client"
import React, { useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {

    const TAB_DATA = [

        {
            title: "backend",
            id: "backend",
            content: (
                <ul>
                    <li>Java</li>
                    <li>Spring</li>
                    <li>Node.js</li>
                    <li>Socket.io</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Git</li>
                </ul>
            )
        },

        {
            title: "frontend",
            id: "frontend",
            content: (
                <ul>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                </ul>
            )
        },

        {
            title: "testing",
            id: "testing",
            content: (
                <ul>
                    <li>JUnit</li>
                    <li>Cypress</li>
                    <li>Insomnia</li>
                </ul>
            )
        },

        {
            title: "education",
            id: "education",
            content: (
                <ul>
                    <li>CodeClan (2023)</li>
                    <li>Professional Software Development</li>
                    <li className='mt-4'>University of Glasgow (2013-2017)</li>
                    <li>Microbiology Bsc (Hons)</li>
                </ul>
            )
        }
    ]

    const [tab, setTab] = useState("backend")
    const [isPending, startTransition] = useTransition()

    const handeTabChange = (id) => {
        startTransition (() => {
          setTab(id)
        })
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='border border-solid border-blue-200' src='/images/profile.jpeg' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className= 'text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>I am a full stack software developer, with a particular interest in backend engineering. I have experience with Java, spring, Node.js, React, Python and Flask and I'm always looking to expand my toolset.</p>
            <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handeTabChange("backend")} active={tab === "backend"}>Back End
            </TabButton>
            <TabButton selectTab={() => handeTabChange("frontend")} active={tab === "frontend"}>Front End
            </TabButton>
            <TabButton selectTab={() => handeTabChange("testing")} active={tab === "testing"}>Testing
            </TabButton>
            <TabButton selectTab={() => handeTabChange("education")} active={tab === "education"}>Education
            </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection