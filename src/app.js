import express from "express";
import connectDatabase from "./config/dbconect.js";

const connect = await connectDatabase()

connect.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

connect.once("open", () => {
    console.log("conectado com sucesso");
});


const app = express();
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O senhor dos anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscarLivros(id) {
    return livros.findIndex( livros => {
        return livros.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("curso de Node.js");
});

app.get("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id)
    res.status(200).json(livros[index]);
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado")
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);

    res.status(200).send("livro removido com sucesso")
});

export default app;