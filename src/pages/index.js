import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import LandingPage from "../components/Landing/LandingPage";
import { Navbar } from "../components/Navbar";

const Index = () => (
  <>
    <Head>
      <title>Via Digital Card | Landing Page</title>
    </Head>
    {/* <Header /> */}
    {/* <Flex/> */}
    <DarkModeSwitch />
    <Navbar />
    <LandingPage />
    {/* <CardList /> */}
  </>
);

export default Index;
