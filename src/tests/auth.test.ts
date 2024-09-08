import request from "supertest";
import express from "express";
import { conectarDB } from "../config/db";
import Routers from "../routes";

const app = express();
app.use(express.json());
app.use("/api", Routers);

beforeAll(async () => {
  await conectarDB();
});

describe("Testes de Autenticação", () => {
  let token: string;

  it("Deve registrar usuário", async () => {
    const response = await request(app).post("/api/auth/registrar").send({
      nome: "test",
      email: "teste@example.com",
      senha: "123456",
    });

    expect(response.status).toBe(201); // Corrigido para 201 (Created)
    expect(response.body).toHaveProperty("mensagem", "Usuário registrado com sucesso.");
  });

  it("Deve retornar token válido ao fazer login", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "teste@example.com",
      senha: "123456",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
  });

  it("Deve acessar rota protegida com token", async () => {
    const response = await request(app)
      .get("/api/protegido")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("usuario");
    expect(response.body.usuario).toHaveProperty("email", "teste@example.com");
  });

  it("Deve bloquear acesso à rota protegida sem token", async () => {
    const response = await request(app).get("/api/protegido");
    expect(response.status).toBe(401); // Geralmente é 401 (não autorizado) para falta de token
  });
});
