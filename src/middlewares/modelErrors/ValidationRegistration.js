import incorrectRequest from "./incorrectRequest.js";

class ValidationRegistration extends incorrectRequest {
  constructor(erro){
    const mensagenErro = Object.values(erro.errors).map(erro => erro.message).join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagenErro}`);
  }
}

export default ValidationRegistration;