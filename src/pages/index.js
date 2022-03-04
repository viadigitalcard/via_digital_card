import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Navbar } from "../components/Navbar";
import { LandingPage } from "./landing-page/LandingPage";
import { CardList } from '../components/Card/CardList'
const Index = () => (
  <>
    {/* <Header /> */}
    {/* <Flex/> */}
    <DarkModeSwitch />
    <Navbar/>
    <LandingPage/>
    {/* <CardList/> */}
  </>
);

export default Index;
