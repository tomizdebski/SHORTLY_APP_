import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import MainInput from "./MainInput";

const Hero = () => {
  return (
    <div className="w-full   flex flex-row  justify-between text-soft-grey relative bg-white items-center">
      <img
        className="flex relative w-[100%]   z-[0] object-cover shrink-0 min-h-[550px] max-h-[650px]"
        alt=""
        src="/rectangle_black.svg"
      />
      <div className="flex flex-col gap-[3px] items-start justify-start shrink-0 w-[522px] absolute top-20 left-20">
        <div className="text-[#ffffff] text-left font-saira text-8xl leading-none font-bold relative self-stretch">
          More than just shorter links{" "}
        </div>
        <div className="text-[#ffffff] text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative self-stretch h-[63px]">
          Build your brand’s recognition and get detailed
          <br />
          insight on your links are performing{" "}
        </div>
        <Button
              text="Get Started"
              url="/signup"
              className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
            />

        
      </div>
<MainInput />
    </div>
  );
};

export default Hero;
