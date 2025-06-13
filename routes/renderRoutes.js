const express = require('express');
const router = express.Router(); // Instancia de Router
const viewController = require('../controller/viewController');

router.get('/login', viewController.getLoginPage);
router.get('/createAccount', viewController.getCreatePage);
router.get('/gestion', viewController.getGestionPage);
router.get('/admin', viewController.getProductsPage);

module.exports = router;