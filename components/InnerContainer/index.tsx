import { Stack, StackProps } from "@chakra-ui/react";
import React from "react";

const InnerContainer = (props: StackProps) => {
  return (
    <Stack
      w="full"
      h="full"
      flexDirection="column"
      align="center"
      justify="center"
      maxW="1140px"
      spacing={6}
      {...props}
    >
      {props.children}
    </Stack>
  );
};

export default InnerContainer;
