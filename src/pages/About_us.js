import React from 'react';
import { VStack, Flex, Box, Button, Heading, Avatar, Text, Input, HStack, Image, Divider, Stack  } from "@chakra-ui/react";
import { TiContacts  } from '@react-icons/all-files/ti/TiContacts';

function About_us() {
  return (
      <>
      <HStack w="full" h="full" >
          <Flex flexDirection="column" w="70%" h="100vh"  pl="117px"  >
          <Image width={{ base: "150px", md: "200px", lg: "204px"}}  py="50px" src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643213479/digital%20card/Logo/Logo_nozzes.webp" />
          <Flex flexDirection={{base:"column",md:"column",lg: "row"}} >
          <Image width="192px" h="194px"  borderRadius="20px" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" p="50px">
          <Text
              fontSize={36}
              fontFamily="Open Sans"
              fontWeight={400}
          >
              Diana Hopper
          </Text>
          <Text
              fontSize={24}
              fontFamily="Roboto"
              color="#8A8A8A"
          >
              Founder of virtual assets
          </Text>
          </Flex>
          </Flex>  
            <Text 
              fontSize="24"
              fontFamily="Roboto"
              color="#000000"
              fontWeight="medium"
              py="30px"
            >
              About
            </Text>
            <Text 
              fontSize="15"
              fontFamily="Roboto"
              color="#000000"
              
              lineHeight= '10'
              fontWeight="light"
            >
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
            </Text>
          </Flex> 
          <Stack direction='row' h='70vh'  bg="#C4C4C4"  >
              <Divider orientation='vertical'   />
            </Stack> 
          <Flex flexDirection='column' h='100vh' w="650px" py="50px" >
            <Flex flexDirection='row' >
            <Text 
              fontSize="18"
              fontFamily="Roboto"
              pr="77px"
              color="#171717"
            >
              About us
            </Text>
            <Text 
              fontSize="18"
              fontFamily="Roboto"
              pr="77px"
              color="#171717"
            >
              Lets connect
            </Text>
            <Text 
              fontSize="18"
              fontFamily="Roboto"
              color="#171717"
              pr="77px"
            >
              Get in touch
            </Text>
            </Flex>
            <Text 
              fontSize="24"
              fontFamily="Roboto"
              color="#171717"
              fontWeight="medium"
              pt="83px"
              pl="82px"
            >
              My dashboard
            </Text>
            <Flex flexDirection="row" justifyContent="space-around" alignItems="center"  pt="42px"  pl="63px">
            <Box display="flex"   boxShadow='dark-lg' w="400px"  rounded='md' bg='white'  h="15vh"  > 
            {/* <Button  borderRadius="17px" leftIcon={<TiContacts/>}></Button> */}
             <Flex bg="#77C208" ml="36px" justifyContent="center" alignItems="center" p="30px" w="87px" h="87px" borderRadius="27px">

             </Flex>
             <Text 
              fontSize="18"
              fontFamily="Roboto"
              color="#171717"
              fontWeight="normal"
              
            >
              Save Contact
            </Text>
            </Box>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-around" pt="42px"  pl="63px">
            <Box display="flex"   boxShadow='dark-lg' w="400px"  rounded='md' bg='white'  h="15vh"  > 
            {/* <Button  borderRadius="17px" leftIcon={<TiContacts/>}></Button> */}
             <Flex bg="#77C208" ml="36px" justifyContent="center" alignItems="center" p="30px" w="87px" h="87px" borderRadius="27px">
                  
             </Flex>
             <Text 
              fontSize="18"
              fontFamily="Roboto"
              color="#171717"
              fontWeight="normal"
            >
              Download brochure
            </Text>
            </Box>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-around" pt="42px"  pl="63px">
            <Box display="flex"   boxShadow='dark-lg' w="400px"  rounded='md' bg='white'  h="15vh"  > 
            {/* <Button  borderRadius="17px" leftIcon={<TiContacts/>}></Button> */}
             <Flex bg="#77C208" ml="36px" justifyContent="center" alignItems="center" p="30px" w="87px" h="87px" borderRadius="27px">

             </Flex>
            </Box>
            </Flex>
            <Text 
              fontSize="18"
              fontFamily="Roboto"
              color="#171717"
              fontWeight="normal"
            >
              Make payment
            </Text>
          </Flex>        
      </HStack>
      </>
  );
}

export default About_us;
