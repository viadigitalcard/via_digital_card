import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Image,
  Img,
  Text,
  HStack,
  Center,
  VStack,
  Button,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
export const DigitalCard = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  console.log(tabIndex);
  return (
    <Box p="50px 8vw">
      <Tabs
        display={{ base: "none", "2sm": "block" }}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList border={"none"} justifyContent="space-between">
          <Box>
            <Tab
              color={"greenBrand.100"}
              fontSize={"1.125rem"}
              _selected={{ color: "blue", border: "none" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              Digital Card
            </Tab>
          </Box>
          <Flex>
            <Tab
              fontSize={"1.125rem"}
              color="rgba(23, 23, 23, 0.38)"
              _selected={{ color: "black", border: "none" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              About Us
            </Tab>
            <Tab
              color="rgba(23, 23, 23, 0.38)"
              fontSize={"1.125rem"}
              _selected={{ color: "black", border: "none" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              {"Let's Connect"}
            </Tab>
            <Tab
              color="rgba(23, 23, 23, 0.38)"
              fontSize={"1.125rem"}
              _selected={{ color: "black", border: "none" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              Get in touch
            </Tab>
          </Flex>
        </TabList>
        <Flex
          w="100%"
          p="45px 0px 0px 0px"
          justifyContent={"space-between"}
          flexDir={{ "2sm": "column", lg: "row" }}
        >
          <Box>
            <Flex
              alignItems={{ "2sm": "center", lg: "flex-start", xl: "center" }}
              textAlign={{ base: "center", "2sm": "left" }}
              flexDir={{ "2sm": "row", lg: "column", xl: "row" }}
            >
              <Box
                w="193px"
                h="195px"
                flexShrink={"0"}
                bgColor={"#c5c5c5"}
                borderRadius="20px"
              >
                <Image
                  borderRadius="20px"
                  objectFit={"cover"}
                  src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                />
              </Box>
              <Box ml={{ "2sm": "50px", lg: "0", xl: "3.4vw", "2xl": "50px" }}>
                <Text
                  fontSize={{ base: "1.5rem", xs: "1.8rem", "2sm": "2.25rem" }}
                  fontWeight={{ base: "600", "2sm": "500" }}
                >
                  Diana Hopper
                </Text>
                <Text
                  fontSize={{
                    base: "0.8125rem",
                    xs: "1.1rem",
                    "2sm": "1.5rem",
                  }}
                  color={"gray.100"}
                >
                  Founder of virtual assets
                </Text>
              </Box>
            </Flex>
            <TabPanels w="100%">
              <TabPanel p="0">
                <HStack mt="43px" spacing={{"2sm":"40px",lg:"80px",xl:'125px'}}>
                  <VStack spacing={"20px"}>
                    <Center
                      boxSize={"163px"}
                      bgColor="greenBrand.100"
                      borderRadius={"35px"}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085610/digital%20card/card/contact_ffyixy.png"
                        alt=""
                      />
                    </Center>
                    <Text fontSize={"1.5rem"}>Save Contact</Text>
                  </VStack>
                  <VStack spacing={"20px"}>
                    <Center
                      boxSize={"163px"}
                      bgColor="greenBrand.100"
                      borderRadius={"35px"}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085664/digital%20card/card/download_o42ppn.png"
                        alt=""
                      />
                    </Center>
                    <Text fontSize={"1.5rem"}>Download brochure</Text>
                  </VStack>
                  <VStack spacing={"20px"}>
                    <Center
                      boxSize={"163px"}
                      bgColor="greenBrand.100"
                      borderRadius={"35px"}
                    >
                      <Image
                        src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085759/digital%20card/card/payment_kecvvx.png"
                        alt=""
                      />
                    </Center>
                    <Text fontSize={"1.5rem"}>Make Payment</Text>
                  </VStack>
                </HStack>
              </TabPanel>
              <TabPanel p="0">
                <Text mt="43px" fontWeight={"500"} fontSize={"1.5rem"}>
                  About
                </Text>
                <Text mt="33px" fontSize={"1.25rem"}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the In publishing and
                  graphic design, Lorem ipsum is a placeholder text commonly
                  used to demonstrate the In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the
                </Text>
              </TabPanel>
              <TabPanel p="0">
                <Text mt="43px" fontWeight={"500"} fontSize={"1.5rem"}>
                 {" Let's Connect"}
                </Text>
                <Box
                  mt="15px"
                  ml="-22px"
                  as={Flex}
                  flexWrap="wrap"
                  fontSize={"1.125rem"}
                >
                  <Flex alignItems={"center"} m="22px">
                    <Center
                      boxSize={"72px"}
                      borderRadius="12px"
                      border="2px solid #E3E3E3"
                    >
                      <Box>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090230/digital%20card/card/wp_outqp6.png"
                          alt=""
                        />
                      </Box>
                    </Center>
                    <Text ml="35px">Whatsapp</Text>
                  </Flex>
                  <Flex alignItems={"center"} m="22px">
                    <Center
                      boxSize={"72px"}
                      borderRadius="12px"
                      border="2px solid #E3E3E3"
                    >
                      <Box>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090300/digital%20card/card/twit_gwdvfp.png"
                          alt=""
                        />
                      </Box>
                    </Center>
                    <Text ml="35px">Twitter</Text>
                  </Flex>
                  <Flex alignItems={"center"} m="22px">
                    <Center
                      boxSize={"72px"}
                      borderRadius="12px"
                      border="2px solid #E3E3E3"
                    >
                      <Box>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090239/digital%20card/card/insta_h2qzlb.png"
                          alt=""
                        />
                      </Box>
                    </Center>
                    <Text ml="35px">Instagram</Text>
                  </Flex>
                  <Flex alignItems={"center"} m="22px">
                    <Center
                      boxSize={"72px"}
                      borderRadius="12px"
                      border="2px solid #E3E3E3"
                    >
                      <Box>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090321/digital%20card/card/face_kl3lx6.png"
                          alt=""
                        />
                      </Box>
                    </Center>
                    <Text ml="35px">Facebook</Text>
                  </Flex>
                  <Flex alignItems={"center"} m="22px">
                    <Center
                      boxSize={"72px"}
                      borderRadius="12px"
                      border="2px solid #E3E3E3"
                    >
                      <Box>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090242/digital%20card/card/linked_cfyslj.png"
                          alt=""
                        />
                      </Box>
                    </Center>
                    <Text ml="35px">LinkedIn</Text>
                  </Flex>
                </Box>
              </TabPanel>
              <TabPanel p="0" w="100%">
                <Text mt="43px" fontWeight={"500"} fontSize={"1.5rem"}>
                  About
                </Text>
                <Flex
                  mt="33px"
                  flexDir={"column"}
                  w="100%"
                  fontSize={"1.125rem"}
                >
                  <Flex
                    p="0px 0px 25px 0"
                    alignItems={"center"}
                    borderBottom="2px solid #E3E3E3"
                  >
                    <Box fontSize={"1.7rem"}>
                      <GrLocation />
                    </Box>
                    <Text ml="27px">Via creative tech LLP, Virar</Text>
                  </Flex>
                  <Flex
                    p="25px 0px"
                    alignItems={"center"}
                    borderBottom="2px solid #E3E3E3"
                  >
                    <Box fontSize={"1.7rem"}>
                      <FiPhone />
                    </Box>
                    <Text ml="27px">+91 9309719073 | +91 9309719073</Text>
                    <Button fontWeight={400} w="142px" ml="75px">
                      Call Now
                    </Button>
                  </Flex>
                  <Flex
                    p="25px 0px"
                    alignItems={"center"}
                    borderBottom="2px solid #E3E3E3"
                  >
                    <Box fontSize={"1.7rem"}>
                      <VscGlobe />
                    </Box>
                    <Text ml="27px">www.viacreativetech.com</Text>
                  </Flex>
                  <Flex
                    p="25px 0px"
                    alignItems={"center"}
                    borderBottom="2px solid #E3E3E3"
                  >
                    <Box fontSize={"1.7rem"}>
                      <AiOutlineMail />
                    </Box>
                    <Text ml="27px">aks@viacreativetech.com</Text>
                  </Flex>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Box>
          <Box
            mt={{ "2sm": "40px", lg: "0" }}
            display={tabIndex > 0 ? "block" : "none"}
            borderLeft={{ "2sm": "none", lg: "1px solid #E7E7E7" }}
            pl={{ lg: "4.1vw", "2xl": "63px" }}
            ml={{ lg: "4.1vw", "2xl": "63px" }}
          >
            <Text fontSize={"1.5rem"} mb="50px" fontWeight="500">
              My Dashboard
            </Text>
            <VStack spacing={"30px"} alignItems="flex-start">
              <Center
                w={{ "2sm": "498px", lg: "350px", xl: "498px" }}
                h="117px"
                justifyContent={"flex-start"}
                pl="21px"
                borderRadius={"18px"}
                boxShadow="8px 8px 16px 0px rgba(0, 0, 0, 0.1)"
              >
                <Center
                  boxSize={"87px"}
                  bgColor="greenBrand.100"
                  borderRadius={"17px"}
                  mr="22px"
                >
                  <Center boxSize={"26px"}>
                    <Image
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085610/digital%20card/card/contact_ffyixy.png"
                      alt=""
                    />
                  </Center>
                </Center>
                <Text fontSize={"1.125rem"}>Save Contact</Text>
              </Center>
              <Center
                w={{ "2sm": "498px", lg: "350px", xl: "498px" }}
                h="117px"
                justifyContent={"flex-start"}
                pl="21px"
                borderRadius={"18px"}
                boxShadow="8px 8px 16px 0px rgba(0, 0, 0, 0.1)"
              >
                <Center
                  boxSize={"87px"}
                  bgColor="greenBrand.100"
                  borderRadius={"17px"}
                  mr="22px"
                >
                  <Center boxSize={"26px"}>
                    <Image
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085664/digital%20card/card/download_o42ppn.png"
                      alt=""
                    />
                  </Center>
                </Center>
                <Text fontSize={"1.125rem"}>Download brochure</Text>
              </Center>
              <Center
                w={{ "2sm": "498px", lg: "350px", xl: "498px" }}
                h="117px"
                justifyContent={"flex-start"}
                pl="21px"
                borderRadius={"18px"}
                boxShadow="8px 8px 16px 0px rgba(0, 0, 0, 0.1)"
              >
                <Center
                  boxSize={"87px"}
                  bgColor="greenBrand.100"
                  borderRadius={"17px"}
                  mr="22px"
                >
                  <Center boxSize={"26px"}>
                    <Image
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085759/digital%20card/card/payment_kecvvx.png"
                      alt=""
                    />
                  </Center>
                </Center>
                <Text fontSize={"1.125rem"}>Make payment</Text>
              </Center>
            </VStack>
          </Box>
        </Flex>
      </Tabs>
      <Box display={{ base: "block", "2sm": "none" }} w="100%">
        <VStack spacing={"48px"}>
          <Text fontWeight={"600"} fontSize="2rem">
            Digital Card
          </Text>
          <Flex alignItems={"center"} textAlign="center" flexDir="column">
            <Box
              w={{ base: "89px", xs: "193px" }}
              h={{ base: "90px", xs: "195px" }}
              flexShrink={"0"}
              bgColor={"#c5c5c5"}
              borderRadius="20px"
            >
              <Image
                borderRadius="20px"
                objectFit={"cover"}
                src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
              />
            </Box>
            <Box ml={{ "2sm": "50px", lg: "0", xl: "3.4vw", "2xl": "50px" }}>
              <Text
                fontSize={{ base: "1.5rem", xs: "1.8rem", "2sm": "2.25rem" }}
                fontWeight={{ base: "600", "2sm": "500" }}
              >
                Diana Hopper
              </Text>
              <Text
                fontSize={{
                  base: "0.8125rem",
                  xs: "1.1rem",
                  "2sm": "1.5rem",
                }}
                color={"gray.100"}
              >
                Founder of virtual assets
              </Text>
            </Box>
          </Flex>
          <Flex w="100%" justifyContent={"space-between"}>
            <VStack spacing={"10px"}>
              <Center
                boxSize={{ base: "45px", xs: "90px", sm: "120px" }}
                borderRadius="8px"
                bgColor="greenBrand.100"
              >
                <Box boxSize={{ base: "20px", xs: "40px", sm: "60px" }}>
                  <Image
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085610/digital%20card/card/contact_ffyixy.png"
                    alt=""
                  />
                </Box>
              </Center>
              <Text
                color={"#ABABAB"}
                fontSize={{ base: "0.6875rem", xs: "0.85rem", sm: "1rem" }}
              >
                Save Contact
              </Text>
            </VStack>
            <VStack spacing={"10px"}>
              <Center
                boxSize={{ base: "45px", xs: "90px", sm: "120px" }}
                borderRadius="8px"
                bgColor="greenBrand.100"
              >
                <Box boxSize={{ base: "20px", xs: "40px", sm: "60px" }}>
                  <Image
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085664/digital%20card/card/download_o42ppn.png"
                    alt=""
                  />
                </Box>
              </Center>
              <Text
                fontSize={{ base: "0.6875rem", xs: "0.85rem", sm: "1rem" }}
                color={"#ABABAB"}
              >
                Download borchure
              </Text>
            </VStack>
            <VStack spacing={"10px"}>
              <Center
                boxSize={{ base: "45px", xs: "90px", sm: "120px" }}
                borderRadius="8px"
                bgColor="greenBrand.100"
              >
                <Box boxSize={{ base: "20px", xs: "40px", sm: "60px" }}>
                  <Image
                    src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085759/digital%20card/card/payment_kecvvx.png"
                    alt=""
                  />
                </Box>
              </Center>
              <Text
                fontSize={{ base: "0.6875rem", xs: "0.85rem", sm: "1rem" }}
                color={"#ABABAB"}
              >
                Make payment
              </Text>
            </VStack>
          </Flex>
        </VStack>
        <Tabs w="100%" mt="30px">
          <TabList border={"none"} justifyContent="space-between">
            <Tab
              fontSize={{ base: "0.875rem", xs: "1rem", sm: "1.125rem" }}
              fontWeight="500"
              p="0"
              color="rgba(23, 23, 23, 0.38)"
              _selected={{ color: "black", borderBottom: "2px solid black" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              About Us
            </Tab>
            <Tab
              color="rgba(23, 23, 23, 0.38)"
              fontWeight="500"
              fontSize={{ base: "0.875rem", xs: "1rem", sm: "1.125rem" }}
              p="0"
              _selected={{ color: "black", borderBottom: "2px solid black" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
            {"Let's Connect"}
            </Tab>
            <Tab
              color="rgba(23, 23, 23, 0.38)"
              fontWeight="500"
              fontSize={{ base: "0.875rem", xs: "1rem", sm: "1.125rem" }}
              p="0"
              _selected={{ color: "black", borderBottom: "2px solid black" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              Get in touch
            </Tab>
          </TabList>

          <TabPanels mt="30px">
            <TabPanel p="0">
              <Text
                fontWeight={"600"}
                fontSize={{ base: "1rem", xs: "1.125rem", sm: "1.25rem" }}
              >
                A Combination Of Business & Tech!
              </Text>
              <Text
                mt="13px"
                fontSize={{ base: "0.75rem", xs: "0.875rem", sm: "1rem" }}
              >
                Hey there! My teenage went entirely in the Social Media Boom and
                hence when life wanted me to start something, I chose Social
                Media itself, started Via Creative Tech & Via Tech Media with
                two of my friends. We turn any normal business into a BRAND! In
                the 3rd year of high school, I embarked on the journey to
                various entrepreneurial ventures but faced criticism from almost
                everyone I knew. I have been criticised by the society at all
                stages of my life.I have seen ups and mostly downs and one thing
                I can say… “God shuffled the cards, dealt me a hand with
                impossible odds, Put an obstacle course up and look how I will
                conquer them all.”
              </Text>
            </TabPanel>
            <TabPanel p="0">
              <Flex justifyContent={"space-between"} flexWrap="wrap">
                <Center
                  boxSize={{ base: "48px", xs: "64px", sm: "80px" }}
                  borderRadius="14px"
                  border="2px solid #E3E3E3"
                >
                  <Box
                    flexShrink={"0"}
                    boxSize={{ base: "29px", xs: "45px", sm: "60px" }}
                  >
                    <Image
                      w="100%"
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090230/digital%20card/card/wp_outqp6.png"
                      alt=""
                    />
                  </Box>
                </Center>
                <Center
                  boxSize={{ base: "48px", xs: "64px", sm: "80px" }}
                  borderRadius="14px"
                  border="2px solid #E3E3E3"
                >
                  <Box
                    flexShrink={"0"}
                    boxSize={{ base: "29px", xs: "45px", sm: "60px" }}
                  >
                    <Image
                      w="100%"
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090300/digital%20card/card/twit_gwdvfp.png"
                      alt=""
                    />
                  </Box>
                </Center>
                <Center
                  boxSize={{ base: "48px", xs: "64px", sm: "80px" }}
                  borderRadius="14px"
                  border="2px solid #E3E3E3"
                >
                  <Box
                    flexShrink={"0"}
                    boxSize={{ base: "29px", xs: "45px", sm: "60px" }}
                  >
                    <Image
                      w="100%"
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090239/digital%20card/card/insta_h2qzlb.png"
                      alt=""
                    />
                  </Box>
                </Center>
                <Center
                  boxSize={{ base: "48px", xs: "64px", sm: "80px" }}
                  borderRadius="14px"
                  border="2px solid #E3E3E3"
                >
                  <Box
                    flexShrink={"0"}
                    boxSize={{ base: "29px", xs: "45px", sm: "60px" }}
                  >
                    <Image
                      w="100%"
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090321/digital%20card/card/face_kl3lx6.png"
                      alt=""
                    />
                  </Box>
                </Center>
                <Center
                  boxSize={{ base: "48px", xs: "64px", sm: "80px" }}
                  borderRadius="14px"
                  border="2px solid #E3E3E3"
                >
                  <Box
                    flexShrink={"0"}
                    boxSize={{ base: "29px", xs: "45px", sm: "60px" }}
                  >
                    <Image
                      w="100%"
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645090242/digital%20card/card/linked_cfyslj.png"
                      alt=""
                    />
                  </Box>
                </Center>
              </Flex>
              <Center mt="50px">
                <Button w="173px" h="62px" fontWeight={"400"}>
                  Send Message
                </Button>
              </Center>
            </TabPanel>
            <TabPanel p="0">
              <Flex
                mt="33px"
                flexDir={"column"}
                w="100%"
                fontSize={{ base: "0.75rem", xs: "0.875rem", sm: "1rem" }}
              >
                <Flex
                  p="0px 0px 25px 0"
                  alignItems={"center"}
                  borderBottom="2px solid #E3E3E3"
                >
                  <Box fontSize={"1.7rem"}>
                    <GrLocation />
                  </Box>
                  <Text ml="27px">Via creative tech LLP, Virar</Text>
                </Flex>
                <Flex
                  p="25px 0px"
                  alignItems={"center"}
                  justifyContent='space-between'
                  borderBottom="2px solid #E3E3E3"
                >
                  <Flex alignItems={'center'}>
                  <Box fontSize={"1.7rem"}>
                    <FiPhone />
                  </Box>
                  <Box ml="27px">
                    <Text>+91 9309719073</Text>
                    <Text>+91 9309719073</Text>
                  </Box>
                  </Flex>
                

                  <Button fontWeight={400} w="142px">
                    Call Now
                  </Button>
                </Flex>
                <Flex
                  p="25px 0px"
                  alignItems={"center"}
                  borderBottom="2px solid #E3E3E3"
                >
                  <Box fontSize={"1.7rem"}>
                    <VscGlobe />
                  </Box>
                  <Text ml="27px">www.viacreativetech.com</Text>
                </Flex>
                <Flex
                  p="25px 0px"
                  alignItems={"center"}
                  borderBottom="2px solid #E3E3E3"
                >
                  <Box fontSize={"1.7rem"}>
                    <AiOutlineMail />
                  </Box>
                  <Text ml="27px">aks@viacreativetech.com</Text>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
