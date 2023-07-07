"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {}
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