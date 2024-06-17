import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Produtos from "@/components/body/Produtos";
import Carrossel from '@/components/carrossel/Carrossel';
import Footer from "@/components/footer/Footer";

export default function Home() {
  const router = useRouter();
  const { search, category } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>(search ? search.toString() : '');
  const [selectedCategory, setSelectedCategory] = useState<string>(category ? category.toString() : 'todos');

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todos');
  };

  useEffect(() => {
    if (search) {
      setSearchTerm(search.toString());
    }
    if (category) {
      setSelectedCategory(category.toString());
    }
  }, [search, category]);

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetFilters={resetFilters} />
      <BottomHeader setCategory={setSelectedCategory} />
      <Carrossel />
      <br />
      <h1 id="Geral" className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul">GERAL</h1>
      <br />
      <div className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl">
        <Produtos searchTerm={searchTerm} category={selectedCategory} />
      </div>
      <br />
      <Footer></Footer>
    </main>
  );
}
