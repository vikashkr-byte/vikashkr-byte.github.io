import React, { useContext } from "react";
import "./Skills.css";
import HTML5 from "../../techStack/html_techstack.png";
import CSS5 from "../../techStack/css-3_techstack.png";
import JavaScript from "../../techStack/js_techstack.png";
import ReactJs from "../../techStack/react_techstack.png";
import TypeScript from "../../techStack/typescript_techstack.png";
import Redux from "../../techStack/redux_techstack.png";
import MongoDB from "../../techStack/mongodb_techstack.png";
import ExpressJs from "../../techStack/expressjs_techstack.png";
import NodeJs from "../../techStack/nodejs_techstack.png";
import ChakraUI from "../../techStack/chakraUI.jpg";
import SkillCard from "../skillcard/SkillCard";
import { ThemeProContext } from "../../Contexts/ThemeContext";
import { Grid, GridItem } from "@chakra-ui/react";

let techStack = [
  { name: "HTML5", logo: HTML5 },
  { name: "CSS5", logo: CSS5 },
  { name: "JavaScript", logo: JavaScript },
  { name: "React Js", logo: ReactJs },
  { name: "TypeScript", logo: TypeScript },
  { name: "Redux", logo: Redux },
  { name: "MongoDB", logo: MongoDB },
  { name: "Express Js", logo: ExpressJs },
  { name: "Node Js", logo: NodeJs },
  { name: "Chakra UI", logo: ChakraUI },
];
let darkBackGround = "black";
let lightBackGround = "white";
const Skills = () => {
  const { theme } = useContext(ThemeProContext);
  console.log("theme:", theme);
  let darkmode;
  if (theme === "dark") {
    darkmode = true;
  } else {
    darkmode = false;
  }
  return (
    <div
      className="pl"
      style={
        darkmode
          ? { backgroundColor: darkBackGround, color: "rgb(191,212,227)" }
          : { backgroundColor: lightBackGround, color: darkBackGround }
      }
    >
      <div className="pl-texts">
        <h1 className="pl-title">Skills</h1>
        <p className="pl-desc">
          This section displays skills that I have acquired.
        </p>
      </div>
      
        <Grid templateColumns="repeat(5, 1fr)" gap={6} className="pl-list">
          {techStack.map((item) => (
            <GridItem w="100%" h="50%">
              <SkillCard key={item.name} name={item.name} logo={item.logo} />
            </GridItem>
          ))}
        </Grid>
     
    </div>
  );
};

export default Skills;
