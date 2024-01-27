import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/Footer";
import MainInput from "@/components/MainInput";
import CardsInfo from "@/components/CardsInfo";

export default function Home() {
  return (
    <main className="flex flex-col  justify-between ">
      
     <Hero />
      <MainInput />
      <CardsInfo />
    
     
    </main>
  );
}
