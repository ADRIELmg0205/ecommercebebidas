import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Produtos from "@/components/body/Produtos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <BottomHeader/>

      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
      </div>
      
      
    </main>
    
  );
}
