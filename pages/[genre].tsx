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
    <MainContainer>
      <Head>
        <title>Discover animes about {`${genre}`}</title>
        <meta name="description" content="A random anime suggester" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContainer>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          py="20"
          justify="center"
          align="center"
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
          w="full"
          justify="center"
          spacing={6}
          position={{ md: "absolute" }}
          top="10"
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
