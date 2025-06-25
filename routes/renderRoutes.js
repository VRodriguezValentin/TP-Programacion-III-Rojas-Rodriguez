const express = require('express');
const router = express.Router();
const viewController = require('../controller/viewController');
const tokenMiddleware = require('../middlewares/authenticateToken');

router.get('/login', viewController.getLoginPage);
router.get('/createAccount', viewController.getCreatePage);
router.get('/gestion', tokenMiddleware, viewController.getGestionPage);
router.get('/dashboard', tokenMiddleware, viewController.getProductsPage);

module.exports = router;