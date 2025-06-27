const express = require('express');
const multer = require('multer');
const upload = require('../middlewares/multerConfig')
const router = express.Router();
const productController = require('../controller/productController');

router.get('/api/productos', productController.findAll);
router.get('/api/productos/:tipo/:offset', productController.findAllWithPagination);
router.get('/api/productos/:id', productController.findById);

router.post('/products/create', upload.single('imagen'), productController.controllerCreateSeq);

router.put('/products/enable/:id', productController.enableProduct);
router.put('/products/disable/:id', productController.disableProduct);
router.put('/products/edit', upload.single('imagen'), productController.editProduct);

router.get('/gestion/:id', productController.getEditProductPage);

module.exports = router;