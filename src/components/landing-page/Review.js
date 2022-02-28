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
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export const Review = () => {
  const textColor = useColorModeValue("black", "white");
  const ref = useRef();
  const [swipe, setSwipe] = useState(null);
  const handleSlides = () => {
    swipe.slideNext(400, true);
    console.log("just log");
  };
  const handle = (swiper) => {
    setSwipe(swiper);
  };
  console.log(swipe);

  return (
    <Center
      pos="relative"
      flexDir={"column"}
      w="100%"
      p='150px 0px'
      color={textColor}
    >
      <Box pos="absolute" left={"5%"} bottom="30%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033631/digital%20card/landing-page/doodle-two_sfme7d.png"
          alt="candy"
        />
      </Box>

      <Box pos="absolute" top="20%" right="15%">
        <Image
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1646033627/digital%20card/landing-page/doodle-one_zanfpm.png"
          alt="ribbon"
        />
      </Box>

      <Box zIndex={2} d="flex" flexDir={"column"} alignItems="center">
        <Text fontWeight={"500"} fontSize="2.25rem">
          {" "}
          Review
        </Text>
        <Box
          w="600px"
          mt="40px"
          fontWeight={"500"}
          lineHeight={"39px"}
          textAlign={"center"}
        >
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            ref={ref}
            onSwiper={(swiper) => handle(swiper)}
          >
            <SwiperSlide>
              <VStack spacing={"30px"}>
                <Box w="136px" h="122px">
                  <Image
                    borderRadius={"42px"}
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                    alt=""
                  />
                </Box>
                <Text fontSize="2.25rem">heading</Text>
                <Text fontSize={"1.125rem"} lineHeight="35px">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the In publishing and
                  graphic design, Lorem ipsum is a placeholder text commonly
                  used to demonstrate the
                </Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack spacing={"30px"}>
                <Box w="136px" h="122px">
                  <Image
                    borderRadius={"42px"}
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                    alt=""
                  />
                </Box>
                <Text fontSize="2.25rem">heading</Text>
                <Text fontSize={"1.125rem"} lineHeight="35px">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the In publishing and
                  graphic design, Lorem ipsum is a placeholder text commonly
                  used to demonstrate the
                </Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack spacing={"30px"}>
                <Box w="136px" h="122px">
                  <Image
                    borderRadius={"42px"}
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                    alt=""
                  />
                </Box>
                <Text fontSize="2.25rem">heading</Text>
                <Text fontSize={"1.125rem"} lineHeight="35px">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the In publishing and
                  graphic design, Lorem ipsum is a placeholder text commonly
                  used to demonstrate the
                </Text>
              </VStack>
            </SwiperSlide>
          </Swiper>
        </Box>

        <Button
          onClick={() => handleSlides()}
          fontSize={"1.5rem"}
          mt="20px"
          w="190px"
          h="73px"
        >
          Next
        </Button>
      </Box>
    </Center>
  );
};
