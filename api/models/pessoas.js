/* eslint-disable no-unused-vars */
"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    static associate(models) {
      pessoas.hasMany(models.transacoes, {
        foreignKey: "recebedor_id"
      });
      pessoas.hasMany(models.transacoes, {
        foreignKey: "pagador_id"
      });
      pessoas.hasOne(models.usuarios, {
        foreignKey: "pessoa_id",
        as: "usuarioPessoa"
      });
    }
  }
  pessoas.init({
    nome: DataTypes.STRING,
    documento: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: "pessoas",
  });
  return pessoas;
};