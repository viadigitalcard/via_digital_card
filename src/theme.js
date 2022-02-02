import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { StepsStyleConfig } from "chakra-ui-steps";
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
//theme setup - color - Validation- resposive - file structure



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
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
