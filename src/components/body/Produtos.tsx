import { useState, useEffect } from 'react';
import Image from "next/image";

interface Produto {
    id_produto: number;
    nome_produto: string;
    preco_produto: string;
    descricao_produto: string;
    tipo_produto: string;
    imagem_produto: string;
}

interface Props {
    apiUrl: string; // Defina a propriedade apiUrl como uma string
}

export default function Produtos({ apiUrl }: Props) {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await fetch(apiUrl); // Use o caminho fornecido como propriedade
                if (response.ok) {
                    const data = await response.json();
                    setProdutos(data.result.rows);
                } else {
                    console.error('Erro ao buscar produtos:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        fetchProdutos();
    }, [apiUrl]); // Certifique-se de adicionar apiUrl como dependência

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {produtos.map(produto => (
                <div key={produto.id_produto} className="flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56">
                    <h2 className="text-lg text-center font-semibold p-4">{produto.nome_produto}</h2>
                    <Image
                        src={produto.imagem_produto} // Altere aqui para o link da imagem do produto
                        height={100} width={100} // Ajuste o tamanho conforme necessário
                        alt={produto.nome_produto} // Use o nome do produto como alt
                        className="" />
                    <span className="flex justify-between text-center p-4">R${produto.preco_produto}</span>
                    <span className="text-xs">{produto.descricao_produto}</span>
                    <button className={`
                        bg-blue-500 h-7 w-3/4 border-none text-white 
                        text-base font-bold rounded-md mt-2
                    `}>Saiba Mais</button>
                </div>
            ))}
        </div>
    );
}
