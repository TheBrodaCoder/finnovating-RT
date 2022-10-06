import React from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const PlaceholderCard = () => {
  return (
    <VStack
      w={{ base: "full", md: "350px", lg: "450px" }}
      bg="brand.primary"
      borderRadius="6px"
      boxShadow="dark-lg"
      position="relative"
      flexDirection="column"
    >
      <Center h="400px" w="full">
        <Skeleton h="full" w="full" />
      </Center>
      <VStack minW="full" px={4} py={2} spacing={3}>
        <SkeletonText
          noOfLines={2}
          spacing="2"
          skeletonHeight={{ base: "12px", md: "24px" }}
          w="full"
        />
        <SkeletonText noOfLines={3} spacing="2" w="full" />
      </VStack>
      <HStack minW="full" px={4} py={2} justify="space-between">
        <Skeleton w="80px" h="42px" />
        <Skeleton w="80px" h="42px" />
      </HStack>
    </VStack>
  );
};

export default PlaceholderCard;
