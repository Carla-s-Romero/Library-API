import express from "express";
import RouterBooks from "./booksRoutes.js";

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Curso"));

    app.use(express.json());
    app.use(RouterBooks);
};

export default routes;