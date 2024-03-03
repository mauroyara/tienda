const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta');
});
app.get('/products', (req, res) => {
  res.json({
    name: 'mauro',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('mi puerto' + port);
});
