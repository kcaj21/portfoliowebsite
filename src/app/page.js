import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container">
    <Navbar />
    <div className='container mt-24 px-10 py-4 mx-auto'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
    </main>
  )
}