import React from 'react'
import Image from "next/image";
import { MainLogin } from "../../../components/Buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import Hero from '@/components/Hero';
import logo from '@/public/logo.svg';

export default async function SignIn() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/");
    }


  return (
    <div className=" mx-auto my-[100px] md:my-[300px] border  p-10  bg-slate-200">
        <div className='flex flex-wrap  gap-5 '>
        <h1 className="text-huge font-saira text-center text-black">Zaloguj się do </h1>
        <div className="flex flex-row gap-1 items-center justify-start ">
            

            <div className="text-red-nav  text-left font-saira text-huge leading-[90%] font-bold relative">
              Shortly{" "}
            </div>
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo"
              className=""
            />
          </div>
        </div>
      <div className="mt-8">
        
        <MainLogin />
      </div>
      </div>
  )
}

