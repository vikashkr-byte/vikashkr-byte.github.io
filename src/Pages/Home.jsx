import { Box, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { ThemeProContext } from '../Contexts/ThemeContext';

const Home = () => {
  const { theme, updateTheme } = useContext(ThemeProContext);

  return (
//    <Stack w="100%" h="90vh" bgColor={theme==="dark"?"rgb(31,31,31)":"whitesmoke"}>
   <Stack w="100%" h="90vh" bgColor={theme==="dark"?"black":"whitesmoke"}>
 
   </Stack>
  )
}

export default Home