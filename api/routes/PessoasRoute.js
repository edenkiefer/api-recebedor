const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const router = Router();

router.post("/pessoas", PessoasController.cadastrarPessoa);
router.get("/pessoas", PessoasController.listarPessoas);
router.get("/pessoas/:id", PessoasController.buscarPessoaPorId);
router.put("/pessoas/:id", PessoasController.alterarPessoa);
router.delete("/pessoas/:id", PessoasController.deletarPessoa);

module.exports = router;