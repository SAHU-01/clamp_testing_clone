import React from "react";
import useFetchCards from "./useFetchCards";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";

const WishListedCards = ({ ids }) => {
  const { response, error } = useFetchCards();

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let gridCols = "grid-cols-1";
  if (isLargeScreen) {
    gridCols = "grid-cols-3";
  } else if (isMediumScreen) {
    gridCols = "grid-cols-2";
  }

  if (!response) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg p-4">
        <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-10 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-10 bg-gray-300 rounded w-2/3 mb-2"></div>
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {response.all_indexes
        .filter((card) => card._id === ids)
        .map((card) => (
          <Card
            key={card._id}
            id={card._id}
            cardHeading={card.indexName}
            tokens={card.indexComposition.map((m) => `${m.tokenName}`)}
            priceChangeMap={response.currentOraclePrices}
            defaultWatchlistValue={true}
          />
        ))}
    </div>
  );
};

export default WishListedCards;
