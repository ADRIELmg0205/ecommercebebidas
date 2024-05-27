import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState({
    nome_produto: '',
    preco_produto: '',
    descricao_produto: '',
    tipo_produto: '',
    imagem_produto: '',
    principal_produto: '',
  });

  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/produtos/${id}`);
          setProduto(response.data);
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      }
    };

    fetchProduto();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/produtos/${id}`, produto);
      router.push('/');
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <div>
      
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Editar Produto</h1>
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
