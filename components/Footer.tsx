import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[400px]  bg-black p-10 ">
      <div className="flex xs:flex-col lg:flex-row  xs:items-center  lg:items-start justify-between  relative w-[80%]">
        <div className="text-red-nav text-center lg:text-left font-saira text-huge  relative">
          Shortly{" "}
        </div>

        <div className="flex flex-col gap-[17px] shrink-0">
          <div className="text-white text-center lg:text-left font-bold  relative w-[104px]">
            Features{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left relative">
            Link Shortening{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left relative">
            Branded Links{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Analytics{" "}
          </div>
        </div>
        <div className="flex flex-col gap-[17px] shrink-0 relative">
          <div className="text-white text-center lg:text-left font-bold  relative w-[104px]">
            Resources{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Link Sharing{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Branded Links{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Analytics{" "}
          </div>
        </div>
        <div className="flex flex-col gap-[17px]  shrink-0 relative">
          <div className="text-white text-center xs:text-center lg:text-left font-bold  relative w-[104px]">
            Company{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Link Sharing{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Branded Links{" "}
          </div>
          <div className="text-soft-grey text-center lg:text-left  relative">
            Analytics{" "}
          </div>
          
        </div>
        <div className="flex flex-row gap-[9px] items-start justify-start shrink-0 relative" >
        <div className="flex flex-row gap-1 items-center justify-start ">
          <Image
            src="linkedin.svg"
            width={30}
            height={30}
            alt="linkedin"
            className=""
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start ">
          
        </div>
        <div className="flex flex-row gap-1 items-center justify-start ">
          <Image
            src="facebook.svg"
            width={30}
            height={30}
            alt="facebook"
            className=""
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start ">
          <Image
            src="instagram.svg"
            width={30}
            height={30}
            alt="instagram"
            className=""
          />
        </div>
</div>
      </div>
      <div className="flex flex-col md:flex-row justify-center xl:justify-between   relative">
        <div className="flex flex-row gap-[7px] items-center justify-start  w-[198px] relative">
          <div className="flex flex-row gap-1 items-center justify-start ">
            <Image
              src="message.svg"
              width={32}
              height={24}
              alt="Logo"
              className=""
            />

            <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
              info@shortly.com{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[54px] items-start justify-start  relative">
          <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
            Privacy policy{" "}
          </div>
          <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
            Terms &amp; conditions{" "}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
