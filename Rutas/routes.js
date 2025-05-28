const express = require('express');
const router = express.Router(); // Instancia de Router
const viewController = require('../Controlador/ControladorVista/viewController');

router.get('/', viewController.getLoginPage);
router.get('/createAccount', viewController.getCreatePage);

module.exports = router;