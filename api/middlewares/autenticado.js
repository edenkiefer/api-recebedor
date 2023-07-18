const { verify, decode } = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) 
    return res.status(401).send({ message: "Access token não informado" });
  
  if(!token.includes("Bearer"))
    return res.status(401).send({ message: "Access token inválido" });

  const [, accessToken] = token.split(" ");

  try {
    await verify(accessToken, process.env.SECRET);
    const { id, nome_usuario } = await decode(accessToken);

    req.usuarioId = id;
    req.usuarioNome = nome_usuario;

    return next();
  } catch (error) {
    return res.status(401).send({ message: "Usuario não autorizado"});
  }
};