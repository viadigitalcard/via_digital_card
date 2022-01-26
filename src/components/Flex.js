import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Text,
  Center,
  Square,
  Box,
  Stack,
  HStack,
  VStack,
  StackDivider,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import SignUpImage from "../assets/images/SignUp.png"
import Logo from "../assets/images/Logo.webp"
import Image from 'next/image'

export default function Flexeg() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange1 = (event) => setName(event.target.value);
  const handleChange2 = (event) => setEmail(event.target.value);
  const handleChange3 = (event) => setPassword(event.target.value);

  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  return (
    <>
      <HStack h="100vh" w="1200px" border="2px solid red" >
        <Flex
          border="2px solid red"
          flexDirection="column"
          width="50%"
          height="100vh"
          backgroundColor="white.900"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Logo} height="80" width="320" />
          <Text
            fontSize={{ base: "36px", md: "40px", lg: "48px" }}
            marginBottom={45}
            fontFamily="Margot"
          >
            Sign Up
          </Text>

          <Input
            placeholder="Name"
            width={{ base: "300px", md: "300px", lg: "400px" }}
            marginTop={15}
            size="lg"
            variant="outline"
            focusBorderColor="#88E000"
            onChange={handleChange1}
            value={name}
          />
          <Input
            placeholder="Enter email address"
            width={{ base: "300px", md: "300px", lg: "400px" }}
            marginTop={15}
            size="lg"
            variant="outline"
            focusBorderColor="#88E000"
            onChange={handleChange2}
            value={email}
          />
          <InputGroup
            size="lg"
            width={{ base: "300px", md: "300px", lg: "400px" }}
            marginTop={15}
            variant="outline"
            onChange={handleChange3}
            value={password}
          >
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
              focusBorderColor="#88E000"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text marginTop={15} marginLeft={40} fontWeight="semibold">
            Recovery password
          </Text>

          <Button marginTop={45} bg="#88E000" size="md" width="300px">
            Sign In
          </Button>

          <Flex direction="row" marginTop={55}>
            <Text fontWeight="light" color="gray.600">
              {" "}
              Not a member ?{" "}
            </Text>
            <Text fontWeight="bold" px={2}>
              {" "}
              Create account now{" "}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Image src={SignUpImage} height="800" />
        </Box>
      </HStack>
    </>
  );
}
