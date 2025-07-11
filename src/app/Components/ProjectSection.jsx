"use client"
import React, { useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projectsData = [

  {
    id: 1,
    title: 'Viro3D',
    description: 'Professional project - A comprehensive, searchable and browsable database of viral protein structure predictions, containing over 85,000 structural models from more than 4,400 human and animal viruses.',
    image: 'images/viro3d-screenshot.png',
    tag: ['All', 'Solo'],
    gitUrl: 'https://github.com/centre-for-virus-research/viro3d-backend',
    previewUrl: 'https://viro3d.cvr.gla.ac.uk/'
},

    {
        id: 2,
        title: 'Sketchwars',
        description: 'Group project - A real-time online Multiplayer Game which is an homage to SketchParty',
        image: 'images/sketchwars-screenshot.jpeg',
        tag: ['All', 'Group'],
        gitUrl: 'https://github.com/ravaldo/sketchwars.git',
        previewUrl: 'https://sketchwars.vercel.app/'
    },

    {
      id: 3,
      title: 'Livegab',
      description: 'Live solo project - real-time chat app. A public chatroom is available and the ability to directly message other users',
      image: 'images/livegab-screenshot.jpg',
      tag: ['All', 'Solo'],
      gitUrl: 'https://github.com/kcaj21/livegab.git',
      previewUrl: 'http://livegab-v0.1.s3-website-eu-west-1.amazonaws.com/'
  },

    {
        id: 4,
        title: 'Moviematch',
        description: 'Group project - An IMDB-style movie database application where users can search for movies and add favourites',
        image: 'images/moviematch-screenshot.jpg',
        tag: ['All', 'Group'],
        gitUrl: 'https://github.com/ewanlaing/moviematch_js_group_project.git',
        previewUrl: 'https://moviematch-js-group-project-df5g-mu51rll5p-ewanlaings-projects.vercel.app/'
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
    <p className='text-center text-[#ADB7BE] font-thin text-xl'>The group projects rely on free-tier servers, so loading time may take up to 30 seconds when previewing. Thank you for your patience.</p>
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
