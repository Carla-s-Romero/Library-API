import express from "express";
import BookControllers from "../controllers/bookControllers.js";

const routes = express.Router();

routes.get("/livros", BookControllers.listBooks);
routes.get("/livros/query", BookControllers.ListBooksByPublisher);
routes.get("/livros/:id", BookControllers.listOneBookID);
routes.post("/livros", BookControllers.postBooks);
routes.put("/livros/:id", BookControllers.putBooks);
routes.delete("/livros/:id", BookControllers.deleteBooks);



export default routes;
