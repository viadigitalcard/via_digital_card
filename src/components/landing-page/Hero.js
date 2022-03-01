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
export const Hero = () => {
  const textColor = useColorModeValue("black", "white");
  const imageLeft = useColorModeValue(
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646033536/digital%20card/landing-page/heroright_vfkybf.png",
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646033539/digital%20card/landing-page/dark-left_wxlpiw.png"
  );
  const imageRight = useColorModeValue(
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646033532/digital%20card/landing-page/heroleft_tqdfez.png",
    "https://res.cloudinary.com/dbm7us31s/image/upload/v1646033543/digital%20card/landing-page/dark-right_idlevf.png"
  );
  return (
    <Center pos="relative" flexDir={"column"} w="100%" p='150px 0px' color={textColor}>
      <Box pos="absolute" left="50px" top="10%">
        <Image src={imageLeft} alt="" />
      </Box>
      <Box pos="absolute" right="50px" bottom={"15%"}>
        <Image src={imageRight} alt="" />
      </Box>
      <Box pos="absolute" right={"15%"} top="10%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033631/digital%20card/landing-page/doodle-two_sfme7d.png"
          alt="candy"
        />
      </Box>
      <Box pos="absolute" left={"10%"} bottom="25%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033631/digital%20card/landing-page/doodle-two_sfme7d.png"
          alt="candy"
        />
      </Box>
      <Box pos="absolute" top="10%" left="30%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033627/digital%20card/landing-page/doodle-one_zanfpm.png"
          alt="ribbon"
        />
      </Box>
      <Box pos="absolute" right="10%" bottom={"10%"}>
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033627/digital%20card/landing-page/doodle-one_zanfpm.png"
          alt="ribbon"
        />
      </Box>
      <Box zIndex={2} d="flex" flexDir={"column"} alignItems="center">
        <Text fontWeight={"500"} fontSize="2.25rem">
          {" "}
          Digital Evolution
        </Text>
        <Box w="600px" mt="40px" lineHeight={"39px"} textAlign={"center"}>
          Evolving and adapting has never proved to be more important than now.
          One can only survive changing times if they’re changing with it. The
          days of printing a thousand visiting cards in order to help gain
          exposure for your business are gone. Via Digital Cards are the new
          deal and it’s revolutionary.
        </Box>
        <Text fontSize={"1.125rem"}></Text>
        <Button fontSize={"1.125rem"} mt="40px" w="281px" h="60px">
          Create Now
        </Button>
      </Box>
    </Center>
  );
};
