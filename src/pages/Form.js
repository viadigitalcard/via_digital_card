import React from 'react';

import { Step, Steps, useSteps } from "chakra-ui-steps"
import { VStack, Flex, Box, Button, Heading, Avatar, Text, Input, HStack, Image  } from "@chakra-ui/react";
import Profile from '../components/Profile';
import About from '../components/About';
import Links from '../components/Links';

const steps = [
  { label: "Profile",  },
  { label: "About",  },
  { label: "Links",  },
]

export default function Form () {
  
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <HStack  w="full" h="100vh" bg="#77C208" overflowY="scroll" maxHeight="100vh" >
      <Image objectFit="contain"  w="50%" h="90%" src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643549357/digital%20card/form/Profile/Group_17_wu2yen.svg' />    
      <VStack w="full" >
        <Image  objectFit='cover' mt={"50%"} mr={"100%"} w="80%" h="full"  src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg' />  
      </VStack>
      {/* <Box width={{sm:"hidden", md: "visible", lg: "visible" }} h="100vh" overflow="visible" >
              </Box>
      <Box width={{sm:"hidden", md: "visible", lg: "visible" }} h="100vh" overflow="visible">
      <Image  objectFit='fit' mt={"10%"} w="full" h="full"  src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg' />
      </Box> */}
    <Flex flexDirection="column" mr="20%" w="50%" h="90%" p='20' bg="whiteAlpha.900" borderRadius={20} >
      <Box w="full" h="full"   justifyContent="center"  >
      <Text
            fontSize={{ base: "30px", md: "34px", lg: "36px" }}
            fontFamily="Margot"
            textAlign="center"
          >
            Via Digital Card
          </Text>
      <Steps labelOrientation="vertical" activeStep={activeStep} color="#88E000"  >
      <Step   color="#88E000"> 
          <Profile/>
      </Step>
      <Step>
          <About/>   
      </Step>
      <Step>
          <Links/>   
      </Step>
        {/* {steps.map(({ label, }, index) => (
          
        ))} */}
      </Steps>
      </Box>

      {activeStep === steps.length  ? (
       <Flex px={4} py={4} width="100%" flexDirection="column">
       <Heading fontSize="xl" textAlign="center">
         Woohoo! All steps completed!
       </Heading>
       <Button mx="auto" mt={6} size="sm" onClick={reset}>
         Reset
       </Button>
     </Flex>
      ) : ( 
        // <Button color="white" bg="#88E000" px={10} marginTop={15} py={5} onClick={nextStep}   >
        //     Next
        // </Button>
        <Flex width="100%" justify="center">
          <Button
            isDisabled={activeStep === 0}
            onClick={prevStep}
            variant="ghost"
            color="#88E000"
            color="white" bg="#88E000" 
            px={10}
            mr={5}
          >
            Prev
          </Button>
          <Button color="white" bg="#88E000" px={10}  onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
    </HStack>
  )
}

