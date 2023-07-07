const bodyParser = require("body-parser");
const pessoas = require("./PessoasRoute.js");
const transacoes = require("./TransacaoRoute.js");
const usuarios = require("./UsuariosRoute.js");
const roles = require("./RolesRoute.js");

module.exports = app => {
  app.use(
    bodyParser.json(),
    usuarios,
    roles,
    pessoas,
    transacoes
  );
};