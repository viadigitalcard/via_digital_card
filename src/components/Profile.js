import React from 'react';
import { VStack, Flex, Box, Button, Heading, Avatar, Text, Input,  } from "@chakra-ui/react";


function Profile(props) {
    
    return (
      <VStack justifyContent="center" >
        <Flex flexDirection="row" width="full" justifyContent="center" py={10}  >
          <Avatar
           name=''
           src='https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg' 
           size={14}
           marginRight={10}
          /> 
          <Button color="white" bg="#88E000" px={20}  marginTop={10} fontSize={{ base: "14",  md:"16", lg: "18" }}>
            Add Profile Photo
          </Button>
        </Flex>

        <Input
          isInvalid
          placeholder="Name"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          size="lg"
          variant="outline"
          errorBorderColor='#88E000'
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Enter email address"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          size="lg"
          variant="outline"
          errorBorderColor='#88E000'
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Username"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          marginTop={15}
          size="lg"
          variant="outline"
          errorBorderColor='#88E000'
          focusBorderColor="#88E000"
        />
        {/* <Button color="white" bg="#88E000" px={10} marginTop={5}   >
            Next
        </Button> */}
      </VStack>
  )
}

export default Profile;
