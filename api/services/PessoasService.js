const { v4: uuidv4 } = require("uuid");
const db = require("../models");

class PessoasService {

  async cadastrarPessoa(dto) {
    const pessoa = await db.pessoas.findOne({
      where: {
        documento: dto.documento
      }
    });

    if (pessoa) 
      throw new Error("Pessoa já cadastrada");

    try {
      const novaPessoa = await db.pessoas.create({
        id: uuidv4(),
        nome: dto.nome,
        documento: dto.documento,
        telefone: dto.telefone,
        email: dto.email
      });

      return novaPessoa;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listarPessoas(condicao = {}) {
    try {
      return await db.pessoas.findAll({ where: { ...condicao } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async buscarPessoaPorId(id) {
    try {
      const pessoa = await db.pessoas.findOne({
        where: {
          id: id
        }
      });
  
      if (!pessoa) 
        throw new Error("Pessoa não encontrada");

      return pessoa;
    } catch (error) {
      throw new Error(error);
    }
  }

  async alterarPessoa(dto, id) {
    const pessoa = await db.pessoas.findOne({
      where: {
        id: id
      }
    });
  
    if (!pessoa) 
      throw new Error("Pessoa não encontrada");

    try {
      pessoa.nome = dto.nome;
      pessoa.documento = dto.documento;
      pessoa.telefone = dto.telefone;
      pessoa.email = dto.email;

      await pessoa.save();

      return await pessoa.reload();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletarPessoa(id) {
    const pessoa = await db.pessoas.findOne({
      where: {
        id: id
      }
    });
  
    if (!pessoa) 
      throw new Error("Pessoa não encontrada");

    try {
      await db.pessoas.destroy({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
}

module.exports = PessoasService;