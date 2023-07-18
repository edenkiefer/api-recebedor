"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios_roles extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {}
  }
  usuarios_roles.init({
    usuario_id: DataTypes.UUID,
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: "usuarios_roles",
  });
  return usuarios_roles;
};