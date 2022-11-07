import GitHubCalendar from "react-github-calendar";
import React, { useContext } from "react";
import "./GitHub_Calender.css";
import ReactTooltip from "react-tooltip";
import Stats from "../stats/Stats";
import { Box } from "@chakra-ui/react";
import { ThemeProContext } from "../../Contexts/ThemeContext";
let darkBackGround="black"
let lightBackGround="white"
const GitHub_Calender = () => {
  const {theme}=useContext(ThemeProContext)
  console.log('theme:', theme)
    let darkmode
    if(theme=="dark"){
     darkmode=true
    }else{
     darkmode=false
    }
//   const selectLastHalfYear = (contributions) => {
//     const currentYear = new Date().getfullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 4;
//     return contributions.filter((day) => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();
//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };
  return (
    <>
    <div className="g" style={darkmode?{backgroundColor:darkBackGround,color:lightBackGround}:{backgroundColor:lightBackGround,color:darkBackGround}}  >
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
