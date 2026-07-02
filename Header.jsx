import React from 'react'
import { Link } from 'react-scroll'
import "./Header.css";
export const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <h1> DEVELOP<span className='sp'>ER</span></h1>
        </div>
        <div className='header_right'>
            <Link to='about' smooth={true} duration={500}><h4>About</h4></Link>
            <Link to='skill' smooth={true} duration={500}><h4>Skill</h4></Link>
            <Link to='project' smooth={true} duration={500}><h4>Projects</h4></Link>
            <Link to='experience' smooth={true} duration={500}><h4>Experience</h4></Link>
            
            <Link to='contact' smooth={true} duration={500}><h4>Contact</h4></Link>
        </div>
    </div>
  )
}
