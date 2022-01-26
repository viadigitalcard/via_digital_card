import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Header from "../components/header";
import Flex from "../components/Flex";

const Index = () => (
  <Container height="100vh">

    {/* <Header /> */}
    <Flex/>
    <DarkModeSwitch />
  </Container>
);

export default Index;
