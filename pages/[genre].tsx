import { Button, HStack, Stack } from "@chakra-ui/react";
import InnerContainer from "components/InnerContainer";
import MainContainer from "components/MainContainer";
import Link from "next/link";
import React from "react";
import PlaceholderCard from "components/PlaceholderCard";
import useGetCards from "services/hooks/useGetCards";
import AnimeList from "components/AnimeList";
import Head from "next/head";
import { useRouter } from "next/router";

const Genre = () => {
  const { loading, showedData, getMore } = useGetCards();
  const router = useRouter();
  const { genre } = router.query;

  return (
    <MainContainer minH={{ base: "initial", md: "100%" }}>
      <Head>
        <title>Discover animes about {`${genre}`}</title>
        <meta name="description" content="A random anime suggester" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContainer
        direction={{ base: "column-reverse", md: "row" }}
        py={{ base: 20, md: 0 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          px={{ base: 8, md: 0 }}
          py={{ base: 8, md: 0 }}
          justify="center"
          align="center"
          spacing={{ base: 8, md: 4 }}
        >
          {loading ? (
            <>
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
            </>
          ) : (
            <AnimeList showedCards={showedData} />
          )}
        </Stack>
        <HStack
          w={{ base: "full", md: "initial" }}
          justify="center"
          spacing={6}
          position={{ base: "fixed", md: "absolute" }}
          top={{ base: 0, md: 10 }}
          bg={{ base: "whiteAlpha.300", md: "initial" }}
          py={{ base: 4, md: 0 }}
          backdropFilter="blur(10px)"
        >
          <Button variant="genreButton">
            <Link href="/">Go back!</Link>
          </Button>
          <Button variant="genreButton" onClick={getMore}>
            Want more?
          </Button>
        </HStack>
      </InnerContainer>
    </MainContainer>
  );
};

export default Genre;
