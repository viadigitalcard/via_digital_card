import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import NextLink from "next/link";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";

function About() {
  const textColor = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black.100");

  const router = useRouter();
  const logo = useColorModeValue(
    "https://file-upload-via-digital.s3.ap-south-1.amazonaws.com/assets/Logo-final.png",
    "https://file-upload-via-digital.s3.ap-south-1.amazonaws.com/assets/Logo+Dark-final.png"
  );
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <Navbar />
      <Box as={Center}>
        <Box
          px="5%"
          zIndex={2}
          d="flex"
          w="100%"
          flexDir={"column"}
          alignItems="flex-start"
        >
          <Box w="100%" mt="60px" mb="60px">
            <Text fontWeight={"500"} textAlign="center" fontSize="2.25rem">
              {" "}
              About Us
            </Text>
          </Box>
          <Box w="100%" mt="60px" mb="60px">
            <Text fontWeight={"500"} textAlign="center" fontSize="2.25rem">
              {" "}
              Quote
            </Text>
          </Box>

          <Flex alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
            <Box
              w={{ base: "319px", xl: "381px" }}
              h={{ base: "431px", xl: "515px" }}
              flexShrink={"0"}
            >
              <Image
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646078081/digital%20card/landing-page/about_mqf8ls.png"
                alt=""
                w="100%"
                h="100%"
              />
            </Box>
            <VStack
              ml={{ base: "0", md: "45px" }}
              p={{ base: "20px", md: "0" }}
              transform={{ base: "translateY(-50px)", md: "translateY(0)" }}
              borderRadius="23px"
              bgColor={{ base: bg, md: "transparent" }}
              spacing={"30px"}
              alignItems={"flex-start"}
            >
              <Box
                fontWeight={"500"}
                fontSize={{ base: "1.5rem", md: "2.25rem" }}
                color={{ base: "greenBrand.100", md: textColor }}
              >
                <Text>Contact-less, Paper-.</Text>
                <Text>less and Effort-less.</Text>
              </Box>
              <Box w={{ base: "90%", xl: "630px" }}>
                <Text
                  fontSize={{ base: "1rem", md: "1.125rem" }}
                  lineHeight="35px"
                >
                  Contact sharing has never been easier and more simplified. Via
                  Digital Card comes with integrated NFC technology which
                  enables quick and instant sharing of information. At Via
                  Digital Card, we aim to help everyone go digital with more
                  causes than just one Contact sharing has never been easier and
                  more simplified. Via Digital Card comes with integrated NFC
                  technology which enables quick and instant sharing of
                  information. At Via Digital Card, we aim to help everyone go
                  digital with more causes than just one.{" "}
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Flex
            w="100%"
            mt="100px"
            alignItems={"center"}
            justifyContent="space-evenly"
            flexDir={{ base: "column", md: "row" }}
          >
            <VStack
              ml={{ base: "0", md: "45px" }}
              p={{ base: "20px", md: "0" }}
              transform={{ base: "translateY(-50px)", md: "translateY(0)" }}
              borderRadius="23px"
              bgColor={{ base: bg, md: "transparent" }}
              spacing={"30px"}
              alignItems={"flex-start"}
            >
              <Box
                fontWeight={"500"}
                fontSize={{ base: "1.5rem", md: "2.25rem" }}
                color={{ base: "greenBrand.100", md: textColor }}
              >
                <Text>Contact-less, Paper-.</Text>
                <Text>less and Effort-less.</Text>
              </Box>
              <Box w={{ base: "90%", xl: "630px" }}>
                <Text
                  fontSize={{ base: "1rem", md: "1.125rem" }}
                  lineHeight="35px"
                >
                  Contact sharing has never been easier and more simplified. Via
                  Digital Card comes with integrated NFC technology which
                  enables quick and instant sharing of information. At Via
                  Digital Card, we aim to help everyone go digital with more
                  causes than just one Contact sharing has never been easier and
                  more simplified. Via Digital Card comes with integrated NFC
                  technology which enables quick and instant sharing of
                  information. At Via Digital Card, we aim to help everyone go
                  digital with more causes than just one.{" "}
                </Text>
              </Box>
            </VStack>
            <Spacer />
            <Box
              w={{ base: "319px", xl: "381px" }}
              h={{ base: "431px", xl: "515px" }}
              flexShrink={"0"}
            >
              <Image
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646078081/digital%20card/landing-page/about_mqf8ls.png"
                alt=""
                w="100%"
                h="100%"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default About;
