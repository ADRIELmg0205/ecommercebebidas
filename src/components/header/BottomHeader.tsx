import React from 'react';
import { useRouter } from 'next/router';

interface BottomHeaderProps {
  setCategory: (category: string) => void;
}

export default function BottomHeader({ setCategory }: BottomHeaderProps) {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    router.push(`/?category=${category}`);
  };

  return (
    <div className="flex justify-center items-center w-full h-10 bg-Azul text-sm text-white px-4">
      <button onClick={() => handleCategoryClick('cerveja')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Cervejas
      </button>
      <button onClick={() => handleCategoryClick('whisky')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Whiskys
      </button>
      <button onClick={() => handleCategoryClick('refrigerante')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Refrigerantes
      </button>
      <button onClick={() => handleCategoryClick('energetico')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Energéticos
      </button>
      <button onClick={() => handleCategoryClick('vodka')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Vodkas
      </button>
      <button onClick={() => handleCategoryClick('todos')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Todos
      </button>
    </div>
  );
}
