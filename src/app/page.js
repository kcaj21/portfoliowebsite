import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container">
    <Navbar />
    <div className='container px-10 py-4 mx-auto'>
      <HeroSection />
    </div>
    </main>
  )
}