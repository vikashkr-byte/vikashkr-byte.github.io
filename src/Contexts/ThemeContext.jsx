import { createContext, useState } from "react";

export const ThemeProContext=createContext()

export const ThemeContextProvider=({children})=>{
const [theme,setTheme]=useState("dark")
const updateTheme=()=>{
    setTheme(theme==="dark"?"light":"dark")
}
return(
    <ThemeProContext.Provider value={{theme,updateTheme}} >
        {children}
    </ThemeProContext.Provider>
)
}