const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      img: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/users', (req, res) => {
  const { users } = req.params;
  res.json({ users, name: '', email: '', igm: '' });
});

module.exports = router;
