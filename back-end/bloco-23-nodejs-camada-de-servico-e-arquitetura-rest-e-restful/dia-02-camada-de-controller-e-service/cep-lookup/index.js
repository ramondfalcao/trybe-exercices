require('dotenv').config();
const express = require('express');
const Cep = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });