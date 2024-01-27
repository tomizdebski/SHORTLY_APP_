import React from "react";
import Card from "./Card";

const CardsInfo = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black pt-20 w-full gap-2">
      <div className="text-grey text-left font-saira text-[50px] leading-[110%] font-bold relative">
        Advanced Statistics{" "}
      </div>
      <div className="text-grey text-left font-inter  relative leading-3">
        Track how your links are performing across the web with our advanced
        statistics dashboard{" "}
      </div>

      <div className="flex gap-3 flex-wrap px-auto justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsInfo;
