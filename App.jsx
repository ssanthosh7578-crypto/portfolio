import React from 'react'
import { Header } from './header/Header'
import Topcontainer from './Topcontainer/Topcontainer'
import Skillcontainer from './skillscontainer/Skillcontainer'
import ProjectContainer from './ProjectContainer/ProjectContainer'
import './App.css'
import Experience from './ExperienceContainer/Experience'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
     <ProjectContainer/>
     <Experience/>
     <Contact/>
     <Footer/>
    </div>
  )
}
