import { useQuery } from "@apollo/client";
import { shuffle } from "lodash";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import GET_MEDIA, {
  GET_MEDIA_RESPONSE,
  MediaElement,
} from "services/queries/getMedia";

interface useGetCardResponse {
  showedData: MediaElement[];
  getMore: VoidFunction;
  loading: boolean;
}

const useGetCards = (): useGetCardResponse => {
  const router = useRouter();
  const { genre } = router.query;

  const [showedData, setShowedData] = useState<MediaElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { loading, refetch } = useQuery<GET_MEDIA_RESPONSE>(GET_MEDIA, {
    variables: {
      genres: [genre],
      page: currentPage,
      perPage: 3,
    },
    onCompleted: ({ Page: { media } }) => {
      const shuffledMedia = shuffle(media);
      const firstShowed = shuffledMedia.slice(0, 3);
      setShowedData(firstShowed);
    },
  });

  const getMore = () => {
    refetch({ page: currentPage + 1 });
    setCurrentPage(currentPage + 1);
  };

  return {
    loading,
    showedData,
    getMore,
  };
};

export default useGetCards;
