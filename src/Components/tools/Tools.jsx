import React, { useContext } from 'react'
import GitHub from "../../toolStack/github_toolStack.png"
import Npm from "../../toolStack/npm_toolStack.png"
import Netlify from "../../toolStack/netlify_toolStack.png"
import Postman from "../../toolStack/postman_toolStack.png"
import Git from "../../toolStack/git_toolStack.png"
import Json from "../../toolStack/json_toolStack.png"
import { ThemeProContext } from '../../Contexts/ThemeContext'
import { Grid, GridItem } from '@chakra-ui/react'
import ToolCard from '../toolCard/ToolCard'


let toolStack=[
  {name:"Github",
  logo:GitHub
  },
  {name:"NPM",
  logo:Npm
  },
  {name:"Netlify",
  logo:Netlify
  },
  {name:"Postman",
  logo:Postman
  },
  {name:"Git",
  logo:Git
  },
  {name:"JSON Server",
  logo:Json
  }
]

let darkBackGround = "black";
let lightBackGround = "white";
const Tools = () => {
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
      <h1 className="pl-title">Tools</h1>
      <p className="pl-desc">
        This section displays tools I use.
      </p>
    </div>
    
      <Grid templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(5, 1fr)"]} gap={6} className="pl-list">
        {toolStack.map((item) => (
          <GridItem w="50%" h="50%">
            <ToolCard key={item.name} name={item.name} logo={item.logo} />
          </GridItem>
        ))}
      </Grid>
   
  </div>
  )
}

export default Tools