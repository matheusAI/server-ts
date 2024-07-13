import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Usuario } from '../models/Usuario';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Email e senha são obrigatórios.' });
  }

  const usuario = await Usuario.findOne({ email });
  if (!usuario || usuario.senha !== senha) {
    return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
  }

  const token = jwt.sign({ id: usuario._id, nome: usuario.nome, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};