import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderComponent = ({ value, onChange, min, max, step }) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="ml-4 text-right mb-1">{value} %</div>
      <div className="flex-grow px-2">
        <Slider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
      </div>
    </div>
  );
};

export default SliderComponent;
