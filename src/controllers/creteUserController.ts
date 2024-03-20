import { Request, Response } from "express";
import * as fs from 'fs';

const dataPath = 'src/data/usuarios.json';

export default {
    async create(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
        }

        try {
            const rawData = fs.readFileSync(dataPath, 'utf8');
            const users = JSON.parse(rawData);
            const newUser = {
                nome,
                email,
                senha
            };
            users.push(newUser);
            fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf8');
            return res.status(201).json(newUser);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
