import { gql } from "@apollo/client";

export interface GET_GENRE_COLLECTION_RESPONSE {
  GenreCollection: string[];
}

export const GET_GENRE_COLLECTION = gql`
  query {
    GenreCollection
  }
`;
