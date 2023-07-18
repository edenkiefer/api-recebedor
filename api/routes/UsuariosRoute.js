const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");
const autenticado = require("../middlewares/autenticado");

const router = Router();

router
  .post("/usuarios", UsuariosController.cadastrarUsuario);

router.use(autenticado);

router
  .get("/usuarios", UsuariosController.listarUsuarios)
  .get("/usuarios/:id", UsuariosController.buscarUsuarioPorId)
  .put("/usuarios/:id", UsuariosController.alterarUsuario)
  .delete("/usuarios/:id", UsuariosController.deletarUsuario);

module.exports = router;