import GitHubCalendar from "react-github-calendar"
// import React, { useContext } from "react";
import "./GitHub_Calender.css";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Stats from "../stats/Stats";
// import { Box } from "@chakra-ui/react";
// import { ThemeProContext } from "../../Contexts/ThemeContext";
let darkBackGround="black"
let lightBackGround="white"
const GitHub_Calender = () => {

  return (
    <>
    <div className="g" style={{backgroundColor:"rgb(250,250,250)",color:darkBackGround}}  >
      <h1 className="g-h1" >My GitHub Contributions</h1>
      <div className="g-wrapper">
        <div className="g-browser">
          <div className="g-circle red" back></div>
          <div className="g-circle yellow" back></div>
          <div className="g-circle green" back></div>
        </div>
      <GitHubCalendar username="vikashkr-byte" style={{ margin: "auto",width:"90%" }}
   
       blockSize={20}
       fontSize={12}
      >
        <ReactTooltip delayShow={1000} html/>

      </GitHubCalendar>
      </div>
    </div>
   
    </>
  );
};

export default GitHub_Calender;
