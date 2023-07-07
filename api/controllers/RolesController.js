const RolesService = require("../services/RolesService");
const rolesService = new RolesService();

class RolesController {

  static async cadastrarRole(req, res) {
    const { nome, descricao } = req.body;
    try {
      const role = await rolesService.cadastrarRole({ nome, descricao });
      return res.status(201).send(role);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async listarRoles(req, res) {
    try {
      const roles = await rolesService.listarRoles();
      return res.status(200).send(roles);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
  
  static async buscarRolePorId(req, res) {
    const { id } = req.params;
    try {
      const role = await rolesService.buscarRolePorId(id);
      return res.status(200).send(role);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
  
  static async alterarRole(req, res) {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    try {
      const role = await rolesService.alterarRole({ nome, descricao }, id);
      return res.status(200).send(role);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async deletarRole(req, res) {
    const { id } = req.params;
    try {
      await rolesService.deletarRole(id);
      return res.status(200).send({ message: `Role do id: ${id} excluida com sucesso`});
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

}

module.exports = RolesController;