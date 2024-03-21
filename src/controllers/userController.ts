import { Request, Response } from "express";
import * as fs from 'fs';

const dataPath = 'src/data/usuarios.json';

export default {
    async index(req: Request, res: Response) {
        try {
            const rawData = fs.readFileSync(dataPath, 'utf8');
            const users = JSON.parse(rawData);
            return res.status(200).json(users);
        } catch (error) {
            console.error('Erro ao ler os dados dos usuários:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}