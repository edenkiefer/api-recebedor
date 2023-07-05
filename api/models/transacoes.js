/* eslint-disable no-unused-vars */
"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transacoes extends Model {
    static associate(models) {
      transacoes.belongsTo(models.pessoas, {
        foreignKey: "recebedor_id"
      });
      transacoes.belongsTo(models.pessoas, {
        foreignKey: "pagador_id"
      });
    }
  }
  transacoes.init({
    data: DataTypes.DATE,
    recebedor_id: DataTypes.UUID,
    pagador_id: DataTypes.UUID,
    valor: DataTypes.DOUBLE,
    status: DataTypes.STRING,
    caminho_documento: DataTypes.STRING
  }, {
    sequelize,
    modelName: "transacoes",
  });
  return transacoes;
};