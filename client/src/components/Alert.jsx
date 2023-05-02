import React from "react";
import { create } from "zustand";
import { FiX } from "react-icons/fi";

const useAlertStore = create((set) => ({
  showAlert: true,
  hideAlert: () => set({ showAlert: false }),
}));

const Alert = () => {
  const { showAlert, hideAlert } = useAlertStore();

  return (
    <>
      {showAlert && (
        <div className="block transition duration-500 ease-in-out fixed top-0 left-0 right-0 z-10">
          <div className="bg-[#FF7A30] text-white py-2 px-4 text-sm font-medium text-center flex justify-around items-center">
            <span>
              Clamp is deployed on the Polygon mainnet but still undergoing
              testing. There is a risk of losing your funds and cryptocurrency.
              To go back to Clamp's main page{" "}
              <a className="underline" href="https://joinclamp.com">
                click here
              </a>
              .
            </span>
            <button
              className=" text-white hover:text-white focus:outline-none focus:text-white ml-5"
              onClick={hideAlert}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
