import React, { useContext } from "react";
import { ThemeProContext } from "../../Contexts/ThemeContext";

import "./Stats.css";
let fordarkmode="https://github-readme-streak-stats.herokuapp.com?user=vikashkr-byte&theme=radical"
let forlightmode="https://github-readme-streak-stats.herokuapp.com?user=vikashkr-byte"

let statfordark="https://github-readme-stats.vercel.app/api/top-langs/?username=vikashkr-byte&theme=radical"
let statforlight="https://github-readme-stats.vercel.app/api/top-langs/?username=vikashkr-byte"

let totalcommitinfodark="https://github-readme-stats.vercel.app/api?username=vikashkr-byte&count_private=true&show_icons=true&theme=radical"
let totalcommitinfolight="https://github-readme-stats.vercel.app/api?username=vikashkr-byte&count_private=true&show_icons=true"

let darkBackGround="black"
let lightBackGround="white"
const Stats = () => {
  const {theme}=useContext(ThemeProContext)
console.log('theme:', theme)
  let darkmode
  if(theme=="dark"){
   darkmode=true
  }else{
   darkmode=false
  }
  return (
    <div className="main_stat_div" style={darkmode?{backgroundColor:darkBackGround,color:lightBackGround,width:"100%"}:{backgroundColor:lightBackGround,color:darkBackGround,marginBottom:"30px",width:"100%"}} >
      <div className="stat-stats_div"  >
        <h3 style={{textAlign:"center",color:"#59b256",fontSize:"30px", fontWeight:"700"}} >Stats</h3>
        <a href="https://github.com/vikashkr-byte" >
            <img className="stat-stats" alt="lang4" src={darkmode?fordarkmode:forlightmode} />
        </a>
      </div>
      <div className="stat-most_used_language" >
        <a href="https://github.com/vikashkr-byte" >
            <img className="stat-most_used_language-1" alt="lang1" src={darkmode?statfordark:statforlight} />
        </a>
        <a href="https://github.com/vikashkr-byte" >
            <img className="stat-most_used_language-2" alt="lang" src={darkmode?totalcommitinfodark:totalcommitinfolight} />
        </a>
      </div>
    </div>
  );
};

export default Stats;
