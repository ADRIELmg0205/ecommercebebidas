import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

interface Produto {
  nome_produto: string;
  preco_produto: number;
  descricao_produto: string;
  tipo_produto: string;
  imagem_produto: string;
  principal_produto: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id_produto } = req.query;

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM produto WHERE id_produto = $1', [id_produto]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.status(200).json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { nome_produto, preco_produto, descricao_produto, tipo_produto, imagem_produto, principal_produto } = req.body as Produto;
    try {
      const result = await pool.query(
        'UPDATE produto SET nome_produto = $1, preco_produto = $2, descricao_produto = $3, tipo_produto = $4, imagem_produto = $5, principal_produto = $6 WHERE id_produto = $7 RETURNING *',
        [nome_produto, preco_produto, descricao_produto, tipo_produto, imagem_produto, principal_produto, id_produto]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.status(200).json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const result = await pool.query('DELETE FROM produto WHERE id_produto = $1 RETURNING *', [id_produto]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
