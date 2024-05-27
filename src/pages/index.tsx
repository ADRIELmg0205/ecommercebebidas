import { useState } from 'react';
import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Produtos from "@/components/body/Produtos";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<string>('todos');

  const resetFilters = () => {
    setSearchTerm('');
    setCategory('todos');
  };

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetFilters={resetFilters} />
      <BottomHeader setCategory={setCategory} />
      
      <br />
      <h1 id="Geral" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul">GERAL</h1>
      <br />
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl">
        <Produtos searchTerm={searchTerm} category={category} />
      </div>
      <br />
    </main>
  );
}
