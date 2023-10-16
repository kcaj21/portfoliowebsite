import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'
import Footer from './Components/Footer'
import EmailSection from './Components/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className='container mt-24 px-12 py-4 mx-auto'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
    </div>
    <Footer />
    </main>
  )
}