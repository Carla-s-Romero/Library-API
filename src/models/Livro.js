import mongoose from "mongoose";
import {authorsShema} from "./Author.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "O título do livro é obrigatório"] },
  description: { type: String, required: [true, "A sinopse do livro é obrigatória"] },
  price: { type: Number },
  pages: { type: Number },
  publisher: { type: String },
  author: authorsShema
}, {versionKey: false });

const livros = mongoose.model("livros", livroSchema);

export default livros;