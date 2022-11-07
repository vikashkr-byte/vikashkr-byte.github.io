import React from 'react'
import "./Intro.css"
import profileMain from "../../img/vikashPortFolio24.png"
import { useContext } from 'react'
import { ThemeProContext } from '../../Contexts/ThemeContext'
let darkBackGround="black"
let lightBackGround="white"
const Intro = () => {
  const {theme}=useContext(ThemeProContext)
console.log('theme:', theme)
  let darkmode
  if(theme=="dark"){
   darkmode=true
  }else{
   darkmode=false
  }
  console.log('darkmode intro:', darkmode)
  return (
    <div className='i' style={darkmode?{backgroundColor:darkBackGround,color:"rgb(191,212,227)"}:{backgroundColor:lightBackGround,color:darkBackGround}} >
      <div className='i-left' >
        <div className='i-left-wrapper' >
          <h2 className='i-intro' >Hello, My name is</h2>
          <h1 className='i-name' >Vikash Kumar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Life Long Learner</div>
              <div className="i-title-item">Communicator</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            Hello, I'm Vikash, Web Developer by day and a learner by night. By academics, I'm a civil engineer. I got exposed to coding when I was working as a site engineer.
             {/* It was love at first sight. Since then, I've worked in many odd jobs to learn coding. I was lucky enough to stumble upon Masai School that helped me with training and direction. When you study at Masai School, it goes without saying that only hardwork won't be enough. You'll have to develope the right mentality, the right attitude and willingness give your 200% and go above and beyond to find answers and the right questions. During this course at Masai School, I was able to learn HTML, CSS and JavaScript, the building blocks. In later units, I learnt and became proficient with React, Git, Github, MongoDB, Express, Redux, and Node js, the MERN Stack. I'm also exposed to firebase, nextjs, typescript, socket.io, docker, electron, Chakra UI, etc.  */}
          </p>
        </div>
       
      </div>
      <div className='i-right' >
        <div className="i-img-bg">
          
        <img src={profileMain} alt="profile photo" className="i-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro