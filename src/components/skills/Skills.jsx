import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import "./Skills.css"
const Skills = () => {
  return (
    <section className="skilss section" id='skills'>
         <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Skills I've aquired...</span>
    <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
    </div>
    </section>
  )
}

export default Skills