import Hero from "@/components/Hero";
import Image from "next/image";
import "./globals.css";
import MainInput from "@/components/MainInput";
import CardsInfo from "@/components/CardsInfo";
import BottomBanner from "@/components/BottomBanner";
import MyLinks from "@/components/MyLinks";

export default function Home() {
  return (
    <main className="flex flex-col  justify-between ">
      <Hero />
      <MainInput />
      <MyLinks />
      <CardsInfo />
      <BottomBanner />
    </main>
  );
}
