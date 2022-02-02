import React from "react";
import {
  VStack,
  Flex,
  Box,
  Button,
  Heading,
  Avatar,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function About() {
  return (
    <VStack spacing="10px">
      <Input
        isInvalid
        placeholder="Name"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Address"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
        py={16}
      />
      <Input
        isInvalid
        placeholder="Designation"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Tagline"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Bio"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        py={"20%"}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <InputGroup
        size="lg"
        width={{ base: "250px", md: "300px", lg: "400px" }}
        marginTop={15}
        variant="outline"
      >
        <Input
          isInvalid
          pr="4.5rem"
          placeholder="Upload File"
          errorBorderColor="#88E000"
          focusBorderColor="#88E000"
        />
        <InputRightElement width="4.5rem">
          <Image src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643469851/digital%20card/icon/Group_14_obtzzl.svg" />
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}

export default About;
