const database = require("../models");
const Sequelize = require("sequelize");

class SegurancaService {

  async cadastrarAcl(dto) {
    const usuario = await database.usuarios.findOne({
      include: [
        {
          model: database.roles,
          as: "usuario_roles", 
          attributes: ["id", "nome", "descricao"]
        },
      ],
      where: {
        id: dto.usuarioId
      }
    });

    if (!usuario) {
      throw new Error("Usuário não cadastrado");
    }

    const rolesCadastradas = await database.roles.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.roles
        }
      }
    });

    await usuario.removeUsuario_roles(usuario.usuario_roles);

    await usuario.addUsuario_roles(rolesCadastradas);

    const novoUsuario = await database.usuarios.findOne({
      where: {
        id: dto.usuarioId
      },
      include: [
        {
          model: database.roles,
          as: "usuario_roles", 
          attributes: ["id", "nome", "descricao"]
        },
      ]
    });

    return novoUsuario;
  }

}

module.exports = SegurancaService;