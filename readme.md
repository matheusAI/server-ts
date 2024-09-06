# Projeto de Autenticação com JWT

Este projeto é uma API de autenticação criada utilizando Node.js, Express, Mongoose e JSON Web Tokens (JWT). Ele permite a criação de usuários, login e acesso a rotas protegidas utilizando JWT para autenticação.

## Funcionalidades

- **Cadastro de Usuário:** Criação de um novo usuário com `nome`, `email` e `senha`.
- **Login:** Autenticação do usuário com `email` e `senha`, retornando um token JWT.
- **Rota Protegida:** Acesso a uma rota protegida que requer um token JWT válido.

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/matheusAI/server-ts
```
2. Navegue até o diretório do projeto:
```bash
cd server-ts
```
3. Instale as dependências:
```bash
npm install
```
4. Configure o arquivo .env:
- Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```.env
PORT=3000
MONGODB_URI=mongodb://root:example@localhost:27017/meu_banco?authSource=admin
JWT_SECRET=sua_chave_secreta_aqui
```
5. Inicie o servidor:
```bash
npm run start:prod
```

## Endpoints
- ### Cadastro de usuários:

  - **URL:** /api/auth/registrar
  - **Método:** POST
  - **Body:**
```JSON
{
"nome": "Seu Nome",
"email": "seuemail@example.com",
"senha": "sua_senha"
}
```
- ### Login:

  -  **URL:** /api/auth/login
  -  **Método:** POST
  -  **Body:**
```JSON
{
"email": "seuemail@example.com",
"senha": "sua_senha"
}
```
- ### Rota Protegida:

  - **URL:** /api/protegido
  -  **Método:** GET
  -  **Headers:**
```plaintext
  Authorization: Bearer {seu_token_jwt_aqui}
```
## Tecnologias Utilizadas
- Node.js
- Express
- Mongoose
- JSON Web Tokens (JWT)
- Docker (para o MongoDB)

## Contribuição
1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Envie para o branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request