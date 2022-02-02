import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "../theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
          theme={theme}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
