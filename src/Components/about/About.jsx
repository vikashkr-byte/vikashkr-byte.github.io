import React, { useContext } from "react";
import "./About.css";
import About_me_light from "../../img/about_me_light.gif";
import About_me_dark from "../../img/about_me_dark.gif";
import JS_logo from "../../img/js_logo.gif"
import { ThemeProContext } from "../../Contexts/ThemeContext";

// let theme = "light";
let darkBackGround="black"
let lightBackGround="white"
const About = () => {
  const {theme}=useContext(ThemeProContext)
console.log('theme:', theme)
  let darkmode
  if(theme=="dark"){
   darkmode=true
  }else{
   darkmode=false
  }
  

  return (
    <div className="a" style={darkmode?{backgroundColor:darkBackGround,color:"rgb(191,212,227)",paddingRight:"20px"}:{backgroundColor:lightBackGround,color:darkBackGround,paddingRight:"20px"}}>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={darkmode === true ? About_me_dark : About_me_light }
            // src={ About_me_light }
            alt="typewriterlappy"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Know Vikash!!</p>
        <p className="a-desc">
          Hello, I'm Vikash, Web Developer by day and a learner by night. By
          academics, I'm a civil engineer. I got exposed to coding when I was
          working as a site engineer. It was love at first sight. Since then,
          I've worked in many odd jobs to learn coding. I was lucky enough to
          stumble upon Masai School that helped me with training and direction.
          When you study at Masai School, it goes without saying that only
          hardwork won't be enough. You'll have to develope the right mentality,
          the right attitude and willingness give your 200% and go above and
          beyond to find answers and the right questions. During this course at
          Masai School, I was able to learn HTML, CSS and JavaScript, the
          building blocks. In later units, I learnt and became proficient with
          React, Git, Github, MongoDB, Express, Redux, and Node js, the MERN
          Stack. I'm also exposed to firebase, nextjs, typescript, socket.io,
          docker, electron, Chakra UI, etc.
        </p>
   
      </div>
    </div>
  );
};

export default About;
