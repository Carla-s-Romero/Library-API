import NotFound from "../middlewares/modelErrors/notFound.js";
import { livro } from "../models/index.js";

class BookControllers {
  static async listBooks(req, res, next) {
    try {
      const listBooks = await livro.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      next(error);
    }
  }

  static async listOneBookID(req, res, next) {
    try {
      const id = req.params.id;
      const book = await livro.findById(id);
      if (book === null) {
        next( new NotFound("Livro não encontrado"));
      }
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async postBooks(req, res, next) {
    try {
      const createBook = await livro.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso",
        livro: createBook,
      });
    } catch (error) {
      next(error);
    }
  }

  static async putBooks(req, res, next) {
    try {
      const id = req.params.id;
      const UpdateBook = await livro.findByIdAndUpdate(id, req.body);
      if (UpdateBook === null) {
        return next( new NotFound("O livro não existe no banco de dados"));
      }
      res.status(200).json({ message: "atualizando", livro: UpdateBook });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBooks(req, res, next) {
    try {
      const id = req.params.id;
      const UpdateBook = await livro.findByIdAndDelete(id);
      if (UpdateBook === null) {
        return next( new NotFound("O livro não existe no banco de dados"));
      }
      res.status(200).json({ message: "Livro deletado", livro: UpdateBook });
    } catch (error) {
      next(error);
    }
  }

  static async ListBooksByPublisher(req, res, next) {
    const publisher = req.query.editora;
    try {
      const bookPublisher = await livro.find({ publisher: publisher });
      if (bookPublisher.length === 0) {
        return next( new NotFound("Não existe livro com essa editora"));
      }

      res.status(200).json({ bookPublisher });
    } catch (error) {
      next(error);
    }
  }
}

export default BookControllers;
