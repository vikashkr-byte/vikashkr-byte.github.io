import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProContext } from "../Contexts/ThemeContext";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/aboutme",
    title: "About Me",
  },
  {
    path: "/portfolio",
    title: "Portfolio",
  },
  {
    path: "/contact",
    title: "Contact",
  }
  // {
  //   path: "",
  //   title: "Resume",
  // },
];
const Navbar = () => {
  const { theme, updateTheme } = useContext(ThemeProContext);
  return (
    <Flex
      px="25px"
      alignItems="center"
      gap="2"
      bgColor={theme === "dark" ? "#1A2636" : "rgb(201,178,134)"}
      h="60px"
      color={theme === "dark" ? "rgb(191,212,227)" : "whitesmoke"}
      pos="sticky"
      top="0px"
      zIndex={"1000"}
    >
      <Box px="15px">
        <Image
          src="https://i.postimg.cc/6q35LnyF/v-logo-removebg-preview.png"
          w="45px"
          alt="v_logo"
          display={["none", "none", "flex", "flex", "flex"]}
        />
        <Box display={["flex", "flex", "none", "none", "none"]}>
          <Menu>
            <MenuButton
              bgColor={theme==="dark"?"#1A2636":"rgb(201,178,134)"}
              _hover={theme==="dark"?{ bgColor: "rgb(191,212,227)", color: "#1A2636" }:{  color: "rgb(201,178,134)",
              backgroundColor: "whitesmoke"}}
              borderRadius="5px"
            >
              <HiMenu size="35px" px="5px" />
            </MenuButton>
            <MenuList bgColor={theme==="dark"?"rgb(191,212,227)":""}color={theme==="dark"?"#1A2636":"rgb(201,178,134)"}>
              {links.map((linkitem2) => (
                <MenuItem fontWeight={"700"} key={linkitem2.path}>
                  <NavLink to={linkitem2.path} >{linkitem2.title}</NavLink>
                  </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Spacer />
      {theme === "dark" ? (
        <ButtonGroup gap="2" display={["none", "none", "flex", "flex", "flex"]}>
          {links.map((item) => (
            <NavLink
              className="linkslist"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#1A2636", backgroundColor: "rgb(191,212,227)" }
                  : { color: "rgb(191,212,227)", backgroundColor: "#1A2636" };
              }}
              end
              key={item.title}
              to={item.path}
              
            >
              {item.title}
            </NavLink>
          ))}
     <a className="linkslist" href="https://drive.google.com/file/d/1H0x2pYUrhaZ0cZEvYve7qFtlcku3LoZx/view?usp=share_link" target="_blank" rel="noopener noreferrer" >Resume</a>
        </ButtonGroup>
      ) : (
        <ButtonGroup gap="2" display={["none", "none", "flex", "flex", "flex"]}>
          {links.map((item) => (
            <NavLink
              className="linkslist"
              style={({ isActive }) => {
                return isActive
                  ? { color: "rgb(201,178,134)", backgroundColor: "whitesmoke" }
                  : {
                      color: "whitesmoke",
                      backgroundColor: "rgb(201,178,134)",
                    };
              }}
              end
              key={item.title}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
            <a className="linkslist" href="https://drive.google.com/file/d/1H0x2pYUrhaZ0cZEvYve7qFtlcku3LoZx/view?usp=share_link" target="_blank" rel="noopener noreferrer" >Resume</a>
        </ButtonGroup>
      )}
      <ButtonGroup>
        <Button
          onClick={() => updateTheme()}
          w="45px"
          fontSize={"30px"}
          justifyContent="center"
          bgColor={theme === "dark" ? "#1A2636" : "rgb(201,178,134)"}
          _hover={
            theme === "dark"
              ? { backgroundColor: "#1A2636" }
              : { backgroundColor: "rgb(201,178,134)" }
          }
        >
          {theme === "dark" ? "??????" : "????"}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
