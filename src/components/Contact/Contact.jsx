import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message!')
  }

  return (
    <section id='contact' className='contact'>
      <div className='contact-container'>
        <h2>Get In Touch</h2>
        <p className='contact-subtitle'>Have a question? Feel free to reach out!</p>
        
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              placeholder='Your Message'
              rows='5'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type='submit' className='submit-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}