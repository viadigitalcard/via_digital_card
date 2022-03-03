import { CardList } from "../components/Card/CardList";
import { DigitalCard } from "../components/Card/DigitalCard";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Header from "../components/header";
import { Navbar } from "../components/Navbar";
import { LandingPage } from "./landing-page/LandingPage";

const Index = () => (
  <>
    {/* <Header /> */}
    {/* <Flex/> */}
    <DarkModeSwitch />
    <Navbar/>
    <LandingPage/>
  </>
);

export default Index;
