const express = require('express');
const { faker } = require('@faker-js/faker');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//modificar algunos datos
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const product = await service.update(id, changes);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
// eliminar un productos id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
