import React from 'react'
import { Header } from './components/Header/Header'
import Topcontainer from './sections/TopContainer/Topcontainer'
import Skillcontainer from './sections/SkillsContainer/Skillcontainer'
import ProjectContainer from './sections/ProjectContainer/ProjectContainer'
import './styles/App.css'
import Experience from './sections/ExperienceContainer/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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