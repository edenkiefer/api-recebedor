const bodyParser = require("body-parser");
const pessoas = require("./PessoasRoute.js");

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas
  );
};