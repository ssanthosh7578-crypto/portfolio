import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
import santhosh from '../assets/santhosh image.jpeg'

const TopContent = () => {
  return (
    <div className='hero-section'>
        <div className='hero-content'>
            <h1>Mr. S SANTHOSH</h1>
            <h2>MERN Stack Developer</h2>
            <p>Building full-stack web applications with modern technologies. Passionate about creating responsive, scalable, and user-friendly solutions.</p>
            <div className='hero-buttons'>
                <a href='/resume.pdf' download className='btn primary-btn'>Download Resume</a>
                <Link to='contact' smooth={true} duration={500}>
                    <button className='btn secondary-btn'>Get In Touch</button>
                </Link>
            </div>
        </div>
        <div className='hero-image'>
            <img src={santhosh} alt='Profile' />
        </div>
    </div>
  )
}

export default TopContent
