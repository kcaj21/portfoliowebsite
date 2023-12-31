"use client";
import React, {useState} from 'react'
import Navlink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    
  return (
    <nav className='fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-95 border border-t-[#33353F] border-l-transparent border-r-transparent border-b-[#33353F]'>
        <div className='flex items-center md:justify-center sm: justify-end mx-auto px-4 py-2'>

        <div className='mobile-menu block md:hidden'>

        { 
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
                </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
                </button>
            )
        }

        </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-32'>
            {
                navLinks.map((link, index) => (
                    <li key={index}>
                        <Navlink href={link.path} title={link.title} />
                    </li>
                    ))
            }
            </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar