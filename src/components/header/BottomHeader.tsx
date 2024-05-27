import React from 'react';

interface BottomHeaderProps {
  setCategory: (category: string) => void;
}

export default function BottomHeader({ setCategory }: BottomHeaderProps) {
  return (
    <div className="flex justify-center items-center w-full h-10 bg-Azul text-sm text-white px-4">
      <button onClick={() => setCategory('cerveja')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Cervejas
      </button>
      <button onClick={() => setCategory('whisky')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Whiskys
      </button>
      <button onClick={() => setCategory('refrigerante')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Refrigerantes
      </button>
      <button onClick={() => setCategory('energetico')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Energéticos
      </button>
      <button onClick={() => setCategory('vodka')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Vodkas
      </button>
      <button onClick={() => setCategory('todos')} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
        Todos
      </button>
    </div>
  );
}
