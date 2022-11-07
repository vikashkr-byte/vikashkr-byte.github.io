import { Box, Image, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { ThemeProContext } from "../Contexts/ThemeContext";

const Home = () => {
  const { theme, updateTheme } = useContext(ThemeProContext);

  return (
    //    <Stack w="100%" h="90vh" bgColor={theme==="dark"?"rgb(31,31,31)":"whitesmoke"}>
    <Stack
      w="100%"
      h="90vh"
      px="10px"
      bgColor={theme === "dark" ? "black" : "whitesmoke"}
    >
      <Box
        w="40%"
        mx="auto"
        mt="40px"
        mb="20px"
        borderRadius={"50%"}
        p="5px"
        bgColor={theme === "dark" ? "rgb(191,212,227)" : "rgb(201,178,134)"}
      >
        <Image
          w={"100%"}
          src="https://i.postimg.cc/BQBG1zRz/vikash-Port-Folio24.png"
          alt="mainpic_Small"
          borderRadius={"50%"}
        />
      </Box>
      <Box
        w="100%"
        h="230px"
        bgColor={theme === "dark" ? "rgb(191,212,227)" : "rgb(201,178,134)"}
        borderRadius="15px"
      ></Box>
    </Stack>
  );
};

export default Home;

//display={["none", "none", "flex", "flex", "flex"]}
