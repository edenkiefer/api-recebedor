const { Router } = require("express");
const SegurancaController = require("../controllers/SegurancaController");

const router = Router();

router
  .post("/seguranca/acl", SegurancaController.cadastrarAcl);

module.exports = router;