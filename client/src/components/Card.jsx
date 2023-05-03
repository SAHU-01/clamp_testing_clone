import { create } from "zustand";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const useCardStore = create((set) => ({
  cardHeading: "",
  setCardHeading: (cardHeading) => set({ cardHeading }),
  setImageSrc: (imageSrc) => set({ imageSrc }),
  setNumOfImages: (numOfImages) => set({ numOfImages }),
}));

const colors = [
  "bg-red-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-slate-500",
  "bg-violet-500",
];
function getColor(name) {
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
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

const Card = ({
  cardHeading,
  imageSrc,
  numOfImages,
  priceChangeMap,
  tokens,
}) => {
  //const { cardHeading, imageSrc, numOfImages, priceChange, token } =
  //useCardStore();
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

  console.log(getColor("Dan"));
  return (
    <div className="bg-white rounded-sm border border-black">
      <div className="flex">
        {tokens.map((token) => {
          const className = getColor(token);
          return <div className={`h-3 w-full ${className}`} />;
        })}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{cardHeading}</h2>
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
                className="w-6 h-6 rounded-full"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Price Change
          </h3>
          <h4 className="text-xs font-medium text-gray-500 mb-1 text-right">
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
      <div className="">
        <button className="w-full bg-black hover:bg-slate-800 text-white font-bold py-2">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
