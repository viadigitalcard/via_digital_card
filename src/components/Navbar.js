import React, { useState } from "react";
import {
  Box,
  Flex,
  Center,
  HStack,
  Text,
  Image,
  Button,
  useColorModeValue,
  Link,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {
  const logo = useColorModeValue(
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646034354/digital%20card/landing-page/logo_zt1jb4.png",
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646034356/digital%20card/landing-page/logo-dark_yijgxs.png"
  );
  const textColor = useColorModeValue("black", "white");
  const [openNavbar, setOpenNavbar] = useState(false);
  const bgColor = useColorModeValue("white", "black.200");

  return (
    <Box bgColor={bgColor} pt="60px" pos="relative">
      <Flex p="0px 50px" alignItems={"center"} justifyContent="space-between">
        <Box flexShrink={"0"}>
          <Image src={logo} alt="" />
        </Box>
        <Box
          zIndex={openNavbar ? "0" : "5"}
          fontSize={"2rem"}
          display={{base:"block",lg:'none'}}
          onClick={() => setOpenNavbar(true)}
          color={textColor}
        >
          <BiMenu />
        </Box>
        <Flex
          pos={{ base: "absolute", lg: "static" }}
          top="0"
          right="0"
          bgColor={bgColor}
          w={{ base: "100%", xs: "300px", lg: "100%" }}
          h={{ base: "100vh", lg: "max-content" }}
          alignItems={"center"}
          opacity={{base:openNavbar ? "100%" : "0",lg:'100%'}}
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          justifyContent={{base:"center",lg:'flex-end'}}
          fontSize="1.125rem"
          color={textColor}
          transition="all 0.5s ease"
          minH={{base:"500px",lg:'0'}}
          pl={{base:"40px",lg:'0'}}
        >
          <Flex
            d="flex"
            w="100%"
            mb="40px"
            justifyContent={"flex-end"}
            color={textColor}
            display={{ lg: "none" }}
          >
            <Box w="max-content" onClick={()=>setOpenNavbar(false)} mr="40px" fontSize={"2rem"}>
              <MdClose />
            </Box>
          </Flex>
          <Link
            p="5px"
            m={{ base: "10px 0px", lg: "0px 20px" }}
            _hover={{ textDecoration: "none" }}
            _focus={{ borderBottom: "2px solid #77C208" }}
            _active={{ borderBottom: "2px solid #77C208" }}
            href="#"
          >
            Home
          </Link>
          <Link
            p="5px"
            m={{ base: "10px 0px", lg: "0px 20px" }}
            _hover={{ textDecoration: "none" }}
            _focus={{ borderBottom: "2px solid #77C208" }}
            _active={{ borderBottom: "2px solid #77C208" }}
            href="#"
          >
            How it works?
          </Link>
          <Link
            p="5px"
            m={{ base: "10px 0px", lg: "0px 20px" }}
            _hover={{ textDecoration: "none" }}
            _focus={{ borderBottom: "2px solid #77C208" }}
            _active={{ borderBottom: "2px solid #77C208" }}
            href="#"
          >
            About Us
          </Link>
          <Link
            p="5px"
            m={{ base: "10px 0px", lg: "0px 20px" }}
            _hover={{ textDecoration: "none" }}
            _focus={{ borderBottom: "2px solid #77C208" }}
            _active={{ borderBottom: "2px solid #77C208" }}
            href="#"
          >
            Contact Us
          </Link>
          <Flex
            p="5px"
            m={{ base: "10px 0px", lg: "0px 20px" }}
            alignItems={"center"}
          >
            <Avatar
              boxSize={"33px"}
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
            <Text ml="12px">Ask Join</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
