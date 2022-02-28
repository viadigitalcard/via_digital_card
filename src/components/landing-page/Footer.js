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
      <Flex alignItems={"center"} w="100%" justifyContent={"space-between"}>
        <Text fontSize={"1.25rem"}>Via digital card</Text>
        <HStack spacing={"22px"} fontSize="1.2rem">
          <Box
            bgColor={bgIcon}
            p="5px"
            borderRadius="8px"
            color={iconColor}
          >
            <FaFacebookF />
          </Box>
          <Box
            bgColor={bgIcon}
            p="5px"
            borderRadius="8px"
            color={iconColor}
          >
            <GrLinkedinOption />
          </Box>
          <Box
            bgColor={bgIcon}
            p="5px"
            borderRadius="8px"
            color={iconColor}
          >
            <FaTwitter />
          </Box>
          <Box
            bgColor={bgIcon}
            p="5px"
            borderRadius="8px"
            color={iconColor}
          >
            <FaInstagram />
          </Box>
        </HStack>
      </Flex>
      <Flex w='100%' mt='66px' fontSize={'0.875rem'} justifyContent={'space-between'} flexWrap='wrap'>
           <VStack alignItems={'flex-start'} spacing='12px'>
             <Text fontSize={'1.25rem'}>Service</Text>
             <Text>Wedding events</Text>
             <Text>Platinum organization</Text>
             <Text>VIP</Text>
             <Text>Deals</Text>
             <Text>Seasonal Items</Text>
           </VStack>
           <VStack alignItems={'flex-start'} spacing='12px'>
             <Text fontSize={'1.25rem'}>Find Us On</Text>
             <Text>Instagram</Text>
             <Text>Facebook</Text>
             <Text>TikTok</Text>
             <Text>SnapChat</Text>
             <Text>Twitter</Text>
           </VStack>
           <VStack alignItems={'flex-start'} spacing='12px'>
             <Text fontSize={'1.25rem'}>Product</Text>
             <Text>Get the app</Text>
             <Text>Loyality program</Text>
             <Text>Affliates</Text>
             <Text>Press</Text>
           </VStack>
           <VStack alignItems={'flex-start'} spacing='12px'>
             <Text fontSize={'1.25rem'}>Help</Text>
               <Text>Returns</Text>
               <Text>FAQ</Text>
               <Text>Contact</Text>
               <Text>Community</Text>
               <Text>Videos</Text>
           </VStack>
      </Flex>
    </Box>
  );
};
