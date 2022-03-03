import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { Hero } from '../../components/landing-page/Hero'
import { Review } from "../../components/landing-page/Review";
import { About } from "../../components/landing-page/About";
import { Footer } from "../../components/landing-page/Footer";
import { Contact } from "../../components/landing-page/Contact";
export const LandingPage = () => {
  const bgColor = useColorModeValue("white", "black.200");

  return (
    <Box bgColor={bgColor}>
      {/* <Hero/> */}
      {/* <Review/> */}
      <About/>
      {/* <Contact/> */}
      {/* <Footer/> */}
    </Box>
  );
};
