import type { ComponentSingleStyleConfig } from "@chakra-ui/theme";

const buttonConfig: ComponentSingleStyleConfig = {
  baseStyle: {
    px: 3,
    py: 4,
  },
  variants: {
    genreButton: {
      bg: "brand.primary",
      borderWidth: "2px",
      borderColor: "whiteAlpha.100",
      fontSize: { base: "sm", md: "2xl" },
      fontWeight: "semibold",
      maxW: "240px",
      h: "60px",
      _hover: {
        bg: "whiteAlpha.200",
        borderColor: "white",
      },
    },
  },
};

export default buttonConfig;
