const bodyParser = require("body-parser");
const pessoas = require("./PessoasRoute.js");
const transacoes = require("./TransacaoRoute.js");

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    transacoes
  );
};