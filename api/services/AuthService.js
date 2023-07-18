const db = require("../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class AuthService {
  async login(dto) {
    const condicao = {};

    console.log(dto);

    if (dto.nome_usuario)
      condicao.nome_usuario = dto.nome_usuario;

    if (dto.email)
      condicao["$usuarioPessoa.email$"] = dto.email;

    if (dto.telefone)
      condicao["$usuarioPessoa.telefone$"] = dto.telefone;

    console.log(condicao);

    const usuario = await db.usuarios.findOne({
      attributes: ["id", "nome_usuario", "senha"],
      where: { 
        ...condicao 
      },   
      include: {
        model: db.pessoas,
        attributes: ["email", "telefone"],
        as: "usuarioPessoa"
      }
    });

    if (!usuario)
      throw new Error("Usuario não cadastrado");

    const comparaSenhas = await compare(dto.senha, usuario.senha);

    if (!comparaSenhas) 
      throw new Error("Usuário ou senha invalidos.");
    
    const accessToken = sign({ 
      id: usuario.id,
      email: usuario.email
    }, process.env.SECRET, {
      expiresIn: 86400
    });

    return { accessToken };
  }

}

module.exports = AuthService;