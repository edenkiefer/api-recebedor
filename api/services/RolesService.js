const { v4: uuidv4 } = require("uuid");
const db = require("../models");

class RolesService {

  async cadastrarRole(dto) {
    const role = await db.roles.findOne({
      where: {
        nome: dto.nome
      }
    });

    if (role)
      throw new Error("Role já cadastrada");

    try {
      const novaRole = await db.roles.create({
        id: uuidv4(),
        nome: dto.nome,
        descricao: dto.descricao
      });      

      return novaRole;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listarRoles(condicao = {}) {
    try {
      const roles = await db.roles.findAll({ where: { ...condicao } });
      return roles;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async buscarRolePorId(id) {
    try {
      const role = await db.roles.findOne({ where: { id: id } });

      if (!role)
        throw new Error("Role não encontrada");

      return role;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async alterarRole(dto, id) {
    const role = await db.roles.findOne({ where: { id: id } });

    if (!role)
      throw new Error("Role não encontrada");

    try {
      role.nome = dto.nome;
      role.descricao = dto.descricao;

      await role.save();

      return role.reload();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletarRole(id) {
    const role = await db.roles.findOne({ where: { id: id } });

    if (!role)
      throw new Error("Role não encontrada");

    try {
      await db.roles.destroy({ where: { id:id } });
    } catch (error) {
      throw new Error(error);
    }
  }

}

module.exports = RolesService;