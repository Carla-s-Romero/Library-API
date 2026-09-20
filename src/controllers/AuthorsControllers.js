import { author } from "../models/Author.js";

class AuthorsControllers {
  static async listAuthors(req, res) {
    try {
      const listAuthor = await author.find({});
      res.status(200).json(listAuthor);
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }

  static async listOneAuthor(req, res) {
    try {
      const id = req.params.id;
      const nameAutor = await author.findById(id);
      res.status(200).json(nameAutor);
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }

  static async postAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);

      res.status(201).json({
        message: "Criado com sucesso",
        author: newAuthor,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição`,
      });
    }
  }

  static async putAuthor(req, res) {
    try {
      const id = req.params.id;
      const UpdateAuthors = await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizando", author: UpdateAuthors });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição`,
      });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      const UpdateAuthors = await author.findByIdAndDelete(id);
      res.status(200).json({ message: "author deletado", author: UpdateAuthors });
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }
}

export default AuthorsControllers;
