import { gql } from "@apollo/client";

export interface MediaElement {
  id: string;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
  description: string;
  episodes: number | null;
  averageScore: number | null;
}

export interface PageResponse {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface GET_MEDIA_RESPONSE {
  Page: {
    media: MediaElement[];
    pageInfo: PageResponse;
  };
}

const GET_MEDIA = gql`
  query (
    $page: Int = 1
    $genres: [String]
    $perPage: Int = 18
    $id_not_in: [Int]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(
        genre_in: $genres
        sort: SCORE
        format: TV
        type: ANIME
        id_not_in: $id_not_in
      ) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
        description
        format
        episodes
        chapters
        genres
        isAdult
        averageScore
        meanScore
        mediaListEntry {
          id
          status
        }
      }
    }
  }
`;

export default GET_MEDIA;
