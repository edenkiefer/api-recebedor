"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.belongsToMany(models.usuarios, {
        through: models.usuarios_roles,
        foreignKey: "role_id",
        as: "role_usuarios"
      });
    }
  }
  roles.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: "roles",
  });
  return roles;
};