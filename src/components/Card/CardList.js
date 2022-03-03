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
  useColorModeValue,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const CardList = () => {
  const bgColor = useColorModeValue("black.200", "white");
  const bg = useColorModeValue("white", "black.100");
  const iconBg = useColorModeValue("greenBrand.100", "white");
  const textHover = useColorModeValue("white", "greenBrand.100");
  const textHoverMobile = useColorModeValue("greenBrand.100", "white");
  const textColor = useColorModeValue("black", "white");

  return (
    <Center w="100%">
      <VStack w="95%" mt="50px" maxW={"1205px"} spacing="15px">
        <Box
          role="group"
          borderRadius={"30px"}
          w="100%"
          boxShadow="8px 8px 35px 0px #0000001A"
          _hover={{ bgColor: "greenBrand.100" }}
          bgColor={bg}
        >
          <Flex
            w="100%"
            justifyContent={"space-between"}
            alignItems="center"
            borderRadius={"30px"}
            pr="43px"
           
          >
            <Flex alignItems={"center"}>
              <Box w={{base:"115px",md:"241px"}} h={{base:"174px",md:"216px"}}>
                <Image
                  borderTopRadius={{base:'30px'}}
                  borderBottomRadius={{base:"0px",md:"30px"}}
                  w="100%"
                  h="100%"
                  objectFit={"cover"}
                  src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                />
              </Box>
              <Box _groupHover={{ color: "white" }} color={textColor} ml={{base:"10px",md:"45px"}}>
                <Text fontWeight={"500"} fontSize={{base:"1.25rem",md:"2.25rem"}}>
                  Rahul Sharma
                </Text>
                <Flex alignItems={"center"}>
                  <Text fontSize={{base:"0.875rem",md:"1.125rem"}}>Founder of virtual assets</Text>
                </Flex>
                <HStack
                  color={bg}
                  _groupHover={{ color: "greenBrand.100" }}
                  mt="18px"
                  spacing={"22px"}
                  fontSize={{base:"1rem",md:"1.2rem"}}
                >
                  <Box
                    bgColor={iconBg}
                    _groupHover={{ bgColor: "white" }}
                    p="5px"
                    borderRadius="8px"
                  >
                    <FaFacebookF />
                  </Box>
                  <Box
                    bgColor={iconBg}
                    _groupHover={{ bgColor: "white" }}
                    p="5px"
                    borderRadius="8px"
                  >
                    <GrLinkedinOption />
                  </Box>
                  <Box
                    bgColor={iconBg}
                    _groupHover={{ bgColor: "white" }}
                    p="5px"
                    borderRadius="8px"
                  >
                    <FaTwitter />
                  </Box>
                  <Box
                    bgColor={iconBg}
                    _groupHover={{ bgColor: "white" }}
                    p="5px"
                    borderRadius="8px"
                  >
                    <FaInstagram />
                  </Box>
                </HStack>
              </Box>
            </Flex>
            <Button
              _groupHover={{ bg: bg, color: "greenBrand.100" }}
              fontSize={"1.5rem"}
              w="173px"
              h="62px"
              display={{base:"none",md:"block"}}
            >
              View
            </Button>
          </Flex>
          <Center
            h="48px"
            borderBottomRadius={"16px"}
            bgColor={"greenBrand.100"}
            color="white"
            fontSize={'1.25rem'}
            display={{base:"flex",md:"none"}}
            _groupHover={{bgColor:bg,color:'greenBrand.100'}}
          >
            View More
          </Center>
        </Box>
      </VStack>
    </Center>
  );
};
