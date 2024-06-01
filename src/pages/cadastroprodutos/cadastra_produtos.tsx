import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HeaderCadastroProduto from "@/components/header/HeaderCadastroProduto";
import Link from 'next/link';

interface Produto {
  id_produto: number;
  nome_produto: string;
  preco_produto: number;
  descricao_produto: string;
  tipo_produto: string;
  imagem_produto: string;
  principal_produto: string;
}

const CadastraProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [produtoToDelete, setProdutoToDelete] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Estado para controlar o hover
  const router = useRouter();
  const [category, setCategory] = useState<string>('todos');

  const resetFilters = () => {
    setSearchTerm('');
    setCategory('todos');
  };

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

  const handleDeleteProduto = async () => {
    if (produtoToDelete !== null) {
      try {
        await axios.delete(`/api/produtos/${produtoToDelete}`);
        setProdutos(produtos.filter(produto => produto.id_produto !== produtoToDelete));
        setProdutoToDelete(null);
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
      }
    }
  };

  const handleEditProduto = (id: number) => {
    router.push(`/cadastroprodutos/edit-product?id=${id}`);
  };

  const filteredProdutos = produtos.filter(produto =>
    produto.nome_produto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.descricao_produto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <HeaderCadastroProduto setSearchTerm={setSearchTerm} resetFilters={resetFilters}/>

      <div><h1 className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul ">LISTA DE PRODUTOS</h1></div>
      <br></br>
      <div className="flex justify-center mb-4">
      <Link href="/cadastroprodutos/new-product">
        <button 
          className='text-sm flex flex-col justify-center px-2 border border-gray-400 hover:border-black cursor-pointer duration-300 h-[95%] rounded-md px-3 py-2 bg-blue-500 text-white hover:bg-green-500 transform hover:scale-110'
        >
          Adicionar Novo Produto
        </button> 
      </Link>
      </div>
      <br></br>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
        {filteredProdutos.map(produto => (
          <div 
            key={produto.id_produto} 
            className={`flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56 ${hoveredCard === produto.id_produto ? 'transform scale-110 transition-transform' : ''}`} // Adicionando classe CSS com base no hover
            onMouseEnter={() => setHoveredCard(produto.id_produto)} // Define o card atual como hover
            onMouseLeave={() => setHoveredCard(null)} // Limpa o estado de hover ao deixar o card
          >
            <h2 className="text-lg text-center font-semibold p-4">{produto.nome_produto}</h2>
            <Image
              src={produto.imagem_produto}
              height={90}
              width={90}
              alt={produto.nome_produto}
              className=""
            />
            <span className="flex justify-between text-center p-4">R${produto.preco_produto}</span>
            <span className="text-xs p-4">{produto.descricao_produto}</span> {/* Adicionando espaçamento interno */}
            <div className="flex justify-center mt-auto space-x-2"> {/* Contêiner flexível para os botões */}
              {produtoToDelete === produto.id_produto ? (
                <>
                  <button onClick={handleDeleteProduto} className="bg-red-500 border-none text-white text-base font-bold rounded-md px-3 py-1">Confirmar
                  </button>
                  <button onClick={() => setProdutoToDelete(null)} className="bg-gray-500 border-none text-white text-base font-bold rounded-md px-3 py-1">Cancelar</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditProduto(produto.id_produto)} className="bg-yellow-500 border-none text-white text-base font-bold rounded-md px-6 py-1">Editar</button>
                  <button onClick={() => setProdutoToDelete(produto.id_produto)} className="bg-red-500 border-none text-white text-base font-bold rounded-md px-6 py-1">Deletar</button>
                </>
              )}
            </div>
            <br></br>
          </div>
        ))}
      </div>         
    </main>
  );
};

export default CadastraProdutos;
