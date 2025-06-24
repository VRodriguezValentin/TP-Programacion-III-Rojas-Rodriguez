const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.get('/api/productos', productController.findAll);
router.get('/api/productos/:tipo/:offset', productController.findAllWithPagination);
router.get('/api/productos/:id', productController.findById);

router.post('/api/productos', productController.controllerCreate);

router.put('/api/productos', productController.controllerUpdate);

router.put('/products/enable/:id', productController.enableProduct);
router.put('/products/disable/:id', productController.disableProduct);
router.put('/products/edit', productController.editProduct);

router.get('/gestion/:id', productController.getEditProductPage);

module.exports = router;