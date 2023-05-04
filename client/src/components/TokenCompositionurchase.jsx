import React, { useState } from "react";

const TokenCompositionPurchase = ({ tokenName, setStep }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setStep(1);
  };

  const handleStep1Click = () => {
    // TODO: navigate to Step 1 in buy token modal
    setActiveStep(1);
  };

  return (
    <div className="mt-2 flex flex-col">
      {tokenName.map((token, i) => (
        <div key={i} className="flex flex-col border p-2 rounded mb-2">
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
            <div className="text-xs px-2 mt-1 font-medium mb-2">
              text value to change
            </div>
            <div>
              {isEditing ? (
                <button
                  className="border rounded p-2 px-4"
                  onClick={handleStep1Click}
                >
                  Step 1
                </button>
              ) : (
                <button
                  className="border rounded p-2 px-4"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenCompositionPurchase;
