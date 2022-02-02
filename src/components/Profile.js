import React from "react";
import {
  VStack,
  HStack,
  Stack,
  Flex,
  Box,
  Button,
  Center,
  Heading,
  Avatar,
  Text,
  Input,
} from "@chakra-ui/react";

function Profile(props) {
  return (
    <VStack >
      <HStack as={Center} w="90%" p="15px 0 15px 0px">
        <Avatar
          name=""
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg"
          boxSize="100px"
          marginRight={10}
        />
        <Button
          color="white"
          bg="#88E000"
          marginTop={10}
          fontSize={{ base: "14", md: "16", lg: "18" }}
        >
          Add Profile Photo
        </Button>
      </HStack>
      <Stack spacing="20px">
        <Input
          isInvalid
          placeholder="Name"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          h="60px"
          variant="outline"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Enter email address"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          h="60px"
          variant="outline"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Username"
          width={{ base: "250px", md: "300px", lg: "400px" }}
          h="60px"
          variant="outline"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
      </Stack>
    </VStack>
  );
}

export default Profile;
