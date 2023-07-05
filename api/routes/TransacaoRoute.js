const { Router } = require("express");
const TransacoesController = require("../controllers/TransacoesController");

const router = Router();

router
  .post("/transacoes", TransacoesController.cadastrarTransacao)
  .get("/transacoes", TransacoesController.listarTransacoes)
  .get("/transacoes/:id", TransacoesController.buscarTransacaoPorId)
  .put("/transacoes/:id", TransacoesController.alterarTransacao)
  .delete("/transacoes/:id", TransacoesController.deletarTransacao);

module.exports = router;