const express = require('express');

const userRouter = require('./routes/usersRouter');

const app = express();
const porta = 3000;

app.get('/', (req, res) => res.send('Olá mundo!'))

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));