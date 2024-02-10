"use client";
import React from "react";
import Button from "./Button";
import CopyButton from "./CopyButton";
import { useState } from "react";
import generateRandomString from "../helpers/genRandomString";  

const MainInput = () => {
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const genLink = () => {
    setShortLink(generateRandomString(6));
    console.log(shortLink);
  };

  const saveLinkToDb = () => {
    fetch("http://localhost:3000/api/add_link", {
      method: "POST",
      body: JSON.stringify({ shortLink, link }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex bg-white h-0 mx-auto w-[100%] justify-center">
      <div className="xs:hidden sm:flex bg-black   rounded p-[34px]  flex-row  items-center  xs:w-[60vh] sm:w-[90%] max-w-[1080px] h-[111.8px] shadow-3xl  shadow-red-600 relative top-[-100px]  ">
        <div className="flex flex-col sm:flex-row items-center justify-between w-[100%] relative">
          <input
            className="bg-white text-black rounded-none w-full h-12 relative pl-3"
            onChange={(ev) => setLink(ev.target.value)}
          />
          <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
           
            <button 
            className="bg-red-nav py-[12px] px-[88px] sm:py-[12px] sm:px-[24px]  flex-1 text-center  text-[#ffffff]  font-saira hover:bg-red-400"
            onClick={() => genLink()}
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black p-6 flex flex-col gap-3  relative top-[-100px] shadow-3xl  shadow-red-600 h-[144px] w-[90%] sm:hidden">
        <div className="bg-[#ffffff] self-stretch shrink-0 h-[42px] relative overflow-hidden"></div>
        <div className="bg-[rgba(228,2,2,0.94)] pt-3 pr-[97px] pb-3 pl-[97px] flex flex-col h-[42px] gap-3 items-center justify-center self-stretch relative overflow-hidden hover:bg-red-400">
          <button
            className="text-[#ffffff] text-left font-saira  relative  "
            onClick={() => genLink()}
          >
            Shorten It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainInput;
