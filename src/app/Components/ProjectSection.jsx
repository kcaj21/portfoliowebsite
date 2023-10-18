"use client"
import React, { useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projectsData = [

    {
        id: 1,
        title: 'Sketchwars',
        description: 'Group project - A real-time online Multiplayer Game which is an homage to SketchParty',
        image: 'images/sketchwars-screenshot.jpeg',
        tag: ['All', 'Group'],
        gitUrl: 'https://github.com/ravaldo/sketchwars.git',
        previewUrl: 'https://sketchwars.vercel.app/'
    },

    {
        id: 2,
        title: 'Moviematch',
        description: 'Group project - An IMDB-style movie database application where users can search for movies and add favourites',
        image: 'images/moviematch-screenshot.png',
        tag: ['All', 'Group'],
        gitUrl: 'https://github.com/ewanlaing/moviematch_js_group_project.git',
        previewUrl: 'https://moviematch-deployment.vercel.app/'
    },

    {
        id: 3,
        title: 'THE D4WG POUND',
        description: 'Solo project - My first ever project. Vet management app with basic CRUD functionality',
        image: '/images/D4WGPOUND-screenshot.jpg',
        tag: ['All', 'Solo'],
        gitUrl: 'https://github.com/kcaj21/THE_D4WG_POUND.git',
        previewUrl: 'https://the-d4wg-pound-8c9a882e2a1b.herokuapp.com/'
    }
]

const ProjectSection = () => {

  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag))

  return (
    <section id='projects'>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
    <p className='text-center text-[#ADB7BE] font-thin text-xl'>The server loading time may take up to 30 seconds when previewing. Thank you for your patience.</p>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
        onClick={handleTagChange} 
        name='All' 
        isSelected={tag === 'All'} 
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name='Group' 
        isSelected={tag === 'Group'} 
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name='Solo' 
        isSelected={tag === 'Solo'} 
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} 
        gitUrl={project.gitUrl} 
        previewUrl={project.previewUrl} /> )}
      </div>
    </section>
  )
  }

export default ProjectSection