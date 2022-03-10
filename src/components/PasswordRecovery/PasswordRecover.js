import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Center,
  Text,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineEye } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
export const PasswordRecover = () => {
  const textColor = useColorModeValue("black", "white");
  const textColor1 = useColorModeValue("black", "#C8C8C8");
  const textColor2 = useColorModeValue("blue", "white");

  const bg = useColorModeValue("white", "black.200");

  return (
    <Flex w="100%" p="15px 20px" bgColor={bg} minH={"700px"} h="100vh">
      <Box
        h="100%"
        w="max-content"
        display={{ base: "none", lg: "block" }}
        flexShrink={"0"}
      >
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646849213/digital%20card/SignUp/Mask_Group_2_h7vkom.png"
          alt=""
          h="100%"
          maxW="743px"
          w="100%"
        />
      </Box>
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        pl={{ base: "0", lg: "8vw" }}
        w={{ base: "auto", lg: "100%" }}
        m={{ base: "0px auto", lg: "0px" }}
        color={textColor}
      >
        <Box w="100%" maxW={"473px"}>
          <Flex alignItems={"center"}>
            <Box fontSize={"2rem"} display={{ base: "block", lg: "none" }}>
              <BsArrowLeftShort />
            </Box>
            <Text fontSize={{ base: "1.125rem", lg: "1.7rem", xl: "2.25rem" }}>
              Recovery password
            </Text>
          </Flex>
          <Text fontSize={"1.5rem"} color={textColor1} mt="21px">
            Create new password
          </Text>
          <Text
            fontSize={"1rem"}
            lineHeight="35px"
            color={textColor1}
            mt="16px"
            fontWeight={"300"}
          >
            Your new password must be different from previous used passwords.
          </Text>
          <Box
            mt="38px"
            fontSize={{ base: "0.875rem", md: "1rem" }}
            w="100%"
            maxW={"388px"}
          >
            <Input
              h={{ base: "54px", md: "75px" }}
              type="email"
              placeholder="Enter Email Address"
            />
          </Box>
          <Text color={"#747474"} m="10px 0px">
            Must be atleast 8 characters.
          </Text>
          <Box
            w="100%"
            h="75px"
            fontSize={{ base: "0.875rem", md: "1rem" }}
            maxW={"388px"}
            position="relative"
          >
            <Input
              h={{ base: "54px", md: "75px" }}
              type="password"
              placeholder="Password"
            />
            <Box
              pos="absolute"
              color="#747474"
              fontSize={"2rem"}
              top="20px"
              right="20px"
            >
              <AiOutlineEye />
            </Box>
          </Box>
          <Text color={"#747474"} m="10px 0px">
            Both password must match.
          </Text>
          <Button
            fontWeight={"600"}
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            maxW="388px"
            w={{ base: "100%", xs: "388px" }}
            h="62px"
            mt="40px"
          >
            Sign In
          </Button>
        </Box>
        <p style={{ color: textColor1 }}>
          Didn’t receive the email? Check your spam folder or{" "}
          <span style={{ color: textColor2, fontWeight: "500" }}>
            try again
          </span>
        </p>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        pl={{ base: "0", lg: "8vw" }}
        pt="50px"
        w={{ base: "auto", lg: "100%" }}
        m={{ base: "0px auto", lg: "0px" }}
        color={textColor}
      >
        <Box>
          <Flex alignItems={"center"}>
            <Box fontSize={"2rem"} display={{ base: "block", lg: "none" }}>
              <BsArrowLeftShort />
            </Box>
            <Text fontSize={{ base: "1.125rem", lg: "1.7rem", xl: "2.25rem" }}>
              Recovery password
            </Text>
          </Flex>
          <Center
            fontSize={"2.5rem"}
            boxSize={{ base: "72px", md: "108px" }}
            bgColor="greenBrand.100"
            borderRadius={"13px"}
            mt="50px"
            color="white"
          >
            <AiOutlineMail />
          </Center>
          <Text fontWeight={"500"} fontSize="1.5rem" mt="40px">
            Check your email
          </Text>
          <Text color={textColor1} fontSize="1rem" mt="16px">
            We have sent a password recover instruction to your email.
          </Text>
          <Button
            fontWeight={"600"}
            h="62px"
            mt="40px"
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            maxW="388px"
            w={{ base: "100%", xs: "388px" }}
          >
            Open Email app
          </Button>
        </Box>

        <p style={{ color: textColor1 }}>
          Didn’t receive the email? Check your spam folder or{" "}
          <span style={{ color: textColor2, fontWeight: "500" }}>
            try again
          </span>
        </p>
      </Flex>
    </Flex>
  );
};
