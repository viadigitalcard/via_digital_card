import React from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const Footer = () => {
  const textColor = useColorModeValue("black", "white");
  const iconColor = useColorModeValue("white", "black");
  const bg = useColorModeValue("#EAF5D9", "black.100");
  const bgIcon = useColorModeValue("black", "white");

  return (
    <Box p="90px 10vw" w="100%" bgColor={bg} color={textColor}>
      <Flex
        alignItems={{ base: "flex-start", xs: "center" }}
        flexDir={{ base: "column", xs: "row" }}
        w="100%"
        justifyContent={"space-between"}
      >
        <Text fontSize={"1.25rem"}>Via digital card</Text>
        <HStack
          spacing={"22px"}
          mt={{ base: "27px", xs: "0" }}
          fontSize="1.2rem"
        >
          <Box bgColor={bgIcon} p="5px" borderRadius="8px" color={iconColor}>
            <FaFacebookF />
          </Box>
          <Box bgColor={bgIcon} p="5px" borderRadius="8px" color={iconColor}>
            <GrLinkedinOption />
          </Box>
          <Box bgColor={bgIcon} p="5px" borderRadius="8px" color={iconColor}>
            <FaTwitter />
          </Box>
          <Box bgColor={bgIcon} p="5px" borderRadius="8px" color={iconColor}>
            <FaInstagram />
          </Box>
        </HStack>
      </Flex>
      <Flex
        w="100%"
        mt={{ base: "27px", sm: "66px" }}
        flexDir={{ base: "column", xs: "row" }}
        ml={{ base: "-20px", sm: "0" }}
        fontSize={"0.875rem"}
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        flexWrap="wrap"
      >
        <VStack
          alignItems={"flex-start"}
          m={{ base: "20px", sm: "0" }}
          spacing="12px"
        >
          <Text fontSize={"1.25rem"} as={Link} href="/">Home</Text>
          <Text fontSize={"1.25rem"} as={Link} href="#howitworks">How it works?</Text>
          <Text fontSize={"1.25rem"} as={Link} href="#about">About Us</Text>
          <Text fontSize={"1.25rem"} as={Link} href="#contact">Contact Us</Text>
          <Text fontSize={"1.25rem"} as={Link} href="/pricing">Pricing</Text>
        </VStack>
      </Flex>
    </Box>
  );
};
