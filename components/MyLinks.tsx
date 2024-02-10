import React from "react";
import Image from "next/image";
import Button from "./Button";

const MyLinks = () => {
  return (
    <div className="flex w-[100%] items-center bg-white">
      <div className="w-[100vh] h-auto  items-center justify-between flex pt-10 bg-white m-auto">
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-black text-base font-bold font-saira leading-[17.60px]">
            https://shortly-v1.vercel.app
          </div>
        </div>
        <div className="h-12 justify-between items-center flex">
          <div className="h-[47px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-red-600 text-base font-bold font-saira leading-7">
              https://shortly-v1.vercel.app
            </div>
          </div>
          <div className="justify-center items-center flex gap-2">
           
            <div className="main_btn">Copy !</div>
             <button className="w-12 h-12 p-3 bg-white border border-red-600 bg-opacity-95 justify-center items-center gap-2.5 flex  hover:bg-red-400">
              <Image src="red_remove.svg" width={16} height={16} alt="remove" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLinks;