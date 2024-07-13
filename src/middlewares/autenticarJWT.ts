import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

export const autenticarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as Usuario;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ mensagem: 'Token inválido.' });
  }
};

declare global {
  namespace Express {
    interface Request {
      user?: Usuario;
    }
  }
}