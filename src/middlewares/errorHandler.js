import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ mensage: "um ou mais dados fornecidos, estão incorretos" });
  } else {
    res.status(500).json({ mensage: `${erro.mensage} - falha na requisição` });
  }
}

export default errorHandler;