import React from "react";
import useFetchCards from "./useFetchCards";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";

const Cards = () => {
  const { response, error } = useFetchCards();

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let gridCols = "grid-cols-1";
  if (isLargeScreen) {
    gridCols = "grid-cols-3";
  } else if (isMediumScreen) {
    gridCols = "grid-cols-2";
  }

  //   console.log(cards);
  if (!response) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(response);

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {response.all_indexes.map((card) => (
        <Card
          key={card._id}
          cardHeading={card.indexName}
          tokens={card.indexComposition.map((m) => `${m.tokenName}`)}
          //imageSrc={card.imageSrc}
          //numOfImages={card.indexCompositon.length}
          priceChangeMap={response.currentOraclePrices}
        />
      ))}
    </div>
  );
};

export default Cards;

//https://test.joinclamp.com/tokens/{token}.svg
