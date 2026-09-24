import mongoose from "mongoose";

const authorsShema = new mongoose.Schema ({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, required: [true, "O nome do autor(a) é Obrigatório"]},
  nationality: {type: String}
}, {versionKey: false}); 

const author = mongoose.model("Autores", authorsShema );

export { author, authorsShema };
