const express = require('express');
const { faker } = require('@faker-js/faker');
const routesApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//recibir datos en formato json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta');
});

routesApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi puerto' + port);
});
