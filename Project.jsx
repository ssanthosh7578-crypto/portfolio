import React from 'react'
import './Project.css'

const Project = ({ img, title, desc, tech, link }) => {
  return (
    <div className='project-card'>
        <img src={img} alt={title} />
        <div className='project-content'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p className='tech-stack'>Tech: {tech}</p>
            <a href={link} target='_blank' rel='noopener noreferrer' className='project-link'>View Project</a>
        </div>
    </div>
  )
}

export default Project
