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
  useColorMode,
} from "@chakra-ui/react";
import Select from "react-select";

export const Contact = () => {
  const textColor = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black.100");
  const select = useColorModeValue("custom-select-light", "custom-select");
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        (state.isFocused && "#353647") ||
        (state.isSelected && "transparent") ||
        "transparent",
    }),
  };
  const customStylesLight = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        (state.isFocused && "#F4FFE2") ||
        (state.isSelected && "transparent") ||
        "transparent",
      color: "black",
    }),
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "india", label: "india" },
  ];
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
        <Text fontWeight={"500"} fontSize={{ base: "1.5rem", lg: "2.25rem" }}>
          {" "}
          Contact Us
        </Text>
        <Text
          fontSize={{ base: "2.25rem", sm: "4rem" }}
          color="greenBrand.100"
          fontWeight={"600"}
          mt="45px"
          mb="30px"
        >
          Hello !
        </Text>
        <Box
          w={{base:"92%","2sm":"90%"}}
          maxW={"1100px"}
          bgColor={{base:"transparent","2sm":bg}}
          borderRadius={"44px"}
        >
          <Flex
            w="100%"
            flexDir={{ base: "column", "2sm": "row" }}
            alignItems={"center"}
          >
            <Input
              mr={{ base: "0", "2sm": "60px" }}
              type="text"
              _placeholder={{ color: "greenBrand.100" }}
              placeholder="Name"
              h={{ base: "55px", "2sm": "75px" }}
              fontSize={{ base: "0.875rem", md: "1.125rem" }}
            />
            <Input
              type="email"
              mt={{ base: "20px", "2sm": "0" }}
              _placeholder={{ color: "greenBrand.100" }}
              placeholder="Email"
              h={{ base: "55px", "2sm": "75px" }}
              fontSize={{ base: "0.875rem", md: "1.125rem" }}
            />
          </Flex>
          <Flex
            mt={{ base: "20px", "2sm": "57px" }}
            justifyContent={"space-between"}
            w="100%"
            alignItems={"center"}
            flexDir={{ base: "column", "2sm": "row" }}
          >
            <Input
              _placeholder={{ color: "greenBrand.100" }}
              type="text"
              placeholder="Company name"
              h={{ base: "55px", "2sm": "75px" }}
              w={{ base: "100%", "2sm": "47%" }}
              flexShrink={"0"}
              fontSize={{ base: "0.875rem", md: "1.125rem" }}
              mb={{ base: "20px", "2sm": "0" }}
            />
            <Select
              styles={colorMode === "dark" ? customStyles : customStylesLight}
              options={options}
              isSearchable={false}
              hideSelectedOptions={false}
              placeholder={"Country"}
              className="react-select"
              classNamePrefix={select}
            />
          </Flex>
          <Textarea
            borderColor={"#88E000"}
            mt={{ base: "20px", "2sm": "57px" }}
            rows="10"
            w="100%"
            placeholder="Your Message"
            _placeholder={{ color: "greenBrand.100" }}
            fontSize={{ base: "0.875rem", md: "1.125rem" }}
          ></Textarea>
          <Button
            onClick={() => handleSlides()}
            fontSize={{base:"1.125rem","2sm":"1.5rem"}}
            m="20px auto"
            w={{base:"319px","2sm":"283px"}}
            h={{base:"62px","2sm":"84px"}}
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
