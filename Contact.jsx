import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'

const Contact = () => {
  return (
    <Element name='contact' className='contact-section'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-item'>
            <i className='fas fa-envelope'></i>
            <span>ssanthosh7578@gmail.com</span>
          </div>
          <div className='contact-item'>
            <i className='fas fa-phone'></i>
            <span>+91 8870858917</span>
          </div>
          <div className='contact-item'>
            <i className='fab fa-linkedin'></i>
            <span>linkedin.com/in/santhosh-s-47b44428b </span>
          </div>
        </div>
        <form className='contact-form'>
          <input type='text' placeholder='Your Name' required />
          <input type='email' placeholder='Your Email' required />
          <textarea placeholder='Your Message' rows='5' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </Element>
  )
}

export default Contact