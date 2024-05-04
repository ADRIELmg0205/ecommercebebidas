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
      <BottomHeader></BottomHeader>
      
      <br></br>
      <h1 id="Geral" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul ">GERAL</h1>
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
        <Produtos apiUrl="/api/Geral" />
      </div>
      <br></br>

      <section id="cervejas">
      <h1 id="#Cervejas" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul">CERVEJAS</h1>
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
      <Produtos apiUrl="/api/cervejas" />
      </div>
      <br></br>
      </section>

      <h1 id="whiskys" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul">WHISKY</h1>
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
          <Produtos apiUrl="/api/whisky" />
      </div>

      <h1 id="vodkas" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul">VODKAS</h1>
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
          <Produtos apiUrl="/api/vodkas" />
      </div>
    </main>
  );
}
