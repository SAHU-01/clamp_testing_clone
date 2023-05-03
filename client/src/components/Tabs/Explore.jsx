import React from "react";
import Cards from "../Cards";

const Explore = () => {
  return (
    <div>
      <div className=" font-medium mb-10">
        <h1 className="text-2xl font-semibold">Buy Clamp indexes</h1>
        <h1 className="text-md text-slate-500 font-medium mb-10">
          Buy any crypto index anytime, anywhere.
        </h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Explore;
