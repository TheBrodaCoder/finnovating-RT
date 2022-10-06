import type { ComponentSingleStyleConfig } from "@chakra-ui/theme";

const skeletonConfig: ComponentSingleStyleConfig = {
  baseStyle: {},
  defaultProps: {
    startColor: "rgba(255, 255, 255, 0.8)",
    endColor: "rgba(255, 255, 255, 0.4)",
    speed: 1,
  },
};

export default skeletonConfig;
