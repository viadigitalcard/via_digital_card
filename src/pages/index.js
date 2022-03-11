import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import LandingPage from "../components/Landing/LandingPage";
import { Navbar } from "../components/Navbar";
import { DigitalCard } from "../components/Card/DigitalCard";
import { PasswordRecover } from "../components/PasswordRecovery/PasswordRecover";

const Index = () => (
  <>
    <Head>
      <title>Via Digital Card | Landing Page</title>
    </Head>
    <>
      <DarkModeSwitch />
      <Navbar />
      <LandingPage />
    </>
  </>
);

export default Index;
