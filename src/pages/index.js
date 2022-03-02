import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Navbar } from "../components/Navbar";
import { LandingPage } from "./landing-page/LandingPage";

const Index = () => (
  <>
    <DarkModeSwitch />
    <Navbar />
    <LandingPage />
  </>
);

export default Index;
