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
        tag: ['All', 'Web']
    }
]

const ProjectSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} /> )}</div>
    </>
  )
}

export default ProjectSection