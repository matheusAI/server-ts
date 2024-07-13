import mongoose, { Document, Schema } from 'mongoose';

export interface IUsuario extends Document {
  nome: string;
  email: string;
  senha: string;
}

const UsuarioSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

export const Usuario = mongoose.model<IUsuario>('Usuario', UsuarioSchema);