import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {},
  variants: {
    solid: {
      fontFamily: "Open sans",
      bg: "linear-gradient(97.21deg, #88E000 29.8%, #77C208 69.57%)",
      color: "white",
      boxShadow: "0 0 2px 2px #efdfde",
      _hover: {
        bg: "linear-gradient(97.21deg, #7EC90A 29.8%, #88E105 69.57%)",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "solid",
  },
};

export default Button;
