import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <a href='#home'>Santhosh</a>
        </div>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}