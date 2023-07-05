/* eslint-disable no-unused-vars */
const { v4: uuidv4 } = require("uuid");
const db = require("../models");

class TransacoesService {

  async cadastrarTransacao(dto) {
    try {
      const novaTransacao = await db.transacoes.create({ 
        id: uuidv4(),
        data: dto.data, 
        recebedor_id: dto.recebedor_id, 
        pagador_id: dto.pagador_id, 
        valor: dto.valor, 
        status: dto.status, 
        caminho_documento: dto.caminho_documento
      });

      return novaTransacao;
    } catch (error) {
      throw new Error(error);
    }
  } 

  async listarTransacoes(condicao = {}) {
    try {
      const transacoes = await db.transacoes.findAll({ where: { ...condicao } });
      return transacoes;
    } catch (error) {
      throw new Error(error);
    }
  } 

  async buscarTransacaoPorId(id) {
    try {
      const transacao = await db.transacoes.findOne({ where: { id: id } });

      if (!transacao)
        throw new Error("Transação não encontrada");

      return transacao;
    } catch (error) {
      throw new Error(error);
    }
  } 

  async alterarTransacao(dto, id) {
    const transacao = await db.transacoes.findOne({ where: { id: id } });

    if (!transacao)
      throw new Error("Transação não encontrada");

    try {
      transacao.data = dto.data, 
      transacao.recebedor_id = dto.recebedor_id, 
      transacao.pagador_id = dto.pagador_id, 
      transacao.valor = dto.valor, 
      transacao.status = dto.status, 
      transacao.caminho_documento = dto.caminho_documento;
      
      await transacao.save();

      return await transacao.reload();
    } catch (error) {
      throw new Error(error);
    }
  } 

  async deletarTransacao(id) {
    const transacao = await db.transacoes.findOne({ where: { id: id } });

    if (!transacao)
      throw new Error("Transação não encontrada");
    
    try {
      await db.transacoes.destroy({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  } 

}

module.exports = TransacoesService;