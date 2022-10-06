import { Center, CenterProps } from "@chakra-ui/react";
import React from "react";

const MainContainer = (props: CenterProps) => {
  return (
    <Center w="full" h="full" bg="brand.secondary" {...props}>
      {props.children}
    </Center>
  );
};

export default MainContainer;
