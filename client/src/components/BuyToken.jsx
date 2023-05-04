import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import TokenComposition from "./TokenComposition";

const BuyTokenModal = ({ cardHeading, token, showModal, onCloseModal }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const calculateTokenAmount = () => {
    // Calculate the token amount based on the entered dollar amount
    // and the token exchange rate
    // ...
    return NaN;
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed z-50 backdrop-blur-sm bg-black/10 inset-0 flex items-center justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onCloseModal();
            }
          }}
        >
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto flex flex-col lg:w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-semibold text-left flex-grow leading-6">
                <h1>{cardHeading} Index</h1>
              </div>
              <button onClick={onCloseModal}>
                <IoCloseSharp className="w-3.5 h-3.5 text-[#606565] font-black" />
              </button>
            </div>
            <div className="space-y-4 mt-5">
              <div className="w-64 lg:w-full">
                <label
                  htmlFor="input"
                  className="block font-medium text-gray-700 text-md "
                >
                  Enter Amount (in $)
                </label>
                <input
                  id="input"
                  type="text"
                  className="border border-gray-400 p-2 rounded-md w-full"
                  value={amount}
                  onChange={handleAmountChange}
                />
                <label
                  htmlFor="input"
                  className="block font-medium text-gray-700 text-sm mb-1 "
                >
                  Amount in Matic (approx)
                </label>
                <div>
                  <h1>{calculateTokenAmount()}</h1>
                </div>
              </div>
              <div>
                <h1 className="text-md font-medium">Token Composition</h1>
                <TokenComposition tokenName={token} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BuyToken = ({ cardHeading, token }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-1/2 w-full">
      <button
        className="w-full bg-black hover:bg-slate-800 text-white font-bold py-2 flex justify-center"
        onClick={handleToggleModal}
      >
        <span className="text-center">Buy</span>
      </button>
      <BuyTokenModal
        cardHeading={cardHeading}
        token={token}
        showModal={showModal}
        onCloseModal={handleToggleModal}
      />
    </div>
  );
};

export default BuyToken;
