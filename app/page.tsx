import Hero from "@/components/Hero";
import Image from "next/image";
import "./globals.css";
import MainInput from "@/components/MainInput";
import CardsInfo from "@/components/CardsInfo";
import BottomBanner from "@/components/BottomBanner";
import MyLinks from "@/components/MyLinks";
import { getServerSession } from "next-auth";
import { authOptions } from "./../app/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);


  return (
    <main className="flex flex-col  justify-between ">
      <Hero />
      <MainInput email={session ? session?.user?.email : "undefined"}/>
      <MyLinks email={session ? session?.user?.email : "undefined"}/>
      <CardsInfo />
      <BottomBanner />
    </main>
  );
}
