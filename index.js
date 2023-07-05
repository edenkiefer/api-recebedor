const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send({ message: 'Teste' }));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;