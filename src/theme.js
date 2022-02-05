import { extendTheme, gradient } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { StepsStyleConfig } from "chakra-ui-steps";

import "@fontsource/open-sans";
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      icon: {
        ...StepsStyleConfig.baseStyle(props).icon,
        // your custom styles here
        strokeWidth: "1px",
      },
      description: {
        ...StepsStyleConfig.baseStyle(props).description,
        color: "green.100",
      },
      label: {
        ...StepsStyleConfig.baseStyle(props).label,
        color: "gray.600",
      },
      // connector: {
      //   ...StepsStyleConfig.baseStyle(props).connector,
      //   inactivColor: "gray.600",
      //   activColor: "brand.100",
      // },
    };
  },
};
const theme = extendTheme({
  colors: {
    brand: {
      500: "#7ECE05",
    },
    green: {
      100: "#7ECE05",
    },
  },

  components: {
    Steps: CustomSteps,
    Button: {
      variants: {
        solid: (props) => ({
          bg:
            props.colorMode === "dark"
              ? "red"
              : "linear-gradient(97.21deg, #88E000 29.8%, #77C208 69.57%)",
          color: "white",
          boxShadow: "0 0 2px 2px #efdfde",
          _hover: {
            bg: "linear-gradient(97.21deg, #7EC90A 29.8%, #88E105 69.57%)",
          },
        }),
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts: {
    body: "Open Sans",
  },
  breakpoints,
});

export default theme;
