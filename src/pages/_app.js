import { ChakraProvider, ColorModeProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "../theme";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const themes = extendTheme({
  components: {
    Steps
  }
});


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={themes}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
          theme={themes}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
