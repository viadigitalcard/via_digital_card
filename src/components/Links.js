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

function Links() {
  return (
    <VStack spacing="20px" py={10}>
      <Input
        isInvalid
        placeholder="Website"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Linkedin"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Instagram"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Youtube video"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Facebook"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
      />
      <Input
        isInvalid
        placeholder="Payment link"
        width={{ base: "250px", md: "200px", lg: "300px" }}
        size="lg"
        variant="outline"
        errorBorderColor="#88E000"
        focusBorderColor="#88E000"
        mb={30}
      />
    </VStack>
  );
}

export default Links;
