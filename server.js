import express from "express";
import cors from "cors";
import { PrismaClient } from './generated/prisma/client.js';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());


app.get("/usuarios", async (req, res) => {

    const users = await prisma.user.findMany();

    console.log({ message: "Usuários encontrados com sucesso" });
    res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    });

    res.status(201).json(user);
});

app.put("/usuarios/:id", async (req, res) => {
    const user = await prisma.user.update({
        where: { id: req.params.id },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    });
    res.status(200).json(user);
});

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: { id: req.params.id }
    });
    res.status(200).json({ message: "Usuário deletado com sucesso" });
});


app.listen(3000, () => {
    console.log("Server is running na porta 3000");
});




/*
    GET /usuarios
    POST /usuarios
    GET /usuarios/:id
    PUT /usuarios/:id
    DELETE /usuarios/:id
*/
/*
     CRUD:
     Read
     Create
     Update
     Delete

    REST:
    GET: Read
    POST: Create
    PUT: Update
    DELETE: Delete


*/
/*
    mongoDB:

    kassioxis
    gRcSU2jfDAGV9FMs

 */

// Chat vamos integrar esse projeto back-end com o front-end
// utilizar react para o front-end e tailwind para o css
