import mongoose from "mongoose";
import ErroBasic from "./modelErrors/erroBasic.js";
import incorrectRequest from "./modelErrors/incorrectRequest.js";
import ValidationRegistration from "./modelErrors/ValidationRegistration.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new incorrectRequest().sendReply(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationRegistration(erro).sendReply(res);
  } else {
    new ErroBasic().sendReply(res);
  }
}

export default errorHandler;
