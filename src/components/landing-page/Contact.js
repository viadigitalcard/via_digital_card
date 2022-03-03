import React, { useRef, useEffect, useState } from "react";
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
  Input,
  Textarea,
} from "@chakra-ui/react";
export const Contact = () => {
  const textColor = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black.100");
  return (
    <Center
      pos="relative"
      flexDir={"column"}
      w="100%"
      p="150px 0px"
      color={textColor}
    >
      <Box pos="absolute" bottom="5%" right="5%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033627/digital%20card/landing-page/doodle-one_zanfpm.png"
          alt="ribbon"
        />
      </Box>

      <Center zIndex={2} w="100%" flexDir={"column"}>
        <Text fontWeight={"500"} fontSize="2.25rem">
          {" "}
          Contact Us
        </Text>
        <Text
          fontSize={"4rem"}
          color="greenBrand.100"
          fontWeight={"600"}
          mt="45px"
          mb="30px"
        >
          Hello !
        </Text>
        <Box
          w="90%"
          maxW={"1100px"}
          bgColor={bg}
          p="50px"
          borderRadius={"44px"}
        >
          <Flex w="100%" alignItems={"center"}>
            <Input mr="60px" type="text" _placeholder={{color:'greenBrand.100'}} placeholder="Name" h="75px" />
            <Input type="email" _placeholder={{color:'greenBrand.100'}} placeholder="Email" h="75px" />
          </Flex>
          <Flex mt="57px" w="100%" alignItems={"center"}>
            <Input mr="60px" _placeholder={{color:'greenBrand.100'}} type="text" placeholder="Company name" h="75px" />
            <Input type="email" placeholder="Email" h="75px" />
          </Flex>
          <Textarea
            borderColor={"#88E000"}
            mt="57px"
            rows="10"
            w="100%"
            placeholder="Your Message"
            _placeholder={{color:'greenBrand.100'}}
          ></Textarea>
          <Button
            onClick={() => handleSlides()}
            fontSize={"1.5rem"}
            m="20px auto"
            w="283px"
            h="84px"
            d="block"
            mt="57px"
          >
            Submit
          </Button>
        </Box>
      </Center>
    </Center>
  );
};
