import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "../theme";
import "../components/Landing/landing-page.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
