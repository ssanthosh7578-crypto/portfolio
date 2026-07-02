import React from 'react'
import { Element } from 'react-scroll'
import Project from './Project'
import './ProjectContainer.css'
import websit from '../assets/images.jpeg'
import weather from '../assets/desert.jpg'


const ProjectContainer = () => {

  const projects = [
    {
      img: websit,
      title: 'E-Commerce MERN Stack Website',
      desc: 'Full-stack e-commerce application built using MongoDB, Express, React, and Node.js. Includes authentication, cart, and order management.',
      tech: 'React, Node.js, Express, MongoDB',
      link: 'https://github.com/ssanthosh7578-crypto/E-commerce-MERN-'
    },
    {
      img: weather,
      title: 'Weather App (JavaScript)',
      desc: 'Real-time weather forecasting app using OpenWeather API with dynamic UI updates.',
      tech: 'HTML, CSS, JavaScript, API',
      link: 'https://github.com/ssanthosh7578-crypto/Weather-Project-using-JS'
    },
    
  ]

  return (
    <Element className='project-container' id='project'>

      <h2>Projects</h2>
      <p>Some of my real-world development projects</p>

      <div className='project-grid'>
        {
          projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              link={project.link}
            />
          ))
        }
      </div>

    </Element>
  )
}

export default ProjectContainer