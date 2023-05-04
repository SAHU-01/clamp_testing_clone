import React, { useState } from "react";
import Slider from "./Slider";

const TokenComposition = ({ tokenName }) => {
  const numBars = tokenName.length === 2 ? 2 : 3;
  //const [value, setValue] = useState(numBars === 3 ? 2 : undefined);

  const [value, setValue] = useState(50);

  const handleChange = (newValue) => {
    setValue(newValue);
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
              value={value}
              onChange={handleChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenComposition;
