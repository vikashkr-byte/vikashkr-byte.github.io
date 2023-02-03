import React from "react";
import "./Contact_me.css";
import Phone_icon from "../../img/call-icon.gif";
import Email_icon from "../../img/email-icon_bgless.png";
import Home_icon from "../../img/green-address-icon.png";
import Github_icon from "../../img/github_icon.png";
import LinkedIn_icon from "../../img/linkedin_icon.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
// import { useContext } from "react";
// import { ThemeProContext } from "../../Contexts/ThemeContext";
let darkBackGround = "black";
let lightBackGround = "white";

const Contact_me = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  // const { theme } = useContext(ThemeProContext);
  // console.log("theme:", theme);
  // let darkmode;
  // if (theme == "dark") {
  //   darkmode = true;
  // } else {
  //   darkmode = false;
  // }
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (done) {
        setDone(false);
      }
    }, 4000);
  }, [done]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bgglcpb",
        "template_xbzz2ja",
        formRef.current,
        "9Y-EuSMdjGm6A2Tlm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contacts"
      className="c"
      style={
        { backgroundColor: lightBackGround, color: darkBackGround }
      }
    >
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's know each other.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone_icon} alt="phone" className="c-icon" />
              +91 7838717931
            </div>
            <div className="c-info-item">
              <img src={Email_icon} alt="email" className="c-icon" />
              vikashkumarsharma7838@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Github_icon} alt="email" className="c-icon" />
              <a href="https://github.com/vikashkr-byte">vikashkr-byte</a>
            </div>
            <div className="c-info-item">
              <img src={LinkedIn_icon} alt="email" className="c-icon" />
              <a href="https://www.linkedin.com/in/vikash-kumar-474728182/">
                Vikash Kumar
              </a>
            </div>
            <div className="c-info-item">
              <img src={Home_icon} alt="home" className="c-icon" />
              Muzaffarpur, Bihar, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="teaxtField"
              style={
               { backgroundColor: lightBackGround, color: darkBackGround }
              }
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              className="teaxtField"
              style={
                { backgroundColor: lightBackGround, color: darkBackGround }
              }
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              className="teaxtField"
              style={
                { backgroundColor: lightBackGround, color: darkBackGround }
              }
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              className="teaxtField"
              style={{ backgroundColor: "#333" }}
              rows={"5"}
              placeholder="Message"
              name={"message"}
              required
            />
            <button className="form_button">Submit</button>
            {done && (
              <div>
                <h6 className="c-thankyou">
                  Thank you. I'll react out to you soon.
                </h6>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_me;
