import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from "@/components/header/Header";

const NewProduct = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState('');
  const [principalProduto, setPrincipalProduto] = useState('N');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/produtos', {
        nome_produto: nomeProduto,
        preco_produto: precoProduto,
        descricao_produto: descricaoProduto,
        tipo_produto: tipoProduto,
        imagem_produto: imagemProduto,
        principal_produto: principalProduto,
      });
      if (response.status === 201) {
        router.push('/');
      }
    } catch (error: any) {
      setError(error.response?.data?.error || 'Erro ao criar produto');
    }
  };

  return (
    <main>
      
    <div style={{ maxWidth: '600px', margin: '0 auto' }}> 
      <div><h1 className="flex justify-center flex-wrap gap-4 mx-auto max-w-screen-2xl text-2xl font-bold text-Azul ">CADASTRO DE PRODUTO</h1></div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nomeProduto" style={{ display: 'block', marginBottom: '5px' }}>Nome:</label>
          <input
            type="text"
            id="nomeProduto"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="precoProduto" style={{ display: 'block', marginBottom: '5px' }}>Preço:</label>
          <input
            type="number"
            step="0.01"
            id="precoProduto"
            value={precoProduto}
            onChange={(e) => setPrecoProduto(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="descricaoProduto" style={{ display: 'block', marginBottom: '5px' }}>Descrição:</label>
          <textarea
            id="descricaoProduto"
            value={descricaoProduto}
            onChange={(e) => setDescricaoProduto(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="tipoProduto" style={{ display: 'block', marginBottom: '5px' }}>Tipo:</label>
          <input
            type="text"
            id="tipoProduto"
            value={tipoProduto}
            onChange={(e) => setTipoProduto(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="imagemProduto" style={{ display: 'block', marginBottom: '5px' }}>Imagem (URL):</label>
          <input
            type="text"
            id="imagemProduto"
            value={imagemProduto}
            onChange={(e) => setImagemProduto(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="principalProduto" style={{ display: 'block', marginBottom: '5px' }}>Principal (S/N):</label>
          <input
            type="text"
            id="principalProduto"
            value={principalProduto}
            onChange={(e) => setPrincipalProduto(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Adicionar</button>
      </form>
    </div>
    </main>
  );
};

export default NewProduct;
