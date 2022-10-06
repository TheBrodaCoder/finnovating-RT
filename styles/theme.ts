import { extendTheme } from "@chakra-ui/react";
import buttonConfig from "./components/button";
import skeletonConfig from "./components/skeleton";

const theme = extendTheme({
  components: {
    Button: buttonConfig,
    Skeleton: skeletonConfig,
    SkeletonText: skeletonConfig,
  },
  colors: {
    brand: {
      primary: "#0F3460",
      secondary: "#16213E",
      accentPurple: "#533483",
      accentRed: "#E94560",
    },
  },
  styles: {
    global: {
      "html, body, #__next": {
        h: "100%",
        minHeight: "100%",
        color: "white",
      },
    },
  },
});

export default theme;
