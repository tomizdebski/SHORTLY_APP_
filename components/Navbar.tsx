import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { getServerSession } from "next-auth";
import { authOptions } from "./../app/lib/auth";
import { Logout } from "./Buttons";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)

  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex gap-7">
        <Link href="/" className="shrink-0 w-[131px] h-[41px] relative">
          <div className="flex flex-row gap-1 items-center justify-start ">
            <Image
              src="logo.svg"
              width={46}
              height={46}
              alt="Logo"
              className=""
            />

            <div className="text-red-nav text-left font-saira text-[32px] leading-[90%] font-bold relative">
              Shortly{" "}
            </div>
          </div>
        </Link>
        <div className="md:flex flex-row gap-8 items-center justify-start shrink-0 w-[230px] hidden">
          <Link
            href="/features"
            className="text-[#ffffff] text-left font-saira  "
          >
            Features{" "}
          </Link>
          <Link
            href="/pricing"
            className="text-[#ffffff] text-left font-saira "
          >
            Pricing{" "}
          </Link>
          <Link
            href="/resources"
            className="text-[#ffffff] text-left font-saira "
          >
            Resources{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center shrink-0">
        <div className="flex flex-row  items-start justify-start shrink-0">
          

          {!session && (
            <Button
              text="Sign In"
              url="/api/signin"
              className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
            />
          )}

          {session && <Logout />}

          {session && (
            <Image
              src={session.user?.image as string}
              alt="user profile photo"
              width={48}
              height={48}
              className="border-2 border-red-nav"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
