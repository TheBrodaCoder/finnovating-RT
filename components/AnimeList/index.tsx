import AnimeCard from "components/AnimeCard";
import React from "react";
import { MediaElement } from "services/queries/getMedia";

const AnimeList = ({ showedCards }: { showedCards: MediaElement[] }) => {
  return (
    <>
      {showedCards.map((card) => (
        <AnimeCard cardData={card} key={card.id} />
      ))}
    </>
  );
};

export default AnimeList;
