class ErroBasic extends Error {
  constructor(mensage = "Erro interno do servidor", status = 500){
    super();
    this.mensage = mensage;
    this.status = status;
  }

  sendReply(res) {
    res.status(this.status).send({
      mensage: this.mensage,
      status: this.status
    });
  }
}

export default ErroBasic;