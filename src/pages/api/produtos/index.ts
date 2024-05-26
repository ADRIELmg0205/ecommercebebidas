import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

interface Produto {
  id_produto: number;
  nome_produto: string;
  preco_produto: number;
  descricao_produto: string;
  tipo_produto: string;
  imagem_produto: string;
  principal_produto: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM produto');
      res.status(200).json(result.rows);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const { nome_produto, preco_produto, descricao_produto, tipo_produto, imagem_produto, principal_produto } = req.body as Produto;
    try {
      const result = await pool.query(
        'INSERT INTO produto (nome_produto, preco_produto, descricao_produto, tipo_produto, imagem_produto, principal_produto) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nome_produto, preco_produto, descricao_produto, tipo_produto, imagem_produto, principal_produto]
      );
      res.status(201).json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
