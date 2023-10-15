import React from 'react'
import ProjectCard from './ProjectCard'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projectsData = [

    {
        id: 1,
        title: 'Sketchwars',
        description: 'Group project - An online Multiplayer Game which is an homage to SketchParty',
        image: 'images/sketchwars-screenshot.jpeg',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/ravaldo/sketchwars.git',
        previewUrl: 'https://sketchwars.vercel.app/'
    },

    {
        id: 2,
        title: 'Moviematch',
        description: 'Group project - An IMDB-style movie database application where users can search for movies and add favourites',
        image: 'images/moviematch-screenshot.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/ewanlaing/moviematch_js_group_project.git',
        previewUrl: ''
    },

    {
        id: 3,
        title: 'THE D4WG POUND',
        description: 'Solo project - My first ever project. Vet management app with basic CRUD functionality',
        image: '/images/D4WGPOUND-screenshot.jpg',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/kcaj21/THE_D4WG_POUND.git',
        previewUrl: 'https://the-d4wg-pound-8c9a882e2a1b.herokuapp.com/'
    }
]

const ProjectSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} /> )}</div>
    </>
  )
}

export default ProjectSection