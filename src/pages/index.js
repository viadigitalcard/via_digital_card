import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import LandingPage from "../components/Landing/LandingPage";
import { Navbar } from "../components/Navbar";
<<<<<<< HEAD
import { DigitalCard } from '../components/Card/DigitalCard'
import { PasswordRecover } from '../components/PasswordRecovery/PasswordRecover'
=======
import { DigitalCard } from "../components/Card/DigitalCard";
>>>>>>> 788034dcc3209a8ce15b634d64790484be4f0d91
const Index = () => (
  <>
    <Head>
      <title>Via Digital Card | Landing Page</title>
    </Head>
    {/* <Header /> */}
    {/* <Flex/> */}
    <DarkModeSwitch />
<<<<<<< HEAD
    {/* <Navbar /> */}
    {/* <LandingPage /> */}
    <PasswordRecover/>
=======
    <Navbar />
    <LandingPage />
>>>>>>> 788034dcc3209a8ce15b634d64790484be4f0d91
    {/* <DigitalCard/> */}
    {/* <CardList /> */}
  </>
);

export default Index;
