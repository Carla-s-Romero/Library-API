import livros from "../models/Livro.js";

class BookControllers {
  static async listBooks(req, res) {
    try {
      const listBooks = await livros.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }

  static async listOneBookID(req, res) {
    try {
      const id = req.params.id;
      const book = await livros.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }

  static async postBooks(req, res) {
    try {
      const newBook = await livros.create(req.body);

      res.status(201).json({
        message: "Criado com sucesso",
        livro: newBook,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição`,
      });
    }
  }

  static async putBooks(req, res) {
    try {
      const id = req.params.id;
      const UpdateBook = await livros.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizando", livro: UpdateBook });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição`,
      });
    }
  }

  static async deleteBooks(req, res) {
    try {
      const id = req.params.id;
      const UpdateBook = await livros.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado", livro: UpdateBook });
    } catch (error) {
      res
        .status(500)
        .json({ mensage: `${error.mensage} - falha na requisição` });
    }
  }
}

export default BookControllers;
