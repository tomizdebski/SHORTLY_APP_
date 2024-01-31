import React from "react";

const Card = ({title, description}:{title:String, description:String}) => {
  return (
    <div
      className="bg-white p-6 mt-6 flex gap-5 flex-col items-start justify-between shrink-0 w-[332px] h-[400px] relative shadow rounded shadow-black
      "
      
    >
      <div className="flex flex-row gap-[25px] items-center justify-start shrink-0 w-72 relative">
        <div className="bg-red-nav rounded-[5px] shrink-0 w-[13px] h-[91px] relative"></div>
        <div className="text-grey text-left font-saira text-huge relative w-[250px] leading-[105%]">
          {title}
        </div>
      </div>
      <div className="text-grey text-left leading-8 relative w-[291px] h-[307px]">
        {description}
      </div>
    </div>
  );
};

export default Card;
