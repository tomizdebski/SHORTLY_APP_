import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex justify-between text-soft-grey relative items-center bg-white">
      <img
        className="flex  z-[0] object-cover min-h-[800px] lg:min-h-[500px] "
        alt=""
        src="/rectangle_black.svg"
      />
      <div className="flex px-4 flex-col lg:flex-row absolute top-20  gap-20 w-full  left-0  justify-center items-center">
      <div className="flex flex-col gap-3  justify-center items-center lg:items-start shrink-0 ">
        <div className="text-[#ffffff] text-center lg:text-left text-huge font-saira  leading-none font-bold relative self-stretch shrink-0">
          More than just shorter links{" "}
        </div>
        <div className="text-[#ffffff] text-center lg:text-left font-inter leading-5 relative self-stretch h-[63px]">
          Build your brand’s recognition and get detailed
          <br />
          insight on your links are performing{" "}
        </div>
        
        <Button
              text="Get Started"
              url="/signup"
              className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center  justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
            />
      </div>
      <Image
            src="/shorten.png"
            width={500}
            height={500}
            alt="banner"
            className=""
          />
      </div>
      

    </div>
  );
};

export default Hero;
