import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: String,
      required: [true, "O título do livro é obrigatório"],
    },
    description: {
      type: String,
      required: [true, "A sinopse do livro é obrigatória"],
    },
    price: { type: Number },
    pages: {
      type: Number,
      min: [
        10,
        "O número de páginas deve estar entre 10 a 5000. o valor fornecido: {VALUE}",
      ],
      max: [
        5000,
        "O número de páginas deve estar entre 10 a 5000. o valor fornecido: {VALUE}",
      ],
    },
    publisher: {
      type: String,
      enum: {
        values: ["Casa do código", "Alura"],
        message: "O {VALUE} não é um valor permitido",
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "O autor é obrigatório"],
    },
  },
  { versionKey: false },
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
