import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    pages: { type: Number }
}, {versionKey: false });

const livros = mongoose.model("livros", livroSchema);

export default livros;