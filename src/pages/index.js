import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import LandingPage from "../components/Landing/LandingPage";
import { Navbar } from "../components/Navbar";
import Script from 'next/script';

const Index = () => (
  <>
    <Head>
      <title>Via Digital Card | Landing Page</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon.ico"
      ></link>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MTB3GT7J8C`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MTB3GT7J8C', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    </Head>
    <>
      <DarkModeSwitch />
      <Navbar />
      <LandingPage />
    </>
  </>
);

export default Index;
