const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.get('/api/productos', productController.findAll);
router.get('/api/productos/:id', productController.findById);

router.post('/api/productos', productController.controllerCreate);

router.put('/api/productos', productController.controllerUpdate);

module.exports = router;