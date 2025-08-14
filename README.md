# Backend CRUD Node.js

API RESTful construída com **Node.js**, **Express** e **Prisma ORM** para gerenciar usuários em um banco de dados.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB 
- CORS
- Nodemon (opcional para desenvolvimento)

---

## 📦 Funcionalidades

- Criar usuários (`POST /usuarios`)
- Listar usuários (`GET /usuarios`)
- Atualizar usuários (`PUT /usuarios/:id`)
- Deletar usuários (`DELETE /usuarios/:id`)

---

## ⚡ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/backend-crud-node.git

2.Entre na pasta do projeto:
cd backend-crud-node

3. Instale as dependências:
npm install

4.Configure o banco de dados no prisma/schema.prisma e rode a migração:
npx prisma migrate dev --name init

5.Inicie o servidor:
npm run dev
O servidor irá rodar na porta 3000 por padrão.

---

##🔗 Conexão com Frontend

O backend está pronto para ser consumido por qualquer frontend, por exemplo um projeto em React que consome a API para criar, listar, atualizar e deletar usuários em tempo real.
