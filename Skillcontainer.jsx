import React from 'react'
import { Element } from 'react-scroll'
import './Skillcontainer.css'

const Skillcontainer = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 80, icon: 'fab fa-react' },
        { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 80, icon: 'fas fa-server' },
        { name: 'Python', level: 75, icon: 'fab fa-python' }
      ]
    },
    {
      category: 'Database & Full Stack',
      skills: [
        { name: 'MongoDB', level: 75, icon: 'fas fa-database' },
        { name: 'MERN Stack', level: 85, icon: 'fas fa-layer-group' }
      ]
    }
  ]

  return (
    <Element className='skill-container' id='skill'>
        <div className='skill-header'>
          <h2>My Skills as a MERN Stack Developer</h2>
          <p>Proficient in building full-stack web applications using modern technologies</p>
        </div>
        
        <div className='skill-categories'>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className='category-section'>
              <h3 className='category-title'>{category.category}</h3>
              <div className='skills-grid'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='skill-card'>
                    <i className={skill.icon}></i>
                    <h4>{skill.name}</h4>
                    <div className='progress-bar'>
                      <div className='progress-fill' style={{width: `${skill.level}%`}}></div>
                    </div>
                    <span className='skill-level'>{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </Element>
  )
}

export default Skillcontainer
