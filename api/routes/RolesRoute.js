const { Router } =  require("express");
const RolesController = require("../controllers/RolesController");

const router = Router();

router
  .post("/roles", RolesController.cadastrarRole)
  .get("/roles", RolesController.listarRoles)
  .get("/roles/:id", RolesController.buscarRolePorId)
  .put("/roles/:id", RolesController.alterarRole)
  .delete("/roles/:id", RolesController.deletarRole);

module.exports = router;