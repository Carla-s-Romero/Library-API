import NotFound from "../middlewares/modelErrors/notFound.js";
import { author } from "../models/Author.js";

class AuthorsControllers {
  static async listAuthors(req, res, next) {
    try {
      const listAuthor = await author.find({});
      res.status(200).json(listAuthor);
    } catch (error) {
      next(error);
    }
  }

  static async listOneAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const nameAutor = await author.findById(id);

      if (nameAutor === null) {
        next( new NotFound("Autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async postAuthor(req, res, next) {
    try {
      const newAuthor = await author.create(req.body);

      res.status(201).json({
        message: "Criado com sucesso",
        author: newAuthor,
      });
    } catch (error) {
      next(error);
    }
  }

  static async putAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const UpdateAuthors = await author.findByIdAndUpdate(id, req.body);
      if (UpdateAuthors === null) {
        return next( new NotFound("O autor não existe no banco de dados"));
      }
      res.status(200).json({ message: "atualizando", author: UpdateAuthors });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const UpdateAuthors = await author.findByIdAndDelete(id);
      if (UpdateAuthors === null) {
        return next( new NotFound("O autor não existe no banco de dados"));
      }
      res
        .status(200)
        .json({ message: "author deletado", author: UpdateAuthors });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthorsControllers;
