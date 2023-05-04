import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import TokenComposition from "./TokenComposition";
import TokenCompositionPurchase from "./TokenCompositionurchase";
import { BsFillFuelPumpFill } from "react-icons/bs";

const BuyTokenModal = ({ cardHeading, token, showModal, onCloseModal }) => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const calculateTokenAmount = () => {
    // Calculate the token amount based on the entered dollar amount
    // and the token exchange rate
    // ...
    return NaN;
  };

  const handleReset = () => {
    setAmount("");
    setStep(1);
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePurchase = () => {
    // Make the purchase based on the entered amount
    // ...
    onCloseModal();
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed z-50 backdrop-blur-sm bg-black/50 inset-0 flex items-center justify-center"
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
                <IoCloseSharp className="w-4 h-4 text-[#606565] font-black" />
              </button>
            </div>
            {step === 1 && (
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
                <div className="mt-5 flex flex-row gap-5">
                  <button
                    className="border w-full rounded py-2 font-medium"
                    onClick={handleReset}
                  >
                    Reset Compositions
                  </button>
                  <button
                    className="bg-black text-white w-full rounded py-2"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="grid grid-cols-3 gap-5 mt-2">
                  <div className="col-span-2">
                    <h1 className="text-2xl font-semibold">
                      0.9998040384084719
                    </h1>
                    <h1 className="text-xl font-bold">Matic</h1>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-row gap-1 float-right mb-2">
                      <div className="flex items-center text-sm">
                        <BsFillFuelPumpFill />
                      </div>
                      <div>
                        <h1 className="text-sm font-medium text-right">
                          Network Fees
                        </h1>
                      </div>
                    </div>
                    <div className="font-semibold">
                      <h1 className="text-md">266646804157</h1>
                      <h1 className="float-left">Wei</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-sm font-medium">Token Composition</h1>
                  <TokenCompositionPurchase
                    tokenName={token}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                  />
                </div>
                <div className="mt-5 flex flex-row gap-5">
                  <button
                    className="border w-full rounded py-2 font-medium"
                    onClick={handleReset}
                  >
                    Back
                  </button>
                  <button
                    className="bg-black text-white w-full rounded py-2"
                    onClick={handlePurchase}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const BuyToken = ({ cardHeading, token }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);

  const [composition, setComposition] = useState({
    token1: 0,
    token2: 0,
    token3: 0,
    token4: 0,
  });

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleReset = () => {
    setComposition({
      token1: 0,
      token2: 0,
      token3: 0,
      token4: 0,
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePurchase = () => {
    // Perform the token purchase logic
    // ...
    setStep(3);
  };

  const handleCompositionChange = (token, value) => {
    setComposition((prevComposition) => ({
      ...prevComposition,
      [token]: value,
    }));
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
        step={step}
        composition={composition}
        onCompositionChange={handleCompositionChange}
        onReset={handleReset}
        onNext={handleNext}
        onPurchase={handlePurchase}
      />
    </div>
  );
};

export default BuyToken;
