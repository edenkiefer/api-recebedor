const PessoasService = require("../services/PessoasService");
const pessoasService = new PessoasService();

class PessoasController {
  
  static async cadastrarPessoa(req, res) {
    const { nome, documento, telefone, email } = req.body;
    try {
      const pessoa = await pessoasService.cadastrarPessoa({ 
        nome, 
        documento, 
        telefone, 
        email 
      });
      return res.status(201).send(pessoa);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async listarPessoas(req, res) {
    try {
      const pessoas = await pessoasService.listarPessoas();
      return res.status(200).send(pessoas);
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  }

  static async buscarPessoaPorId(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await pessoasService.buscarPessoaPorId(id);
      return res.status(200).send(pessoa);
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  }

  static async alterarPessoa(req, res) {
    const { nome, documento, telefone, email } = req.body;
    const { id } = req.params;
    try {
      const pessoa = await pessoasService.alterarPessoa({ 
        nome, 
        documento, 
        telefone, 
        email 
      }, id);
      return res.status(200).send(pessoa);
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  }

  static async deletarPessoa(req, res) {
    const { id } = req.params;
    try {
      await pessoasService.deletarPessoa(id);
      return res.status(200).send({ message: `Pessoa do id: ${id} excluida com sucesso` });
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  }

}

module.exports = PessoasController;