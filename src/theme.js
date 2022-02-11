import { extendTheme, gradient } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
// import Button from "./Button.ts";
import "@fontsource/open-sans";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
// Box: {
//   borderColor: theme.colorMode === "light" ? "gray.200" : "gray.900"
// }

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
  },
  colors: {
    brand: {
      500: "#7ECE05",
    },
    brand: {
      100: "#7ECE05",
      200: "#7ECE05",
      300: "#7ECE05",
      400: "#7ECE05",
      500: "#7ECE05",
      600: "#7ECE05",
      700: "#7ECE05",
      800: "#7ECE05",
      900: "#7ECE05",
    },
  },

  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: "linear-gradient(97.21deg, #88E000 29.8%, #77C208 69.57%)",
          color: "white",
          boxShadow: "0 0 2px 2px #efdfde",
          _hover: {
            bg: "linear-gradient(97.21deg, #7EC90A 29.8%, #88E105 69.57%)",
          },
        }),
      },
    },
    Steps,
    breakpoints,
  },
});

export default theme;
