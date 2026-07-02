import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <p>&copy; {currentYear} Santhosh. All rights reserved.</p>
          <div className='social-links'>
            <a href='https://github.com/ssanthosh7578-crypto' target='_blank' rel='noopener noreferrer'>GitHub</a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            <a href='mailto:your-email@example.com'>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}