import express from "express";
import connectDatabase from "./config/dbconect.js";
import routes from "./router/index.js";

const connect = await connectDatabase()

connect.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

connect.once("open", () => {
    console.log("conectado com sucesso");
});

const app = express();
routes(app);

export default app;