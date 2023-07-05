require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send({ message: 'Teste' }));

app.use(bodyParser.json());
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;