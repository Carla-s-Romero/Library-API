import { author } from "../models/Author.js";
import livros from "../models/Livro.js";

class BookControllers {
  static async listBooks(req, res, next) {
    try {
      const listBooks = await livros.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      next(error);
    }
  }

  static async listOneBookID(req, res,next) {
    try {
      const id = req.params.id;
      const book = await livros.findById(id);
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async postBooks(req, res, next) {
    const newBook = req.body;

    try {
      const authorsFound = await author.findById(newBook.author);
      const completeBook = { ...newBook, author: { ...authorsFound._doc } };
      const createBook = await livros.create(completeBook);
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
      const UpdateBook = await livros.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizando", livro: UpdateBook });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBooks(req, res, next) {
    try {
      const id = req.params.id;
      const UpdateBook = await livros.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado", livro: UpdateBook });
    } catch (error) {
      next(error);
    }
  }

  static async ListBooksByPublisher(req, res, next) {
    const publisher = req.query.editora;
    try {
      const bookPublisher = await livros.find({ publisher: publisher });
      if (bookPublisher.length === 0) {
        res.status(404).json({
          mensage: "Não existe livros com essa editora"
        });
      }

      res.status(200).json({ bookPublisher });
    } catch (error) {
      next(error);
    }
  }
}

export default BookControllers;
