import { Stack } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { ThemeProContext } from '../Contexts/ThemeContext';

const ContactUs = () => {
  const { theme, updateTheme } = useContext(ThemeProContext);

  return (
    <Stack w="100%" h="90vh" bgColor={theme==="dark"?"black":"whitesmoke"}>
 
    </Stack>
  )
}

export default ContactUs