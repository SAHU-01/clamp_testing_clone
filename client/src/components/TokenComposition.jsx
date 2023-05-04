import React, { useState } from "react";
import Slider from "./Slider";

const TokenComposition = ({
  tokenName,
  val,
  setVal,
  priceChangeMap,
  amount,
}) => {
  const numBars = tokenName.length === 2 ? 2 : 3;

  const handleChange = (newValue, idx) => {
    if (idx === 0)
      setVal(() => ({
        0: newValue,
        1: (100 - newValue) / (numBars - 1),
        2: (100 - newValue) / (numBars - 1),
      }));
    else if (idx === 1)
      setVal(() => ({
        0: (100 - newValue) / (numBars - 1),
        1: newValue,
        2: (100 - newValue) / (numBars - 1),
      }));
    else if (idx === 2)
      setVal(() => ({
        0: (100 - newValue) / (numBars - 1),
        1: (100 - newValue) / (numBars - 1),
        2: newValue,
      }));
  };

  const calcTokenPrice = (token, i) => {
    const price = priceChangeMap[token].price;
    return ((amount * val[i]) / price).toFixed(19);
  };

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {tokenName.map((token, i) => (
        <div key={i} className="flex flex-col border p-2 rounded">
          <div className="flex flex-row gap-5 items-center">
            <div>
              <img
                src={`https://test.joinclamp.com/tokens/${token}.svg`}
                alt={`Token ${i + 1}`}
                className="w-10 h-10"
              />
            </div>
            <div className="">
              <h1 className="text-black text-lg">{token}</h1>
              <h1 className="text-slate-700 text-sm">{token}</h1>
            </div>
          </div>
          <div>
            {/*<Slider value={50} setValue={(val) => {}} numBars={numBars} />*/}
            <Slider
              value={val[i]}
              onChange={(v) => handleChange(v, i)}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div className="text-xs px-2 mt-1 font-medium mb-2">
            {calcTokenPrice(token, i)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenComposition;
