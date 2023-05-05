import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import WishListedCards from "../WishListedCards";

const Watchlist = () => {
  const { isConnected, address } = useAccount();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("https://api.joinclamp.com/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userAddress: address }),
    })
      .then((response) => response.json())
      .then((body) => {
        setWatchlist(body.data.watchList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [address]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Your Watchlist</h1>
      <h1 className="text-md text-slate-500 font-medium mb-10">
        Saved Indexes would appear here. Refer them for future purpose.
      </h1>
      {watchlist.length > 0 ? (
        <div>
          {Array.from(new Set(watchlist)).map((cardId) => (
            <WishListedCards ids={cardId} key={cardId} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Watchlist;
