import React from "react";
import "./About.css"
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2000+ hrs of coding</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">4+ Group Projects</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">40+ mini-projects</span>
      </div>
    </div>
  );
};

export default Info;
