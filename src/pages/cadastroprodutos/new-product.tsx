import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import HeaderSimple from '@/components/header/HeaderSimple';
import Footer from "@/components/footer/Footer";

const NewProduct = () => {
  const [produto, setProduto] = useState({
    nome_produto: '',
    preco_produto: '',
    descricao_produto: '',
    tipo_produto: '',
    imagem_produto: '',
    principal_produto: '',
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/produtos', produto);
      if (response.status === 201) {
        router.push('/cadastroprodutos/cadastra_produtos');
      }
    } catch (error: any) {
      setError(error.response?.data?.error || 'Erro ao criar produto');
    }
  };

  return (
    <main>
      <HeaderSimple />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Produto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Nome do Produto:</label>
              <input
                type="text"
                name="nome_produto"
                value={produto.nome_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Preço do Produto:</label>
              <input
                type="number"
                step="0.01"
                name="preco_produto"
                value={produto.preco_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Descrição do Produto:</label>
              <textarea
                name="descricao_produto"
                value={produto.descricao_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tipo do Produto:</label>
              <input
                type="text"
                name="tipo_produto"
                value={produto.tipo_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Imagem do Produto:</label>
              <input
                type="text"
                name="imagem_produto"
                value={produto.imagem_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Principal Produto:</label>
              <input
                type="text"
                name="principal_produto"
                value={produto.principal_produto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer> 
    </main>
  );
};

export default NewProduct;
