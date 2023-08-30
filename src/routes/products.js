const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/detail/:id', productsController.detail);

router.get('/edit', productsController.edit); 

router.get('/add', productsController.add);

router.delete('products/removeProducts/:id', productsController.remove);

router.post('/add', productsController.create)
module.exports = router;