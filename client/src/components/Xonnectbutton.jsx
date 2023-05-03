import React, { useEffect } from "react";
import { create } from "zustand";
import { IoCloseSharp } from "react-icons/io5";

const useModalStore = create((set) => ({
  showModal: false,
  toggleModal: (show) => set(() => ({ showModal: show })),
}));

const Connectbutton = () => {
  const { showModal, toggleModal } = useModalStore();

  useEffect(() => {
    // add event listener to handle clicks outside the center div
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-background") {
        toggleModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal, toggleModal]);

  return (
    <>
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        onClick={() => toggleModal(true)}
      >
        <span>Connect Wallet</span>
      </button>

      {showModal && (
        <div
          id="modal-background"
          className="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-extrabold text-center flex-grow leading-6">
                Connect Wallet
              </div>
              <button
                className="bg-[#F0F1F1] border border-[#E8E8E9] rounded-full p-1"
                onClick={() => toggleModal(false)}
              >
                <IoCloseSharp className="w-3.5 h-3.5 text-[#606565] font-black" />
              </button>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Connect with Metamask
              </button>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">
                Connect with Rainbow
              </button>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
                Connect with WalletConnect
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Connect with Coinbase Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Connectbutton;
