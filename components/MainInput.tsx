import React from "react";
import Button from "./Button";

const MainInput = () => {
  return (
    <div
      className="bg-black pt-[33px] pr-[34px] pb-[33px] pl-[34px] flex flex-row items-center justify-between w-[1108px] h-[111.8px]  overflow-hidden absolute bottom-0 left-20 align-middle shadow-2xl  shadow-blue-200"
      
    >
      <div className="flex flex-row items-center justify-between shrink-0 w-[1030px] relative">
        <input className="bg-white shrink-0 w-[879px] h-12 relative"></input>
        <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
          <Button   text="Shorten It!" url="/signup" className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400" />
        </div>
      </div>
    </div>
  );
};

export default MainInput;
