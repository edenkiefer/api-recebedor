require("dotenv").config();
const express = require("express");
const routes = require("./api/routes");

const db = require("./api/models");

const app = express();
const port = process.env.PORT;

routes(app);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("A conexão com o banco foi estabelecida com sucesso!");
    app.listen(port, async () => console.log(`Servidor rodando na porta ${port}`));
  })
  .catch(err => console.log("Não foi possível conectar ao banco de dados:", err));

module.exports = app;