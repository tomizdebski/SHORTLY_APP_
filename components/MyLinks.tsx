'use client';
import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Button from "./Button";
import axios from "axios";
import { LinksContext } from "./LinksContext";
import CopyButton from "./CopyButton";



type Link = {
  url: string;
  shortUrl: string;
  email: string;
}



const MyLinks = ({email}: any) => {

    const { links, setLinks } = useContext(LinksContext) as any;

    //  useEffect(() => {
    //   axios.get(process.env.NEXT_PUBLIC_URL + "api/links?query=" + email).then((req) => {
    //     const { data } = req;
    //     console.log('moje linki ' + data)
        
    //   });
    //  }, []);

    const removeElement = (shortUrl: string) => {
      setLinks((prevLinks: Link[]) => prevLinks.filter((el: Link) => el.shortUrl !== shortUrl));
      axios.delete(process.env.NEXT_PUBLIC_URL + "api/links?query=" + shortUrl).then((req) => {
        const { data } = req;
        console.log('deleted ' + data)
      });
    };

     

  return (
    <div className="flex flex-col w-[100%] items-center bg-white pt-10 px-12">

        {links.map((el : Link) => (<div key={el.shortUrl} className="w-[100%] h-auto  items-center justify-between flex flex-col md:flex-row pt-5 bg-white m-auto">
        <div className="p-2.5 justify-center items-center gap-2.5 flex ">
          <div className="text-black leading-[17.60px] ">
            {el.url}
          </div>
        </div>
        <div className="h-12 justify-between items-center flex">
          <div className="h-[47px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-red-600  font-saira leading-7">
              {el.shortUrl}
            </div>
          </div>
          <div className="justify-center items-center flex gap-2">
           
            <CopyButton text={el.shortUrl} />
             <button onClick={() => removeElement(el.shortUrl)} className="w-12 h-12 p-3 bg-white border border-red-600 bg-opacity-95 justify-center items-center gap-2.5 flex  hover:bg-red-400">
              <Image src="red_remove.svg" width={16} height={16} alt="remove" />
            </button>
          </div>
        </div>
      </div>))}


      

    </div>
  );
};

export default MyLinks;
