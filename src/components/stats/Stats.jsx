import React, { useContext } from "react";
// import { ThemeProContext } from "../../Contexts/ThemeContext";

import "./Stats.css";
let fordarkmode =
  "https://github-readme-streak-stats.herokuapp.com?user=vikashkr-byte&theme=radical";
let forlightmode =
  "https://github-readme-streak-stats.herokuapp.com?user=vikashkr-byte";

let statfordark =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=vikashkr-byte&theme=radical";
let statforlight =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=vikashkr-byte";

let totalcommitinfodark =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=vikashkr-byte&count_private=true&show_icons=true&theme=radical";
let totalcommitinfolight =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=vikashkr-byte&count_private=true&show_icons=true";

let darkBackGround = "black";
let lightBackGround = "white";
const Stats = () => {
  // const { theme } = useContext(ThemeProContext);
  // console.log("theme:", theme);
  // let darkmode;
  // if (theme == "dark") {
  //   darkmode = true;
  // } else {
  //   darkmode = false;
  // }
  return (
    <div
      className="main_stat_div skilss section"
      id="gitstats"
      style={
        // darkmode
        //   ? {
        //       backgroundColor: darkBackGround,
        //       color: lightBackGround,
        //       width: "100%",
        //     }
          // :
           {
              backgroundColor: "rgb(250,250,250)",
              color: darkBackGround,
              marginBottom: "30px",
              width: "100%",
            }
      }
    >
      <div className="stat-stats_div">
        <h3
          style={{
            textAlign: "center",
            color: "rgb(117,117,117)",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Stats
        </h3>
        <a href="https://github.com/vikashkr-byte" style={{width:"400px",margin:"auto"}}>
          <img
            className="stat-stats"
            alt="lang4"
            // src={darkmode ? fordarkmode : forlightmode}
            src={forlightmode}
          />
        </a>
      </div>
      <div className="stat-most_used_language">
        <a href="https://github.com/vikashkr-byte">
          <img
            className="stat-most_used_language-1"
            alt="lang1"
            src={statforlight}
          />
        </a>
        <a href="https://github.com/vikashkr-byte">
          <img
            className="stat-most_used_language-2"
            alt="lang"
            src={totalcommitinfolight}
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
