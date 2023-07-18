const AuthService = require("../services/AuthService");
const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    const { nome_usuario, email, telefone, senha } = req.body;
    try {
      const login = await authService.login({ nome_usuario, email, telefone, senha });

      return res.status(200).send(login);
    } catch (error) {
      return res.status(401).send({ message: error.message });
    }
  }
}

module.exports = AuthController;