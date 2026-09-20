import express from "express";
import RouterBooks from "./booksRoutes.js";
import RouterAuthors from "./authorsRoutes.js"

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Curso"));

    app.use(express.json(), RouterBooks, RouterAuthors);
};

export default routes;