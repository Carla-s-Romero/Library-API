import ErroBasic from "./erroBasic.js";

class incorrectRequest extends ErroBasic {
  constructor(mensage = "Um ou mais dados estão incorretos"){
    super(mensage, 400);
  }
}

export default incorrectRequest;