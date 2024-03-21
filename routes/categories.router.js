const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const category = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    category.push({
      name: faker.commerce.productName(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(category);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'cafe',
  });
});

module.exports = router;
