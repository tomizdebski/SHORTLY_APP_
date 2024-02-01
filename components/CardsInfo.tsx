import React from "react";
import Card from "./Card";

const CardsInfo = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black py-20 w-full gap-10">
      <div className="text-grey text-left font-saira text-huge leading-[110%] font-bold relative">
        Advanced Statistics{" "}
      </div>
      <div className="text-grey text-center font-inter  relative leading-5 w-[350px] sm:w-[430px]">
        Track how your links are performing across the web with our advanced
        statistics dashboard{" "}
      </div>

      <div className="flex gap-12 flex-wrap px-auto justify-center">
        <Card 
          title={"Brand Recognition"} 
          description={"Boost your brand recognition witheach click. Generic links dont't mean a thing. Branded links help instil confidence in your content"} />
        <Card 
          title={"Detailed Records"} 
          description={"Gain insights into who is clicking your links. Knowing when and where people engadget with your content helps inform better decision"} />
        <Card 
          title={"Fully Customizable"} 
          description={"Improve brand awarness and content disciverability through customizable links, supercharging audience engagement"} />
      </div>
    </div>
  );
};

export default CardsInfo;
