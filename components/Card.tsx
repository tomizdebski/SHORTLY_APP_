import React from "react";

const Card = () => {
  return (
    <div
      className="bg-[#ffffff] pt-[17px] pr-[19px] pb-[17px] pl-[19px] flex flex-col items-start justify-between shrink-0 w-[332px] h-[513px] relative shadow-2xl  shadow-gray-800"
      
    >
      <div className="flex flex-row gap-[25px] items-center justify-start shrink-0 w-72 relative">
        <div className="bg-red-nav rounded-[5px] shrink-0 w-[13px] h-[91px] relative"></div>
        <div className="text-grey text-left font-heading-2-font-family text-heading-2-font-size leading-heading-2-line-height font-heading-2-font-weight relative w-[250px]">
          Fully Customizable{" "}
        </div>
      </div>
      <div className="text-grey text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative w-[291px] h-[307px]">
        Lorem ipsum dolor sit amet consectetur. Sed lectus enim id nibh accumsan
        vitae. Sollicitudin leo sed quam mi id. Velit amet rhoncus proin netus
        aliquet donec. <br />
        <br />
        Dignissim nibh lorem proin dignissim velit nibh. Tempor tempor feugiat
        venenatis vulputate nulla fusce mattis ullamcorper. Laoreet faucibus
        proin in non arcu faucibus.{" "}
      </div>
    </div>
  );
};

export default Card;
