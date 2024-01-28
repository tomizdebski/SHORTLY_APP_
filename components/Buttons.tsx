"use client";

import { signIn, signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
    >
      Sign Out
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      onClick={() => signIn('github')}
      className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
    >
      Zaloguj
    </button>
  );
}

export function MainLogin() {
    return (
      <div className="flex flex-col gap-4" >
      <button
        onClick={() => signIn('github')}
        className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
      >
        Zaloguj przez Github
      </button>
      <button
      onClick={() => signIn('facebook')}
      className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
    >
      Zaloguj przez Facebook
    </button>
    <button
      onClick={() => signIn('google')}
      className="bg-red-nav pt-[12px] pr-[24px] pb-[12px] pl-[24px] flex flex-row  items-center justify-center shrink-0 text-[#ffffff] text-left font-saira hover:bg-red-400"
    >
      Zaloguj przez Google
    </button>
    </div> 
    );
  }

  
