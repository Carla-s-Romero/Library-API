import ErroBasic from "./erroBasic.js";

class NotFound extends ErroBasic {
  constructor(mensage = "Página não encontrada") {
    super(mensage, 404);
  }
}

export default NotFound;