/* eslint-disable no-unused-vars */
const TransacoesService = require("../services/TransacoesService");
const transacoesService = new TransacoesService();

class TransacoesController {

  static async cadastrarTransacao(req, res) {
    const { 
      data, 
      recebedor_id, 
      pagador_id, 
      valor, 
      status, 
      caminho_documento 
    } = req.body;
    try {
      const transacao = await transacoesService.cadastrarTransacao({ 
        data, 
        recebedor_id, 
        pagador_id, 
        valor, 
        status, 
        caminho_documento 
      });
      return res.status(201).send(transacao);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  
  }

  static async listarTransacoes(req, res) {
    try {
      const transacoes = await transacoesService.listarTransacoes();
      return res.status(200).send(transacoes);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  } 

  static async buscarTransacaoPorId(req, res) {
    const { id } = req.params;
    try {
      const transacao = await transacoesService.buscarTransacaoPorId(id);
      return res.status(200).send(transacao);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  } 

  static async alterarTransacao(req, res) {
    const { 
      data, 
      recebedor_id, 
      pagador_id, 
      valor, 
      status, 
      caminho_documento 
    } = req.body;
    const { id } = req.params;

    try {
      const transacao = await transacoesService.alterarTransacao({ 
        data, 
        recebedor_id, 
        pagador_id, 
        valor, 
        status, 
        caminho_documento 
      }, id);
      return res.status(200).send(transacao);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  } 

  static async deletarTransacao(req, res) {
    const { id } = req.params;
    try {
      await transacoesService.deletarTransacao(id);
      return res.status(200).send({ message: `Transação do id: ${id} excluida com sucesso`  });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  } 
  
}

module.exports = TransacoesController;