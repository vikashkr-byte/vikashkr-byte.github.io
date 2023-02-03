import React from "react";
import "./About.css";
import AboutMeImage from "../../assets/aboutme_image.webp";
import Resume from "../../assets/Vikash Kumar Resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutMeImage} alt="gif file" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Hello, I'm Vikash, Web Developer by day and a learner by night. By
            academics, I'm a civil engineer. I got exposed to coding when I was
            working as a site engineer. It was love at first sight. Since then,
            I've worked in many odd jobs to learn to code. I was lucky enough to
            stumble upon Masai School which helped me with training and
            direction.
          </p>
          <a
            download=""
            href={Resume}
            style={{
              display: "flex",
              width: "140px",
              margin: "auto",
            }}
          >
            <button
              style={{
                position: "relative",
                height: "32px",
                width: "120px",
                backgroundColor: "black",
                fontSize: "16px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "10px",
                alignItems: "center",
                color: "white",
                padding: "5px 15px",
              }}
            >
              Resume
              <i
                className="uil uil-download-alt"
                style={{
                  position: "absolute",
                  marginLeft: "77px",
                  marginBottom: "2px",
                }}
              ></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
