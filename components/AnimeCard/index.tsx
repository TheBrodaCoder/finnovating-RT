import React, { useState } from "react";
import { Box, Center, Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import { MediaElement } from "services/queries/getMedia";
import Image from "next/image";

const AnimeCard = ({ cardData }: { cardData: MediaElement }) => {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <Flex
      w={{ base: "full", md: "350px", lg: "450px" }}
      minH={{ base: "min-content", md: "400px", lg: "550px" }}
      bg="brand.primary"
      borderRadius="6px"
      boxShadow="dark-lg"
      position="relative"
      flexDirection="column"
      flexBasis="initial"
      transition="height 1s ease"
      onMouseOver={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      onClick={() => setCardHovered(!cardHovered)}
    >
      <Center h="300px" w="full" position="relative" bg="whiteAlpha.200" p="4">
        <Box position="absolute" w="100%" h="100%">
          <Image
            src={cardData.coverImage.large}
            alt={`${cardData.id}-image-shadow`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{
              filter: "blur(6px)",
            }}
          />
        </Box>
        <Image
          src={cardData.coverImage.large}
          alt={`${cardData.id}-image`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </Center>
      <Flex
        flexDirection="column"
        px={6}
        py={4}
        flexGrow={1}
        position="relative"
      >
        <Heading fontSize={{ base: "24px", md: "32px" }}>
          {cardData.title.romaji}
        </Heading>
        <Collapse in={cardHovered}>
          <Text>{cardData.description}</Text>
        </Collapse>
      </Flex>
    </Flex>
  );
};

export default AnimeCard;
