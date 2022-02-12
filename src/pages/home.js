import React from 'react'
import {
    Flex,
    Text,
    Box,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    useColorModeValue,
    VStack
  } from "@chakra-ui/react";
  import "@fontsource/poppins"
  import { AiFillContacts } from 'react-icons';

export default function home() {
  return (
      <VStack >
        <Image width={{ base: "150px", md: "200px", lg: "300px"}}  py="20px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp" />
        <Image width="90px" h="90px"  borderRadius="20px" src="https://bit.ly/dan-abramov" />
        <Text
            fontSize={26}
            fontFamily="Open Sans"
            fontWeight={400}
        >
            Diana Hopper
        </Text>
        <Text
            fontSize={13}
            fontFamily=""
        >
            Founder of virtual assets
        </Text>
        <HStack border=" 2px solid red" w="full">
            <Button leftIcon={<AiFillContacts />}></Button>
            <Button leftIcon={<AiFillContacts />}></Button>
            <Button leftIcon={<AiFillContacts />}></Button>
        </HStack>
      </VStack>

  )
}
