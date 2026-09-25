import express from "express";
import AuthorsControllers from "../controllers/AuthorsControllers.js";
import paginationSorting from "../middlewares/paginationSorting.js";

const routes = express.Router();

routes.get("/autores", AuthorsControllers.listAuthors, paginationSorting);
routes.get("/autores/:id", AuthorsControllers.listOneAuthor);

routes.post("/autores", AuthorsControllers.postAuthor);
routes.put("/autores/:id", AuthorsControllers.putAuthor);
routes.delete("/autores/:id", AuthorsControllers.deleteAuthor);

export default routes;
