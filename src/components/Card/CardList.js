import React from "react";
import {
  VStack,
  Flex,
  Text,
  Button,
  Box,
  Center,
  Image,
  HStack,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const CardList = () => {
  return (
    <Center w="100%">
      <VStack w="100%" mt="50px" maxW={"1205px"} spacing="15px">
        <Flex
          boxShadow="8px 8px 35px 0px #0000001A"
          borderRadius={'30px'}
          w="100%"
          justifyContent={"space-between"}
          alignItems="center"
          pr='43px'
        >
          <Flex alignItems={"center"}>
            <Box w="241px" h="216px">
              <Image
                borderRadius={"30px"}
                w="100%"
                h="100%"
                objectFit={"cover"}
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
              />
            </Box>
            <Box ml="45px">
              <Text fontWeight={"500"} fontSize="2.25rem">
                Rahul Sharma
              </Text>
              <Flex alignItems={"center"}>
                <Box fontSize={"1.5rem"} color={"greenBrand.100"}>
                  <GoLocation />
                </Box>
                <Text ml="20px" fontSize={"1.125rem"}>
                  Kavita apartment mumbai
                </Text>
              </Flex>
              <HStack mt="18px" spacing={"22px"} fontSize="1.2rem">
                <Box
                  bgColor={"greenBrand.100"}
                  p="5px"
                  borderRadius="8px"
                  color="white"
                >
                  <FaFacebookF />
                </Box>
                <Box
                  bgColor={"greenBrand.100"}
                  p="5px"
                  borderRadius="8px"
                  color="white"
                >
                  <GrLinkedinOption />
                </Box>
                <Box
                  bgColor={"greenBrand.100"}
                  p="5px"
                  borderRadius="8px"
                  color="white"
                >
                  <FaTwitter />
                </Box>
                <Box
                  bgColor={"greenBrand.100"}
                  p="5px"
                  borderRadius="8px"
                  color="white"
                >
                  <FaInstagram />
                </Box>
              </HStack>
            </Box>
          </Flex>
          <Button fontSize={"1.5rem"} w="173px" h="62px">
            View
          </Button>
        </Flex>
      </VStack>
    </Center>
  );
};
