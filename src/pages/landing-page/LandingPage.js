import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
export const LandingPage = () => {
  const bgColor = useColorModeValue("white", "black.200");

  return (
    <Box bgColor={bgColor} pt="60px">
    </Box>
  );
};
