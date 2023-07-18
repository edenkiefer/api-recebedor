"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(models.pessoas, { 
        foreignKey: "pessoa_id",
        as: "usuarioPessoa"
      });
      usuarios.belongsToMany(models.roles, {
        through: models.usuarios_roles,
        foreignKey: "usuario_id",
        as: "usuario_roles"
      });
    }
  }
  usuarios.init({
    pessoa_id: DataTypes.UUID,
    nome_usuario: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: "usuarios",
  });
  return usuarios;
};