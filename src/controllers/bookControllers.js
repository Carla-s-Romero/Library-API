import NotFound from "../middlewares/modelErrors/notFound.js";
import { livro, author } from "../models/index.js";;

class BookControllers {
  static async listBooks(req, res, next) {
    try {
      const listBooks = await livro.find({}).populate("author");
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

  static async filter(req, res, next) {
    try {
      const query = await processQuery(req.query);

      if (query !== null) {
        const bookPublisher = await livro.find(query).populate("author");
        res.status(200).send( bookPublisher);
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  }
}

async function processQuery(parametros) {
  const {publisher, title, MinPage, MaxPage, nameAuthor } = parametros;
  const query = {};

  if (publisher) query.publisher = publisher;
  if (title) query.title = {$regex: title, $options: "i"};

  if (MinPage || MaxPage) query.pages = {};

  if(MinPage) query.pages.$gte = Number(MinPage);
  if(MaxPage) query.pages.$lte = Number(MaxPage);

  if(nameAuthor) {
    const authorFound = await author.findOne({
      name: { $regex: `^${nameAuthor}$`, $options: "i" }
    });
    if (authorFound === null) {
      return null;
    }
    query.author = authorFound._id;
  }

  return query;
}

export default BookControllers;
