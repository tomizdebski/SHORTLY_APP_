import React from "react";
import Button from "./Button";

const MainInput = () => {
  return (
    <div className="flex bg-white h-0 mx-auto w-[90%] justify-center">
    <div
      className="bg-black   rounded pt-[34px] pr-[34px] pb-[34px] pl-[34px] flex flex-row  items-center justify-between  xs:w-[60vh] sm:w-[60vh] md:w-[70vh] lg:w-[70vh] h-[111.8px]  align-middle shadow-3xl  shadow-red-600 relative top-[-100px]  "
    >
      <div className="flex flex-row items-center justify-between w-[100%] relative">
        <input className="bg-white rounded-none w-full h-12 relative"></input>
        <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
          <Button   text="Shorten It!" url="/signup" className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center  text-[#ffffff] text-left font-saira hover:bg-red-400" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainInput;
