import { useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import { useRouter } from 'next/router';

interface Produto {
  id_produto: number;
  nome_produto: string;
  preco_produto: number;
  descricao_produto: string;
  tipo_produto: string;
  imagem_produto: string;
  principal_produto: string;
}

interface Props {
  searchTerm: string;
  category: string;
}

export default function Produtos({ searchTerm, category }: Props) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('/api/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleProductClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  const filteredProdutos = produtos.filter(produto =>
    (produto.nome_produto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.descricao_produto.toLowerCase().includes(searchTerm.toLowerCase())) &&
      ((category === 'todos') || (produto.tipo_produto.toLowerCase().includes(category.toLowerCase()) ||
        produto.descricao_produto.toLowerCase().includes(category.toLowerCase())))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {filteredProdutos.map(produto => (
        <div 
          key={produto.id_produto} 
          className="flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56 overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={() => handleProductClick(produto.id_produto)}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-lg text-center font-semibold p-4">{produto.nome_produto}</h2>
            <Image
              src={produto.imagem_produto}
              height={110}
              width={110}
              alt={produto.nome_produto}
              className=""
            />
            <span className="flex justify-between text-center p-4">R${produto.preco_produto}</span>
            <span className="text-xs px-4 pb-4">{produto.descricao_produto}</span>
          </div>
          <button className="bg-blue-500 hover:bg-green-500 border-none text-white text-base font-bold rounded-md mt-auto w-full px-4 py-2">Comprar</button>
        </div>
      ))}
    </div>
  );
}
