import React from 'react'
import { Element } from 'react-scroll'
import Exp from './Exp'
import './Experience.css'
const Experience = () => {
    const expData = [
        { title: 'Clients', number: '50+' },
        { title: 'Projects', number: '15+' },
        { title: 'Skills', number: '6+' },
        { title: 'Work', number: '1000+' }
    ]

    return (
        <Element className="experience_container" id="experience">
            <h1>Experience</h1>
            <div className="exp_container">
                {
                    expData.map((exp, index) => (
                        <Exp key={index} title={exp.title} number={exp.number} style={exp.title=='Projects'?{backgroundColor:'red'}:{}} />
                    ))
                }
            </div>
        </Element>
    )
}

export default Experience
