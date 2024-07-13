import { Request, Response } from "express";
import dotenv from "dotenv";
import { Usuario } from "../models/Usuario";

dotenv.config();

export const registrar = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Nome, email e senha são obrigatórios." });
  }

  const usuarioExistente = await Usuario.findOne({ email });
  if (usuarioExistente) {
    return res.status(400).json({ mensagem: "Email já está em uso." });
  }

  const novoUsuario = new Usuario({ nome, email, senha });
  await novoUsuario.save();

  res.status(201).json({ mensagem: "Usuário registrado com sucesso." });
};