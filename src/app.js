import express from "express";
import connectDatabase from "./config/dbconect.js";
import routes from "./router/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import page404 from "./middlewares/page404.js";

const connect = await connectDatabase();

connect.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connect.once("open", () => {
  console.log("conectado com sucesso");
});

const app = express();
routes(app);

app.use(page404);

app.use(errorHandler);

export default app;