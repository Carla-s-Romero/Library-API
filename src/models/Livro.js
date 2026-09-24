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
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        }},
      message: "O número de páginas deve estar entre 10 a 5000. O valor fornecido foi: {VALUE}"
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
