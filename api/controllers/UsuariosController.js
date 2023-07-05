const UsuariosService = require("../services/UsuariosService");
const usuariosService = new UsuariosService();

class UsuariosController {
  
  static async cadastrarUsuario(req, res) {
    const { pessoa_id, nome_usuario, senha } = req.body;

    try {
      const usuario = await usuariosService.cadastrarUsuario({ pessoa_id, nome_usuario, senha });
      return res.status(201).send(usuario);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async listarUsuarios(req, res) {
    try {
      const usuarios = await usuariosService.listarUsuarios();
      return res.status(200).send(usuarios);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const usuario = await usuariosService.buscarUsuarioPorId(id);
      return res.status(200).send(usuario);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async alterarUsuario(req, res) {
    const { nome_usuario, senha } = req.body;
    const { id } = req.params;

    try {
      const usuario = await usuariosService.alterarUsuario({ nome_usuario, senha }, id);
      return res.status(200).send(usuario);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params;

    try {
      await usuariosService.deletarUsuario(id);
      return res.status(200).send({ message: `Usuario do id: ${id} deletado com sucesso` });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

}

module.exports = UsuariosController;