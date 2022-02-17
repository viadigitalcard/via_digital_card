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
} from "@chakra-ui/react";
// import img from "../../assets/images/img.png";
// import img from '../../../public/assets/images/img.png'
export const DigitalCard = () => {
  return (
    <Box p="6vw 8vw">
      <Tabs>
        <TabList border={"none"} justifyContent="space-between">
          <Box>
            <Tab color={"greenBrand.100"} fontSize={"1.125rem"}>
              Digital Card
            </Tab>
          </Box>
          <Flex>
            <Tab fontSize={"1.125rem"}>About Us</Tab>
            <Tab fontSize={"1.125rem"}>Let's Connect</Tab>
            <Tab fontSize={"1.125rem"}>Get in touch</Tab>
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel p="45px 0px 0px 0px">
            <Flex alignItems={"center"}>
              <Box w="193px" h="195px" bgColor={"#c5c5c5"} borderRadius="20px">
                <Image
                  borderRadius="20px"
                  objectFit={"cover"}
                  src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                />
              </Box>
              <Box ml="50px">
                <Text fontSize={"2.25rem"} fontWeight={"500"}>
                  Diana Hopper
                </Text>
                <Text fontSize={"1.5rem"} color={"gray.100"}>
                  Founder of virtual assets
                </Text>
              </Box>
            </Flex>
            <HStack mt="43px" spacing={"125px"}>
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
          <TabPanel p="45px 0px 0px 0px">
            <Flex w="100%">
              <Box>
                <Flex alignItems={"center"}>
                  <Box
                    w="193px"
                    h="195px"
                    bgColor={"#c5c5c5"}
                    borderRadius="20px"
                  >
                    <Image
                      borderRadius="20px"
                      objectFit={"cover"}
                      src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085462/digital%20card/card/img_gjy1m4.png"
                    />
                  </Box>
                  <Box ml="50px">
                    <Text fontSize={"2.25rem"} fontWeight={"500"}>
                      Diana Hopper
                    </Text>
                    <Text fontSize={"1.5rem"} color={"gray.100"}>
                      Founder of virtual assets
                    </Text>
                  </Box>
                </Flex>
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
              </Box>
              <Box w='4px' bgColor={'#E7E7E7'} m='0px 63px'></Box>
              <Box>
                <Text fontSize={"1.5rem"} mb='50px' fontWeight="500">
                  My Dashboard
                </Text>
                <VStack spacing={"30px"}>
                  <Center w='498px' h='117px' justifyContent={'flex-start'} pl='21px' borderRadius={'18px'} boxShadow='8px 8px 16px 0px rgba(0, 0, 0, 0.1)'>
                    <Center
                      boxSize={"87px"}
                      bgColor="greenBrand.100"
                      borderRadius={"17px"}
                      mr='22px'
                    >
                      <Center boxSize={"26px"}>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085610/digital%20card/card/contact_ffyixy.png"
                          alt=""
                        />
                      </Center>
                    </Center>
                    <Text fontSize={'1.125rem'}>Save Contact</Text>
                  </Center>
                  <Center w='498px' h='117px' justifyContent={'flex-start'} pl='21px' borderRadius={'18px'} boxShadow='8px 8px 16px 0px rgba(0, 0, 0, 0.1)'>
                    <Center
                      boxSize={"87px"}
                      bgColor="greenBrand.100"
                      borderRadius={"17px"}
                      mr='22px'
                    >
                      <Center boxSize={"26px"}>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085664/digital%20card/card/download_o42ppn.png"
                          alt=""
                        />
                      </Center>
                    </Center>
                    <Text fontSize={'1.125rem'}>Download brochure</Text>
                  </Center>
                  <Center w='498px' h='117px' justifyContent={'flex-start'} pl='21px' borderRadius={'18px'} boxShadow='8px 8px 16px 0px rgba(0, 0, 0, 0.1)'>
                    <Center
                      boxSize={"87px"}
                      bgColor="greenBrand.100"
                      borderRadius={"17px"}
                      mr='22px'
                    >
                      <Center boxSize={"26px"}>
                        <Image
                          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1645085759/digital%20card/card/payment_kecvvx.png"
                          alt=""
                        />
                      </Center>
                    </Center>
                    <Text fontSize={'1.125rem'}>Make payment</Text>
                  </Center>
                </VStack>
              </Box>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>connect!</p>
          </TabPanel>
          <TabPanel>
            <p>touch!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
