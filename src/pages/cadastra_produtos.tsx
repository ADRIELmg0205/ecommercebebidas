import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from "@/components/header/Header";
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

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoToDelete, setProdutoToDelete] = useState<number | null>(null);
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

  const handleDeleteProduto = async () => {
    if (produtoToDelete !== null) {
      try {
        await axios.delete(`/api/produtos/${produtoToDelete}`);
        // Atualiza a lista de produtos após a exclusão
        setProdutos(produtos.filter(produto => produto.id_produto !== produtoToDelete));
        setProdutoToDelete(null); // Limpa o ID do produto a ser deletado
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
      }
    }
  };

  const handleEditProduto = (id: number) => {
    router.push(`/edit-product?id=${id}`);
  };

  return (
    <main>
      <Header></Header>
      <div><h1 className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul ">LISTA DE PRODUTOS</h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
      <Link href="/new-product">
        <button className='text-sm flex flex-col justify-center px-2 border border-gary hover:border-black cursor-pointer duration-300 h-[95%] rounded-md border-gray-400 px-3 py-2 '>
          Adicionar Novo Produto
        </button> 
      </Link> 
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl ">
        {produtos.map(produto => (
          <div key={produto.id_produto} className="flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56">
            <h2 className="text-lg text-center font-semibold p-4">{produto.nome_produto}</h2>
            <Image
              src={produto.imagem_produto}
              height={100}
              width={100}
              alt={produto.nome_produto}
              className=""
            />
            <span className="flex justify-between text-center p-4">R${produto.preco_produto}</span>
            <span className="text-xs">{produto.descricao_produto}</span>
            <p className="text-xs">Tipo: {produto.tipo_produto}</p>
            {produtoToDelete === produto.id_produto ? (
              <>
                <p>Você tem certeza que deseja deletar este produto?</p>
                <button onClick={handleDeleteProduto} className="bg-red-500 h-7 w-3/4 border-none text-white text-base font-bold rounded-md mt-2">Confirmar</button>
                <button onClick={() => setProdutoToDelete(null)} className="bg-gray-500 h-7 w-3/4 border-none text-white text-base font-bold rounded-md mt-2">Cancelar</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEditProduto(produto.id_produto)} className={`
                  bg-yellow-500 h-7 w-3/4 border-none text-white 
                  text-base font-bold rounded-md mt-2
                `}>Editar</button>
                <button onClick={() => setProdutoToDelete(produto.id_produto)} className={`
                  bg-red-500 h-7 w-3/4 border-none text-white 
                  text-base font-bold rounded-md mt-2
                `}>Deletar</button>
              </>
            )}
          </div>
        ))}
      </div>         
    </main>
  );
};

export default Home;
