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
  bgGradient,
} from "@chakra-ui/react";

function Profile(props) {
  return (
    <VStack spacing="20px" py="10">
      {/* <HStack as={Center} w="90%" p="15px 0 15px 0px"> */}
      <Flex
        as={Center}
        justifyContent="space-around"
        // alignItems="center"
        w="full"
        px="60px"
        py={["10px", "", "0px"]}
        flexDirection={["column", "column", "row"]}
      >
        <Avatar
          w="140px"
          h="140px"
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643392997/digital%20card/form/Mask_Group_2_atdo50.svg"
          boxSize="100px"
          as={Center}
        />
        <Button
          color="white"
          bg="#88E000"
          mt={["10px", "", ""]}
          fontSize={{ base: "12", md: "16", lg: "18" }}
          fontWeight="semibold"
          fontFamily="Open Sans"
        >
          Add Profile Photo
        </Button>
      </Flex>
      {/* </HStack> */}
      <Stack
        as={Center}
        w="full"
        spacing="20px"
        px={["20px", "100px", "120px"]}
      >
        <Input
          isInvalid
          placeholder="Name"
          w="full"
          h="60px"
          variant="outline"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Enter email address"
          w="full"
          h="60px"
          variant="outline"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <Input
          isInvalid
          placeholder="Username"
          w="full"
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
