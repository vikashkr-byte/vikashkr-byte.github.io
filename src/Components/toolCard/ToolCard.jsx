import React, { useContext } from 'react'
import { ThemeProContext } from '../../Contexts/ThemeContext'
import "./ToolCard.css"

let darkBackGround="black"
let lightBackGround="white"
const ToolCard = (props) => {
  const {name,logo}=props
  const {theme}=useContext(ThemeProContext)
  console.log('theme:', theme)
    let darkmode
    if(theme=="dark"){
     darkmode=true
    }else{
     darkmode=false
    }
  return (
    <div className='sc'style={darkmode?{backgroundColor:"rgb(191,212,227)",color:darkBackGround}:{backgroundColor:lightBackGround,color:darkBackGround}}>
<div className="sc-img-box">
  <img src={logo} alt={name} className="sc-images" />
</div>
<div className="sc-text-box">
  <h4 className="sc-texts">{name}</h4>
</div>
    </div>
  )
  
}

export default ToolCard