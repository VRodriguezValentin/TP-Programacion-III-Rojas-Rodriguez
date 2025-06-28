const express = require('express');
const router = express.Router();
const ventasController = require('../controller/ventasController')

router.get('/api/ventas', ventasController.findAll);
router.get('/api/ventas/:id', ventasController.findDetById);
router.post('/api/ventas', ventasController.controllerCreate);

module.exports = router;