import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 Mr. S Santhosh. All rights reserved.</p>
        <div className='social-links'>
          <a href='https://github.com/ssanthosh7578-crypto' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://linkedin.com/in/santhosh-s-47b44428b' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer