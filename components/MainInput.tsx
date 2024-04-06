"use client";
import React from "react";
import Button from "./Button";
import CopyButton from "./CopyButton";
import { useState, useEffect } from "react";
import generateRandomString from "../helpers/genRandomString";
import { useContext } from "react";
import { LinksContext } from "./LinksContext";
import { set } from "mongoose";

const MainInput = ({ email }: any) => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { links, setLinks } = useContext(LinksContext) as any;
  console.log("context", links);

  useEffect(() => {
    setShortUrl(generateRandomString(6));
  }, [url]);

  const saveLinkToDb = async () => {
    await fetch(process.env.NEXT_PUBLIC_URL + "api/links", {
      method: "POST",
      body: JSON.stringify({ url, shortUrl, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setLinks([...links, data]);
        }
        console.log(data);
      });
    await setUrl("");
  };

  const saveLinkToLocalStorage = () => {
    const link = { url, shortUrl, email };
    const existingLinks = localStorage.getItem("links");
    const linksArray = existingLinks ? JSON.parse(existingLinks) : [];
    linksArray.push(link);
    localStorage.setItem("links", JSON.stringify(linksArray));
    console.log(localStorage.getItem("links"));
  };

  



  const isValidUrl = (url: string) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUrl(inputValue);
  };

  const handleSubmit = () => {
    if (isValidUrl(url)) {
      saveLinkToDb();
      saveLinkToLocalStorage();
    } else {
      setUrl("This is not a valid URL. Please enter a valid URL.");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex bg-white h-0 mx-auto w-[100%] justify-center"
    >
      <div className="xs:hidden sm:flex bg-black   rounded p-[34px]  flex-row  items-center  xs:w-[60vh] sm:w-[90%] max-w-[1080px] h-[111.8px] shadow-3xl  shadow-red-600 relative top-[-100px]  ">
        <div className="flex flex-col sm:flex-row items-center justify-between w-[100%] relative">
          <input
            className="bg-white text-black rounded-none w-full h-12 relative pl-3"
            onChange={(ev) => handleInputChange(ev)}
            type="text"
            placeholder="Shorten a link here..."
            value={url}
          />

          <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
            <button
              className="bg-red-nav py-[12px] px-[88px] sm:py-[12px] sm:px-[24px]  flex-1 text-center  text-[#ffffff]  font-saira hover:bg-red-400"
              type="submit"
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black p-6 flex flex-col relative top-[-100px] shadow-3xl  shadow-red-600 h-[148px] w-[90%] sm:hidden rounded ">
        <input
          className="bg-[#ffffff] pl-3 text-black self-stretch shrink-0 h-12 relative overflow-hidden text-center"
          onChange={(ev) => handleInputChange(ev)}
          type="text"
          placeholder="Shorten a link here..."
          value={url}
        />

        <button
          className="text-[#ffffff] text-left font-saira  relative bg-[rgba(228,2,2,0.94)] pt-3 pr-[97px] pb-3 pl-[97px] flex flex-col h-[48px] gap-3 items-center justify-center self-stretch   hover:bg-red-400"
          type="submit"
        >
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default MainInput;
