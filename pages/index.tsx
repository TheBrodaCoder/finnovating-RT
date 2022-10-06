import { Button, Heading, Stack, Wrap } from "@chakra-ui/react";
import InnerContainer from "components/InnerContainer";
import MainContainer from "components/MainContainer";
import { shuffle } from "lodash";
import Head from "next/head";
import Link from "next/link";
import client from "services/client";
import {
  GET_GENRE_COLLECTION,
  GET_GENRE_COLLECTION_RESPONSE,
} from "services/queries/getGenreCollection";

export async function getStaticProps() {
  const { data } = await client.query<GET_GENRE_COLLECTION_RESPONSE>({
    query: GET_GENRE_COLLECTION,
  });

  return {
    props: {
      genres: shuffle(data.GenreCollection),
    },
  };
}

const Home = ({ genres }: { genres: string[] }) => {
  return (
    <>
      <Head>
        <title>Discover your next anime!</title>
        <meta
          name="description"
          content="Discover new animes to watch without the flood of the common websites."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer h="full">
        <InnerContainer px={8} align="center">
          <Heading textAlign="center">What is your mood today?</Heading>
          <Wrap w="full" justify="center">
            {genres.map((genre) => (
              <Link key={genre} href={`/${genre}`}>
                <Button variant="genreButton">{genre}</Button>
              </Link>
            ))}
          </Wrap>
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default Home;
