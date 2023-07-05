const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router
  .post("/usuarios", UsuariosController.cadastrarUsuario)
  .get("/usuarios", UsuariosController.listarUsuarios)
  .get("/usuarios/:id", UsuariosController.buscarUsuarioPorId)
  .put("/usuarios/:id", UsuariosController.alterarUsuario)
  .delete("/usuarios/:id", UsuariosController.deletarUsuario);

module.exports = router;