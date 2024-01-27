import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const BottomBanner = () => {
  return (
    <div className="w-full flex justify-between text-soft-grey relative bg-white items-center">
      <img
        className="flex  z-[0] object-cover min-h-[550px]  "
        alt=""
        src="/reactangle_blue.svg"
      />
      <div className="flex  flex-col w-full absolute top-60 left-0 items-center  gap-9">
      
        <div className="text-[#ffffff] text-center font-saira text-huge leading-none font-bold relative self-stretch">
          Boost your links today
        </div>
        
        <Button
              text="Get Started"
              url="/getStarted"
              className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
            />
      
      
      </div>
      

    </div>
  )
}

export default BottomBanner
