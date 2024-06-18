import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Header from "@/components/header/Header";
import Link from 'next/link'; // Importar o Link do Next.js
import Footer from "@/components/footer/Footer";

interface Produto {
  id_produto: number;
  nome_produto: string;
  preco_produto: number;
  descricao_produto: string;
  tipo_produto: string;
  imagem_produto: string;
  principal_produto: string;
}

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState<Produto | null>(null);
  const [suggestions, setSuggestions] = useState<Produto[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [quantidade, setQuantidade] = useState<number>(1); // Estado para a quantidade do produto

  useEffect(() => {
    if (id) {
      const fetchProduto = async () => {
        try {
          const response = await axios.get(`/api/produtos/${id}`);
          const produtoData = response.data;
          setProduto(produtoData);
          fetchSuggestions(produtoData.tipo_produto);
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      };

      const fetchSuggestions = async (tipo_produto: string) => {
        try {
          const response = await axios.get(`/api/produtos`);
          const allProdutos = response.data;
          const filteredSuggestions = allProdutos.filter((item: Produto) => item.tipo_produto === tipo_produto && item.id_produto !== Number(id));
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error('Erro ao buscar sugestões:', error);
        }
      };

      fetchProduto();
    }
  }, [id]);

  const resetFilters = () => {
    setSearchTerm('');
  };

  const incrementQuantity = () => {
    setQuantidade(prevQuantidade => prevQuantidade + 1);
  };

  const decrementQuantity = () => {
    if (quantidade > 1) {
      setQuantidade(prevQuantidade => prevQuantidade - 1);
    }
  };

  const addToCart = () => {
    // Lógica para adicionar o produto ao carrinho com a quantidade selecionada
    console.log(`Adicionando ${quantidade} unidades do produto ${produto?.nome_produto} ao carrinho`);
  };

  const buyNow = () => {
    // Lógica para comprar o produto
    console.log(`Comprando ${quantidade} unidades do produto ${produto?.nome_produto}`);
  };

  if (!produto) {
    return (
      <main>
        <Header></Header>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0',
        }}>
          <div style={{
            border: '16px solid #f3f3f3',
            borderTop: '16px solid #3498db',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite'
          }}></div>
          <p style={{ marginTop: '20px', fontSize: '1.5em', color: '#333' }}>Carregando...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetFilters={resetFilters} />
      <div className="container mx-auto py-8 px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3">
          <div className="relative md:w-1/2">
            <Image
              src={produto.imagem_produto}
              height={300}
              width={300}
              alt={produto.nome_produto}
              className="rounded-md"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
              ❤️
            </button>
          </div>
          <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{produto.nome_produto}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-4">R${produto.preco_produto}</p>
            <p className="text-gray-600 mb-4">Tipo: {produto.tipo_produto}</p>
            <div className="flex items-center mb-4">
              <button onClick={decrementQuantity} className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-l">
                -
              </button>
              <span className="bg-gray-200 py-2 px-4">{quantidade}</span>
              <button onClick={incrementQuantity} className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-r">
                +
              </button>
            </div>
            <div className="flex space-x-4">
              <button onClick={addToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Adicionar ao Carrinho
              </button>
              <button onClick={buyNow} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Comprar Agora
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Descrição do Produto</h2>
          <p className="text-gray-600">{produto.descricao_produto}</p>
        </div>

        <div className="mt-12 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Sugestões</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {suggestions.map(suggestion => (
              <Link key={suggestion.id_produto} href={`/product/${suggestion.id_produto}`}> {/* Adicionar o link para a página do produto */}
                <a>
                  <div className="flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56 overflow-hidden transition-transform duration-300 transform hover:scale-105">
                    <div className="flex flex-col items-center">
                      <h2 className="text-lg text-center font-semibold p-4">{suggestion.nome_produto}</h2>
                      <Image
                        src={suggestion.imagem_produto}
                        height={140}
                        width={140}
                        alt={suggestion.nome_produto}
                        className=""
                      />
                      <span className="flex justify-between text-center p-6" style={{ fontSize: '18px' }} >R${suggestion.preco_produto}</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-green-500 border-none text-white text-base font-bold rounded-md mt-auto w-full px-4 py-2">
                      Comprar
                    </button>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>  
    </main>
  );
};

export default ProductPage;
