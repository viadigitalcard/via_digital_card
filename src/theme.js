import { extendTheme,gradient } from "@chakra-ui/react";
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

// const CustomButton = {
//   baseStyle: {
//     fontWeight: 'bold', // Normally, it is "semibold"
//   },
//   // 2. We can add a new button size or extend existing
//   sizes: {
//     xl: {
//       h: '56px',
//       fontSize: 'lg',
//       px: '32px',
//     },
//   },
//   variants: {
//     'with-shadow': {
//       bg: '#88E000',
//       boxShadow: '0 0 2px 2px #efdfde',
//     },

//   },
// }

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
  button_color: {
    btn_color: "#88E000"
  },
  fonts,
  breakpoints,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
          w :'base: "250px", md: "200px", lg: "300px"',
        },
      },
      hover:{
        _hover:'bg:#88E000',
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? '#88E000' : '#88E000',
        }),
      },
    },
  },
});

export default theme;
