import { extendTheme, gradient, useColorModeValue } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { mode } from "@chakra-ui/theme-tools";
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
// const value = useColorModeValue("white", "black");

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
          _hover: {
            bg: "linear-gradient(97.21deg, #7EC90A 29.8%, #88E105 69.57%)",
          },
          _active: {
            bg: "#7ECE05",
          },
        }),
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderRadius: "10px",
            border: "1px",
            borderColor: "#88E000",
          },
          _focus: {
            border: "1px",
            borderColor: "#88E000",
            boxShadow: "none",
          },
        },
      },
    },
    Steps,
    breakpoints,
  },
});

export default theme;
