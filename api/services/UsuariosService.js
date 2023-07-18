const { v4: uuidv4 } = require("uuid");
const db = require("../models");
const { hash } =  require("bcryptjs");
const SegurancaService = require("./SegurancaService");
const segurancaService = new SegurancaService();
class UsuariosService {
  
  async cadastrarUsuario(dto) {
    const usuario = await db.usuarios.findOne({
      where: {
        nome_usuario: dto.nome_usuario
      }
    });

    if (usuario)
      throw new Error("Usuário já cadastrado");

    try {
      const senhaHash = await hash(dto.senha, 8);

      const novoUsuario = await db.usuarios.create({ 
        id: uuidv4(),
        pessoa_id: dto.pessoa_id, 
        nome_usuario: dto.nome_usuario, 
        senha: senhaHash 
      });

      const roleUsuario = process.env.USUARIO_ROLE_ID;

      await segurancaService.cadastrarAcl({usuarioId: novoUsuario.id, roles:[roleUsuario]});

      return novoUsuario;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listarUsuarios(condicao = {}) {
    try {
      const usuarios = await db.usuarios.findAll({ where: { ...condicao } });
      return usuarios;
    } catch (error) {
      throw new Error(error);
    }
  }

  async buscarUsuarioPorId(id) {
    try {
      const usuario = await db.usuarios.findOne({ 
        where: { "$usuarioPessoa.telefone$": id },   
        include: {
          model: db.pessoas,
          attributes: ["email", "telefone"],
          as: "usuarioPessoa"
        }
      });

      if (!usuario)
        throw new Error("Usuário não encontrado");

      return usuario;
    } catch (error) {
      throw new Error(error);
    }
  }

  async alterarUsuario(dto, id) {
    const usuario = await db.usuarios.findOne({ where: { id: id } });

    if (!usuario)
      throw new Error("Usuário não encontrado");

    try {
      usuario.nome_usuario = dto.nome_usuario;
      usuario.senha = dto.senha;

      await usuario.save();

      return await usuario.reload();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletarUsuario(id) {
    const usuario = await db.usuarios.findOne({ where: { id: id } });

    if (!usuario)
      throw new Error("Usuário não encontrado");

    try {
      await db.usuarios.destroy({ where: { id: id }});
    } catch (error) {
      throw new Error(error);
    }
  }

}

module.exports = UsuariosService;