import React from 'react';
import { VStack, Flex, Box, Button, Heading, Avatar, Text, Input, HStack, Image, Divider, Stack  } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'


function GetInTouch() {
  return (
    <>
    <HStack w="full" h="full" >
        <VStack w="20%" h="100vh" bg="#C4C4C4"  justifyContent="center">
          <Avatar
          name=''
          src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643648281/digital%20card/About%20us/Ellipse_25_b1ww6l.svg' 
          size={5}
          mt="5%"
          /> 
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#171717"
            py={"5%"}
          >
            Aks Jain
          </Text>
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#5C5C5C"
            pt={"15%"}
            pb={"10%"}
          >
            Home
          </Text>
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#5C5C5C"
            pb={"10%"}
          >
            How it works?
          </Text>
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#5C5C5C"
            pb={"10%"}
          >
            About us
          </Text>
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#5C5C5C"
            pb={"10%"}
          >
            Review
          </Text>
          <Text 
            size={18}
            fontFamily="Roboto"
            color="#5C5C5C"
            pb={"10%"}
          >
            Contact us
          </Text>
        </VStack>
        <Flex flexDirection="column" w="45%" h="100vh"  pl="5%" >
          <Text 
            fontSize="36"
            fontFamily="Roboto"
            color="#000000"
            fontWeight="medium"
            mt="15%"
          >
            My profile
          </Text>
          <Text 
            fontSize="24"
            fontFamily="Roboto"
            color="#000000"
            fontWeight="medium"
            mt="10%"
          >
            About
          </Text>
          <Flex mt="5%" flexDirection="row" mt="10%" w="45%" spacing={5}   >
            <Image  w="25px" h="25px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643735281/digital%20card/icon/map-pin_1_1_gyjkgy.png" />
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#000000"
            px="2"
            py="1"
            lineHeight="none"
          >Via creative tech llp,virar</Text> 
          </Flex>
          <Flex mt="5%" flexDirection="row"  w="45%" spacing={5}   >
            <Image  w="25px" h="25px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643735417/digital%20card/icon/phone_1_ckniah.svg" />
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#000000"
            px="2"
            py="1"
            lineHeight="none"
          >9309719073</Text> 
          </Flex>
          <Flex mt="5%" flexDirection="row"  w="45%"  spacing={5}   >
            <Image  w="25px" h="25px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643735429/digital%20card/icon/globe_1_unozyr.svg" />
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#000000"
            px="2"
            py="1"
            lineHeight="none"
          >www.viacreativetech.com</Text> 
          </Flex>
          <Flex mt="5%" flexDirection="row"  w="45%" spacing={5}     >
            <Image w="25px" h="25px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643735433/digital%20card/icon/mail_1_xb2bbe.svg" />
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#000000"
            px="2"
            py="1"
            lineHeight="none"
          >aks@viacreativetech.com</Text> 
          </Flex>
        </Flex> 
        <Stack direction='row' h='full' bg="#C4C4C4" >
            <Divider orientation='vertical' h='60vh' />
          </Stack> 
        <Flex flexDirection='column' h='100vh' w="35%" py={"6%"} >
          <Flex flexDirection='row' >
          <Text 
            fontSize="18"
            fontFamily="Roboto"
            pr={14}
            color="#171717"
          >
            About us
          </Text>
          <Text 
            fontSize="18"
            fontFamily="Roboto"
            pr={14}
            color="#171717"
          >
            Lets connect
          </Text>
          <Text 
            fontSize="18"
            fontFamily="Roboto"
            color="#171717"
          >
            Get in touch
          </Text>
          </Flex>
          <Text 
            fontSize="24"
            fontFamily="Roboto"
            color="#171717"
            fontWeight="medium"
            mt="10%"
            ml="10%"
          >
            My dashboard
          </Text>
          
          <Box display="flex" flexDirection="row" justifyContent="space-around" boxShadow='dark-lg' p='6'  rounded='md' bg='white' w="60%" h="15vh" ml="10%" mt="10%"> 
            <Image src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643655522/digital%20card/About%20us/Rectangle_744_bm6xy3.svg" /> 
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#171717"
            fontWeight="normal"
            mt="5%"
            ml="10%"
            lineHeight="hidden"
            >
              Save contact
            </Text>
          </Box>
          
          <Box display="flex" flexDirection="row" justifyContent="space-around" boxShadow='dark-lg' p='6'  rounded='md' bg='white' w="60%" h="15vh" ml="10%" mt="10%"> 
            <Image src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643655522/digital%20card/About%20us/Rectangle_744_bm6xy3.svg" /> 
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#171717"
            fontWeight="normal"
            mt="5%"
            ml="10%"
            lineHeight="hidden"
            >
              Save contact
            </Text>
          </Box>
          
          <Box display="flex" flexDirection="row" justifyContent="space-around" boxShadow='dark-lg' p='6'  rounded='md' bg='white' w="60%" h="15vh" ml="10%" mt="10%"> 
            <Image src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643655522/digital%20card/About%20us/Rectangle_744_bm6xy3.svg" /> 
            <Text 
            fontSize="14"
            fontFamily="Roboto"
            color="#171717"
            fontWeight="normal"
            mt="5%"
            ml="10%"
            lineHeight="hidden"
            >
              Save contact
            </Text>
          </Box>
        </Flex>        
    </HStack>
    </>
  );
}

export default GetInTouch;
