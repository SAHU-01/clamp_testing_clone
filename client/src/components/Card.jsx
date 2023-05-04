import { create } from "zustand";
import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import BuyToken from "./BuyToken";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

const colors = [
  "bg-yellow-300",
  "bg-violet-500",
  "bg-pink-500",
  "bg-[#2775CA]",
  "bg-[#F19241]",
];
function getColor(name) {
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 6) - hash);
    }
    return hash;
  }
  if (name) {
    const hash = hashCode(name);
    const index = hash % colors.length;
    return colors[Math.abs(index)];
  } else {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

const Card = ({ cardHeading, priceChangeMap, tokens, id }) => {
  const { isConnected, address } = useAccount();

  const calculatePercentChange = () => {
    let sum = 0;
    tokens.map((token) => {
      const { change } = priceChangeMap[token];
      sum += change;
    });
    return sum / tokens.length;
  };
  const percentageChange = calculatePercentChange();
  const isPositive = percentageChange >= 0;

  const [isWatchlistActive, setIsWatchlistActive] = useState(false);
  const [toastId, setToastId] = useState(null);

  const clearToast = () => {
    toast.dismiss(toastId);
    setToastId(null);
  };

  const showToast = () => {
    const message = isWatchlistActive
      ? "Added to watchlist"
      : "Removed from watchlist";
    const options = {
      position: "bottom-right",
      autoClose: 900000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    };
    if (toastId) {
      toast.update(toastId, { render: message });
    } else {
      const newToastId = toast.dark(message, options);
      setToastId(newToastId);
    }
  };

  const toggleWatchlist = () => {
    //setIsWatchlistActive(!isWatchlistActive);
    //showToast();
    //clearToast();

    if (isWatchlistActive) {
      //console.log("send delete request");
      const promises = [
        fetch(`https://api.joinclamp.com/v1/indexes/watchlist/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userAddress: address }),
        }).then((res) => res.json()),
      ];
      Promise.all(promises).then(() => {
        setIsWatchlistActive(!isWatchlistActive);
        showToast();
        clearToast();
      });
    } else {
      const promises = [
        fetch("https://api.joinclamp.com/v1/users", {
          method: "POST",
          body: JSON.stringify({ userAddress: address }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json()),

        fetch(`https://api.joinclamp.com/v1/indexes/watchlist/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userAddress: address }),
        }).then((res) => res.json()),
      ];

      Promise.all(promises).then(() => {
        setIsWatchlistActive(!isWatchlistActive);
        showToast();
        clearToast();
      });
    }
  };

  const alertMessage = isWatchlistActive
    ? "added to watchlist"
    : "removed from watchlist";

  const watchlistIcon = isWatchlistActive ? (
    <AiFillStar
      onClick={toggleWatchlist}
      style={{ color: "#FF7A30", width: "24px", height: "24px" }}
    />
  ) : (
    <AiOutlineStar
      onClick={toggleWatchlist}
      style={{ width: "24px", height: "24px" }}
    />
  );
  return (
    <div className="bg-white rounded-sm border border-black">
      <div className="flex">
        {tokens.map((token) => {
          const className = getColor(token);
          return <div className={`h-2 w-full ${className}`} />;
        })}
      </div>
      <div className="p-4 flex flex-row justify-between relative">
        <h2 className="text-lg font-medium text-gray-900">{cardHeading}</h2>
        {/*<AiOutlineStar className="inline-block w-6 h-6" />*/}
        {isConnected &&
          (isWatchlistActive ? (
            <AiFillStar
              onClick={toggleWatchlist}
              style={{ color: "#FF7A30", width: "24px", height: "24px" }}
            />
          ) : (
            <AiOutlineStar
              onClick={toggleWatchlist}
              style={{ width: "24px", height: "24px" }}
            />
          ))}

        {toastId && (
          <IoCloseSharp
            onClick={clearToast}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Underlying Tokens
          </h3>
          <div className="flex space-x-2">
            {tokens.map((token, i) => (
              <img
                key={i}
                src={`https://test.joinclamp.com/tokens/${token}.svg`}
                alt={`Token ${i + 1}`}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-sm font-medium text-gray-500">Price Change</h3>
          <h4 className="text-xs font-medium text-gray-500 mb-1">
            (in 24 hours)
          </h4>
          <div className="flex flex-row text-right">
            <div>
              <h2
                className={`text-2xl font-medium ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {isPositive ? (
                  <FiArrowUpRight className="inline-block mr-1" />
                ) : (
                  <FiArrowDownRight className="inline-block mr-1" />
                )}
              </h2>
            </div>
            <div>
              {" "}
              <h2 className="text-2xl font-medium text-gray-900 text-right">
                {Math.abs(percentageChange).toFixed(2)}%
              </h2>
            </div>
          </div>
        </div>
      </div>

      <BuyToken cardHeading={cardHeading} token={tokens} />
    </div>
  );
};

export default Card;
