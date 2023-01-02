import React from "react";
import "./Intro.css";
import profileMain from "../../img/vikashPortFolio24.png";
import { useContext } from "react";

import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { ThemeProContext } from "../../Contexts/ThemeContext";
import Vikash_resume from "../../img/Vikash Kumar Resume.pdf"
let darkBackGround = "black";
let lightBackGround = "white";
let lightColorBrown="rgb(201,178,134)"
const Intro = () => {
  const { theme } = useContext(ThemeProContext);
  console.log("theme:", theme);
  let darkmode;
  if (theme == "dark") {
    darkmode = true;
  } else {
    darkmode = false;
  }
  console.log("darkmode intro:", darkmode);
  return (
    <div
      className="i"
      style={
        darkmode
          ? { backgroundColor: darkBackGround, color: "rgb(191,212,227)" }
          : { backgroundColor: lightBackGround, color: darkBackGround }
      }
    >
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Vikash Kumar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Life Long Learner</div>

            </div>
          </div>
          <p className="i-desc">
            Hello, I'm Vikash, Web Developer by day and a learner by night.
         
          </p>
          <a
            href={
              Vikash_resume
            }
            download={"Vikash Kumar Resume.pdf"}
            display="flex"
          >
            <Button
            
              mt="20px"
              bgColor={theme === "dark" ? "#1A2636" : "rgb(201,178,134)"}
              h="30px"
              color={theme === "dark" ? "rgb(191,212,227)" : "whitesmoke"}
              borderRadius="4px"
              display={"flex"}
              _hover={theme=="dark"?{backgroundColor:"rgb(191,212,227)",color:"#1A2636"}:{backgroundColor:"whitesmoke",color:lightColorBrown}}
              onClick={Vikash_resume}
            >   
              Resume
              <Box pt="3px">
                <IoMdArrowDropright size={"20px"} />
              </Box>
            </Button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-img-bg">
          <img src={profileMain} alt="profile photo" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
