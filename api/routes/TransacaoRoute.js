const { Router } = require("express");
const TransacoesController = require("../controllers/TransacoesController");
const roles = require("../middlewares/roles");

const router = Router();

router
  .post("/transacoes", roles(["admin", "usuario"]), TransacoesController.cadastrarTransacao)
  .get("/transacoes", roles(["admin"]), TransacoesController.listarTransacoes)
  .get("/transacoes/:id", roles(["admin", "usuario"]), TransacoesController.buscarTransacaoPorId)
  .put("/transacoes/:id", roles(["admin", "usuario"]), TransacoesController.alterarTransacao)
  .delete("/transacoes/:id", roles(["admin"]), TransacoesController.deletarTransacao);

module.exports = router;