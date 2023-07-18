const bodyParser = require("body-parser");
const pessoas = require("./PessoasRoute.js");
const transacoes = require("./TransacaoRoute.js");
const usuarios = require("./UsuariosRoute.js");
const roles = require("./RolesRoute.js");
const auth = require("./AuthRoute.js");

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    roles,
    pessoas,
    transacoes
  );
};